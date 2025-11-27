import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [registerData, setRegisterData] = useState({
    full_name: "",
    phone: "",
    role: "", 
  });

  return (
    <AuthContext.Provider value={{ registerData, setRegisterData }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;