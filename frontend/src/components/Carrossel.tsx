import React from 'react';
type Props = {
  children: React.ReactNode;
}

export default function Carrossel(props : Props)  {
  return (
      <div className="box-shadow carrossel">
        {props.children}
      </div>
  )
}
