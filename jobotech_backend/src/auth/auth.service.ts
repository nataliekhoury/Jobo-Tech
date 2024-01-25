// auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student, StudentDocument } from '../auth/Schemas/student.schema';
import { Mentor, MentorDocument } from '../auth/Schemas/mentor.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Student.name) private readonly studentModel: Model<StudentDocument>,
    @InjectModel(Mentor.name) private readonly mentorModel: Model<MentorDocument>,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(Name: string, Password: string): Promise<Student | Mentor | null> {
    // Validate against both student and mentor collections
    const user = await this.studentModel
      .findOne({ name: Name, Password })
      .exec()
      .then((student) => student || this.mentorModel.findOne({ name: Name, Password }).exec());

    return user;
  }

  async login(user: Student | Mentor): Promise<{ token: string }> {
    // Generate and return JWT token
    const payload = { username: user.Name, sub: user.Name };
    const token = this.jwtService.sign(payload);
    return { token };
  }
}
