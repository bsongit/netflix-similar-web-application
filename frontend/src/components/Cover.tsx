import React, {useState} from 'react';

interface Movie {
  name: string,
  urlImg: string,
  urlImg2: string,
  urlImg3: string,
  data: Date,
  imdb: string,
  release : string,
  synopsis: string
}
type Props = {
  movie : Movie;
  onClick : Function;
  seeImdb : boolean;
  isImgLow : boolean;
}


export default function Cover(props : Props)  {
  const [synopsisVisibility, setSVisibility] = useState<boolean>(false);
  
  function getBestImg(movie : Movie){
    if(movie.urlImg3 && !props.isImgLow){
      return movie.urlImg3;
    }
    else if(movie.urlImg2 && !props.isImgLow){
      return movie.urlImg2;
    }
    else{
      return movie.urlImg;
    }
  }
  return (
    <div className="cover" onClick={() => props.onClick()} onMouseOver={() => setSVisibility(true)} onMouseOut={() => setSVisibility(false)}>
      
      <img alt={props.movie.name} src={getBestImg(props.movie)}></img>

        {props.seeImdb? <span className="hide-mobile">IMDb: {props.movie.imdb}</span> : ""}
        <div className={`${synopsisVisibility? 'tooltip-synopsis' : 'collapsed'}`}>
          <h2>{props.movie.name}</h2>
          <p>{props.movie.synopsis}</p>
        </div>
    </div>
  )
}
