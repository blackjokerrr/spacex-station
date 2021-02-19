import React from 'react';

import "../styles/styles.css";

const Header = (props) => {

    return(
        <div>
            <div class = 'container font fixed-top mt-4 m-0 ml-4'>
                <div className = 'row d-flex'>
                    <div>
                        <h1 className = 'logo'>SpaceX Station</h1>
                    </div>
                    <div className = 'd-flex justify-content-end'>
                        <h2>x</h2>
                        <h2>x</h2>
                    </div>
                </div>


            </div>
        </div>
    )
}


export default Header;