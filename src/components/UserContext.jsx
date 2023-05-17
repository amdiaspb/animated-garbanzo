import { createContext, useState } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [username, setUsername] = useState(localStorage.getItem("username"));

  function setName(value) {
    localStorage.setItem("username", value);
    setUsername(value);
  }
  
  return (
    <UserContext.Provider value={{ name: username, setName }}>
      {children}
    </UserContext.Provider>
  );
}
