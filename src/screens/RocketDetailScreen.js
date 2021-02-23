import React, { useState, useEffect } from "react";
import Header from "../components/Header"
import { useParams } from "react-router-dom";
import falcon1 from "../images/falcon1.png"

import falcon9 from "../images/falcon9-launches.png"
import falconheavy from "../images/falconheavy-detail.png"
import starship from "../images/starship-detail.png"
import FadeIn from "react-fade-in";

const RocketDetailScreen = () => {
    const { rocketId } = useParams();
    const [rocketDetail, setrocketDetail] = useState([]);
    async function fatchData() {
        const res = await fetch(`https://api.spacexdata.com/v3/rockets/${rocketId}`)
        res.json()
            .then(res => setrocketDetail(res))

    }
    useEffect(() => {
        fatchData();
    }, []);

    const rocket = JSON.stringify(rocketDetail)
    return (
        <FadeIn >
            <div>
                <Header bgstyle="bg-dark" />
                <div className = 'container-fluid'>
                    <div className = 'row row-cols-2 ml-5'>
                        <div>
                            {(() => {
                                if (rocketId == "falcon1") {
                                    return (
                                        <img src={falcon1} className = 'img-rocket-falcon1'  />
                                    )
                                } else if (rocketId == "falcon9") {
                                    return (
                                        <img src={falcon9} className = 'img-rocket-falcon9'  />
                                    )
                                } else if (rocketId == "falconheavy") {
                                    return (
                                        <img src={falconheavy} className = 'img-rocket-falconheavy'  />
                                    )
                                } else {
                                    return (
                                        <img src={starship} style = {{width: '45vw', height: '49vw', marginTop: '2vw', marginLeft: '11vw'}}  />
                                    )
                                }
                            })()}
                        </div>
                        <div>
                            <div className = 'rocket-content-header'>
                                <p class="font-weight-bold headerText">{rocketDetail.rocket_name}</p><br />
                                <p class="text">Company : {rocketDetail.company}<br />
                                    Country : {rocketDetail.country}<br />
                                    First Flight : {rocketDetail.first_flight}<br />
                                </p>
                            </div>
                        </div>

                    </div>

                </div>


                <div class="jumbotron jumbotron-fluid mt-5">
                    <div class="row mb-5">
                        <div class="col text-center headerText ">
                            {rocketDetail.rocket_name}
                        </div>
                    </div>
                    <div class=" mt-3 mb-5">
                        <div class="container w-75">
                            <h1> Description</h1>
                            <p className = 'des-font-size'>{rocketDetail.description}</p>
                        </div>
                    </div>
                    <div class="row  ml-3">
                        <div class="col-sm-6 my-center">
                            <img src={rocketDetail.flickr_images && rocketDetail.flickr_images[0]} class="img-thumbnail w-75 mt-5 border-0 sm:block" />
                            <img src={rocketDetail.flickr_images && rocketDetail.flickr_images[1]} class="img-thumbnail w-75 border-0 sm:block" />
                        </div>



                        <div class="col-sm-6 mt-5">
                            <div class='container w-75'>


                                <div class="row mt-1  mt-xl-5 mt-sm-1 ml-xl-5">
                                    <div class="col-sm-6 ">
                                        <h2>Country</h2>
                                        <p class="mt-xl-4 mt-sm-2 content-font-size">{rocketDetail.country}</p>
                                    </div>

                                    <div class="col-sm-6 ">
                                        <h2>Company</h2>
                                        <p class="mt-xl-4 mt-sm-2 content-font-size">{rocketDetail.company}</p>
                                    </div>
                                </div>

                                <div class="row   mt-xl-5 mt-sm-1 ml-xl-5">
                                    <div class="col-sm-6 ">
                                        <h2>Height</h2>
                                        <p class="mt-xl-4 mt-sm-2 content-font-size">
                                            {rocketDetail.height && rocketDetail.height.meters}  meters
                                        </p>
                                    </div>

                                    <div class="col-sm-6  ">
                                        <h2>Diameter</h2>
                                        <p class="mt-xl-4 mt-sm-2 content-font-size">{rocketDetail.diameter && rocketDetail.diameter.meters} meters</p>
                                    </div>
                                </div>

                                <div class="row mt-1  mt-xl-5 mt-sm-1 ml-xl-5">
                                    <div class="col-sm-6 ">
                                        <h2>Mass</h2>
                                        <p class="mt-xl-4 mt-sm-2 content-font-size">
                                            {rocketDetail.mass && rocketDetail.mass.kg}  kg
                                        </p>
                                    </div>

                                    <div class="col-sm-6  ">
                                        <h2>Engines</h2>
                                        <p class="mt-xl-4 mt-sm-2 content-font-size">{rocketDetail.engines && rocketDetail.engines.number} engine</p>
                                    </div>
                                </div>

                                <div class="row w-100">
                                    <div class="col-12 mt-5 my-center ">
                                        <a href={rocketDetail.wikipedia} target='_blank' class="btn btn-outline-info">More in Wikipedia</a>
                                    </div>
                                </div>



                            </div>

                        </div>

                        <div>

                        </div>
                    </div>



                </div>



            </div>

        </FadeIn>
    )
}


export default RocketDetailScreen;