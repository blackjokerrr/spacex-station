import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import "../styles/styles.css";


const Header = (props) => {

    const [selected, setSelected] = useState(false);

    return (
        <>
            <div className='container-fluid font fixed-top mt-4 m-0 ml-4'>
                <nav className="navbar navbar-expand-lg">
                    <NavLink to = "/"><span className="font logo">SpaceX Station</span></NavLink>
                    <div className="collapse navbar-collapse justify-content-end nav-space">
                        <div className="navbar-nav">
                            <div className = 'mr-5'>
                                <NavLink to = "/"><span className = 'font nav-item'>Home</span></NavLink>
                            </div>
                            <div className = 'mr-5'>
                                <NavLink to = "/rocket"><span className = 'font nav-item'>Rocket</span></NavLink>
                            </div>
                            <div className = 'nav-space'>
                                <NavLink to = "/launchers"><span className = 'font nav-item'>Launchers</span></NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}


export default Header;