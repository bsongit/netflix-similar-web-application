import React from 'react';
type Props = {
    children: React.ReactNode;
  }

export default function Pager(props : Props)  {
  return (
    <div className="pager">
      {props.children}
    </div>
  )
}
