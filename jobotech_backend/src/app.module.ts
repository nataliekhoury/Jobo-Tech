import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatModule } from './chat/chat.module';
import { MentorModule } from './mentor/mentor.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: 
  [
    MongooseModule.forRoot('mongodb+srv://norhan308:JoboTech@cluster0.ginlzm6.mongodb.net/JoboTech'),
    ChatModule,
    MentorModule,
    StudentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}