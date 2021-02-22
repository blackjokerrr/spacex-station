import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import "../styles/styles.css";


const Header = (props) => {

    const [selected, setSelected] = useState({
        Home: false,
        Rockets: false,
        Launches: false,
        Logo: false
    })



    const classname= "navbar navbar-expand-lg navbar-dark fixed-top py-md-3 " + props.bgstyle
    
    console.log(props.bgstyle)
    return (
        <>
            <nav class={classname}>
                <NavLink to="/">
                <a class="navbar-brand " href="#">Space X Station</a>
                </NavLink>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">

                 
                        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
                            <ul class="navbar-nav ml-auto navText2">
                                <li class="nav-item mr-5 ">
                                <NavLink to="/">
                                    <a class="nav-link">Home</a>
                                   </NavLink>
                                </li>
                                <li class="nav-item mr-5">
                                    <NavLink to='/rockets'>
                                    <a class="nav-link">Rockets</a>
                                    </NavLink>
                                </li>
                                <li class="nav-item mr-5">
                                    <NavLink to="/launches">
                                    <a class="nav-link" >Launches</a>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                   
                </div>
            </nav>
        </>
    )
}


export default Header;