import ReactFullpage from '@fullpage/react-fullpage';
import React from 'react';

import "../../styles/styles.css";
import "fullpage.js/vendors/scrolloverflow";

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