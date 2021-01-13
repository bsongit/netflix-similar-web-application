import React from 'react';
type Props = {
  children: React.ReactNode;
}

export default function Carrossel(props : Props)  {
  return (
    <div className="box-shadow  carrossel-container">
      <div className="row"> 
      <h1 className="text-shadow-light-blue">Filmes Online 2021</h1>
      </div>
      <div className="carrossel">
        {props.children}
      </div>
    </div>
  )
}
