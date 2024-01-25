// user.model.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User {
  @Prop({ required: true })
  Name: string;

  @Prop({ required: true })
  Password: string;

  @Prop({ required: true })
  Email: string;

  @Prop({ required: true })
  image: string;

  @Prop({default: Date.now() })
    createdDate: Date
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
