import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import "./App.css";
import MyRoutes from './components/MyRoutes';
import Home from './pages/Home';
import WebTorrentPage from './pages/WebTorrentPage';

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
      <Route exact path="/webtorrent" component={WebTorrentPage} />
      <MyRoutes></MyRoutes>

      {/* <Route path="*" component={'Página desconhecida'} /> */}
    </Switch>
  </BrowserRouter>
  )}