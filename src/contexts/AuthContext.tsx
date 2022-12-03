import { createContext } from "react";
import useAuth from "../hooks/useAuth";

interface AuthContextProps {
  login: (email: string, password: string) => void;
  logout: () => void;
  auth: any;
}

export const AuthContext = createContext<AuthContextProps>({
  login: () => {},
  logout: () => {},
  auth: {},
});

export const AuthProvider = ({ children }: any) => {
  const { login, logout, auth } = useAuth();
  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        auth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
