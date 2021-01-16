import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import "./App.css";
import MyRoutes from './components/MyRoutes';
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
      <MyRoutes></MyRoutes>

      {/* <Route path="*" component={'Página desconhecida'} /> */}
    </Switch>
  </BrowserRouter>
  )}