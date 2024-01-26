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
exports.GroupChatController = void 0;
const common_1 = require("@nestjs/common");
const group_chat_service_1 = require("./group-chat.service");
const create_group_chat_dto_1 = require("./dto/create-group-chat.dto");
let GroupChatController = class GroupChatController {
    constructor(groupChatService) {
        this.groupChatService = groupChatService;
    }
    create(dto) {
        return this.groupChatService.create(dto);
    }
};
exports.GroupChatController = GroupChatController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_group_chat_dto_1.CreateGroupChatDTO]),
    __metadata("design:returntype", void 0)
], GroupChatController.prototype, "create", null);
exports.GroupChatController = GroupChatController = __decorate([
    (0, common_1.Controller)('group-chat'),
    __metadata("design:paramtypes", [group_chat_service_1.GroupChatService])
], GroupChatController);
//# sourceMappingURL=group-chat.controller.js.map