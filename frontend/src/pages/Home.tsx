import React from 'react';
import Carrossel from '../components/Carrossel';
import Cover from '../components/Cover';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Pager from '../components/Pager';
import Sidebar from '../components/Sidebar';
type Props = {}

export default function Home(props : Props)  {
  return (
      <div className="container">
          <Navbar/>
          <Carrossel>
              <Cover/>
              <Cover/>
              <Cover/>
              <Cover/>
              <Cover/>
              <Cover/>
              <Cover/>
              <Cover/>
              <Cover/>
              <Cover/>
          </Carrossel>
          <Pager>
            <div className="row-pager">
              <Cover/>
              <Cover/>
              <Cover/>
              <Cover/>
              <Cover/>
            </div>
            <div className="row-pager">
              <Cover/>
              <Cover/>
              <Cover/>
              <Cover/>
              <Cover/>
            </div>
            <div className="row-pager">
              <Cover/>
              <Cover/>
              <Cover/>
              <Cover/>
              <Cover/>
            </div>
            <div className="row mt-1">
                <div className="pager-bt w-25 d-flex">
                    <button className="ml-1 bg-red">1</button>
                    <button className="ml-1 bg-red">2</button>
                    <button className="ml-1 bg-red">3</button>
                    <button className="ml-1 bg-red">4</button>
                </div>
            </div>
            <Footer/>
          </Pager>

          
      </div>
  )
}
