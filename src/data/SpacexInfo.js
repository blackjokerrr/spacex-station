import React, { useState, useCallback, useEffect } from "react";

const SpacexInfo = () => {
    const [hasError, setError] = useState(false);
    const [companyInfo, setCompanyInfo] = useState({});

    async function fatchData(){
        const res = await fetch("https://api.spacexdata.com/v3/info")
        res
        .json()
        .then(res => setCompanyInfo(res))
        .catch(err => setError(err))
    }

    useEffect(() => {
        fatchData();
    },[]);


    return (
        <div>{JSON.stringify(companyInfo)}</div>
        
    )
};

export default SpacexInfo;