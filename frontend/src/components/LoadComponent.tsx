import React  from 'react';
import Logo from '../imgs/logo.png'
type Props = {}
export default function LoadComponent(props: Props) {
    return (<div className="load-component d-col">
                <div className="row">
                    <img className="logo" alt="logo" src={Logo}></img>  
                </div>
                <div className="row">
                    <span>Loading...</span> 
                </div>


    </div>)
}