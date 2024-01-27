// mentor.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateChatDto } from 'src/chat/dto/create-chat.dto';
import { CreateMentorDTO } from './dto/createMentor.dto';
import { Mentor } from './mentor.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MentorService {
  

  constructor(@InjectModel(Mentor.name) private readonly MentorModel: Model<Mentor>) {} 
  async create(dto: CreateMentorDTO): Promise<Mentor> {
    const createdMentor = new this.MentorModel(dto);
    return await createdMentor.save();
  }

  async getById(id:string):Promise <Mentor>{
    return await this.MentorModel.findById(id)
  }

  // getMentorStudents(mentorId: string): any[] {

  //   const mentorStudents = students.filter((student) => mentorId === mentorId);
  //   if (!mentorStudents.length) {
  //     throw new NotFoundException('Mentor not found or has no associated students');
  //   }

  //   return mentorStudents;
  // }
}
