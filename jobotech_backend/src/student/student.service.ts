// Student.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateChatDto } from 'src/chat/dto/create-chat.dto';
import { CreateStudentDTO } from './dto/createStudent.dto';
import { Student } from './student.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class StudentService {

  constructor(@InjectModel(Student.name) private readonly StudentModel: Model<Student>) {} 
  async create(dto: CreateStudentDTO): Promise<Student> {
    const createdStudent = new this.StudentModel(dto);
    return await createdStudent.save();
  }
  async getById(id:string):Promise <Student>{
    return await this.StudentModel.findById(id)
  }

  async getStudentWithDetails(studentId: string): Promise<Student> {
    try {
      const studentWithDetails = await this.StudentModel.aggregate([
        {
          $match: { _id: studentId } // add anther condition for this if the field is matching for both students and mentors 
        },
        {
          $lookup: {
            from: 'students',
            localField: 'studentList',
            foreignField: '_id',
            as: 'studentDetails'
          }
        }
      ]);

      if (studentWithDetails.length === 0) {
        throw new NotFoundException(`Student with ID ${studentId} not found`);
      }

      return studentWithDetails[0];
    } catch (error) {
      console.error('Error fetching student with details:', error);
      throw error;
    }
  }

  
}
