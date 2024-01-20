declare enum Field {
    DEVOPS = "Devops",
    FULL_STACK = "Full Stack",
    CYBER_SECURITY = "Cyber Security",
    AI_LEARNING = "AI Learning",
    NETWORKING = "Networking",
    WEB_DEVELOPMENT = "Web Development",
    DATA_ANALYSIS = "Data Analysis"
}
export declare const students: {
    id: string;
    email: string;
    username: string;
    password: string;
    dateCreated: number;
    deleted: boolean;
    imgUrl: string;
    description: string;
    field: Field[];
}[];
export declare const mentors: ({
    id: string;
    email: string;
    username: string;
    password: string;
    fields: Field[];
    dateCreated: number;
    deleted: boolean;
    imgUrl: string;
    studentsList: string[];
    field?: undefined;
} | {
    id: string;
    email: string;
    username: string;
    password: string;
    field: Field[];
    dateCreated: number;
    deleted: boolean;
    imgUrl: string;
    studentsList: string[];
    fields?: undefined;
})[];
export declare const messages: {
    id: string;
    dateCreated: number;
    text: string;
    from: string;
    to: string;
}[];
export {};
