import { MentorService } from './mentor.service';
export declare class MentorController {
    private readonly mentorService;
    constructor(mentorService: MentorService);
    getMentorStudents(mentorId: string): any[];
}
