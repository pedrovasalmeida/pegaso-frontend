import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/** Header && Footer*/
import Header from './components/Header';
import Footer from './components/Footer';

/** Páginas */
import Main from './pages/Main';
import QuemSomos from './pages/QuemSomos';
import Empreendimentos from './pages/Empreendimentos';
import DetalhesEmpreendimento from './pages/DetalhesEmpreendimento';
import Painel from './pages/Painel';
import Forgot from './pages/Forgot';
import Register from './pages/Register';

// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Footer />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/quem-somos" exact component={QuemSomos} />
        <Route path="/empreendimentos" exact component={Empreendimentos} />
        <Route
          path="/empreendimentos/detalhes/:id"
          component={DetalhesEmpreendimento}
        />
        <Route path="/painel" component={Painel} />
        <Route path="/forgot-password" component={Forgot} />
        <Route path="/create-account" component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
