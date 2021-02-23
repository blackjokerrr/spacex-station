import ReactFullpage from '@fullpage/react-fullpage';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from "../Header"

import "../../styles/styles.css";
import "fullpage.js/vendors/scrolloverflow";
import RocketBody from './FullpageBody';

import falcon1img from "../../images/1111.jpeg";
import falcon9img from "../../images/falcon9.png"
import falconhavy from "../../images/falconheavy.jpeg"
import starship from "../../images/starship.jpg"
import noimg from "../../images/noimg.png"
import Infullpage from "../Rockets/Infullpage"


const RocketFullpageComponent = fullpageProps => (
    <ReactFullpage


        sectionsColor={["#ffff"]}

        render={({ state, fullpageApi }) => {
            return (

                <div>
                    <Infullpage rocketId="falcon1" id="0" />
                    <Infullpage rocketId="falcon9" id="1" />
                    <Infullpage rocketId="falconheavy" id="2" />
                    <Infullpage rocketId="starship" id="3" />
                </div>
            )

        }

        }
    />
)

export default RocketFullpageComponent;