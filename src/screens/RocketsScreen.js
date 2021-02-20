import ReactFullpage from '@fullpage/react-fullpage';
import React, { useState, useCallback, useEffect, createContext } from "react";


import "../styles/styles.css";
import "fullpage.js/vendors/scrolloverflow";

import bgImage from '../images/background_5_4X.jpg';
import Header from '../components/Header';
import RocketList from "../components/Rockets/RocketList"

const RocketsScreen = (props) => {
    return (
        <div>
          
            <RocketList id="1" />
            <RocketList id="2" />
            <RocketList id="3" />
            <RocketList id="4" />

            </div>

    );
}



export default RocketsScreen;