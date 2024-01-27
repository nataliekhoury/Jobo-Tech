import { Module } from '@nestjs/common';
import { MentorController } from './mentor.controller';
import { MentorService } from './mentor.service';
import { Mentor, MentorSchema } from './mentor.schema';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forFeature([{name: Mentor.name, schema: MentorSchema}])],
  controllers: [MentorController],
  providers: [MentorService],
})
export class MentorModule {}