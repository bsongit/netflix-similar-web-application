import React, {useState, useEffect} from 'react';
import Api from '../util/Api'
import { useHistory , Link, useParams} from "react-router-dom";
import {Helmet} from "react-helmet"; 
import Video from '../components/Video'

export default function DetailOne(props)  {
  let history = useHistory();
  const [movie, setMovie] = useState();
  const [vVisibility, setVVisibility] = useState(false);
  const {url1} = useParams();
  async function getByUrlOne(url1){
    await Api.post("/movies/get-by-url-one",{url1 : url1})
    .then((response) => {
      setMovie(response.data);
    }).catch((error) => {
      window.location.reload()
      console.error(error)
    })
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    
    getByUrlOne(url1)
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

  return (<div className="detail-bg">
                <Helmet>
                <title>{movie?.title + " assistir online"}</title>
                <meta name="description" content={movie?.synopsis}></meta>
                <meta property="og:title" content={movie?.synopsis}></meta>
                <meta property="og:url" content={"http://filmes-temporadas-online.ml/assistir/" + movie?.url1}></meta>
                </Helmet>
                <Link className="back-button" to="/">{window.innerWidth < 400? 'VOLTAR' : "⮢"}</Link>

                <div className="parent-player">
                    <div className={vVisibility? "visibility-show" : ""} id="player"  >
                        <div className="video2">
                          {movie? <Video movie={movie}></Video> : ""}
                        </div>
                    </div>
                </div>
                <img  className={!vVisibility? "img-resume" : "collapsed"} src={getBestImg(movie)} alt={movie?.name}></img>
                {!vVisibility?
                 <div className={"content-detail"}>
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
            {/* <div className="comments">
                    <div className="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-width="500" data-numposts="5"></div>
            </div> */}

        </div>
  )
}





