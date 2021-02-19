import ReactFullpage from '@fullpage/react-fullpage';
import React, { useState, useCallback, useEffect, createContext } from "react";


import "../styles/styles.css";
import "fullpage.js/vendors/scrolloverflow";

import bgImage from '../images/background_5_4X.jpg';
import Header from '../components/Header';

const RocketsScreen = () => {
    const [Rockets, setRockets] = useState({});

    async function fatchData() {
        const res = await fetch(`https://api.spacexdata.com/v3/rockets`)
        res
            .json()
            .then(res => setRockets(res))
            
    }

    useEffect(() => {
        fatchData();
    }, []);


    return (
        <div>{JSON.stringify({Rockets})}</div>
    )
    
}



export default RocketsScreen;