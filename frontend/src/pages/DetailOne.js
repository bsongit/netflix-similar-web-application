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

  function setGetBack(){
    // closeFullscreen()
    history.push("/")
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

/* Close fullscreen */
function closeFullscreen() {
  if (window.document.exitFullscreen) {
    window.document.exitFullscreen();
  } else if (window.document.webkitExitFullscreen) { /* Safari */
    window.document.webkitExitFullscreen();
  } else if (window.document.msExitFullscreen) { /* IE11 */
    window.document.msExitFullscreen();
  }
}


  return (<div className="detail-bg">
                <button className="back-button" onClick={() => setGetBack()}>{window.innerWidth < 400? 'VOLTAR' : "⮢"}</button>

                <div className="parent-player">
                    <div className={vVisibility? "visibility-show" : ""} id="player"  >
                        <div className="video2">
                          {movie?.playerVideo2.includes("sub=")?
                              <iframe src={movie?.playerVideo2} title={movie?.title} /> :
                              <video autoplay controls src={[movie?.playerVideo2.slice(0, movie?.playerVideo2.indexOf('?')), 'option_1.php', movie?.playerVideo2.slice(movie?.playerVideo2.indexOf('?'))].join('')} title={movie?.title}  />
                          }
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
                         <button onClick={() => onWatch() }>ASSISTIR</button>
                     </div>
                     </div>
                     <div className="hide-mobile picture-item">
                         <img src={getBestImg(movie)} alt={movie?.name}></img>
                     </div>
                 </div>


             </div>
                
                : ""}
        </div>
  )
}





