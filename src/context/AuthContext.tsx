import React, { useState, useCallback, createContext } from 'react';
import api from '../services/api';

interface SignInCredentials {
  login: string;
  password: string;
}

interface UserProps {
  id: string;
  userLogin: string;
  token: string;
}

interface AuthContextProps {
  id?: string;
  login?: string;
  cargo?: string;
  token?: string;
  signIn?(credentials: SignInCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState({} as UserProps);

  /** signIn */
  const signIn = useCallback(async ({ login, password }: SignInCredentials) => {
    const response = await api.post('/start-session', {
      login,
      password,
    });

    const { id, userLogin }: UserProps = response.data.user;
    const { token }: UserProps = response.data;

    const user: UserProps = {
      id,
      userLogin,
      token,
    };

    localStorage.setItem('@ProjPegaso:user', JSON.stringify(user));
  }, []);

  // dados do user q fez signIn
  const getRequesterData = useCallback(async () => {}, []);

  return (
    <AuthContext.Provider value={{ id: '1', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
