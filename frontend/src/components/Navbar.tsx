import React, {ChangeEvent, useState} from 'react';
import Api from '../util/Api';
import Sidebar from './Sidebar';

type Props = {
  context : [string, React.Dispatch<React.SetStateAction<string>>];
}

interface Movie {
  name: string,
  urlImg: string,
  data: Date
}

export default function Navbar(props : Props)  {
  const [isExpanded, setExpanded] = useState(false);
  const [moviesSearched, setMovieSearched] = useState<Array<Movie>>([]);
  const [category, setCategory] = props.context;


  async function getByName(name : string, category: string) {
    Api.post('/movies/get-by-name', {name : name, category: category})
    .then((response: { data: Array<Movie>}) => {
     setMovieSearched(response.data);
    })
    .catch((error: any) => {
      console.log(error);
    });
  };

  var handleSearch = function(event : ChangeEvent<HTMLInputElement>) : void{
    if(event.target.value !== ""){
      getByName(event.target.value, category);
    }
    else{
      setMovieSearched([]);
    }
  }
  var handleChange = function(event : ChangeEvent<HTMLSelectElement>) : void{
    setCategory(event.target.value);
  }

  return (<div>

    <div className="navbar" onClick={() => setMovieSearched([])}>
    <div className="search-box">
          {moviesSearched?.map((movie : Movie) => {
              return <div>
                <span>{movie.name}</span>
                <img alt={movie.name} src={movie.urlImg}></img>
                </div>;
            })}
        </div>
      <div>
      <button className="w-3" onClick={() => setExpanded(!isExpanded)}>☰</button>
      <label className="hide-mobile">Filmes&Temporadas Online</label>
      </div>
      <div className="w-50 mt-05 d-flex">
        <input className="" placeholder="Pesquisar por todo site" onChange={handleSearch} ></input>
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
      {isExpanded? <Sidebar /> : ""}
  </div>
  )
}
