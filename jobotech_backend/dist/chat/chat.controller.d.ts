import { ChatService } from './chat.service';
import { CreateChatDTO } from './dto/create-chat.dto';
import { GetMessagesDTO } from './dto/get-messages.dto';
export declare class ChatController {
    private readonly chatService;
    constructor(chatService: ChatService);
    create(dto: CreateChatDTO): Promise<import("./chat.schema").Chat>;
    getMessages(dto: GetMessagesDTO): Promise<import("./chat.schema").Chat[]>;
    getMessagess(id1: string, id2: string): Promise<import("./chat.schema").Chat[]>;
}
