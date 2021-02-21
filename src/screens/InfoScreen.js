import React, { useState, useEffect } from "react";


const InfoScreen = () => {
  
    const [companyInfo, setCompanyInfo] = useState({});

    async function fatchData() {
        const res = await fetch(`https://api.spacexdata.com/v3/info`)
        res
            .json()
            .then(res => setCompanyInfo(res))
            
    }

    useEffect(() => {
        fatchData();
    }, []);


    return (
        <div>{companyInfo.name}</div>
    )
};

export default InfoScreen;