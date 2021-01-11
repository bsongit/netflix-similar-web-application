import React, {useState} from 'react';
import { Link } from 'react-router-dom';

interface Movie {
  name: string,
  urlImg: string,
  data: Date,
  imdb: string,
  release : string,
  synopsis: string
}
type Props = {
  movie : Movie;
  onClick : Function;
  seeImdb : boolean;
}

export default function Cover(props : Props)  {
  const [synopsisVisibility, setSVisibility] = useState<boolean>(false);
  return (
    <div className="cover" onClick={() => props.onClick()} onMouseOver={() => setSVisibility(true)} onMouseOut={() => setSVisibility(false)}>
      <img alt={props.movie.name} src={props.movie.urlImg}></img>
        {props.seeImdb? <span>IMDb: {props.movie.imdb}</span> : ""}
        <div className={`${synopsisVisibility? 'tooltip-synopsis' : 'collapsed'}`}>{props.movie.synopsis}</div> 
    </div>
  )
}
