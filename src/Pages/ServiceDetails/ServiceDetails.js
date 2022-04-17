import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css'
const ServiceDetails = ({service}) => {
    
    return (
        <>
        <div className="container service-details">
            <img src={service.img} alt="" />
            <h3>{service.name}</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <Link to='/checkout'><button>More Photoes</button></Link>
        </div>
        </>
    );
};

export default ServiceDetails;