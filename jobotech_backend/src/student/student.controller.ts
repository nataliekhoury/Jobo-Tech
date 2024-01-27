// Student.controller.ts

import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
// import { JwtAuthGuard } from './auth/jwt-auth.guard'; // Adjust the path based on your project structure
import { StudentService as StudentService } from './student.service'; // Adjust the path based on your project structure
import { CreateStudentDTO as CreateStudentDTO } from './dto/createStudent.dto';

@Controller('students')
export class StudentController {
  constructor(private readonly StudentService: StudentService) {}


  @Post()
  createMentor(@Body() dto: CreateStudentDTO){
     return this.StudentService.create(dto)
  }

  @Get(':id')
  getById(@Param('id') id:string){
  return this.StudentService.getById(id)
  // @Get(':mentorId/students')
  // getMentorStudents(@Param('mentorId') mentorId: string) {
  //   return this.mentorService.getMentorStudents(mentorId);
  // }
}
}



