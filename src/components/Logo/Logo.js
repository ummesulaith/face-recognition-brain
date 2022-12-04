import React from "react";
// import Tilt from 'react-tilt'
import Tilt from 'react-parallax-tilt'
import './Logo.css'
import brain  from './brain.png'

const Logo = () => {
    return (<div className="ma4 mt0">
        { 
        
        <Tilt tiltReverse={true} className= "Tilt br2 shadow-2" options={{max:55}} style={{ height: 150, width: 150 }}>
            <div className="Tilt-inner pa4"><img style={{paddingTop: '5px'}} src={brain} alt="logo"/>               
            </div>
        </Tilt>
         
        }
    </div>);
}

export default Logo