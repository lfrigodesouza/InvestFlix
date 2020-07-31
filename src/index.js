import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroPodcast from './pages/cadastro/Podcast';
import Home from './pages/Home';
import CadastroCategoria from './pages/cadastro/Categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/podcast" component={CadastroPodcast} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={() => <div>Não encontrado - 404</div>} />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root'),
);
