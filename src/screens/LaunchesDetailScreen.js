import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from '../components/Header';

import '../styles/styles.css';

const LaunchesDetailScreen = (props) => {
    const { flight_number } = useParams()
    const [launchesDetail, setlaunchesDetail] = useState({});

    async function fatchData() {
        const res = await fetch(`https://api.spacexdata.com/v3/launches/${flight_number}`)
        res.json()
            .then(res => setlaunchesDetail(res))
            .then(console.log(res))
    }

    useEffect(() => {
        fatchData();
    }, []);


    return (
        <>
            <Header bgstyle="bg-dark" />
            <br/><br/>
            <div className = 'container'>
                <div className = 'row'>
                    <div className = 'col-5 d-flex justify-content-center align-items-center' style = {{height: '50em'}} >
                        <img src={launchesDetail.links} className="card-img-top" style = {{width: '200px', height: '200px', padding: '2%'}} />
                        {console.log(launchesDetail.links)}
                    </div>
                    <div className = 'col d-flex align-items-center'>
                        <h1>{launchesDetail.mission_name}</h1>
                    </div>
                </div>

            </div>
        </>
    )
}
export default LaunchesDetailScreen;