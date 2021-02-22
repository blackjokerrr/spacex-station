import React, { useState, useCallback, useEffect, createContext, Button } from "react";
import Header from "../components/Header"
import { useParams } from "react-router-dom";
import falcon1 from "../images/falcon1.png"

import falcon9 from "../images/falcon91.png"

import FadeIn from "react-fade-in";




const RocketDetailScreen = (props) => {
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
    //const rocket = rocketDetail[props.id]
    //console.log(rocket)

    const rocket = JSON.stringify(rocketDetail)
    return (
        <FadeIn >
            <div>  
                <Header bgstyle="bg-dark"/>
            
                <div class="row">
                    <div clss="container col-3">

                        {(() => {
                            if (rocketId == "falcon1") {
                                return (
                                    <img src={falcon1} class="img-thumbnail firstImg border-0" />
                                )
                            } else if (rocketId == "falcon9") {
                                return (
                                    <img src={falcon9} class="img-thumbnail secImg border-0" />
                                )
                            } else if (rocketId == "falconheavy") {
                                return (
                                    <img src={falcon1} class="img-thumbnail firstImg border-0" />
                                )
                            } else {
                                return (
                                    <img src={falcon1} class="img-thumbnail firstImg border-0" />
                                )
                            }
                        })()}
                    </div>
                    <div class="col-3 textbox1">
                        <div>
                            <p class="font-weight-bold headerText">{rocketDetail.rocket_name}</p><br />
                            <p class="text">Company : {rocketDetail.company}<br />
                        Country : {rocketDetail.country}<br />
                        First Flight : {rocketDetail.first_flight}<br /></p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col text-center headerText textbox2">
                        {rocketDetail.rocket_name}
                    </div>
                </div>

                <div class="row ml-5">
                    <div class="col-6">
                        <div class='container w-75'>
                            <h1> Description</h1>
                            {rocketDetail.description}
                            <center>
                                <div class="row mt-1 container  mt-5">
                                    <div class="col-6 container">
                                        <h2>Country</h2>
                                        <p class="mt-4">{rocketDetail.country}</p>
                                    </div>

                                    <div class="col-6 container">
                                        <h2>Company</h2>
                                        <p class="mt-4">{rocketDetail.company}</p>
                                    </div>
                                </div></center>
                            <center>
                                <div class="row mt-1 container  mt-5">
                                    <div class="col-6 container">
                                        <h2>Height</h2>
                                        <p class="mt-4">
                                            {rocketDetail.height && rocketDetail.height.meters}  meters
                                        </p>
                                    </div>

                                    <div class="col-6 container ">
                                        <h2>Diameter</h2>
                                        <p class="mt-4">{rocketDetail.diameter && rocketDetail.diameter.meters} meters</p>
                                    </div>
                                </div></center>
                            <center>
                                <div class="row mt-1 container  mt-5">
                                    <div class="col-6 container">
                                        <h2>Mass</h2>
                                        <p class="mt-4">
                                            {rocketDetail.mass && rocketDetail.mass.kg}  kg
                                        </p>
                                    </div>

                                    <div class="col-6 container ">
                                        <h2>Engines</h2>
                                        <p class="mt-4">{rocketDetail.engines && rocketDetail.engines.number} engine</p>
                                    </div>
                                </div></center>

                            <center>
                                <div class="row mt-5">
                                    <div class="col-12">
                                        {rocketDetail ? (
                                            rocketDetail?.links?.wikipedia ? (
                                                <button href={rocketDetail?.links?.wikipedia} class="btn btn-outline-info">more in Wikipedia</button>
                                            ) : (
                                                <button href={rocketDetail?.links?.wikipedia} class="btn btn-outline-info">more in Wikipedia</button>
                                                )
                                        ) : (
                                                "Loading..."
                                            )}

                                    </div>
                                </div>
                            </center>
                        </div>
                    </div>

                    <div class="col-6">

                        <img src={rocketDetail.flickr_images && rocketDetail.flickr_images[0]} class="img-thumbnail w-75 mt-5 border-0" />
                        <img src={rocketDetail.flickr_images && rocketDetail.flickr_images[1]} class="img-thumbnail w-75 border-0" />
                    </div>
                </div>
                <div>

                </div>
            </div>

        </FadeIn>
    )
}


export default RocketDetailScreen;