import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import "./App.css";
import Home from './pages/Home';
export default function App() {
  return (
  <BrowserRouter>
    <Switch>
      {/* Home access! */}
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
  )}
