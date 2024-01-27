import React, { createContext, useContext, useState } from 'react'; // this screen povides the looged mentor id 

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [mentorId, setMentorId] = useState(null);

  const login = (mentorId) => {
    setMentorId(mentorId);
  };

  const logout = () => {
    setMentorId(null);
  };

  return (
    <AuthContext.Provider value={{ mentorId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};