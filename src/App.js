import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Soon from "./pages/Soon";
import './App.css';

 
function App() {

  

  return (
    <Router className="App" initialEntries={["/lojas", "/vendas", "/clientes", "/produtos", "/planos-metas", "/configuracoes", "/sair"]}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/lojas" component={Soon} />
      <Route exact path="/vendas" component={Soon} />
      <Route exact path="/clientes" component={Soon} />
      <Route exact path="/produtos" component={Soon} />
      <Route exact path="/planos-metas" component={Soon} />
      <Route exact path="/configuracoes" component={Soon} />
      <Route exact path="/sair" component={Soon} />
    </Switch>
  </Router>
  );
}

export default App;
