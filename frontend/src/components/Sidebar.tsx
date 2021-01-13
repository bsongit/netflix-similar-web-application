import React from 'react';
import {genereArray} from '../util/ArrayDB'
type Props = {
  context : [string, React.Dispatch<React.SetStateAction<string>>];
  contextExpanded: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  contextLoad : [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

export default function Sidebar(props : Props)  {
  const [genere, setGenere] = props.context;
  const [isExpanded, setExpanded] = props.contextExpanded;
  const [load, setLoad] = props.contextLoad;
  async function loading(){
    setTimeout(() => setLoad(false),1000)
  }
  function selectGenere(g : string, exp: boolean){
    console.log(genere+isExpanded+load);
    setGenere(g);
    setExpanded(exp);
    setLoad(true);
    loading();
    window.scrollTo(0, 0);
  }
  return (
    <div className="sidebar">
      {genereArray.map(genere => {
        return <button onClick={() => selectGenere(genere,false)}>{genere}</button>
      })}
    </div>
  )
}
