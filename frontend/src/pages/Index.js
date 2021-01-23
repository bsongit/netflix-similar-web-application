import React, {useState, useEffect} from 'react';
import { useHistory,Link} from "react-router-dom";
import ChooseUrl from '../components/ChooseUrl';
import Cover from '../components/Cover';
import Footer from '../components/Footer';
import LoadComponent from '../components/LoadComponent';
import Navbar from '../components/Navbar';
import Pager from '../components/Pager';
import Api from '../util/Api';
import {Helmet} from "react-helmet";

export default function Index (){

    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState();
    const [windowChosseUrl, setWindowChosseUrl] = useState(false);
    const [primaryMovie, setPrimaryMovie] = useState();
    const [load, setLoad] = useState(false);
    const [moviesCarrossel, setMoviesCarrossel] = useState([]);
    const [skipNumber, setSkipNumber] = useState(0);
    const [category, setCategory] = useState("");
    const [genere, setGenere] = useState("");
    const [isArrive, setArrive] = useState(true);
    let history = useHistory();
  
    async function getMovies(skip, category, genere) {
        Api.post('/movies/get15', {skip : skip, category: category, genere : genere})
        .then(response => {
            setMovies(response.data);
        })
        .catch(error => {
          console.log(error);
        });
      };
    
      async function loading(){
        setArrive(false);
        setTimeout(() => setLoad(false),1000)
      }

    async function getMoviesCorrossel(category, genere) {
        Api.post('/movies/get3-carrossel',{category : category, genere : genere})
        .then((response) => {
            setMoviesCarrossel(response.data);
            setPrimaryMovie(response.data[1]);
        })
        .catch(error => {
          console.log(error);
        });
      };

    useEffect(() => {
        getMoviesCorrossel(category, genere);
        getMovies(skipNumber, category, genere);
      },[skipNumber, category, genere]);
    
      function selectMovie(url){
        if(url !== 'undefined'){
        setLoad(true);
        loading();
        setTimeout(() => history.push(url),800)
        }
      }
    
      function chooseUrl(movie){
        setWindowChosseUrl(true);
        setSelectedMovie(movie);
        localStorage.setItem("currentMovie",JSON.stringify(movie));
      }
    

    return (<div className="index-page">
            <Link to="/home"><Navbar  chooseUrlFunc={chooseUrl} contextArrive={[isArrive,setArrive]} contextLoad={[load,setLoad]} context={[category,setCategory]} contextSidebar={[genere, setGenere]}/> </Link>
            <article className="mt-2">
            <div className="sub box-shadow" >
            <div >
            <header>
            <Link className="text-yellow" to="/mulher-maravilha-1984-2020-torrent-dublado"><h1>Mulher Maravilha 1984 Dublado?</h1></Link>
            <p className="text-lighter-blue">postado por <i>overcore</i></p>
            <p>Temos um catalogo de mais de 16 mil filmes/séries <Link className="text-red" to="/home">filmes-temporadas-online.ml</Link></p>
            </header>
            <p> Assistir <bold>Mulher Maravilha 1984</bold> dublado via torrent ou player. Assistir filme dublado.</p>

            <Link className="text-red" to="/mulher-maravilha-1984-2020-torrent-dublado"><h2>Sinopse <bold>Mulher Maravilha 1984</bold></h2></Link>
            <p >Em 1984, <bold>Diana Prince</bold> entra em conflito com dois inimigos formidáveis. <Link className="text-red" to="/mulher-maravilha-1984-2020-torrent-dublado"> continuar lendo...</Link>
            </p>
            </div>

            <div>
            <Link to="/mulher-maravilha-1984-2020-torrent-dublado"><img className="ml-1 mt-1 rounded box-shadow" src="./posters/mulher-maravilha-1984.jpg" alt="capa do filme mulher maravilha 1984"></img></Link>
            </div>
            </div>
        </article>
        <article className="mt-2">
            <div className="sub box-shadow" >
            <div className="pl-1" >
            <header>
            <Link className="text-yellow" to="/the-mandalorian-1a-temporada-completa-torrent-dublada-e-legendada"><h1>The Mandalorian 1ª temporada Dublado?</h1></Link>
            <p className="text-lighter-blue">postado por <i>overcore</i></p>
            <p>Temos um catalogo de mais de 16 mil filmes/séries <Link className="text-red" to="/home">filmes-temporadas-online.ml</Link></p>
            </header>
            <p> Assistir <bold>The Mandalorian 1ª temporada </bold> dublado via torrent ou player. Assistir série dublada.</p>

            <Link className="text-red" to="/the-mandalorian-1a-temporada-completa-torrent-dublada-e-legendada"><h2>Sinopse <bold>The Mandalorian</bold></h2></Link>
            <p >A saga de um guerreiro solitário, que também é um mercenário e pistoleiro, viajando pelos territórios esquecidos e marginais do espaço<Link className="text-red" to="/the-mandalorian-1a-temporada-completa-torrent-dublada-e-legendada"> continuar lendo...</Link>
            </p>
            </div>

            <div className="pr-1">
            <Link to="/the-mandalorian-1a-temporada-completa-torrent-dublada-e-legendada"><img className="mt-1 rounded box-shadow" src="./posters/the-mandalorian-1.jpg" alt="capa da série the madalorian primeira temporada"></img></Link>
            </div>
            </div>
        </article>
        <Footer></Footer>
      </div>
        )
}