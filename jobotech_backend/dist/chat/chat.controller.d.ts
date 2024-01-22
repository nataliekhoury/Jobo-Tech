import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';
export declare class ChatController {
    private readonly chatService;
    constructor(chatService: ChatService);
    create(dto: CreateChatDto): Promise<import("./chat.schema").Chat>;
}
