import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/** Header */
import Header from './components/Header';

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
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/quem-somos" exact component={QuemSomos} />
        <Route path="/parceiros" exact component={Parceiros} />
        <Route path="/servicos" exact component={ServicosPrestados} />
        <Route path="/empreendimentos" exact component={Empreendimentos} />
        <Route path="/empreendimentos/detalhes/:id" component={DetalhesEmpreendimento} />
        <Route path="/painel" component={Painel} />
        <Route path="/forgot-password" component={Forgot} />
        <Route path="/contato" component={Contato} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
