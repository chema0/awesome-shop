import * as React from "react";

import { login, LoginCredentialsDTO } from "@/features/auth/api/login";
import { User } from "@/features/users/types";

interface AuthContextType {
  user: any;
  signin: (credentials: LoginCredentialsDTO, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
  isLoading: boolean;
  isLogged: boolean;
}

const AuthContext = React.createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const isLogged = !!user;

  const signin = async (
    credentials: LoginCredentialsDTO,
    callback: VoidFunction
  ) => {
    setIsLoading(true);

    try {
      const _user = await login(credentials);
      setUser(_user);
      callback();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const signout = (callback: VoidFunction) => {
    setUser(null);
    callback();
  };

  const value = { user, signin, signout, isLoading, isLogged };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return React.useContext(AuthContext);
}
