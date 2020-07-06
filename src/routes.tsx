import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import QuemSomos from "./pages/QuemSomos";
import Empreendimentos from "./pages/Empreendimentos";

// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/quem-somos" exact component={QuemSomos} />
        <Route path="/empreendimentos" exact component={Empreendimentos} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
