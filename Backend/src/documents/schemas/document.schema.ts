/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type DocumentDocument = HydratedDocument<Document>;

@Schema({ timestamps: true })
export class Document {
  @Prop()
  email: string;

  @Prop()
  userId: mongoose.Schema.Types.ObjectId;

  @Prop()
  url: string;

  @Prop()
  status: string;

  @Prop()
  departmentId: mongoose.Schema.Types.ObjectId;

  //   @Prop()
  //   postId: mongoose.Schema.Types.ObjectId

  @Prop({ type: mongoose.Schema.Types.Array })
  history: {
    status: string;
    updatedAt: Date;
    updatedBy: {
      _id: mongoose.Schema.Types.ObjectId;
      email: string;
    };
  }[];

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

export const DocumentSchema = SchemaFactory.createForClass(Document);
