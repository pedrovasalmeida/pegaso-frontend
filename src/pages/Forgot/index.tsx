import React from 'react';

// import { AuthContext } from '../../context/AuthContext';

import { Link } from 'react-router-dom';

import { Container, Separator, Form, ForgotIcon, BackIcon } from './styles';

const Forgot: React.FC = () => {
  return (
    <Container>
      <Form>
        <Link to="/painel">
          <BackIcon />
          Voltar
        </Link>
        <Separator />
        <h1>Esqueceu sua senha?</h1>

        <input type="email" placeholder="E-mail" />
        <p>ou</p>
        <input placeholder="Login" />

        <button type="submit">
          <ForgotIcon />
          Relembrar
        </button>
        <Separator />
        <span>by Pegaso</span>
      </Form>
    </Container>
  );
};

export default Forgot;
