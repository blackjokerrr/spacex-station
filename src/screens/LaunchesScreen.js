import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
import Header from '../components/Header';
import { NavLink } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import queryString from 'query-string';

import '../styles/styles.css';

const initialState = {
    filter: {
        name: '',
        year: '',
        success: 'all'
    },
    page: {
        allPage: 12,
        current: 1,
        hasMore: true
    }
}

const LaunchesScreen = () => {

    const [filter, setFilter] = useState(initialState.filter)
    const [page, setPage] = useState(initialState.page)
    const [launches, setLaunches] = useState([])
    const controlRef = useRef()
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
            if (controlRef.current){
                controlRef.current.abort()
            }
            const control = new AbortController()

            controlRef.current = control

            try {
                const response = await fetch(`https://api.spacexdata.com/v3/launches?${filterParams}`, {
                  signal: controlRef.current?.signal,
                })

                if (response.status !== 200) {
                  console.error(new Error(`API Error: status code ${response.status}`))
                } else {
                  const json = await response.json()
                  setLaunches((prev) => ([...prev, ...json]))
                  if (json.length < page.allPage) {
                    setPage((prev) => ({ ...prev, hasMore: false }))
                  }
                }
                controlRef.current = null
              } catch (err) {
                console.error(err)
            }
        }
        fetchLaunches()
    },
        [filterParams, page.allPage],
    )
    


    return (
        <>
                <Header bgstyle="bg-dark"/>
                <br/><br/>
            <div className = 'container mt-5 input-group'>
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
                    <option value="true">Passed</option>
                    <option value="false">Failed</option>
                </select>
            </div> 
        </div>

            <div className = 'container'>
                <div id = 'scrollable' style={{ height: 'calc(100vh - 200px)', overflowX: 'hidden', overflowY: 'auto' }}>
                        <InfiniteScroll
                            dataLength={launches.length}
                            next={handlePage}
                            hasMore={page.hasMore}
                            scrollableTarget="scrollable"
                            style={{ overflow: 'hidden' }}
                        >
                            <div className = 'row row-cols-2'>
                                {launches.map((launch) => (
                                    <>
                                        <div className = 'container mb-4'>
                                            <div className="card border border-dark" key = {launch._id}>
                                                <div className = 'container d-flex justify-content-center'>
                                                    <img src={launch.links.mission_patch_small} className="card-img-top" style = {{width: '200px', height: '200px', padding: '2%'}} />
                                                </div>
                                                <div className="card-body">
                                                    <h4 className="card-title">{'" ' + launch.mission_name + ' " used a rocket is '}<NavLink to = {'/rockets/' + launch.rocket.rocket_id}>{launch.rocket.rocket_name}</NavLink></h4>
                                                    <p className="card-text mt-2">{'A rocket was launched in year ' + launch.launch_year + ' and The details are ' + launch.details}</p>
                                                    <p className="card-text mt-3">Status : {' '} 
                                                        {launch.launch_success ? 
                                                            <span className = 'bg-success p-1 rounded' style = {{color: 'white'}}>Success</span> : 
                                                            <span className = 'bg-danger p-1 rounded' style = {{color: 'white'}}>Failed</span>}
                                                    </p>
                                                    <a className="btn btn-outline-secondary" href = {launch.links.video_link} target = '_blank'>Youtube</a>
                                                    <a className="btn btn-outline-secondary ml-2" href = {launch.links.wikipedia} target = '_blank'>Wiki</a>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>
                    </InfiniteScroll>
                </div>
            </div>
        </>
    )

}
export default LaunchesScreen;