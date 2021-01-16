import React, {useState, useEffect} from 'react';
import Api from '../util/Api'
import { useHistory } from "react-router-dom";
export default function DetailOne(props)  {
  let history = useHistory();
  const [movie, setMovie] = useState();
  const [vVisibility, setVVisibility] = useState(false);

  async function getByUrlOne(url1){
    await Api.post("/movies/get-by-url-one",{url1 : url1})
    .then((response) => {
      setMovie(response.data);
    }).catch((error) => {
      console.error(error)
    })
  }


  useEffect(() => {
    window.scrollTo(0, 0);
    getByUrlOne(history.location.pathname.replace("/",""))
    console.log(history.location.pathname.replace("/",""))
    // eslint-disable-next-line
  },[])

 function onWatch(){
        setVVisibility(true)
 
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


  return (<div className="detail-bg">
                <button className="back-button" onClick={() => history.push("/")}>{window.innerWidth < 400? 'VOLTAR' : "⮢"}</button>

                <div className="parent-player">
                    <div className={vVisibility? "visibility-show" : ""} id="player"  >
                        <div className="video2" dangerouslySetInnerHTML={{ __html: movie?.playerVideo2 }}></div>
                    </div>
                </div>
                <img  className={!vVisibility? "img-resume" : "collapsed"} src={getBestImg(movie)} alt={movie?.name}></img>
                {!vVisibility?
                <div className={"content-detail"}>
                    <div className="border-center">
                        <div className="title">
                            <h1 >{movie?.title.toUpperCase()}</h1>
                        </div>
                        <div className="studio">
                            <span>({movie?.studio})</span>
                        </div>
                        <div className="mt-1">
                            <span>Estreado: {movie?.release}</span>
                        </div>
                        <div>
                            <span>Duração: {movie?.duration}</span>
                        </div>
                        <div>
                            <span>Autor: {movie?.author}</span>
                        </div>
                        <div>
                            <span>Gênero: {movie?.genere}</span>
                        </div>
                        <div className="text-yellow">
                            <span>Nota: {movie?.imdb}</span>
                        </div>
                        <div className="text-shadow-light-blue">
                            <p>Sinopse: {movie?.synopsis}</p>
                        </div>
                        <div className={movie?.category === "filme"? 'mt-2' : 'collapsed'}>
                            <button onClick={() => onWatch() }>ASSISTIR</button>
                        </div>
                    </div>

                </div>
                
                : ""}
        </div>
  )
}





