import React from 'react';

// import { AuthContext } from '../../context/AuthContext';

import { Link } from 'react-router-dom';

import { Container, Separator, Form, SignInIcon, BackIcon } from './styles';

const Register: React.FC = () => {
  return (
    <Container>
      <Form>
        <Link to="/painel">
          <BackIcon />
          Voltar
        </Link>
        <Separator />
        <h1>Crie sua conta agora mesmo!</h1>

        <input type="email" placeholder="E-mail" />
        <input placeholder={'Login'} />
        <input type="password" placeholder="Senha" />
        <input placeholder="Nome" />

        <button type="submit">
          <SignInIcon />
          Registrar
        </button>
        <Separator />
        <span>by Pegaso</span>
      </Form>
    </Container>
  );
};

export default Register;
