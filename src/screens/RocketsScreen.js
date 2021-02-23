import React from "react";
import FadeIn from "react-fade-in";

import "../styles/styles.css";
import "fullpage.js/vendors/scrolloverflow";

import Header from '../components/Header';

import RocketFullpageComponent from '../components/Rockets/RocketFullpageComponent';

const RocketsScreen = () => {
    return (
        <FadeIn>
            <Header bgstyle="sss"/>
                <RocketFullpageComponent  />
            
            </FadeIn>

    );
}



export default RocketsScreen;