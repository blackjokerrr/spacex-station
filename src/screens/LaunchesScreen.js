import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import { NavLink } from 'react-router-dom';

import '../styles/styles.css';
import LaunchesSearch from '../components/Launches/LaunchesSearch';

const LaunchesScreen = () => {
    const [query, setQuery] = useState('');
    const [pageNumber, setPageNumber] = useState(1);

    const handleSearch = (e) => {
        setQuery(e.target.value)
    }
    const { launches, hasMore, loading, error } = LaunchesSearch(query)



    return (
        <>


                <Header bgstyle="bg-dark"/>
                <br/><br/>
            <div className = 'container mt-5 input-group'>
            <div class="input-group mb-3 w-100">
                <input type="text" class="form-control" placeholder="Search"  onChange = {handleSearch} value = {query} />
                <select class="form-select ml-1" id="inputGroupSelect01">
                    <option selected>Year</option>
                    <option value="1">2000</option>
                    <option value="2">2010</option>
                    <option value="3">2011</option>
                </select>
                <select class="form-select ml-1" id="inputGroupSelect01">
                    <option selected>Succes</option>
                    <option value="1">Pass</option>
                    <option value="2">Failed</option>
                </select>
                <button class="btn btn-outline-secondary ml-1" type="button" id="button-addon2">Search</button>
            </div> 
        </div>

            <div className = 'container'>
                <div className = 'row row-cols-2'>
                    {launches.map(launch => {
                            return (
                                <div className = 'container mb-4'>
                                    <div className="card border border-dark">
                                        <div className = 'container d-flex justify-content-center'>
                                            <img src={launch.links.mission_patch_small} className="card-img-top" style = {{width: '200px', height: '200px', padding: '2%'}} />
                                        </div>
                                        <div className="card-body">
                                            <h4 className="card-title">{'Mission Name "' + launch.mission_name + '"'}</h4>
                                            <h5 className="card-text">{'Rocket is "'} <NavLink to = {'/rockets/' + launch.rocket.rocket_id}>{launch.rocket.rocket_name}</NavLink>{'"'}</h5>
                                            <h5 className="card-text">{'Year : ' + launch.launch_year}</h5>
                                            <p className="card-text">Status : {' '} 
                                                {launch.launch_success ? 
                                                    <span className = 'bg-success p-1 rounded' style = {{color: 'white'}}>Pass</span> : 
                                                    <span className = 'bg-danger p-1 rounded' style = {{color: 'white'}}>Failed</span>}
                                            </p>
                                            <a className="btn btn-outline-success">Details</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </div>
        </>
    )

}
export default LaunchesScreen;