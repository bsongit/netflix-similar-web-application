import React, {useState} from 'react';
import Sidebar from './Sidebar';
type Props = {
  
}

export default function Navbar(props : Props)  {
  const [isExpanded, setExpanded] = useState(false);
  return (<div>

    <div className="navbar">
      <div>
      <button className="w-3" onClick={() => setExpanded(!isExpanded)}>☰</button>
      <label className="hide-mobile">Filmes&Temporadas Online</label>
      </div>
      <div className="w-50 mt-05 d-flex">
        <input className="" placeholder="Pesquisar em todo site"></input>
      </div>
      <div className="w-25 mt-05 d-flex">
      <select>
        <option>Filmes</option>
        <option>Series</option>
      </select>
      </div>
      <div></div>
    </div>      
      {isExpanded? <Sidebar /> : ""}
  </div>
  )
}
