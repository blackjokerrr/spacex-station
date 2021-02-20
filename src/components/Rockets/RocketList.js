import React, { useState, useCallback, useEffect, createContext } from "react";
import { useParams } from "react-router-dom";
import RocketFullpageComponent from "./RocketFullpageComponent"

import falcon1img from "../../images/1111.jpeg";
import falcon9img from "../../images/falcon9.png"
import falconhavy from "../../images/falconhavy.jpeg"
import starship from "../../images/starship.jpg"
import noimg from "../../images/noimg.png"
const RocketList = (props) => {
    const realid= (props.id)-1;
    var coverimg;
    if (realid == 1) {
        coverimg = falcon1img
    } else if (realid == 2) {
        coverimg = falcon9img
    } else if (realid == 3) {
        coverimg = falconhavy
    } else if (realid == 4) {
        coverimg = starship
    } else {
        coverimg = noimg
    }

    const [rocketDetail, setrocketDetail] = useState({});
    async function fatchData() {
        const res = await fetch(`https://api.spacexdata.com/v3/rockets/`)
        res
            .json()
            .then(res => setrocketDetail(res))
    }

    useEffect(() => {
        fatchData();
    }, []);
    
    if (rocketDetail && rocketDetail.length > 0) {
        return (
            <RocketFullpageComponent rocket={JSON.stringify(rocketDetail[realid])} coverimg={coverimg} />

        )

    }

    return null


}
export default RocketList