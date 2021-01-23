import React, {useState, useEffect} from 'react';
import Api from '../util/Api'
import { useHistory , Link, useParams} from "react-router-dom";
import {Helmet} from "react-helmet";
import Video from '../components/Video'
export default function DetailOne(props)  {
  let history = useHistory();
  const [movie, setMovie] = useState(JSON.parse(localStorage.getItem("currentMovie")));
  const [vVisibility, setVVisibility] = useState(false);
  const {url1} = useParams();
  async function getByUrlOne(url1){
    await Api.post("/movies/get-by-url-one",{url1 : url1})
    .then((response) => {
      setMovie(response.data);
      localStorage.setItem("currentMovie",JSON.stringify(response.data));
    }).catch((error) => {
      console.error(error)
    })
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if(localStorage.getItem("currentMovie") === null || localStorage.getItem("currentMovie") === 'null' || localStorage.getItem("currentMovie") === ''){
      getByUrlOne(url1)
      }
    // eslint-disable-next-line
  },[])

 function onWatch(){
        setVVisibility(true)
        openFullscreen();
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
 

/* View in fullscreen */
function openFullscreen() {
  var elem = document.querySelector("#player");
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

function getTitle(movie){
  if(movie?.title){
      return movie?.title;
  }
  else if(movie?.name){
      return movie?.name;
  }
  else{
    return 'Assistir filme online'
  }
}

  return (<div className="detail-bg">
                <Helmet>
                <title>{movie?.title + " assistir online"}</title>
                <meta name="description" content={movie?.synopsis}></meta>
                <meta property="og:title" content={'Filme ' + getTitle(movie) + " assistir online"}></meta>
                <meta property="og:url" content={"http://www.filmes-temporadas-online.ml/assistir/" + movie?.url1}></meta>
                <meta property="og:description" content={movie?.synopsis}></meta>
                <meta name="keywords" content={getTitle(movie || null).toLowerCase()} data-react-helmet="true" />
                </Helmet>

                <div className="parent-player">
                <div className="back-bt">
                       <button  onClick={() => history.push('/home')}>voltar</button>  
                </div>

                    <div className={vVisibility? "visibility-show" : ""} id="player"  >
                        {movie? <Video movie={movie}></Video> : "" }
                    </div>
                </div>
                <img  className={!vVisibility? "img-resume" : "collapsed"} src={getBestImg(movie)} alt={movie?.name}></img>
                {!vVisibility?
                 <div className={"content-detail"}>
                <div className="back-bt">
                       <button  onClick={() => history.push('/home')}>voltar</button>  
                </div>
                 <div className="border-center row d-flex">
                 <div className="content-item">
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
                         <button onClick={() => onWatch() }>Assistir filme</button>
                     </div>
                     </div>
                     <div className="hide-mobile picture-item">
                         <img src={getBestImg(movie)} alt={movie?.name}></img>
                     </div>
                 </div>

                 
                 <div className="lastcontent">
            <div className="content d-block d-col">
            <div >
                    <strong>TRAILER {movie?.title?.toUpperCase()}</strong>
                    </div>
                    <div>
                    <iframe className="trailer"
                    src={`https://www.youtube-nocookie.com/embed/${movie?.trailer}?rel=0&modestbranding=1&showinfo=0&autoplay=1`}
                    frameborder="0" allow="picture-in-picture; paused"
                    allowfullscreen></iframe>
                    </div>
                <div className="text-shadow-light-blue">
                    <p>
                    {movie?.plot}
                    </p>
                </div>
            <div className="mt-1 text-shadow-light-blue">
                
                    <div >
                        <strong>Classificação: {movie?.classifBR}</strong>
                    </div>
                    <div >
                    <strong>Orçamento: {movie?.budget}</strong>
                    </div>
                    <div >
                    <strong> Bilheteria: {movie?.ticketgain}</strong>
                    </div>
                    <div >
                        <strong>{movie?.releaseCinemaBr}</strong>
                    </div>
                    <div >
                    <strong>{movie?.releaseDigital}</strong>
                    </div>
                    <div >
                    <strong>{movie?.releaseDvD}</strong>
                    </div>

                    
            </div>
            </div>
            </div>

             </div>
                
                : ""}

        </div>
  )
}





