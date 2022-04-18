import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../images/404.png'
const NotFound = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <img src={image} className=' w-50 h-50' alt=''/>
            <Link
            to='/'
            className=' rounded text-center  mb-2 py-2 px-3 text-white bg-dark'>
            Back to homepage
          </Link>
        </div>
    
    );
};

export default NotFound;