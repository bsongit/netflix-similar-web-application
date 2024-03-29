import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import "./App.css";
import Detail from './pages/Detail';
import DetailOne from './pages/DetailOne';
import Home from './pages/Home';

export default function App() {
  interface Route {
    _id : string,
    url : string,
    url1: string
  }

  return (
  <BrowserRouter>
    <Switch>
      {/* Home access! */}
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/:url" component={Detail} />
      <Route exact path="/assistir/:url1" component={DetailOne} />
      {/* <Route path="*" component={'Página desconhecida'} /> */}
    </Switch>
  </BrowserRouter>
  )}