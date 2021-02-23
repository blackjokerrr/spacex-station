import ReactFullpage from '@fullpage/react-fullpage';
import React, { useState, useCallback, useEffect, createContext } from "react";
import FadeIn from "react-fade-in";

import "../styles/styles.css";
import "fullpage.js/vendors/scrolloverflow";

import bgImage from '../images/background_5_4X.jpg';
import Header from '../components/Header';

import RocketFullpageComponent from '../components/Rockets/RocketFullpageComponent';

const RocketsScreen = (props) => {
    return (
        <FadeIn>
            <Header bgstyle="sss"/>
            <RocketFullpageComponent  />
            
            </FadeIn>

    );
}



export default RocketsScreen;