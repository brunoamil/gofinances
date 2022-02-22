import React, { ReactNode, useContext, createContext } from "react";
import * as AuthSession from "expo-auth-session";

//para criar o contexto, precisa passar um valor inicial
const AuthContext = createContext({} as IAuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  id: string;
  name: string;
  email: string;
  photo?: string;
}
interface IAuthContextData {
  user: User;
  signInWithGoogle(): Promise<void>;
}

function AuthProvider({ children }: AuthProviderProps) {
  const user = {
    id: "123",
    name: "Bruno Lima",
    email: "bruno-amil@hotmail.com",
  };

  async function signInWithGoogle() {
    try {
      const CLIENT_ID =
        "311715325308-h5hgs99sspbr5b9smo75hoet95hsb50t.apps.googleusercontent.com";
      const REDIRECT_URI = "https://auth.expo.io/@brunoamil/gofinances";
      const RESPONSE_TYPE = "token";
      const SCOPE = encodeURI("profile email");

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?cliend_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
      const response = AuthSession.startAsync({ authUrl });
      console.log(response);
    } catch (error: any) {
      throw new Error(error);
    }
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
export { AuthProvider, useAuth };
