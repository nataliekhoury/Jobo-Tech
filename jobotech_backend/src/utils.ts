enum Role {
  STUDENT = 'student',
  MENTOR = 'mentor',
  GROUP = 'group'
}

interface ChatMember {
  role: Role;
  id: string;
}