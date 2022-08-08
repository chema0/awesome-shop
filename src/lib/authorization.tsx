import * as React from "react";

import { login, LoginCredentialsDTO } from "@/features/auth/api/login";
import { User } from "@/features/users/types";

interface AuthContextType {
  user: any;
  signin: (credentials: LoginCredentialsDTO, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

const AuthContext = React.createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User | null>(null);

  const signin = async (
    credentials: LoginCredentialsDTO,
    callback: VoidFunction
  ) => {
    try {
      const _user = await login(credentials);
      setUser(_user.user);
      callback();
    } catch (error) {
      console.error(error);
    }
  };

  const signout = (callback: VoidFunction) => {
    setUser(null);
    callback();
  };

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return React.useContext(AuthContext);
}
