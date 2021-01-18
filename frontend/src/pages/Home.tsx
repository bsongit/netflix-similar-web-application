import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import Carrossel from '../components/Carrossel';
import ChooseUrl from '../components/ChooseUrl';
import Cover from '../components/Cover';
import Footer from '../components/Footer';
import LoadComponent from '../components/LoadComponent';
import Navbar from '../components/Navbar';
import Pager from '../components/Pager';
import Api from '../util/Api';

type Props = {}

interface Movie {
  name: string,
  urlImg: string,
  urlImg2: string,
  urlImg3: string,
  data: Date,
  url: string,
  url1: string,
  url2: string,
  imdb: string,
  release: string,
  synopsis: string

}

export default function Home(props : Props)  {

  const [movies, setMovies] = useState<Array<Movie>>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie>();
  const [windowChosseUrl, setWindowChosseUrl] = useState<boolean>(false);
  const [primaryMovie, setPrimaryMovie] = useState<Movie>();
  const [load, setLoad] = useState<boolean>(false);
  const [moviesCarrossel, setMoviesCarrossel] = useState<Array<Movie>>([]);
  const [skipNumber, setSkipNumber] = useState<number>(0);
  const [index, setIndex]   = useState<number>(0);
  const [pageOffSetStart, setPageOffSetStart]   = useState<number>(0);
  const [pageOffSetEnd, setPageOffSetEnd]   = useState<number>(5);
  const [category, setCategory] = useState<string>("");
  const [genere, setGenere] = useState<string>("");
  const [isArrive, setArrive] = useState<boolean>(true);
  const numberOfPages = new Array(900).fill(0);
  let history = useHistory();

  async function getMovies(skip : number, category : string, genere : string) {
    Api.post('/movies/get15', {skip : skip, category: category, genere : genere})
    .then((response: { data: Array<Movie>}) => {
        setMovies(response.data);
    })
    .catch((error: any) => {
      console.log(error);
    });
  };

  async function loading(){
    setArrive(false);
    setTimeout(() => setLoad(false),1000)
  }

  async function getMoviesCorrossel(category : string, genere : string) {
    Api.post('/movies/get3-carrossel',{category : category, genere : genere})
    .then((response: { data: Array<Movie>}) => {
        setMoviesCarrossel(response.data);
        setPrimaryMovie(response.data[1]);
    })
    .catch((error: any) => {
      console.log(error);
    });
  };

  const  handleClassName = (number : number) : string => {
    return `border ml-1 ${index === number ? "bg-yellow" : "bg-dark-blue"}`
  }
  const  handleClick = (currentIndex: number) : void => {
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

  function selectMovie(url : string){
    if(url !== 'undefined'){
    setLoad(true);
    loading();
    setTimeout(() => history.push(url),800)
    }
  }

  function chooseUrl(movie : Movie){
    setWindowChosseUrl(true);
    setSelectedMovie(movie);
  }

  function getBestImg(movie : Movie){
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
        {windowChosseUrl && selectedMovie? <ChooseUrl contexWindowModal={[windowChosseUrl,setWindowChosseUrl]} movieContext={selectedMovie} selectMovie={selectMovie}/> : "" }
        
          {load? <LoadComponent></LoadComponent> : ""}
          <Navbar  chooseUrlFunc={chooseUrl} contextArrive={[isArrive,setArrive]} contextLoad={[load,setLoad]} context={[category,setCategory]} contextSidebar={[genere, setGenere]}/>
          {window.innerWidth > 400? 
                <Carrossel>
                {moviesCarrossel?.map((movie : Movie) => {
                  return <Cover isImgLow={false}  seeImdb={false} movie={movie} onClick={() => chooseUrl(movie)}/>;
                })}
              </Carrossel>
          : <div className="primary-movie" >
              <img  src={getBestImg(moviesCarrossel[1])} alt={primaryMovie?.name}  onClick={() => chooseUrl(moviesCarrossel[1])}/>
            </div>
          }
            {isArrive? 
                  <Pager>
                      <h1 className="text-shadow-light-blue ml-1">Filmes lançamentos em 2020</h1>
                      <div className="row-pager">
                       <span className="hide-pc">........................................................</span>
                      {movies?.slice(0,5).map((movie : Movie) => {
                        return <Cover isImgLow={true} seeImdb={true} movie={movie} onClick={() => chooseUrl(movie)} />;
                      })}
                      </div>
                      <h2 className="text-shadow-light-blue ml-1">Series online em 2020</h2>
                      <div className="row-pager">
                      <span className="hide-pc">........................................................</span>
                      {movies?.slice(5,10).map((movie : Movie) => {
                        return <Cover isImgLow={true} seeImdb={true} movie={movie} onClick={() => chooseUrl(movie)}/>;
                      })}
                      </div>
                      
                      <h2 className={"text-shadow-light-blue ml-1"}>Os 5 filmes mais assistidos em 2020</h2>
                    
                      <div className="row-pager">
                      <span className="hide-pc">........................................................</span>
                      
                      {
                      movies?.slice(10,15).map((movie : Movie) => {
                        return <Cover isImgLow={true} seeImdb={true} movie={movie} onClick={() => chooseUrl(movie)}/>;
                      })}
                      </div>

                      <h2 className={"text-shadow-light-blue ml-1"}>Outros titulos relacionados</h2>
                      <div className="row-pager">
                      <span className="hide-pc">........................................................</span>
                      
                      {
                      movies?.slice(15,20).map((movie : Movie) => {
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
                {movies?.slice(20,25).map((movie : Movie) => {
                  return <Cover isImgLow={true} seeImdb={true} movie={movie} onClick={() => chooseUrl(movie)} />;
                })}
                </div>
                <div className="row-pager">
                <span className="hide-pc">........................................................</span>
                {movies?.slice(25,30).map((movie : Movie) => {
                  return <Cover isImgLow={true} seeImdb={true} movie={movie} onClick={() => chooseUrl(movie)}/>;
                })}
                </div>
                <div className="row-pager">
                <span className="hide-pc">........................................................</span>
                { 
                movies?.slice(30,35).map((movie : Movie) => {
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





