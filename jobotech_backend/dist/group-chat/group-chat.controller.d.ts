import { GroupChatService } from './group-chat.service';
import { CreateGroupChatDTO } from './dto/create-group-chat.dto';
export declare class GroupChatController {
    private readonly groupChatService;
    constructor(groupChatService: GroupChatService);
    create(dto: CreateGroupChatDTO): Promise<import("./group-chat.schema").GroupChat>;
}
