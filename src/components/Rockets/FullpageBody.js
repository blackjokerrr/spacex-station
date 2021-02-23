import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";


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

  console.log((props.id)+1)
  const id = parseInt(props.id)+1;
  if (id % 2 == 0) {
    return (
      
      <div class="container rocketPosition1">
        <h1 class="rocket-head rocket-font text-uppercase">{rocketDetail.rocket_name}</h1>
        <p class="rocket-content rocket-font">{rocketDetail.company}<br />
        Success rate : {rocketDetail.success_rate_pct}%<br /></p>
        <Link to={`/rockets/${props.rocketId}`}>
         
            <button class="btn btn-outline-light">Detail</button>
         
        </Link>
      </div>
    )

  }
  else {
    return (
      <div class="container rocketPosition2">
        <h1 class="rocket-head rocket-font text-uppercase">{rocketDetail.rocket_name}</h1>
        <p class="rocket-content rocket-font">{rocketDetail.company}<br />
        Success rate : {rocketDetail.success_rate_pct}%<br /></p>
        <Link to={`/rockets/${props.rocketId}`}>
         
            <button class="btn btn-outline-light">Detail</button>
        
        </Link>
      </div>
    )
    return null

  }





}




export default FullpageBody