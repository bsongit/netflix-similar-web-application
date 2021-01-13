import React  from 'react';
import Logo from '../imgs/logo.png'
type Props = {}
export default function LoadComponent(props: Props) {
    return (<div className="load-component">
                <img alt="logo" src={Logo}></img>
                <span>Loading...</span>
    </div>)
}