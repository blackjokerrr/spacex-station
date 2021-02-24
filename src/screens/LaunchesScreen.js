import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
import Header from '../components/Header';
import { NavLink } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import queryString from 'query-string';
import Reload  from '../components/Reload';
import FadeIn from "react-fade-in";

import '../styles/styles.css';
import '../styles/Launches.css';

const initialState = {
    filter: {
        name: '',
        year: '',
        success: 'all'
    },
    page: {
        allPage: 10,
        current: 1,
        hasMore: true
    }
}

const LaunchesScreen = () => {

    const [filter, setFilter] = useState(initialState.filter)
    const [page, setPage] = useState(initialState.page)
    const [launches, setLaunches] = useState([])
    const allYear = []
    
    var genNumber = () => {
        var year = new Date()

        for (let start = 2002;start < year.getFullYear() + 1;start++){
            allYear.push(start + '')
        }
    }

    genNumber()


    const handleFilter = useCallback(
        (e) => {
            const {name, value} = e.target
            setFilter((prev) => ({...prev, [name]:value}))
            setPage(initialState.page)
            setLaunches([])


        }, [],


    )

    const handlePage = useCallback(
        () => {
            setPage((prev) => ({...prev, current: prev.current + 1}))
        },
        [],
    )

    const filterParams = useMemo(
        () => queryString.stringify({
          id: true,
          launch_year: filter.year,
          rocket_name: filter.name,
          launch_success: filter.success === 'all' ? '' : filter.success,
          limit: page.allPage,
          offset: (page.current - 1) * page.allPage,
        }, { skipEmptyString: true }),
        [filter.success, filter.year, filter.name, page],
    )
    
    useEffect(() => {
        const fetchLaunches = async () => {

            try{
                const response = await fetch(`https://api.spacexdata.com/v3/launches?${filterParams}`,)

                if (response.status !== 200) {
                  console.error(new Error(`API Error: status code ${response.status}`))
                } else {
                  const json = await response.json()
                  setLaunches((prev) => ([...prev, ...json]))
                  if (json.length < page.allPage) {
                    setPage((prev) => ({ ...prev, hasMore: false }))
                  }
                }
              }catch (err) {
                console.error(err)
            }
        }
        fetchLaunches()
    },
        [filterParams, page.allPage],
    )
    


    return (
        <FadeIn>
                <Header bgstyle="bg-dark"/>
                <br/><br/>
            <div className = 'container mt-5 input-group launches'>
                <div class="input-group mb-3 w-100">
                    <input type="text" class="form-control" placeholder="Search by Rocket Name" name = 'name' onChange = {handleFilter} value = {filter.name} />
                    <select class="form-select ml-1" id="inputGroupSelect01" onChange = {handleFilter} value = {filter.year} name = 'year'>
                        <option selected value = ''>Year</option>
                        {allYear.map((year) => (
                            <option value = {year}>{year}</option>
                        ))}
                    </select>

                    <select class="form-select ml-1" id="inputGroupSelect01" name = 'success' onChange = {handleFilter} value = {filter.success}>
                        <option selected value = 'all'>All</option>
                        <option value="true">Success</option>
                        <option value="false">Failed</option>
                    </select>
                </div> 
            </div>

            <div className = 'container'>
                <div id = 'scrollable' className = 'scrollbar-style' style={{ height: 'calc(100vh - 200px)', overflowX: 'hidden', overflowY: 'auto' }}>
                        <InfiniteScroll
                            dataLength={launches.length}
                            next={handlePage}
                            hasMore={page.hasMore}
                            scrollableTarget="scrollable"
                            loader = {<Reload />}
                            style={{ overflow: 'hidden' }}
                        >
                            <div className = 'row row-cols-2 mr-1'>
                                {launches.map((launch) => (
                                    <>
                                        <div className = 'container mb-4 launches'>
                                            <div className="card border border-dark" key = {launch._id}>
                                                <div className = 'd-flex justify-content-center mt-3'>
                                                    <p className = 'fw-light'>Launches</p>
                                                </div>
                                                <div className = 'container d-flex justify-content-center'>
                                                    <img src={launch.links && launch.links.mission_patch_small} className="card-img-top" style = {{width: '200px', height: '200px', padding: '2%'}} />
                                                </div>
                                                <div className="card-body">
                                                    <div className = 'd-flex justify-content-center'>
                                                        <h4 className="card-title mission-head">{'Mission Name " ' + launch.mission_name + ' "'}</h4>
                                                    </div>
                                                    <p>{'Rocket is "'}<NavLink to = {'/rockets/' + (launch.rocket && launch.rocket.rocket_id)}>{launch.rocket && launch.rocket.rocket_name}</NavLink>{'" and launched in ' + launch.launch_year}</p>
                                                    <p className="card-text mt-3">Status : {' '} 
                                                        {launch.launch_success ? 
                                                            <span className = 'bg-success p-1 rounded' style = {{color: 'white'}}>Success</span> : 
                                                            <span className = 'bg-danger p-1 rounded' style = {{color: 'white'}}>Failed</span>}
                                                    </p>
                                                    <NavLink to = {'/launches/' + launch.flight_number}>
                                                    <a className="btn btn-outline-secondary mt-3" >Detail</a>

                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>
                    </InfiniteScroll>
                </div>
            </div>
        </FadeIn>
    )

}
export default LaunchesScreen;