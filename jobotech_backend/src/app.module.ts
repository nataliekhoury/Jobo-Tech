import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatModule } from './chat/chat.module';
import { GroupChatModule } from './group-chat/group-chat.module';

@Module({
  imports: 
  [
    MongooseModule.forRoot('mongodb+srv://norhan308:JoboTech@cluster0.ginlzm6.mongodb.net/JoboTech'),
    ChatModule,
    GroupChatModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}