/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { Chat } from './chat.schema';
import { CreateChatDTO } from './dto/create-chat.dto';
import { GetMessagesDTO } from './dto/get-messages.dto';
export declare class ChatService {
    private readonly chatModel;
    constructor(chatModel: Model<Chat>);
    create(createChatDto: CreateChatDTO): Promise<Chat>;
    createLookup(from: string, localField: string, foreignField: string, as: string): {
        $lookup: {
            from: string;
            localField: string;
            foreignField: string;
            as: string;
        };
    };
    getMessages(dto: GetMessagesDTO): Promise<Chat[]>;
    getMessagess(id1: string, id2: string): Promise<Chat[]>;
}
