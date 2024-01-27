import { Document } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Mentor extends Document {
  @Prop({ type: String }) profession: string;
  @Prop({ type: String }) username: string;
  @Prop({ type: String }) imgUrl: string;
  @Prop({ type: String }) email: string;
  @Prop({ type: String }) password: string;
  @Prop() studentList:any[] ;
  @Prop({ default: Date.now }) dateCreated: Date;
  @Prop({ default: false }) deleted: boolean;

}

export const MentorSchema = SchemaFactory.createForClass(Mentor);