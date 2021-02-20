import ReactFullpage from '@fullpage/react-fullpage';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from "../Header"

import "../../styles/styles.css";
import "fullpage.js/vendors/scrolloverflow";
import RocketBody from './RocketBody';

import falcon1img from "../../images/1111.jpeg";
import falcon9img from "../../images/falcon9.png"
import falconhavy from "../../images/falconhavy.jpeg"
import starship from "../../images/starship.jpg"
import noimg from "../../images/noimg.png"


const RocketFullpageComponent = fullpageProps => (
    <ReactFullpage

        sectionsColor={["#ffff"]}

        render={({ state, fullpageApi }) => {
            
            if (fullpageProps.rocket && fullpageProps.rocket.length > 0) {
                return (
                   
                        <div className="section p-0"
                            style={{
                                backgroundImage: `url(${fullpageProps.coverimg})`,
                                backgroundSize: '100% 100%',
                            }}>
                                
                       
                           
                        <h1>{JSON.parse(fullpageProps.rocket).id}</h1>
                        </div>
                   

                )

            }

        }}
    />
)

export default RocketFullpageComponent;