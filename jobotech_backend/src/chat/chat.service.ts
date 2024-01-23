import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Chat } from './chat.schema';
import { CreateChatDto } from './dto/create-chat.dto';

@Injectable()
export class ChatService {
  constructor(@InjectModel(Chat.name) private readonly chatModel: Model<Chat>) {}

  async create(createChatDto: CreateChatDto): Promise<Chat> {
    const createdChat = new this.chatModel(createChatDto);
    return await createdChat.save();
  }

  async getMessages(id1: string, id2: string): Promise<Chat[]> {
    const messages = await this.chatModel.aggregate([
      {
        $match: {
          $or: [
            { from: id1, to: id2 },
            { from: id2, to: id1 }
          ]
        }
      },
      {
        $sort: {
          dateCreated: 1
        }
      }
    ]).exec();

    return messages;
  }
}