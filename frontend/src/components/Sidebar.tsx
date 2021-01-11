import React from 'react';
import {genereArray} from '../util/ArrayDB'
type Props = {
  context : [string, React.Dispatch<React.SetStateAction<string>>];
  contextExpanded: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

export default function Sidebar(props : Props)  {
  const [genere, setGenere] = props.context;
  const [isExpanded, setExpanded] = props.contextExpanded;
  function selectGenere(g : string, exp: boolean){
    setGenere(g);
    setExpanded(exp);
  }
  return (
    <div className="sidebar">
      {genereArray.map(genere => {
        return <button onClick={() => selectGenere(genere,false)}>{genere}</button>
      })}
    </div>
  )
}
