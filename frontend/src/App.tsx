import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import "./App.css";
import Home from './pages/Home';
import Detail from './pages/Detail';
import Api from './util/Api'

export default function App() {
  var [routes, setRoutes] = useState<Route[]>([]);
  interface Route {
    _id : string,
    url : string
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
     { routes?.map(route => {
      return <Route exact path={`/${route.url}`} component={Detail}/>
       })}
      {/* <Route path="*" component={Home} /> */}
    </Switch>
  </BrowserRouter>
  )}