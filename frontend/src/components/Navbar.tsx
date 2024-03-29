import React, {ChangeEvent, useState} from 'react';
import Api from '../util/Api';
import Sidebar from './Sidebar';
import Logo from '../imgs/logo.png'
import {Link} from "react-router-dom";

type Props = {
  context : [string, React.Dispatch<React.SetStateAction<string>>];
  contextSidebar : [string, React.Dispatch<React.SetStateAction<string>>];
  contextLoad : [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  contextArrive : [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  chooseUrlFunc : Function;
}

interface Movie {
  name: string,
  urlImg: string,
  data: Date, 
  url: string
}

export default function Navbar(props : Props)  {
  const [isExpanded, setExpanded] = useState(false);
  const [searchWord, setSearchWord] = useState<string>("");
  const [searcBar, setSearcBar] = useState(false);
  const [moviesSearched, setMovieSearched] = useState<Array<Movie>>([]);
  const [category, setCategory] = props.context;
  const [load, setLoad] = props.contextLoad;
  const [isArrive, setArrive] = props.contextArrive;

  async function getByName(name : string, category: string) {
    Api.post('/movies/get-by-name', {name : name, category: category})
    .then((response: { data: Array<Movie>}) => {
     setMovieSearched(response.data);
    })
    .catch((error: any) => {
      console.log(error);
      console.log(load, isArrive);
    });
  };

  var handleSearch = function(event : ChangeEvent<HTMLInputElement>) : void{
    if(event.target.value !== ""){
      getByName(event.target.value, category);
      setSearchWord(event.target.value)
    }
    else{
      setMovieSearched([]);
      setSearcBar(false)
      setSearchWord("")
    }
  }
  async function loading(){
    setArrive(false)
    setTimeout(() => setLoad(false),1000)
  }
  var handleChange = function(event : ChangeEvent<HTMLSelectElement>) : void{
    setCategory(event.target.value);
    setLoad(true);
    loading();
    window.scrollTo(0, 0);
  }

  return (<div className={"box-shadow mobile-nav"}>
    <div className="navbar" onClick={() => setMovieSearched([])}>
    <div className={searchWord.length > 0? "search-box" : "collapsed"} >
          {moviesSearched?.map((movie : Movie) => {
              return <div className="search-row" onClick={() => props.chooseUrlFunc(movie)}>
                <span>{movie.name}</span>
                <img alt={movie.name} src={movie.urlImg}></img>
                </div>
            })}
        </div>
      <div className="search-mobile">
        <div className="row ">
        <button className="w-3" onClick={() => setExpanded(!isExpanded)}>☰</button>
        <Link className="hide-mobile centered cursor-pointer" to="/">
          <img className="logo" alt="logo" src={Logo}></img>
        </Link>
      </div>
      </div>
      <div className="w-50 mt-05 d-flex">
        <input className={searcBar? "" : "collapsed" } placeholder="Pesquisar por todo site" onChange={handleSearch} ></input>
        <button className={!searcBar? "mobile-lupa" : "collapsed" } onClick={() => setSearcBar(true)}>⌕</button>
      </div>
      <div className="w-25 mt-05 d-flex">
      <select onChange={handleChange}>
        <option value="">Todos</option>
        <option value="filme">Filmes</option>
        <option value="serie">Series</option>
      </select>
      </div>
      <div></div>
    </div>      
      {isExpanded? <Sidebar contextArrive={props.contextArrive} contextLoad={props.contextLoad} context={props.contextSidebar} contextExpanded={[isExpanded, setExpanded]} /> : ""}
  </div>
  )
}
