import React, {useState} from 'react';

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
        {props.seeImdb? <span className="hide-mobile">IMDb: {props.movie.imdb}</span> : ""}
        <div className={`${synopsisVisibility? 'tooltip-synopsis' : 'collapsed'}`}>
          <h2>{props.movie.name}</h2>
          <p>{props.movie.synopsis}</p>
        </div>
    </div>
  )
}
