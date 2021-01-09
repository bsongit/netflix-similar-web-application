import React from 'react';
import { Link } from 'react-router-dom';

interface Movie {
  name: string,
  urlImg: string,
  data: Date,
  imdb: string,
  release : string
}
type Props = {
  movie : Movie;
  onClick : Function;
  seeImdb : boolean;
}

export default function Cover(props : Props)  {
  return (
    <div className="cover" onClick={() => props.onClick()}>
      <img alt={props.movie.name} src={props.movie.urlImg}></img>
        {props.seeImdb? <span>Nota: {props.movie.imdb}</span> : ""} 
    </div>
  )
}
