import React from 'react';

interface Movie {
  name: string,
  urlImg: string,
  data: Date
}
type Props = {
  movie : Movie;
}

export default function Cover(props : Props)  {
  return (
    <div className="cover">
      <img alt={props.movie.name} src={props.movie.urlImg}></img>
    </div>
  )
}
