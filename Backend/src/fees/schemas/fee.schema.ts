/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type FeeDocument = HydratedDocument<Fee>;

@Schema({ timestamps: true })
export class Fee {
  @Prop({ type: Object })
  unionist: {
    _id: mongoose.Schema.Types.ObjectId;
    name: string;
  };

  @Prop()
  monthYear: string;

  @Prop()
  fee: string;

  @Prop({ type: Object })
  createdBy: {
    _id: mongoose.Schema.Types.ObjectId;
    email: string;
  };

  @Prop({ type: Object })
  updatedBy: {
    _id: mongoose.Schema.Types.ObjectId;
    email: string;
  };

  @Prop({ type: Object })
  deletedBy: {
    _id: mongoose.Schema.Types.ObjectId;
    email: string;
  };

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop()
  isDeleted: boolean;

  @Prop()
  deletedAt: Date;
}

export const FeeSchema = SchemaFactory.createForClass(Fee);
