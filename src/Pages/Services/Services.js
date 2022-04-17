import React, { useEffect, useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import './Services.css'
const Services = () => {
    const [services, setServices] =useState([])

    useEffect(()=>{
        fetch('serviceData.json')
        .then(res=>res.json())
        .then(data => setServices(data))
    } ,[])
    return (
        <div className='container'>
            <h2>Services</h2>
            <div className='services'>
                {
                    services.map(service => <ServiceDetails
                    key={service.id}
                    service ={service}
                    >

                    </ServiceDetails>)
                }
            </div>
        </div>
    );
};

export default Services;