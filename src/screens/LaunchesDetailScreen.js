import React, { useState, useCallback, useEffect, createContext } from "react";
import { useParams } from "react-router-dom";

const LaunchesDetailScreen = (props) => {
    const { flight_number } = useParams()
    const [launchesDetail, setlaunchesDetail] = useState({});
    console.log("asdasdasdasd")
    async function fatchData() {
        const res = await fetch(`https://api.spacexdata.com/v3/launches/${flight_number}`)
        res
            .json()
            .then(res => setlaunchesDetail(res))
            .then(console.log(res))
    }

    useEffect(() => {
        fatchData();
    }, []);


    return (
        <div>{JSON.stringify(launchesDetail)}</div>
    )
}
export default LaunchesDetailScreen;