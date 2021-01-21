import React, {useState, useEffect} from 'react';
import { useHistory} from "react-router-dom";
import ChooseUrl from '../components/ChooseUrl';
import Cover from '../components/Cover';
import Footer from '../components/Footer';
import LoadComponent from '../components/LoadComponent';
import Navbar from '../components/Navbar';
import Pager from '../components/Pager';
import Api from '../util/Api';
import {Helmet} from "react-helmet";


export default function Home(props)  {

  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();
  const [windowChosseUrl, setWindowChosseUrl] = useState(false);
  const [primaryMovie, setPrimaryMovie] = useState();
  const [load, setLoad] = useState(false);
  const [moviesCarrossel, setMoviesCarrossel] = useState([]);
  const [skipNumber, setSkipNumber] = useState(0);
  const [index, setIndex]   = useState(0);
  const [pageOffSetStart, setPageOffSetStart]   = useState(0);
  const [pageOffSetEnd, setPageOffSetEnd]   = useState(5);
  const [category, setCategory] = useState("");
  const [genere, setGenere] = useState("");
  const [isArrive, setArrive] = useState(true);
  const numberOfPages = new Array(900).fill(0);
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

  const  handleClassName = (number) => {
    return `border ml-1 ${index === number ? "bg-yellow" : "bg-dark-blue"}`
  }
  const  handleClick = (currentIndex) => {
    setLoad(true);
    loading();
    window.scrollTo(0, 0);
    if(currentIndex <= pageOffSetStart  && pageOffSetStart - 1 > -1){
      setPageOffSetStart(pageOffSetStart - 1);
      setPageOffSetEnd(pageOffSetEnd - 1);
    }
    if(currentIndex >= pageOffSetEnd - 1 && pageOffSetEnd + 5 < numberOfPages.length){
      setPageOffSetStart(currentIndex - 2);
      setPageOffSetEnd(currentIndex + 3);
    }
    var currentSkipNumber = 15 * currentIndex;
      setIndex(currentIndex);
      setSkipNumber(currentSkipNumber);
      getMovies(currentSkipNumber, category, genere);
  }

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

  function getBestImg(movie){
    if(movie?.urlImg3){
      return movie.urlImg3;
    }
    else if(movie?.urlImg2){
      return movie.urlImg2;
    }
    else{
      return movie?.urlImg;
    }
  }


  return (
      <div className="container">

        <Helmet>
                <title>{'Filmes Temporadas Online'}</title>
                <meta name="description" content={"Assistir filmes e series, mais de 16 mil disponíveis via torrent ou player. Downloads e streamings"}></meta>
                <meta property="og:title" content={"Filmes Temporadas Online"}></meta>
                <meta property="og:url" content={"http://filmes-temporadas-online.ml/"}></meta>
        </Helmet>
        {windowChosseUrl && selectedMovie? <ChooseUrl contexWindowModal={[windowChosseUrl,setWindowChosseUrl]} movieContext={selectedMovie} selectMovie={selectMovie}/> : "" }
        
          {load? <LoadComponent></LoadComponent> : ""}
          <Navbar  chooseUrlFunc={chooseUrl} contextArrive={[isArrive,setArrive]} contextLoad={[load,setLoad]} context={[category,setCategory]} contextSidebar={[genere, setGenere]}/>
          {window.innerWidth > 400? 

              <div className="imgs-home">
                              <img  src={getBestImg(moviesCarrossel[0])} alt={"Capa do filme " + moviesCarrossel[0]?.name}  onClick={() => chooseUrl(moviesCarrossel[0])}/>
                              <img  src={getBestImg(moviesCarrossel[1])} alt={"Capa do filme " + moviesCarrossel[1]?.name}  onClick={() => chooseUrl(moviesCarrossel[1])}/>
                              <img  src={getBestImg(moviesCarrossel[2])} alt={"Capa do filme " + moviesCarrossel[2]?.name}  onClick={() => chooseUrl(moviesCarrossel[2])}/>
              </div>
          : <div className="primary-movie" >
              <img  src={getBestImg(moviesCarrossel[1])} alt={primaryMovie?.name}  onClick={() => chooseUrl(moviesCarrossel[1])}/>
            </div>
          }
            {isArrive? 
                  <Pager>
                      <h1 className="text-shadow-light-blue ml-1">Filmes lançamentos em 2020</h1>
                      <div className="row-pager">
                       <span className="hide-pc">........................................................</span>
                      {movies?.slice(0,5).map((movie) => {
                        return <Cover isImgLow={true} seeImdb={true} movie={movie} onClick={() => chooseUrl(movie)} />;
                      })}
                      </div>
                      <h2 className="text-shadow-light-blue ml-1">Series online em 2020</h2>
                      <div className="row-pager">
                      <span className="hide-pc">........................................................</span>
                      {movies?.slice(5,10).map((movie) => {
                        return <Cover isImgLow={true} seeImdb={true} movie={movie} onClick={() => chooseUrl(movie)}/>;
                      })}
                      </div>
                      
                      <h2 className={"text-shadow-light-blue ml-1"}>Os 5 filmes mais assistidos em 2020</h2>
                    
                      <div className="row-pager">
                      <span className="hide-pc">........................................................</span>
                      
                      {
                      movies?.slice(10,15).map((movie) => {
                        return <Cover isImgLow={true} seeImdb={true} movie={movie} onClick={() => chooseUrl(movie)}/>;
                      })}
                      </div>

                      <h2 className={"text-shadow-light-blue ml-1"}>Outros titulos relacionados</h2>
                      <div className="row-pager">
                      <span className="hide-pc">........................................................</span>
                      
                      {
                      movies?.slice(15,20).map((movie) => {
                        return <Cover isImgLow={true} seeImdb={true} movie={movie} onClick={() => chooseUrl(movie)}/>;
                      })
                      }
                      </div>
                      <div className="hide-mobile row mt-1 pager-buttons">
                          <div className="pager-bt w-25 d-flex">
                          {numberOfPages.slice(pageOffSetStart,pageOffSetEnd).map((value,index) => {
                            return <button className={handleClassName(index + pageOffSetStart)} onClick={() => handleClick(index + pageOffSetStart)}>{index + pageOffSetStart + 1}</button>
                          })}
                           <button className={handleClassName(-1)} disabled>[...]</button>
                          <button className={handleClassName(-1)} onClick={() => handleClick(pageOffSetEnd + 4)}>{5 + pageOffSetEnd}</button>
                          </div>
                      </div>
                      <Footer/>
              </Pager>
          :

          <Pager>
                <h3 className="text-shadow-light-blue ml-1">Encontrados : {category && genere? category+ 's de '+ genere.toLocaleLowerCase() : genere} </h3>
                <div className="row-pager">
                <span className="hide-pc">........................................................</span>
                {movies?.slice(20,25).map((movie) => {
                  return <Cover isImgLow={true} seeImdb={true} movie={movie} onClick={() => chooseUrl(movie)} />;
                })}
                </div>
                <div className="row-pager">
                <span className="hide-pc">........................................................</span>
                {movies?.slice(25,30).map((movie) => {
                  return <Cover isImgLow={true} seeImdb={true} movie={movie} onClick={() => chooseUrl(movie)}/>;
                })}
                </div>
                <div className="row-pager">
                <span className="hide-pc">........................................................</span>
                { 
                movies?.slice(30,35).map((movie) => {
                  return <Cover isImgLow={true} seeImdb={true} movie={movie} onClick={() => chooseUrl(movie)}/>;
                })
                }
                </div>
                <div className="hide-mobile row mt-1 pager-buttons">
                    <div className="pager-bt w-25 d-flex">
                    {numberOfPages.slice(pageOffSetStart,pageOffSetEnd).map((value,index) => {
                      return <button className={handleClassName(index + pageOffSetStart)} onClick={() => handleClick(index + pageOffSetStart)}>{index + pageOffSetStart + 1}</button>
                    })}
                    <button className={handleClassName(-1)} disabled>[...]</button>
                    <button className={handleClassName(-1)} onClick={() => handleClick(pageOffSetEnd + 4)}>{5 + pageOffSetEnd}</button>
                    </div>
                </div>
                <Footer/>
              </Pager>
          
              }

      </div>
  )
}





