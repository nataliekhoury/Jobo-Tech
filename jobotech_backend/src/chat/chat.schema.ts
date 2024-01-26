import { Document, Types } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Chat extends Document {
  @Prop({ type: { role: String, id: Types.ObjectId, _id: false } }) from: ChatMember;
  @Prop({ type: { role: String, id: Types.ObjectId, _id: false } }) to: ChatMember;
  @Prop({ type: String }) text: string;
  @Prop({ default: Date.now }) dateCreated: Date;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);