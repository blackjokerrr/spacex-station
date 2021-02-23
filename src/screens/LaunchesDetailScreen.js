import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import Header from '../components/Header';

import bgImage from '../images/background_launches_2.jpg';

import '../styles/styles.css';
import '../styles/Launches.css';

import FadeIn from "react-fade-in";

const LaunchesDetailScreen = (props) => {
    const { flight_number } = useParams()
    const [launchesDetail, setlaunchesDetail] = useState([]);

    async function fatchData() {
        const res = await fetch(`https://api.spacexdata.com/v3/launches/${flight_number}`)

        res.json()
            .then(res => setlaunchesDetail(res))

            
    }

    useEffect(() => {
        fatchData();
    }, []);


    return (
        <FadeIn>
            <Header bgstyle="bg-dark" />
            <br/><br/>
            <div className = 'launches'>
                <div className = 'mt-5 container'>
                    <div className = 'd-flex justify-content-center'>
                        <h1>{'Mission Name " ' + (launchesDetail && launchesDetail.mission_name) + ' "'}</h1>
                    </div>

                </div>
                <div className = 'container-fluid' style = {{position: 'relative'}} >
                    <div className = 'd-flex justify-content-center'>
                        <img src = {bgImage} className = 'mt-3 img-bg' />
                    </div>
                    <div className = 'container-fluid'>
                        <div className = 'd-flex justify-content-center' style = {{position: 'absolute', top: '16vw', left: '22.5vw'}}>
                            <div class="jumbotron rounded content-frame" style = {{width: '55vw', padding: '1vw'}}>
                                <div className = 'container-fluid'>
                                    <div className = 'col'>
                                        <div className = 'row row-cols-2'>
                                            <div>
                                                <div>
                                                    <h3 className = 'display-5'>Description</h3>
                                                </div>
                                                <div className = 'p-3'>
                                                    <p>{'" ' + (launchesDetail && launchesDetail.details) + ' "'}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <h3 className = 'display-5'>Launched Year</h3>
                                                </div>
                                                <div className = 'p-3'>
                                                    <p>{'" ' + (launchesDetail && launchesDetail.launch_year) + ' "'}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className = 'row row-cols-2'>
                                            <div>
                                                <div>
                                                    <h3 className = 'display-5'>Status</h3>
                                                </div>
                                                <div className = 'p-3'>
                                                    <p>{'" ' + ((launchesDetail && launchesDetail.launch_success) ? 'Success':'Failed') + ' "'}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <h3 className = 'display-5'>Rocket</h3>
                                                </div>
                                                <div className = 'p-3'>
                                                    <p>{'" '}<NavLink to = {'/rockets/' + (launchesDetail.rocket && launchesDetail.rocket.rocket_id)}>{(launchesDetail.rocket && launchesDetail.rocket.rocket_name)}</NavLink>{' "'}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <NavLink to = {'/rocket/' + (launchesDetail.links && launchesDetail.links.wikipedia)}>
                                                        <a className="btn btn-outline-secondary mr-2" >Wiki</a>
                                                    </NavLink>
                                                    <NavLink to = {'/rocket/' + (launchesDetail.links && launchesDetail.links.video_link)}>
                                                        <a className="btn btn-outline-secondary" >Youtube</a>
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </FadeIn>
    )
}
export default LaunchesDetailScreen;