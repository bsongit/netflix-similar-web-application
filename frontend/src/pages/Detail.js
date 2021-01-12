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
        // baseUrl: 'http://localhost:4000',
        magnet:  video.magnet.split(",")[0],
        // magnet:  "",
        width: '100%',
        height: '100%',
        features: {
            continue:    false
        },
        on: function(e) {
            if (e.name == window.webtor.TORRENT_FETCHED) {
                for (const f of e.data.files) {
                    console.log(f.name)
                    if(f.name === "1XBET.COM_promo_SHREK_dinheiro_livre.mp4" || f.name ===  "COMANDOTORRENTS.COM.mp4"){
                        setHasClick(true);
                    }
                    if (!f.name.endsWith('.mkv')) continue;
                }
            }
            if (e.name == window.webtor.TORRENT_ERROR) {
                console.log('Torrent error!')
            }
            if (e.name == window.webtor.INITED) {
                var p = e.player;
            }
            if (e.name == window.webtor.OPEN) {
                // console.log(e.data);
            }
            if (e.name == window.webtor.OPEN_SUBTITLES) {
                console.log(e.data);
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
            if (e.name == window.webtor.TORRENT_FETCHED) {
                console.log('Torrent fetched!', e.data.files);
                for (const f of e.data.files) {
                    if(f.name === "1XBET.COM_promo_SHREK_dinheiro_livre.mp4" || f.name ===  "COMANDOTORRENTS.COM.mp4"){
                        setHasClick(true);
                    }
                    if (!f.name.endsWith('.mp4')) continue;
                }
            }
            if (e.name == window.webtor.TORRENT_ERROR) {
                console.log('Torrent error!')
            }
            if (e.name == window.webtor.INITED) {
                var p = e.player;
            }
            if (e.name == window.webtor.OPEN) {
                console.log(e.data);
            }
            if (e.name == window.webtor.OPEN_SUBTITLES) {
                console.log(e.data);
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
    getByUrl(history.location.pathname.replace("/",""))
    watchAd(history)
  },[])

  async function watchAd(){
  var interval = setInterval(function () {
        if(history.location.pathname === "/" || history.location.pathname === "localhost:3000"){
            clearInterval(interval)
        }
    var iframe = [...document.getElementsByTagName("iframe")]
    var scripts = [...document.getElementsByTagName("script")]

    scripts?.map(scr => {
        if(scr.src.includes("p412601")){
            scr.remove()
        }
    })
    iframe?.map((ifr,index) => {
        if(index > 0)
            ifr.remove();
        if(index == 0){
            setIframe(ifr)
        }
    })
    }, 1000)
  }

  
 function onWatch(){
        setVVisibility(true)
        if(hasClcik)
            setSkipAnounce(true);
  }


  return (<div className="detail-bg">
                <button className="back-button" onClick={() => history.push("/")}>⮢</button>
                <div className="align-end mt-2">
                <select className={(vVisibility && movie?.category === "serie") ? 'select-series' : 'collapsed'} onChange={handleChange2} >
                            <option  default>Selecionar um epsódio</option>
                        {movie?.eps.map(ep => {
                            return (
                                <option  value={ep[Object.keys(ep)]}>{Object.keys(ep)}</option>
                            )
                        })}
                        </select>
                </div>
                <div className={vVisibility? "show" : "collapsed"} id="player"></div>
                <div className="row">
                    <div className={skipAnounce? "skip-anounce" : "collapsed"}>Pause o anúncio ou clique em Next para pular:</div>
                </div>
                <div className={skipAnounce? "skip-invisible" : "collapsed"} onClick={() => setSkipAnounce(false)}></div>
                <img  className={!vVisibility? "img-resume" : "collapsed"} src={movie?.urlImg} alt={movie?.name}></img>
                {!vVisibility?
                <div className={"content-detail"}>
                    <div className="border-center">
                        <div className="title">
                            <span >{movie?.name.toUpperCase()}</span>
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
                            <span>Sinopse: {movie?.synopsis}</span>
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

                </div>
                
                : ""}


        </div>
  )
}





