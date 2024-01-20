"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MentorService = void 0;
const common_1 = require("@nestjs/common");
const fakeData_1 = require("../../../public/fakeData");
let MentorService = class MentorService {
    getMentorStudents(mentorId) {
        const mentorStudents = fakeData_1.students.filter((student) => mentorId === mentorId);
        if (!mentorStudents.length) {
            throw new common_1.NotFoundException('Mentor not found or has no associated students');
        }
        return mentorStudents;
    }
};
exports.MentorService = MentorService;
exports.MentorService = MentorService = __decorate([
    (0, common_1.Injectable)()
], MentorService);
//# sourceMappingURL=mentor.service.js.map