
import { useParams } from "react-router-dom";
import RocketFullpageComponent from "./RocketFullpageComponent"
import FullpageBody from "./FullpageBody"
import React, { useState, useCallback, useEffect, createContext } from "react";

import Header from "../Header"

import falcon1img from "../../images/1111.jpeg";
import falcon9img from "../../images/falcon9.png"
import falconhavyimg from "../../images/falconheavy.jpeg"
import starshipimg from "../../images/starship.jpg"
import noimg from "../../images/noimg.png"


const Infullpage = (props) => {




    var coverimg;
    if (props.id == 0) {
        coverimg = falcon1img
    } else if (props.id == 1) {
        coverimg = falcon9img
    } else if (props.id == 2) {
        coverimg = falconhavyimg
    } else if (props.id == 3) {
        coverimg = starshipimg
    } else {
        coverimg = noimg
    };



    return (

        <div className="section p-0"
            style={{
                backgroundImage: `url(${coverimg})`,
                backgroundSize: '100% 100%',
            }}>
           
            <FullpageBody id={props.id} rocketId={props.rocketId} />
        </div>
    )
}
export default Infullpage;