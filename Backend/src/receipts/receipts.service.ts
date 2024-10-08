/* eslint-disable prefer-const */
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateReceiptDto } from './dto/create-receipt.dto';
import { UpdateReceiptDto } from './dto/update-receipt.dto';
import { Receipt, ReceiptDocument } from 'src/receipts/schemas/receipt.schema';
import { InjectModel } from '@nestjs/mongoose';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { IUser } from 'src/users/users.interface';
import aqp from 'api-query-params';
import mongoose from 'mongoose';
import * as xlsx from 'xlsx';
import { parse, formatISO } from 'date-fns';
import {
  formatCurrency,
  isValidDateRange,
  isValidTypeDateRangeId,
} from 'src/util/utils';
import dayjs from 'dayjs';
import { Response } from 'express';
import * as Handlebars from 'handlebars';
import * as puppeteer from 'puppeteer';
import { readFileSync } from 'fs';
import { join } from 'path';
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access';
import { Readable } from 'stream';
import { IncomeCategoriesService } from 'src/income-categories/income-categories.service';
import { UsersService } from 'src/users/users.service';

const handlebars = allowInsecurePrototypeAccess(Handlebars);

@Injectable()
export class ReceiptsService {
  constructor(
    @InjectModel(Receipt.name)
    private receiptModel: SoftDeleteModel<ReceiptDocument>,
    private usersService: UsersService,
    private incomeCategoriesService: IncomeCategoriesService,
  ) {}

  async create(createReceiptDto: CreateReceiptDto, userM: IUser) {
    const {
      userId,
      id,
      description,
      time,
      amount,
      incomeCategoryId,
      // documentId,
    } = createReceiptDto;

    const existingReceipt = await this.receiptModel.findOne({ id });

    if (existingReceipt) {
      throw new BadRequestException(`Mã phiếu thu ${id} đã tồn tại`);
    }

    const newReceipt = await this.receiptModel.create({
      userId,
      id,
      description,
      time,
      amount,
      incomeCategoryId,
      // documentId,
      createdBy: {
        _id: userM._id,
        email: userM.email,
      },
      history: [
        {
          description: `${description} (Đầu tiên)`,
          time: time,
          amount: amount,
          updatedAt: new Date(),
          updatedBy: {
            _id: userM._id,
            email: userM.email,
          },
        },
      ],
    });

    return {
      _id: newReceipt?._id,
      createdAt: newReceipt?.createdAt,
    };
  }

  async findAll(currentPage: number, limit: number, qs: string) {
    const { filter, sort, population, projection } = aqp(qs);
    delete filter.current;
    delete filter.pageSize;

    let offset = (+currentPage - 1) * +limit;
    let defaultLimit = +limit ? +limit : 10;

    const totalItems = (await this.receiptModel.find(filter)).length;
    const totalPages = Math.ceil(totalItems / defaultLimit);

    const result = await this.receiptModel
      .find(filter)
      .skip(offset)
      .limit(defaultLimit)
      .sort(sort as any)
      .populate(population)
      .select(projection as any)
      .exec();

    return {
      meta: {
        current: currentPage, //trang hiện tại
        pageSize: limit, //số lượng bản ghi đã lấy
        pages: totalPages, //tổng số trang với điều kiện query
        total: totalItems, //tổng số bản ghi
      },
      result, //kết quả query
    };
  }

  async findReceiptWithTime(currentPage: number, limit: number, qs: string) {
    const { filter, population } = aqp(qs);
    delete filter.current;
    delete filter.pageSize;

    // Get the current year if not provided
    const currentYear = new Date().getFullYear();

    let dateFilter = {};

    if (filter.year) {
      // Tìm kiếm theo năm
      const year = filter.year;
      const start = new Date(`${year}-01-01T00:00:00.000Z`);
      const end = new Date(`${year}-12-31T23:59:59.999Z`);
      dateFilter = { $gte: start, $lte: end };
      delete filter.year;
    } else if (filter.monthYear) {
      // Tìm kiếm theo tháng/năm
      const [year, month] = filter.monthYear.split('/');
      const start = new Date(`${year}-${month}-01T00:00:00.000Z`);
      const end = new Date(new Date(start).setMonth(start.getMonth() + 1) - 1);
      dateFilter = { $gte: start, $lte: end };
      delete filter.monthYear;
    } else if (filter.startMonthYear && filter.endMonthYear) {
      // Tìm kiếm từ tháng/năm đến tháng/năm
      const [startYear, startMonth] = filter.startMonthYear.split('/');
      const [endYear, endMonth] = filter.endMonthYear.split('/');
      const start = new Date(`${startYear}-${startMonth}-01T00:00:00.000Z`);
      const end = new Date(
        new Date(`${endYear}-${endMonth}-01T00:00:00.000Z`).setMonth(
          parseInt(endMonth),
          0, // Set the day to the last day of the month
        ),
      );
      dateFilter = { $gte: start, $lte: end };
      delete filter.startMonthYear;
      delete filter.endMonthYear;
    } else {
      // Default to current year if no year/monthYear/startMonthYear/endMonthYear filters are provided
      const start = new Date(`${currentYear}-01-01T00:00:00.000Z`);
      const end = new Date(`${currentYear}-12-31T23:59:59.999Z`);
      dateFilter = { $gte: start, $lte: end };
    }

    if (Object.keys(dateFilter).length) {
      filter.time = dateFilter;
    }

    const offset = (currentPage - 1) * limit;
    let defaultLimit = +limit ? +limit : 10;

    const totalItems = await this.receiptModel.countDocuments(filter);
    const totalPages = Math.ceil(totalItems / defaultLimit);

    const result = await this.receiptModel
      .find(filter)
      .skip(offset)
      .limit(defaultLimit)
      .sort('-time')
      .populate(population)
      .select('-history')
      .exec();

    const totalAmount = await this.receiptModel.aggregate([
      { $match: filter },
      {
        $group: {
          _id: null,
          total: { $sum: { $toDouble: '$amount' } },
        },
      },
    ]);

    return {
      meta: {
        current: currentPage,
        pageSize: limit,
        pages: totalPages,
        total: totalItems,
        totalAmount: totalAmount[0]?.total || 0,
      },
      result,
    };
  }

