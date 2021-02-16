import React from 'react';
import { Switch, Route } from 'react-router-dom';

/** Páginas */
import Main from './pages/Main';
import QuemSomos from './pages/QuemSomos';
import Parceiros from './pages/Parceiros';
import ServicosPrestados from './pages/ServicosPrestados';
import Empreendimentos from './pages/Empreendimentos';
import DetalhesEmpreendimento from './pages/DetalhesEmpreendimento';
import Painel from './pages/Painel';
import Contato from './pages/Contato';
import Forgot from './pages/Forgot';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/quem-somos" exact component={QuemSomos} />
      <Route path="/parceiros" exact component={Parceiros} />
      <Route path="/servicos" exact component={ServicosPrestados} />
      <Route path="/obras" exact component={Empreendimentos} />
      <Route path="/obras/detalhes/:id" component={DetalhesEmpreendimento} />
      <Route path="/painel" component={Painel} />
      <Route path="/forgot-password" component={Forgot} />
      <Route path="/contato" component={Contato} />
    </Switch>
  );
};

export default Routes;
