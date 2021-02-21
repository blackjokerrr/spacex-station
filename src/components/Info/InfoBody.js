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
                    <h3 className = 'font title'>
                        {companyInfo.name}
                    </h3>
                </div>
                <p className = 'font content'>
                    {companyInfo.summary}
                </p>

            </div>

        </>
    )
};

export default InfoBody;