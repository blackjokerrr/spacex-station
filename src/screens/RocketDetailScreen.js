import React, { useState, useCallback, useEffect, createContext } from "react";
import { useParams } from "react-router-dom";

const RocketDetailScreen = (props) => {
    const { rocketId } = useParams()
    const [rocketDetail, setrocketDetail] = useState({});
    console.log(`https://api.spacexdata.com/v3/rockets/${rocketId}`)
    async function fatchData() {
        const res = await fetch(`https://api.spacexdata.com/v3/rockets/${rocketId}`)
        res
            .json()
            .then(res => setrocketDetail(res))
            .then(console.log(res))
    }

    useEffect(() => {
        fatchData();
    }, []);


    return (
        <div>{JSON.stringify(rocketDetail)}</div>
    )
}
export default RocketDetailScreen;