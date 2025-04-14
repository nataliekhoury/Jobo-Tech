import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GroupChat } from './group-chat.schema';
import { CreateGroupChatDTO } from './dto/create-group-chat.dto';

@Injectable()
export class GroupChatService {
  constructor(@InjectModel(GroupChat.name) private readonly groupChatModel: Model<GroupChat>) {}

  async create(dto: CreateGroupChatDTO): Promise<GroupChat> {
    return await new this.groupChatModel(dto).save();
  }
}