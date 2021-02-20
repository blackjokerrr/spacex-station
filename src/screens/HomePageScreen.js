import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import "../styles/styles.css";
import "fullpage.js/vendors/scrolloverflow";

import bgImage from '../images/background_5_4X.jpg';
import Header from '../components/Header';


const HomePageScreen = () => (

    <ReactFullpage 

    sectionsColor={["#282c34"]}

    render = {({ state, fullpageApi }) => {
      
      return (
        <div>
            <div className = "section p-0" 
                style = {{
                backgroundImage: `url(${bgImage})`, 
                backgroundSize: '100% 100%',
            }}>
                <Header />
            </div>
            
        </div>
        

      );
    }}
  />
);

export default HomePageScreen;