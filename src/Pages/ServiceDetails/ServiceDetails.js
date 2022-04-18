import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css'
const ServiceDetails = ({service}) => {
    
    return (
        <>
        <div className="container service-details">
            <img src={service.img} alt="" className='rounded' />
            <h3 className='mt-3'>{service.name}</h3>
            <h4 className='mt-2'>{service.price}</h4>
            <p className='mt-2'>{service.description}</p>
            <Link to='/checkout'><button className='rounded bg-dark ps-3 pe-3 text-white mb-4'>More Photoes</button></Link>
        </div>
        </>
    );
};

export default ServiceDetails;