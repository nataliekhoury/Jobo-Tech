import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Chat } from './chat.schema';
import { CreateChatDTO } from './dto/create-chat.dto';
import { GetMessagesDTO } from './dto/get-messages.dto';

@Injectable()
export class ChatService {
  constructor(@InjectModel(Chat.name) private readonly chatModel: Model<Chat>) {}

  async create(createChatDto: CreateChatDTO): Promise<Chat> {
    const createdChat = new this.chatModel(createChatDto);
    return await createdChat.save();
  }

  createLookup(from: string, localField: string, foreignField: string, as: string) {
    return {
      $lookup: {
        from: from,
        localField: localField,
        foreignField: foreignField,
        as: as,
      },
    }
  }

  async getMessages(dto: GetMessagesDTO): Promise<Chat[]> {
    console.log(dto)
    const ids = dto.ids.map(str => new mongoose.Types.ObjectId(str));

    const fromStudentLookup = this.createLookup('students', 'from.id', '_id', 'fromDetails')
    const fromMentorLookup = this.createLookup('mentors', 'from.id', '_id', 'fromMentorDetails')
    const fromGroupLookup = this.createLookup('groupchats', 'from.id', '_id', 'fromGroupChatDetails')
    const toStudentLookup = this.createLookup('students', 'to.id', '_id', 'toDetails')
    const toMentorLookup = this.createLookup('mentors', 'to.id', '_id', 'toMentorDetails')
    const toGroupLookup = this.createLookup('groupchats', 'to.id', '_id', 'toGroupChatDetails')

    const messages = await this.chatModel.aggregate([
      {
        $match: {
          $or: [
            {
              "from.id": {
                $in: ids,
              },
            },
            {
              "to.id": {
                $in: ids,
              },
            },
          ],
        },
      },
      fromStudentLookup,
      fromMentorLookup,
      fromGroupLookup,
      toStudentLookup,
      toMentorLookup,
      toGroupLookup,
      {
        $project: {
          fromDetails: {
            $cond: {
              if: {
                $eq: ["$from.role", "student"],
              },
              then: "$fromDetails",
              else: {
                $cond: {
                  if: {
                    $eq: ["$from.role", "mentor"],
                  },
                  then: "$fromMentorDetails",
                  else: "$fromGroupChatDetails",
                },
              },
            },
          },
          toDetails: {
            $cond: {
              if: {
                $eq: ["$to.role", "student"],
              },
              then: "$toDetails",
              else: {
                $cond: {
                  if: {
                    $eq: ["$to.role", "mentor"],
                  },
                  then: "$toMentorDetails",
                  else: "$toGroupChatDetails",
                },
              },
            },
          },
          text: 1,
          dateCreated: 1,
        },
      },
      {
        $unwind: "$fromDetails",
      },
      {
        $unwind: "$toDetails",
      },
    ]).exec();

    return messages;
  }

  async getMessagess(id1: string, id2: string): Promise<Chat[]> {
    console.log('23456789')
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