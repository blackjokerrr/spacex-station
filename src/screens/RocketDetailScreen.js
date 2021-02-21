import React, { useState, useCallback, useEffect, createContext, Button} from "react";

import { useParams } from "react-router-dom";

const RocketDetailScreen = (props) => {
    const { rocketId } = useParams();
    const [rocketDetail, setrocketDetail] = useState([]);
    async function fatchData() {
        const res = await fetch(`https://api.spacexdata.com/v3/rockets/${rocketId}`)
        res.json()
            .then(res => setrocketDetail(res))
    }
    useEffect(() => {
        fatchData();
    }, []);
    //const rocket = rocketDetail[props.id]
    //console.log(rocket)


    return (<h1>{rocketId}</h1>)
}
export default RocketDetailScreen;