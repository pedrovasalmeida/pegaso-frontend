import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';
import { Preloader, ThreeDots } from 'react-preloader-icon';

import {
  Container,
  Separator,
  Form,
  SignInIcon,
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
  const [loginError, setLoginError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { signIn } = useAuth();

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
      setIsLoading(true);
      setLoginError(false);

      try {
        const { login, password } = data;

        if (login.length < 5) {
          setIsLoading(false);
          return setIsError(true);
        }

        if (password.length < 5) {
          setIsLoading(false);
          return setIsError(true);
        }

        await signIn!({ login, password })
          .then((res) => {
            setTimeout(() => {
              setIsLoading(false);
              setIsError(false);

              return handleReloadPage();
            }, 1000);
          })
          .catch((err) => {
            setLoginError(true);
            setIsLoading(false);
          });
      } catch {
        return new Error('Usuário/senha inválidos. Tente novamente!');
      }
    },
    [signIn, handleReloadPage],
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

        {isLoading && (
          <div>
            <Preloader
              use={ThreeDots}
              size={60}
              strokeWidth={6}
              strokeColor="#324286"
              duration={800}
            />
          </div>
        )}

        {isError && renderLoginError()}

        {loginError && (
          <LoginErrorMessage>
            <LoginErrorIcon />
            Login ou senha incorretos. Verifique as credenciais!
          </LoginErrorMessage>
        )}

        {/* <Link to="/create-account">
          <CreateAccountIcon />
          Criar conta
        </Link> */}
        <Separator />
        <span>Pegaso © 2020</span>
      </Form>
    </Container>
  );
};

export default Login;
