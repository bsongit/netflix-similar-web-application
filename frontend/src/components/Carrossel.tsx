import React from 'react';
type Props = {
  children: React.ReactNode;
}

export default function Carrossel(props : Props)  {
  return (
      <div className="carrossel">
        {props.children}
      </div>
  )
}
