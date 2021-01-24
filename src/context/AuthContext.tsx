import React, { useState, useCallback, createContext, useContext } from 'react';
import api from '../services/api';

interface SignInCredentials {
  login: string;
  password: string;
}

interface AuthState {
  user: any;
  token: string;
}

interface AuthContextProps {
  user: any;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const user = localStorage.getItem('@ProjPegaso:user');
    const token = localStorage.getItem('@ProjPegaso:token');

    if (token && user) return { token, user: JSON.parse(user) };

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ login, password }: SignInCredentials) => {
    await api
      .post('/start-session', {
        login,
        password,
      })
      .then(res => {
        const { token, user } = res.data;

        localStorage.setItem('@ProjPegaso:user', JSON.stringify(user));
        localStorage.setItem('@ProjPegaso:token', token);

        setData({ user, token });
      })
      .catch(err => {
        setData({} as AuthState);
        throw new Error('Usuário/senha inválidos. Tente novamente!');
      });

    // try {
    //   const response = await api.post('/start-session', {
    //     login,
    //     password,
    //   });

    //   const { token, user } = response.data;

    //   localStorage.setItem('@ProjPegaso:user', JSON.stringify(user));
    //   localStorage.setItem('@ProjPegaso:token', token);

    //   setData({ user, token });
    // } catch (err) {
    //   setData({} as AuthState);
    //   throw new Error('Usuário/senha inválidos. Tente novamente!');
    // }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@ProjPegaso:user');
    localStorage.removeItem('@ProjPegaso:token');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth deve ser usado dentro de um AuthProvider');

  return context;
}
