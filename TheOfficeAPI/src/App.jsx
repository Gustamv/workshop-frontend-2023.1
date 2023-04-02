import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Inicio from './components/Inicio';
import Galeria from './components/Galeria';
import Episodios from './pages/Episodios';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Inicio} />
        <Route path="/galeria" component={Galeria} />
        <Route path="/episodios" component={Episodios} />
      </div>
    </Router>
  );
}

export default App;



