
import { useParams } from "react-router-dom";
import RocketFullpageComponent from "./RocketFullpageComponent"
import FullpageBody from "./FullpageBody"
import React, { useState, useCallback, useEffect, createContext } from "react";

import falcon1img from "../../images/1111.jpeg";
import falcon9img from "../../images/falcon9.png"
import falconhavy from "../../images/falconhavy.jpeg"
import starship from "../../images/starship.jpg"
import noimg from "../../images/noimg.png"


const Infullpage = (props) => {

   
    

    var coverimg;
    if (props.id == 0) {
        coverimg = falcon1img
    } else if (props.id == 1) {
        coverimg = falcon9img
    } else if (props.id == 2) {
        coverimg = falconhavy
    } else if (props.id == 3) {
        coverimg = starship
    } else {
        coverimg = noimg
    };

    

    return (
        
        <div className="section p-0 bg-norepeat"
            style={{
                backgroundImage: `url(${coverimg})`,
                //backgroundSize: '97% 88%',
            }}>
            <FullpageBody id={props.id} rocketId={props.rocketId}/>
        </div>
    )
}
export default Infullpage;