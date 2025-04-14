"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const chat_schema_1 = require("./chat.schema");
let ChatService = class ChatService {
    constructor(chatModel) {
        this.chatModel = chatModel;
    }
    async create(createChatDto) {
        const createdChat = new this.chatModel(createChatDto);
        return await createdChat.save();
    }
    createLookup(from, localField, foreignField, as) {
        return {
            $lookup: {
                from: from,
                localField: localField,
                foreignField: foreignField,
                as: as,
            },
        };
    }
    async getMessages(dto) {
        console.log(dto);
        const ids = dto.ids.map(str => new mongoose_2.default.Types.ObjectId(str));
        const fromStudentLookup = this.createLookup('students', 'from.id', '_id', 'fromDetails');
        const fromMentorLookup = this.createLookup('mentors', 'from.id', '_id', 'fromMentorDetails');
        const fromGroupLookup = this.createLookup('groupchats', 'from.id', '_id', 'fromGroupChatDetails');
        const toStudentLookup = this.createLookup('students', 'to.id', '_id', 'toDetails');
        const toMentorLookup = this.createLookup('mentors', 'to.id', '_id', 'toMentorDetails');
        const toGroupLookup = this.createLookup('groupchats', 'to.id', '_id', 'toGroupChatDetails');
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
    async getMessagess(id1, id2) {
        console.log('23456789');
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
};
exports.ChatService = ChatService;
exports.ChatService = ChatService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(chat_schema_1.Chat.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ChatService);
//# sourceMappingURL=chat.service.js.map