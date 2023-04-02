import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Inicio from './components/Inicio';
import Galeria from './components/Galeria';
import Episodios from './pages/Episodios';

function Routes() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route path="/galeria" component={Galeria} />
        <Route path="/episodios" component={Episodios} />
      </Switch>
    </>
  );
}

export default Routes;