  async findOne(id: string) {
    // if (!mongoose.Types.ObjectId.isValid(id))
    //   throw new BadRequestException('ID không hợp lệ');

    // Kiểm tra mã phiếu thu
    const idRegex = /^PT\d{4}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/;
    if (!idRegex.test(id)) throw new BadRequestException('ID không hợp lệ');

    return await this.receiptModel.findOne({ id: id });
  }

  async findReceiptsByUserId(userId: string) {
    return await this.receiptModel.find({ userId: userId });
  }

  async update(_id: string, updateReceiptDto: UpdateReceiptDto, user: IUser) {
    if (!mongoose.Types.ObjectId.isValid(_id))
      throw new BadRequestException('ID không hợp lệ');

    const updated = await this.receiptModel.updateOne(
      { _id: updateReceiptDto._id },
      {
        $set: {
          ...updateReceiptDto,
          updatedBy: {
            _id: user._id,
            email: user.email,
          },
        },
        $push: {
          history: {
            description: updateReceiptDto.description,
            time: updateReceiptDto.time,
            amount: updateReceiptDto.amount,
            updatedAt: new Date(),
            updatedBy: {
              _id: user._id,
              email: user.email,
            },
          },
        },
      },
    );
    return updated;
  }

  async remove(id: string, user: IUser) {
    await this.receiptModel.updateOne(
      {
        _id: id,
      },
      {
        deletedBy: {
          _id: user._id,
          email: user.email,
        },
      },
    );

    return this.receiptModel.softDelete({
      _id: id,
    });
  }

