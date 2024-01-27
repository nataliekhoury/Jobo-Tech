import { Document } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Student extends Document {
  @Prop({ type: String }) description: string;
  @Prop({ type: String }) username: string;
  @Prop({ type: String }) imgUrl: string;
  @Prop({ type: String }) email: string;
  @Prop({ type: String }) password: string;
  @Prop() Field:any[] ;
  @Prop({ default: Date.now }) dateCreated: Date;
  @Prop({ default: false }) deleted: boolean;

}

export const StudentSchema = SchemaFactory.createForClass(Student);