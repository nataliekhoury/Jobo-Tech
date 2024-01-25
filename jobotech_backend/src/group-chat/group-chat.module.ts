import { Module } from '@nestjs/common';
import { GroupChatController } from './group-chat.controller';
import { GroupChatService } from './group-chat.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GroupChat, GroupChatSchema } from './group-chat.schema'

@Module({
  imports: [MongooseModule.forFeature([{name: GroupChat.name, schema: GroupChatSchema}])],
  controllers: [GroupChatController],
  providers: [GroupChatService]
})
export class GroupChatModule {}
