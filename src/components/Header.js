import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import "../styles/styles.css";


const Header = (props) => {

    const [selected, setSelected] = useState({
        Home: false,
        Rockets: false,
        Launches: false,
        Logo: false
    })


    const currentState = (title, part, state) => {

        if (part == 'logo'){
            if (selected.Logo){
            
                return(<span className="font logo selected">{title}</span>)
            }
            else{
                return(<span className="font logo">{title}</span>)
            }
        }
        else if (part == 'nav'){
            if (state){
                return(<span className = 'font nav-item selected'>{title}</span>)
            }else{
                return(<span className = 'font nav-item'>{title}</span>)
            }
        }
    }


    return (
        <>
            <div className='container-fluid font fixed-top mt-3 md-5 m-0 ml-4'>
                <nav className="navbar navbar-expand-lg">
                     <NavLink to = "/" onClick = {() => {setSelected({
                        Home: false,
                        Rockets: false,
                        Launches: false,
                        Logo: true
                    })}}>
                        {currentState('SpaceX Station', 'logo', false)}
                    </NavLink>
                    <div className="collapse navbar-collapse justify-content-end nav-space">
                        <div className="navbar-nav">
                            <div className = 'mr-5'>
                                <NavLink to = "/" onClick = {() => {setSelected({
                                    Home: true,
                                    Rockets: false,
                                    Launches: false,
                                    Logo: false
                                })}}>
                                    {currentState('HOME', 'nav', selected.Home)}
                                </NavLink>
                            </div>
                            <div className = 'mr-5'>
                                <NavLink to = "/rockets" onClick = {() => {setSelected({
                                    Home: false,
                                    Rockets: true,
                                    Launches: false,
                                    Logo: false
                                })}}>
                                    {currentState('ROCKETS', 'nav', selected.Rockets)}
                                </NavLink>
                            </div>
                            <div className = 'nav-space'>
                                <NavLink to = "/launches" onClick = {() => {setSelected({
                                    Home: false,
                                    Rockets: false,
                                    Launches: true,
                                    Logo: false
                                })}}>
                                    {currentState('LAUNCHES', 'nav', selected.Launches)}
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}


export default Header;