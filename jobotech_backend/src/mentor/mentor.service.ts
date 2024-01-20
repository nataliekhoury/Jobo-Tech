// mentor.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import {mentors,students } from '../../../public/fakeData'; 

@Injectable()
export class MentorService {
  getMentorStudents(mentorId: string): any[] {
    const mentorStudents = students.filter((student) => mentorId === mentorId);

    if (!mentorStudents.length) {
      throw new NotFoundException('Mentor not found or has no associated students');
    }

    return mentorStudents;
  }
}
