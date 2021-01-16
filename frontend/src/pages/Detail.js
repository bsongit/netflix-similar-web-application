import React, {useState, useEffect} from 'react';
import Api from '../util/Api'
import { useHistory } from "react-router-dom";
export default function Detail(props)  {
  let history = useHistory();
  const [movie, setMovie] = useState();
  const [vVisibility, setVVisibility] = useState(false);
  const [hasClcik, setHasClick] = useState(false);
  const [iframe, setIframe] = useState();
  const [skipAnounce, setSkipAnounce] = useState(false);

  async function getByUrl(url){
    await Api.post("/movies/get-by-url",{url : url})
    .then((response) => {
      setMovie(response.data);
      if(response.data.category ==="filme"){
        webtor(response.data);
      }
    }).catch((error) => {
      console.error(error)
    })
  }

  function webtor(video){
    window.webtor = window.webtor || [];

    window.webtor.push({
        id: 'player',
        baseUrl: 'https://webtor.io',
        magnet:  video.magnet.split(",")[0],
        width: '100%',
        height: '100%',
        features: {
            continue:    false
        },
        on: function(e) {
            if (e.name === window.webtor.TORRENT_FETCHED) {
                for (const f of e.data.files) {
                    if(f.name === "1XBET.COM_promo_SHREK_dinheiro_livre.mp4" || f.name ===  "COMANDOTORRENTS.COM.mp4"){
                        setHasClick(true);
                    }
                    if (!f.name.endsWith('.mkv')) continue;
                }
            }
            if (e.name === window.webtor.TORRENT_ERROR) {
                console.log('Torrent error!')
            }
            if (e.name === window.webtor.INITED) {
            }
            if (e.name === window.webtor.OPEN) {
            }
            if (e.name === window.webtor.OPEN_SUBTITLES) {
            }
        },
    });
  }
  function webtorEp(ep){
    window.webtor = window.webtor || [];

    window.webtor.push({
        id: 'player',
        baseUrl: 'https://webtor.io',
        magnet:  ep,
        width: '100%',
        height: '100%',
        features: {
            continue:    false
        },
        on: function(e) {
            if (e.name === window.webtor.TORRENT_FETCHED) {
                for (const f of e.data.files) {
                    if(f.name === "1XBET.COM_promo_SHREK_dinheiro_livre.mp4" || f.name ===  "COMANDOTORRENTS.COM.mp4"){
                        setHasClick(true);
                    }
                    if (!f.name.endsWith('.mp4')) continue;
                }
            }
            if (e.name === window.webtor.TORRENT_ERROR) {
                console.log('Torrent error!')
            }
            if (e.name === window.webtor.INITED) {
            }
            if (e.name === window.webtor.OPEN) {
            }
            if (e.name === window.webtor.OPEN_SUBTITLES) {
            }
        },
    });
  }

  var handleChange = function(event){
    webtorEp(event.target.value);
    setVVisibility(true);
  }

  var handleChange2 = function(event){
    webtorEp(event.target.value);
    iframe.remove();
  }


  useEffect(() => {
    window.scrollTo(0, 0);
    getByUrl(history.location.pathname.replace("/",""))
    watchAd(history)
    // eslint-disable-next-line
  },[])

  async function watchAd(){
 var end = 0;
  var interval = setInterval(function () {
        if(end >= 10 || history.location.pathname === "/" || history.location.pathname === "localhost:3000"){
            clearInterval(interval)
        }
    var scripts = [...document.getElementsByTagName("script")]
    scripts?.map(scr => {
        if(scr.src.includes("p412601")){
            scr.remove()
        }
    })
    end++;

    }, 1000)
  }

 function onWatch(){
        setVVisibility(true)
        if(hasClcik){
            setSkipAnounce(true);
        }
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
                <div className="row">
                <div className="select-series">
                <select className={(vVisibility && movie?.category === "serie") ? '' : 'collapsed'} onChange={handleChange2} >
                            <option  default>Selecionar outro epsódio</option>
                        {movie?.eps.map(ep => {
                            return (
                                <option  value={ep[Object.keys(ep)]}>{Object.keys(ep)}</option>
                            )
                        })}
                        </select>
                </div>
                </div>
                <div className="parent-player">
                    <div className={vVisibility? "visibility-show" : ""} id="player"></div>
                </div>
                <div className="row">
                    <div className={skipAnounce? "skip-anounce" : "collapsed"}>Pause o anúncio ou clique em Next para pular:</div>
                </div>
                <div className={skipAnounce? "skip-invisible" : "collapsed"} onClick={() => setSkipAnounce(false)}></div>
                <img  className={!vVisibility? "img-resume" : "collapsed"} src={getBestImg(movie)} alt={movie?.name}></img>
                {!vVisibility?
                <div className={"content-detail"}>
                    <div className="border-center row d-flex">
                    <div className="content-item">
                        <div className="title">
                            <h1 >{movie?.name.toUpperCase()}</h1>
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
                        <div className="mt-2 w-50 bg-dark-blue">
                        <select className={movie?.category === "serie"? '' : 'collapsed'} onChange={handleChange} >
                            <option  default>Escolha um epsódio</option>
                        {movie?.eps.map(ep => {
                            return (
                                <option  value={ep[Object.keys(ep)]}>{Object.keys(ep)}</option>
                            )
                        })}
                        </select>
                        </div>
                        </div>
                        <div className="hide-mobile  picture-item">
                            <img src={getBestImg(movie)} alt={movie?.name}></img>
                        </div>
                    </div>


                </div>
                
                : ""}
        </div>
  )
}





