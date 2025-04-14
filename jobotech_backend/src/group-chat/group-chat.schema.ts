import { Document } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class GroupChat extends Document {
  @Prop({ type: String }) name: string;
  @Prop({ type: [Object] }) members: ChatMember[];
  @Prop({ default: false }) deleted: boolean;
  @Prop({ default: Date.now }) dateCreated: Date;
}

export const GroupChatSchema = SchemaFactory.createForClass(GroupChat);