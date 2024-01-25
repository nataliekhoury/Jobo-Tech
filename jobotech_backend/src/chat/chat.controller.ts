import { Controller, Post, Body, Get, Param, Query } from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateChatDTO } from './dto/create-chat.dto';
import { GetMessagesDTO } from './dto/get-messages.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  create(
    @Body() dto: CreateChatDTO
  ) {
    return this.chatService.create(dto);
  }

  @Get()
  getMessages(@Query() dto: GetMessagesDTO) {
    console.log(dto)
    return this.chatService.getMessages(dto);
  }

  @Get(':id1/:id2')
  getMessagess(
    @Param('id1') id1: string,
    @Param('id2') id2: string
  ) {
    return this.chatService.getMessagess(id1, id2)
  }
}
