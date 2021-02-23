import React, { useState, useEffect } from "react";

import '../../styles/styles.css';

const InfoBody = (props) => {
  
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
        <>
            <div className = 'container'>
                <div className = 'd-flex justify-content-center'>
                    <h3 className = 'navText1 info-head'>
                        {companyInfo.name}
                    </h3>
                </div>
                <center>
                <p className = 'navText2 text-center w-75 info-content'>
                    {companyInfo.summary}
                </p>
                </center>

            </div>

        </>
    )
};

export default InfoBody;