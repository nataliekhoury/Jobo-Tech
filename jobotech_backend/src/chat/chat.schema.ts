import { Document } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Chat extends Document {
  @Prop({ type: String }) from: string;
  @Prop({ type: String }) to: string;
  @Prop({ type: String }) text: string;
  @Prop({ default: Date.now }) dateCreated: Date;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);