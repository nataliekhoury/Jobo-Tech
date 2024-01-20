// mentor.controller.ts

import { Controller, Get, Param, UseGuards } from '@nestjs/common';
// import { JwtAuthGuard } from './auth/jwt-auth.guard'; // Adjust the path based on your project structure
import { MentorService } from './mentor.service'; // Adjust the path based on your project structure

@Controller('mentors')
// @UseGuards(JwtAuthGuard)
export class MentorController {
  constructor(private readonly mentorService: MentorService) {}

  @Get(':mentorId/students')
  getMentorStudents(@Param('mentorId') mentorId: string) {
    return this.mentorService.getMentorStudents(mentorId);
  }
}
