// mentor.controller.ts

import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
// import { JwtAuthGuard } from './auth/jwt-auth.guard'; // Adjust the path based on your project structure
import { MentorService } from './mentor.service'; // Adjust the path based on your project structure
import { CreateMentorDTO } from './dto/createMentor.dto';

@Controller('mentors')
export class MentorController {
  constructor(private readonly mentorService: MentorService) {}


  @Post()
  createMentor(@Body() dto: CreateMentorDTO){
     return this.mentorService.create(dto)
  }

  // @Get(':mentorId/students')
  // getMentorStudents(@Param('mentorId') mentorId: string) {
  //   return this.mentorService.getMentorStudents(mentorId);
  // }

  /// get the mentor by his id 's 

  @Get(':id')
  getById(@Param('id') id:string){
    return this.mentorService.getById(id)
  }
}
