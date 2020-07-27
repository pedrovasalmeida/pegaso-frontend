import React, { useState, useCallback } from 'react';

import { useAuth } from '../../context/AuthContext';

import { Link } from 'react-router-dom';

import {
  Container,
  Separator,
  Form,
  SignInIcon,
  CreateAccountIcon,
  LoginErrorMessage,
  LoginErrorIcon,
} from './styles';

interface SignInFormData {
  login: string;
  password: string;
}

const Login: React.FC = () => {
  const [inputLogin, setInputLogin] = useState('');
  const [inputSenha, setInputSenha] = useState('');
  const [isError, setIsError] = useState(false);

  const { user, signIn } = useAuth();

  const handleInputLogin = useCallback((string: string) => {
    setInputLogin(string);
  }, []);

  const handleInputSenha = useCallback((string: string) => {
    setInputSenha(string);
  }, []);

  const handleReloadPage = useCallback(() => {
    const data = localStorage.getItem('@ProjPegaso:user');
    const token = localStorage.getItem('@ProjPegaso:token');

    if (data && token) {
      window.location.reload();
    }
  }, []);

  const renderLoginError = useCallback(() => {
    if (inputLogin.length > 1) return setIsError(false);
    return (
      <LoginErrorMessage>
        <LoginErrorIcon />
        Algo deu errado. Verifique as credenciais!
      </LoginErrorMessage>
    );
  }, [inputLogin]);

  const handleSubmit = useCallback(
    async (
      data: SignInFormData,
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
      e.preventDefault();

      try {
        const { login, password } = data;

        if (login.length < 5) return setIsError(true);
        if (password.length < 5) return setIsError(true);

        await signIn!({ login, password });

        setIsError(false);

        handleReloadPage();
      } catch (err) {
        return err;
      }
    },
    [signIn],
  );

  return (
    <Container>
      <Form>
        <Separator />
        <h1>Faça seu logon</h1>

        <input
          placeholder={'Login'}
          value={inputLogin}
          onChange={(e) => handleInputLogin(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={inputSenha}
          onChange={(e) => handleInputSenha(e.target.value)}
        />

        {isError && renderLoginError()}

        <button
          type="submit"
          onClick={(e) =>
            handleSubmit({ login: inputLogin, password: inputSenha }, e)
          }
        >
          <SignInIcon />
          Entrar
        </button>

        <Link to="/forgot-password">Esqueci minha senha</Link>
        {/* <Link to="/create-account">
          <CreateAccountIcon />
          Criar conta
        </Link> */}
        <Separator />
        <span>by Pegaso</span>
      </Form>
    </Container>
  );
};

export default Login;
