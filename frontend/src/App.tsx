import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import "./App.css";
import Detail from './pages/Detail';
import Home from './pages/Home';
import Api from './util/Api'



export default function App() {

  var [routes, setRoutes] = useState<Route[]>([]);
  interface Route {
    _id : string,
    url : string
  }
  async function urls() {
    await Api.get('/movies/all-url').then((response: {data : Route[]}) => {
     setRoutes(response.data);
   }).catch((error: any) => {
     console.error(error)
   })
 };

 useEffect(() => {
   urls();
 },[])
  return (
  <BrowserRouter>
    <Switch>
      {/* Home access! */}
      <Route exact path="/" component={Home} />
      {routes?.map(route => {
        return <Route exact path={`/${route.url}`} component={Detail} />
      })}
    </Switch>
  </BrowserRouter>
  )}