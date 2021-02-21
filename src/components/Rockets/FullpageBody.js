import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import React, { useState, useCallback, useEffect, createContext, Button } from "react";
import button from 'react-bootstrap'
import rocketDetailScreen from "../../screens/RocketDetailScreen"

const FullpageBody = (props) => {

  const [rocketDetail, setrocketDetail] = useState([]);
  async function fatchData() {
    const res = await fetch(`https://api.spacexdata.com/v3/rockets/${props.rocketId}`)
    res.json()
      .then(res => setrocketDetail(res))
  }
  useEffect(() => {
    fatchData();
  }, []);
  //const rocket = rocketDetail[props.id]
  //console.log(rocket)
  console.log((props.id)+1)
  const id = parseInt(props.id)+1;
  if (id % 2 == 0) {
    return (
      <div class="container rocketPosition1">
        <h1 class="rocketFont">{rocketDetail.rocket_name}</h1>
        <p class="rocketFont">{rocketDetail.company}<br />
        success rate : {rocketDetail.success_rate_pct}%<br /></p>
        <Link to={`/rockets/${props.rocketId}`}>
          <div class="container">
            <button class="btn btn-outline-light">Detail</button>
          </div>
        </Link>
      </div>
    )

  }
  else {
    return (
      <div class="container rocketPosition2">
        <h1 class="rocketFont">{rocketDetail.rocket_name}</h1>
        <p class="rocketFont">{rocketDetail.company}<br />
        success rate : {rocketDetail.success_rate_pct}%<br /></p>
        <Link to={`/rockets/${props.rocketId}`}>
          <div class="container">
            <button class="btn btn-outline-light">Detail</button>
          </div>
        </Link>
      </div>
    )
    return null

  }





}




export default FullpageBody