import React from 'react';
type Props = {}

export default function Footer(props : Props)  {
  return (
    <footer className="footer w-100 hide-mobile">
      <div className="row">
        <h3 className="mr-1">Assistir filme</h3>
         -
        <h3 className="ml-1 mr-1">Assistir serie</h3>
         -
        <h3 className="ml-1 mr-1">Filme dublado</h3>
        -
        <h3 className="ml-1 mr-1">Serie dublada</h3>
      </div>
      <div className="row">
        <h3 className="mr-1">Assistir filme online</h3>
         -
        <h3 className="ml-1 mr-1">Assistir serie online</h3>
         -
        <h3 className="ml-1 mr-1">Filme dublado online</h3>
        -
        <h3 className="ml-1 mr-1">Serie dublada online</h3>
      </div>
      <div className="row">
        <h3 className="mr-1">Assistir filme online gratis</h3>
         -
        <h3 className="ml-1 mr-1">Assistir serie online gratis</h3>
         -
        <h3 className="ml-1 mr-1">Filme dublado online gratis</h3>
        -
        <h3 className="ml-1 mr-1">Serie dublada online gratis</h3>
      </div>
    </footer>
  )
}
