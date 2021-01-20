import React from 'react';
type Props = {}

export default function Footer(props : Props)  {
  return (
    <footer className="footer w-100 hide-mobile">
      <div className="row">
        <h3 className="mr-1">Assistir filme</h3>
         -
        <h3 className="ml-1 mr-1">Filme dublado</h3>
        -
      </div>
      <div className="row">
        <h3 className="mr-1">Assistir filme online</h3>
         -
        <h3 className="ml-1 mr-1">Filme dublado online</h3>
      </div>
    </footer>
  )
}
