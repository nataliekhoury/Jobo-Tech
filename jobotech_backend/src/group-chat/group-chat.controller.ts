import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { GroupChatService } from './group-chat.service';
import { CreateGroupChatDTO } from './dto/create-group-chat.dto';

@Controller('group-chat')
export class GroupChatController {
  constructor(private readonly groupChatService: GroupChatService) {}

  @Post()
  create(
    @Body() dto: CreateGroupChatDTO
  ) {
    return this.groupChatService.create(dto);
  }

  // @Get(':id1/:id2')
  // getMessages(
  //   @Param('id1') id1: string,
  //   @Param('id2') id2: string
  // ) {
  //   return this.chatService.getMessages(id1, id2)
  // }
}
