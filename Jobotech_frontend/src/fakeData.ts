enum Field {
    DEVOPS = 'Devops',
    FULL_STACK = 'Full Stack',
    CYBER_SECURITY = 'Cyber Security',
    AI_LEARNING = 'AI Learning',
    NETWORKING = 'Networking',
    WEB_DEVELOPMENT = 'Web Development',
    DATA_ANALYSIS = 'Data Analysis'
  }
  
  export const students = [
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
  
  export const mentors = [
    {
      id: "333333333",
      email: "mentor1@gmail.com",
      username: "Mentor mentor 1",
      password: "mentor1",
      fields: [Field.DATA_ANALYSIS],
      dateCreated: Date.now(),
      deleted: false,
      imgUrl: "https://picsum.photos/seed/picsum/200/300",
      studentsList: [students[0].id, students[1].id]
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
      studentsList: [students[2].id, students[3].id]
    },
  ];
  
  export const messages = [
    {
      id: "999999999",
      dateCreated: Date.now(),
      text: "Hi, how are you?",
      from: students[1].id,
      to: mentors[1].id
    },
    {
      id: "111111112",
      dateCreated: Date.now(),
      text: "Fine :)",
      from: mentors[1].id,
      to: students[1].id
    },
  ];