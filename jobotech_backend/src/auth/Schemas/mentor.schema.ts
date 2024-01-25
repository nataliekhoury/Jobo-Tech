import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from './user.schema';

@Schema({ collection: 'mentors', discriminatorKey: 'role' })
export class Mentor extends User {
  @Prop({ required: true })
  Profession: string; // Additional property specific to mentors
}

export type MentorDocument = Mentor & Document;
export const MentorSchema = SchemaFactory.createForClass(Mentor);
