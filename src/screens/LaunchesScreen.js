import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import LaunchesSearch from '../components/Launches/LaunchesSearch';

import '../styles/styles.css';

const LaunchesScreen = () => {

    //const [Launches, setLaunches] = useState([]);
    const [query, setQuery] = useState('');
    const [pageNumber, setPageNumber] = useState(1);



    /*async function fatchData() {
        const res = await fetch(`https://api.spacexdata.com/v3/launches`)
        res
            .json()
            .then(res => setLaunches(res))  
    }

    useEffect(() => {
        fatchData();
    }, []);*/

    
    /*const renderItem = (value) => {
        if (value.launch_year == Number(query)){
            return(
                <div className = 'container m-3'>
                    <div className="card" style={{width: '18em'}}>
                        <div className="card-body">
                            <h5 className="card-title">{value.flight_number}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-outline-success">Go somewhere</a>
                        </div>
                    </div>
                </div>
            )
        }else{
            return(
                <div className = 'container m-3'>
                    <div className="card" style={{width: '18em'}}>
                        <div className="card-body">
                            <h5 className="card-title">{value.flight_number}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-outline-success">Detail</a>
                        </div>
                    </div>
                </div>
            )
        }
    }*/

    const handleSearch = (e) => {
        setQuery(e.target.value)
    }

    const { launches, hasMore, loading, error } = LaunchesSearch(query)


    return (
        <>
            <div>
                <div style = {{backgroundColor: 'black', width: '100%', height: '6.7em'}}>
                    <Header />
                </div>
                
                <div className = 'container mt-3 input-group'>
                    <div class="input-group mb-3 w-100">
                        <input type="text" class="form-control" placeholder="Search"  onChange = {handleSearch} value = {query} />
                        <select class="form-select ml-1" id="inputGroupSelect01">
                            <option selected>Option</option>
                            <option value="1">Name</option>
                            <option value="2">Year</option>
                            <option value="3">Success</option>
                        </select>
                        <button class="btn btn-outline-secondary ml-1" type="button" id="button-addon2">Search</button>
                    </div> 
                </div>

                <div className = 'container-fluid'>
                    <div className = 'row row-cols-2'>
                        {console.log(launches)}
                        {launches.map(launch => {
                                return (
                                    <div className="card" style= {{width: '18em'}}>
                                        {/*<img src="..." className="card-img-top" alt="..." />*/}
                                        <div className="card-body">
                                            <h4 className="card-title">{'Mission Name : ' + launch.mission_name}</h4>
                                            <h5 className="card-text">{'Rocket : ' + launch.rocket.rocket_name}</h5>
                                            <h5 className="card-text">{'Year : ' + launch.launch_year}</h5>
                                            <p className="card-text">Status : {launch.launch_success ? 'Pass' : 'Failed'}</p>
                                            <a className="btn btn-outline-success">Detail</a>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                    

                </div>
                


            </div>
        </>
    )
}
export default LaunchesScreen;