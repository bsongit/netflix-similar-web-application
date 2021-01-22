import React, {useState, useEffect} from 'react';
import Api from '../util/Api'
import { useHistory , Link, useParams} from "react-router-dom";
import {Helmet} from "react-helmet";
import { getByTitle } from '@testing-library/react';
export default function Detail(props)  {
  let history = useHistory();
  const [movie, setMovie] = useState(JSON.parse(localStorage.getItem('currentMovie')))
  const [vVisibility, setVVisibility] = useState(false);
  const [hasClcik, setHasClick] = useState(false);
  const [iframe, setIframe] = useState();
  const [skipAnounce, setSkipAnounce] = useState(false);
  const {url} = useParams();

  async function getByUrl(url){
    await Api.post("/movies/get-by-url",{url : url})
    .then((response) => {
      setMovie(response.data);
      localStorage.setItem("currentMovie",JSON.stringify(response.data));
      if(response.data.category ==="filme"){
        webtor(response.data);
      }
      else{
        webtorEp(response.data);
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

  console.log(movie)
  useEffect(() => {
    window.scrollTo(0, 0);

    if(localStorage.getItem("currentMovie") === null || localStorage.getItem("currentMovie") === 'null' || localStorage.getItem("currentMovie") === ''){
        getByUrl(url)
    }
    if(movie !== null || movie !== 'null' || movie !== ''){
        if(movie.category === "filme"){
            webtor(movie);
        }
        else{
            webtorEp(movie); 
        }
        setIframe(document.getElementsByTagName('iframe')[0]);
        watchAd(history)
    }
    // eslint-disable-next-line
  },[])

  async function watchAd(){
 var end = 0;
  var interval = setInterval(function () {
        if(end >= 50 || history.location.pathname === "/" || history.location.pathname === "localhost:3000"){
            clearInterval(interval)
        }
    
    var scripts = [...document.getElementsByTagName("script")]
    var scpts = scripts?.map(scr => {
        if(scr.src.includes("p412601")){
            scr.remove()
        }
    })
    end++;
    // console.log(scpts);
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
                <meta name="description" content={movie?.synopsis}></meta>
                <meta property="og:url" content={"http://www.filmes-temporadas-online.ml/" + movie?.url}></meta>
                <meta property="og:description" content={movie?.synopsis}></meta>
                <meta name="keywords" content={getTitle(movie || null).toLowerCase()} data-react-helmet="true" />
                </Helmet>
                        <button className="back-button" onClick={() => history.pop()}></button>               
                <div className="row">
                <div className="select-series">
                {(vVisibility && movie?.category === "serie") ? 
                    <select  onChange={handleChange2} >
                            <option  default>Selecionar outro epsódio</option>
                                {movie?.eps.map(ep => {
                                    return (
                                        <option  value={ep[Object.keys(ep)]}>{Object.keys(ep)}</option>
                                    )
                                })}
                    </select>
                : ''} 

                </div>
                </div>
                <div className="parent-player">
                <div className="back-bt">
                       <button  onClick={() => history.push('/')}>voltar</button>  
                </div>
                    <div className={vVisibility? "visibility-show" : ""} id="player"></div>
                </div>
                <div className="row">
                    <div className={skipAnounce? "skip-anounce" : "collapsed"}>Pause o anúncio ou clique em Next para pular:</div>
                </div>
                <div className={skipAnounce? "skip-invisible" : "collapsed"} onClick={() => setSkipAnounce(false)}></div>
                <img  className={!vVisibility? "img-resume" : "collapsed"} src={movie? getBestImg(movie) : ""} alt={movie?.name}></img>
                {!vVisibility?
                <div className={"content-detail"}>
                <div className="back-bt">
                       <button  onClick={() => history.push('/')}>voltar</button>  
                </div>
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

                        <div className="bg-dark-blue text-yellow">
                            <p><bold>Atenção : O magnet player pode demorar um pouco para baixar seu filme. Isso sempre depende do horário e quantidade de 'peers || seeders'.</bold></p>
                        </div>

                        <div className={movie?.category === "filme"? 'mt-2' : 'collapsed'}>
                            <button onClick={() => onWatch() }>Assistir filme </button>
                        </div>
                        <div className="mt-2 w-50 bg-dark-blue">
                        {movie?.category === "serie"?
                        
                        <select  onChange={handleChange} >
                                <option  default>Escolha um epsódio</option>
                                {movie?.eps.map(ep => {
                                    return (
                                        <option  value={ep[Object.keys(ep)]}>{Object.keys(ep)}</option>
                                    )
                                })}
                                </select>
                        
                        : ''}

                        </div>
                        </div>
                        <div className="hide-mobile  picture-item">
                            <img src={getBestImg(movie)} alt={movie?.name}></img>
                        </div>
                    </div>


                    <div className="lastcontent">
            <div className="content d-block d-col">
            <div >
                    <h2>Trailler {movie?.title}</h2>
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





