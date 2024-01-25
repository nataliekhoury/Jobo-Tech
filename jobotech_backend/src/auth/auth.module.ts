import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from './auth.service';
import { Student, StudentSchema } from '../auth/Schemas/student.schema';
import { Mentor, MentorSchema } from '../auth/Schemas/mentor.schema';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Student.name, schema: StudentSchema },
      { name: Mentor.name, schema: MentorSchema },
    ]),
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY || 'default_secret_key',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