  async uploadFile(file: Express.Multer.File, user: IUser) {
    // Kiểm tra xem file có tồn tại không
    if (!file) {
      throw new BadRequestException('Không tìm thấy file để nhập dữ liệu');
    }

    // Kiểm tra loại file
    const allowedTypes = [
      'application/vnd.ms-excel', // for .xls
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // for .xlsx
    ];
    if (!allowedTypes.includes(file.mimetype)) {
      throw new BadRequestException('Chỉ cho phép nhập từ file Excel');
    }

    // Đọc dữ liệu từ file Excel
    const workbook = xlsx.read(file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    let data = xlsx.utils.sheet_to_json(worksheet, {
      header: 1,
      defval: null,
    });

    const totalRowsRead = data.length - 1; // Trừ đi hàng đầu tiên là header
    const invalidRows = [];
    const existingReceipt = [];

    // Lọc bỏ các dòng rỗng và kiểm tra dữ liệu hợp lệ
    const filteredData = data.slice(1).filter(async (row, index) => {
      // Kiểm tra dòng có đủ các cột cần thiết không
      if ((row as any[]).length < 6) {
        return false;
      }

      // Kiểm tra các giá trị cột có hợp lệ không
      const receiptUserId = row[0];
      const id = row[1];
      const receiptDescription = row[2];
      const receiptIncomeCategoryId = row[3];
      const receiptTime = row[4];
      const parsedAmount = parseFloat(row[5]);

      if (
        !receiptUserId ||
        !id ||
        !receiptDescription ||
        !receiptIncomeCategoryId ||
        !receiptTime ||
        isNaN(parsedAmount) ||
        parsedAmount < 1000 ||
        parsedAmount > 10000000000
      ) {
        invalidRows.push(index + 2);
        return false;
      }

      // Kiểm tra mã phiếu thu
      if (!isValidTypeDateRangeId(id, 'PT', 'yyyymmdd')) {
        invalidRows.push(index + 2);
        return false;
      }

      // Kiểm tra độ dài mô tả
      if (receiptDescription.length > 50) {
        invalidRows.push(index + 2);
        return false;
      }

      // Kiểm tra mã danh mục thu
      if (
        !isValidTypeDateRangeId(
          receiptIncomeCategoryId,
          'DMT',
          'categoryyyyymmdd',
        )
      ) {
        invalidRows.push(index + 2);
        return false;
      }

      // Kiểm tra ngày hợp lệ
      if (!isValidDateRange(receiptTime, 'dd/mm/yyyy')) {
        invalidRows.push(index + 2);
        return false;
      }

      // Kiểm tra xem bản ghi đã tồn tại hay chưa
      const res = await this.receiptModel.findOne({ id });
      if (res) existingReceipt.push(index + 2);

      return true;
    });

    // Số dòng hợp lệ
    const validRowsCount = filteredData.length;

    if (filteredData.length === 0 && invalidRows.length > 0) {
      throw new BadRequestException(
        'Dữ liệu không hợp lệ. Xin hãy kiểm tra lại quy tắc nhập liệu',
      );
    }

    // Lưu dữ liệu vào cơ sở dữ liệu
    for (const row of filteredData) {
      const receiptUserId = row[0];
      const id = row[1];
      const receiptDescription = row[2];
      const receiptIncomeCategoryId = row[3];
      const receiptTime = row[4];
      const receiptAmount = parseFloat(row[5]);

      const [day, month, year] = receiptTime.split('/');
      const parsedDate = parse(
        `${day}/${month}/${year}`,
        'dd/MM/yyyy',
        new Date(),
      );
      // Thêm giờ phút giây hiện tại vào ngày
      const currentDateTime = new Date();
      parsedDate.setHours(currentDateTime.getHours());
      parsedDate.setMinutes(currentDateTime.getMinutes());
      parsedDate.setSeconds(currentDateTime.getSeconds());
      parsedDate.setMilliseconds(currentDateTime.getMilliseconds());
      const formattedDate = formatISO(parsedDate);

      if (existingReceipt.length === 0) {
        try {
          // Tạo mới bản ghi phiếu thu
          await this.receiptModel.create({
            id: id,
            description: receiptDescription,
            time: formattedDate,
            amount: receiptAmount,
            userId: receiptUserId,
            incomeCategoryId: receiptIncomeCategoryId,
            createdBy: {
              _id: user._id,
              email: user.email,
            },
            history: [
              {
                description: `${receiptDescription} (Đầu tiên)`,
                time: formattedDate,
                amount: receiptAmount,
                updatedAt: new Date(),
                updatedBy: {
                  _id: user._id,
                  email: user.email,
                },
              },
            ],
          });
        } catch (error) {
          throw new BadRequestException(
            `Lỗi khi lưu dữ liệu: ${error.message}`,
          );
        }
      } else {
        throw new BadRequestException(
          'Dữ liệu bị trùng lặp. Xin hãy kiểm tra lại',
        );
      }
    }

    return {
      message: 'Nhập dữ liệu từ file excel thành công',
      totalRowsRead,
      validRowsCount,
    };
  }

  async exportReceiptToPDF(id: string, res: Response) {
    const receipt = await this.receiptModel.findOne({
      id: id,
    });

    if (!receipt) {
      throw new BadRequestException('Không tìm thấy phiếu thu');
    }

    const incomeCategory = await this.incomeCategoriesService.findOne(
      receipt.incomeCategoryId,
    );
    const user = await this.usersService.findUserNameWithUserId(receipt.userId);

    const incomeCategoryName = incomeCategory?.description || '';
    const userName = user?.name || '';

    receipt.amount = formatCurrency(receipt.amount);
    const formattedTime = dayjs(new Date(receipt.time)).format('DD/MM/YYYY');

    const receiptWithFormattedTime = {
      ...receipt.toObject(),
      formattedTime: formattedTime,
      incomeCategoryName: incomeCategoryName,
      userName: userName,
    };

    const templatePath = join(
      process.cwd(),
      'src',
      'receipts',
      'templates',
      'receipt.hbs',
    );

    const templateHtml = readFileSync(templatePath, 'utf8');
    const template = handlebars.compile(templateHtml);
    const html = template(receiptWithFormattedTime);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(html);

    // Generate the PDF
    const pdfBuffer = await page.pdf({ format: 'A5', landscape: true });

    await browser.close();

    // Create a readable stream from the buffer
    const pdfStream = new Readable();
    pdfStream.push(pdfBuffer);
    pdfStream.push(null);

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="receipt-${id}.pdf"`,
    });

    pdfStream.pipe(res);
  }
}
