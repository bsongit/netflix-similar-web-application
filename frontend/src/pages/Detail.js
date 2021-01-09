import React, {useState, useEffect} from 'react';
import Api from '../util/Api'
import { useHistory } from "react-router-dom";

export default function Detail(props)  {
  let history = useHistory();
  const [movie, setMovie] = useState();
  const [vVisibility, setVVisibility] = useState(false);


  async function getByUrl(url){
    await Api.post("/movies/get-by-url",{url : url})
    .then((response) => {
      setMovie(response.data);
      webtor(response.data);
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
            if (e.name == window.webtor.TORRENT_FETCHED) {
                console.log('Torrent fetched!', e.data.files);
                for (const f of e.data.files) {
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

  useEffect(() => {
    getByUrl(history.location.pathname.replace("/",""))
 
  },[])

  return (<div className="detail-bg">
                <div className={vVisibility? "show" : "collapsed"} id="player"></div>
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
                        <div className="mt-2">
                            <button onClick={() => setVVisibility(true)}>ASSISTIR</button>
                        </div>
                    </div>

                </div>
                
                : ""}


        </div>
  )
}





