import React from 'react';
interface Movie {
    name: string,
    urlImg: string,
    data: Date,
    url: string,
    url1: string,
    url2: string,
    imdb: string,
    release: string,
    synopsis: string
  
  }
type Props = {
    movieContext : Movie,
    selectMovie : Function,
    contexWindowModal : [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}



export default function ChooseUrl(props : Props){
    const [windowChosseUrl, setWindowChosseUrl] = props.contexWindowModal;
    return(
        <div className="modal" onClick={() => setWindowChosseUrl(!windowChosseUrl)}>
            <div className="row bg-dark-blue">
                <span>MODO DE REPRODUÇÃO DE VIDEO</span>
            </div>
            <div className="choose-url">
                <button className={props.movieContext.url1? 'bg-green' : 'bg-gray'} disabled={props.movieContext.url1?  false : true}onClick={() => props.selectMovie("assistir/" + props.movieContext.url1)} >Player #1🎞</button>
                <button className={'bg-gray'}  disabled onClick={() => props.selectMovie(props.movieContext.url2)} >Player #2🎞</button>
                <button className={props.movieContext.url? 'bg-green' : 'bg-gray'} disabled={props.movieContext.url?    false : true} onClick={() => props.selectMovie(props.movieContext.url)} >Magnet Player🧲</button>
            </div>
        </div>
    )
}