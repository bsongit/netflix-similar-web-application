import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import "./App.css";
import MyRoutes from './components/MyRoutes';
import Home from './pages/Home';
import Api from './util/Api'

export default function App() {
  var [routes, setRoutes] = useState<Route[]>([]);
  interface Route {

    _id : string,
    url : string,
    url1: string
  }

  const urls = async function() {
    await Api.get('/movies/all-url').then((response: {data : Route[]}) => {
     setRoutes(response.data);
   }).catch((error: any) => {
     console.error(error)
   })
 };


  useEffect(() => {
   urls();
   // eslint-disable-next-line
 },[]);
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