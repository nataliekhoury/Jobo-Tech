import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  create(
    @Body() dto: CreateChatDto
  ) {
    return this.chatService.create(dto);
  }

  @Get(':id1/:id2')
  getMessages(
    @Param('id1') id1: string,
    @Param('id2') id2: string
  ) {
    return this.chatService.getMessages(id1, id2)
  }
}
