import { Controller, Get } from '@nestjs/common';

@Controller('chat')
export class ChatController {
  @Get()
  getChat(): string {
    return 'This is the chat endpoint';
  }
}
