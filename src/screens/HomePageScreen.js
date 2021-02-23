import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import "../styles/styles.css";
import "fullpage.js/vendors/scrolloverflow";

import bgImage from '../images/background_5_4X.jpg';
import Header from '../components/Header';
import Body from '../components/Info/InfoBody';
import FadeIn from "react-fade-in";


const HomePageScreen = () => (

    <ReactFullpage 

    sectionsColor={["#282c34"]}
    css3 = {true}

    render = {({ state, fullpageApi }) => {
      
      return (
        <FadeIn>
            <div className = "section p-0" 
                style = {{
                backgroundImage: `url(${bgImage})`, 
                backgroundSize: '100% 100%',
            }}>
                <Body />
                <Header bgstyle="sss" />
            </div>
            
        </FadeIn>
        

      );
    }}
  />
);

export default HomePageScreen;