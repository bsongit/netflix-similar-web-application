import React from 'react';
interface Movie {
     playerVideo2  : string;
     title : string;
     url1 : string;
}
type Props = {
     movie : Movie;
}
export default function Video(props :Props){
    return <div className="video-component">
                <video id="video" controls  width="100%"  height="100%" title={props.movie.title}>
                     <source src={[props.movie?.playerVideo2.slice(0, props.movie?.playerVideo2.indexOf('?')), 'option_1.php', props.movie?.playerVideo2.slice(props.movie?.playerVideo2.indexOf('?'))].join('')} />
                     <track  kind="subtitles" srcLang="en" label="English"  src={`./vtts/${props.movie.url1}.vtt`} default></track>
                     <track  kind="captions"  srcLang="pt" label="Português" src={`./vtts/${props.movie.url1}.vtt`} default></track>
                </video>
           </div>
}