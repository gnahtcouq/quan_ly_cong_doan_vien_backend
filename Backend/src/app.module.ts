import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';
import { DepartmentsModule } from './departments/departments.module';
import { PostsModule } from './posts/posts.module';
import { FilesModule } from './files/files.module';
import { DocumentsModule } from './documents/documents.module';
import { PermissionsModule } from './permissions/permissions.module';
import { DatabasesModule } from './databases/databases.module';
import { SubscribersModule } from './subscribers/subscribers.module';
import { UnionistsModule } from './unionists/unionists.module';
import { MailModule } from './mail/mail.module';
import { ScheduleModule } from '@nestjs/schedule';
import { FeesModule } from './fees/fees.module';
import { ReceiptsModule } from './receipts/receipts.module';
import { IncomeCategoriesModule } from './income-categories/income-categories.module';
import { ExpensesModule } from './expenses/expenses.module';
import { ExpenseCategoriesModule } from './expense-categories/expense-categories.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { ZnssModule } from './znss/znss.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ThrottlerModule.forRoot({
      ttl: 60, // 60s
      limit: 10, // 10 lần
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URL'),
        connectionFactory: (connection) => {
          connection.plugin(softDeletePlugin);
          return connection;
        },
      }),
      inject: [ConfigService],
    }),

    ConfigModule.forRoot({
      isGlobal: true,
    }),

    ScheduleModule.forRoot(),

    UsersModule,
    AuthModule,
    DepartmentsModule,
    PostsModule,
    FilesModule,
    DocumentsModule,
    PermissionsModule,
    DatabasesModule,
    SubscribersModule,
    UnionistsModule,
    MailModule,
    FeesModule,
    ReceiptsModule,
    IncomeCategoriesModule,
    ExpensesModule,
    ExpenseCategoriesModule,
    ZnssModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
