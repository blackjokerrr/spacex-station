import React, { useState, useCallback, useEffect, createContext } from "react";

const LaunchesScreen = () => {
    const [Launches, setLaunches] = useState({});

    async function fatchData() {
        const res = await fetch(`https://api.spacexdata.com/v3/launches`)
        res
            .json()
            .then(res => setLaunches(res))
            
    }

    useEffect(() => {
        fatchData();
    }, []);


    return (
    <div>{JSON.stringify(Launches)}</div>
    )
}
export default LaunchesScreen;