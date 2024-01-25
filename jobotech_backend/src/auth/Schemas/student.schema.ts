import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from './user.schema';

@Schema({ collection: 'students', discriminatorKey: 'role' })
export class Student extends User {
  // Additional properties specific to students
}

export type StudentDocument = Student & Document;
export const StudentSchema = SchemaFactory.createForClass(Student);