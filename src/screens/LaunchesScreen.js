import React, { useState, useEffect } from "react";
import Header from '../components/Header';

import '../styles/styles.css';

const LaunchesScreen = () => {
    const [Launches, setLaunches] = useState([]);
    const [text, setText] = useState('');

    async function fatchData() {
        const res = await fetch(`https://api.spacexdata.com/v3/launches`)
        res
            .json()
            .then(res => setLaunches(res))
            
    }

    useEffect(() => {
        fatchData();
    }, []);
    
    const renderItem = (value) => {
        if (value.launch_year == Number(text)){
            return(
                <p>{value.flight_number}</p>
            )
        }
    }


    return (
        <>
            <div>
                <div style = {{backgroundColor: 'black', width: '100%', height: '6.7em'}}>
                    <Header />
                </div>
                <input type = 'text' onChange = {(text) => {setText(text.target.value)}} />
                <button>Search</button>

                <div className = 'container'>
                    {Launches.map( value => 
                        <div>
                            {renderItem(value)}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
export default LaunchesScreen;