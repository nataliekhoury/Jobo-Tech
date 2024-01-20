"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messages = exports.mentors = exports.students = void 0;
var Field;
(function (Field) {
    Field["DEVOPS"] = "Devops";
    Field["FULL_STACK"] = "Full Stack";
    Field["CYBER_SECURITY"] = "Cyber Security";
    Field["AI_LEARNING"] = "AI Learning";
    Field["NETWORKING"] = "Networking";
    Field["WEB_DEVELOPMENT"] = "Web Development";
    Field["DATA_ANALYSIS"] = "Data Analysis";
})(Field || (Field = {}));
exports.students = [
    {
        id: "555555555",
        email: "student1@gmail.com",
        username: "Student student 1",
        password: "student1",
        dateCreated: Date.now(),
        deleted: false,
        imgUrl: "https://picsum.photos/seed/picsum/200/300",
        description: "Software Engineer student, searching for DevOps",
        field: [Field.DEVOPS, Field.FULL_STACK]
    },
    {
        id: "666666666",
        email: "student2@gmail.com",
        username: "Student student 2",
        password: "student2",
        dateCreated: Date.now(),
        deleted: false,
        imgUrl: "https://picsum.photos/seed/picsum/200/300",
        description: "Software Engineer student, searching for DevOps",
        field: [Field.AI_LEARNING]
    },
    {
        id: "777777777",
        email: "student3@gmail.com",
        username: "Student student 3",
        password: "student3",
        dateCreated: Date.now(),
        deleted: false,
        imgUrl: "https://picsum.photos/seed/picsum/200/300",
        description: "Software Engineer student, searching for DevOps",
        field: [Field.DEVOPS, Field.NETWORKING]
    },
    {
        id: "888888888",
        email: "student4@gmail.com",
        username: "Student student 4",
        password: "student4",
        dateCreated: Date.now(),
        deleted: false,
        imgUrl: "https://picsum.photos/seed/picsum/200/300",
        description: "Software Engineer student, searching for DevOps",
        field: [Field.CYBER_SECURITY, Field.WEB_DEVELOPMENT]
    },
];
exports.mentors = [
    {
        id: "333333333",
        email: "mentor1@gmail.com",
        username: "Mentor mentor 1",
        password: "mentor1",
        fields: [Field.DATA_ANALYSIS],
        dateCreated: Date.now(),
        deleted: false,
        imgUrl: "https://picsum.photos/seed/picsum/200/300",
        studentsList: [exports.students[0].id, exports.students[1].id]
    },
    {
        id: "444444444",
        email: "mentor2@gmail.com",
        username: "Mentor mentor 2",
        password: "mentor2",
        field: [Field.AI_LEARNING],
        dateCreated: Date.now(),
        deleted: false,
        imgUrl: "https://picsum.photos/seed/picsum/200/300",
        studentsList: [exports.students[2].id, exports.students[3].id]
    },
];
exports.messages = [
    {
        id: "999999999",
        dateCreated: Date.now(),
        text: "Hi, how are you?",
        from: exports.students[1].id,
        to: exports.mentors[1].id
    },
    {
        id: "111111112",
        dateCreated: Date.now(),
        text: "Fine :)",
        from: exports.mentors[1].id,
        to: exports.students[1].id
    },
];
//# sourceMappingURL=fakeData.js.map