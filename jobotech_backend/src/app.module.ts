import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: 
  [
    MongooseModule.forRoot('mongodb+srv://norhan308:JoboTech@cluster0.ginlzm6.mongodb.net/'),
    ChatModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}