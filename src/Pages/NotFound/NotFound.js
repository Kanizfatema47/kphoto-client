import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../images/404.png'
const NotFound = () => {
    return (
        <div className='w-4/12 h-4/12 m-auto'>
            <img src={image} className='' alt=''/>
            <Link
            to='/'
            className='grid grid-rows-1 rounded-full text-center text-lg font-bold mb-2 py-2 px-3 text-white mt-3 bg-pink-600 sm:w-auto sm:mb-0'>
            Back to homepage
          </Link>
        </div>
    
    );
};

export default NotFound;