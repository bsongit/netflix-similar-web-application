import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import Carrossel from '../components/Carrossel';
import Cover from '../components/Cover';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Pager from '../components/Pager';
import Api from '../util/Api';

type Props = {}

interface Movie {
  name: string,
  urlImg: string,
  data: Date,
  url: string,
  imdb: string,
  release: string,
  synopsis: string

}

export default function Home(props : Props)  {

  const [movies, setMovies] = useState<Array<Movie>>([]);
  const [skipNumber, setSkipNumber] = useState<number>(0);
  const [index, setIndex]   = useState<number>(0);
  const [pageOffSetStart, setPageOffSetStart]   = useState<number>(0);
  const [pageOffSetEnd, setPageOffSetEnd]   = useState<number>(5);
  const [category, setCategory] = useState<string>("");
  const [genere, setGenere] = useState<string>("");
  const numberOfPages = new Array(900).fill(0);
  let history = useHistory();

  async function getMovies(skip : number, category : string, genere : string) {
    Api.post('/movies/get15', {skip : skip, category: category, genere : genere})
    .then((response: { data: Array<Movie>}) => {
        setMovies(response.data);
        console.log(response.data)
    })
    .catch((error: any) => {
      console.log(error);
    });
  };

  const  handleClassName = (number : number) : string => {
    return `ml-1 ${index === number ? "bg-yellow" : "bg-dark-blue"}`
  }
  const  handleClick = (currentIndex: number) : void => {
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
    getMovies(skipNumber, category, genere);
  },[skipNumber, category, genere]);


  return (
      <div className="container">
          <Navbar context={[category,setCategory]} contextSidebar={[genere, setGenere]}/>
          <Carrossel>
            {movies?.map((movie : Movie) => {
              return <Cover seeImdb={false} movie={movie} onClick={() => history.push(movie.url)}/>;
            })}
          </Carrossel>
          <Pager>
            <div className="row-pager">
            {movies?.slice(0,5).map((movie : Movie) => {
              return <Cover seeImdb={true} movie={movie} onClick={() => history.push(movie.url)} />;
            })}
            </div>
            <div className="row-pager">
            {movies?.slice(5,10).map((movie : Movie) => {
              return <Cover seeImdb={true} movie={movie} onClick={() => history.push(movie.url)}/>;
            })}
            </div>
            <div className="row-pager">
            {movies?.slice(10,15).map((movie : Movie) => {
              return <Cover seeImdb={true} movie={movie} onClick={() => history.push(movie.url)}/>;
            })}
            </div>
            <div className="row mt-1">
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
 
      </div>
  )
}





