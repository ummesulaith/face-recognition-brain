import React from "react";
import "./FaceRecognition.css";


const FaceRecognition = ({imageUrl,box}) => {
   
    return (<div className='mw5 mw7-ns center pa3 ph5-ns'>
      <div className="absolute mt2"> <img id='inputImage' src={imageUrl} width='500px' height='auto'/>
         <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}> </div>
         </div>
    </div>);
}

export default FaceRecognition