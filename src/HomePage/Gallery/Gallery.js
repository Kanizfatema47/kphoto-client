

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GalleryAll from '../GalleryAll/GalleryAll';
import './Gallery.css'

const Gallery = () => {
    const [pictures, setPictures] = useState([])

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setPictures(data))
    }, [])
    return (
        <div className="container">
            <div className=' g-picture'>
                <h2 className='fs-1 text-center mb-4'>Gallery</h2>
                <div className='gallery-data'>
                    {
                        pictures.map(picture => <GalleryAll
                            key={picture.id}
                            picture={picture}
                        ></GalleryAll>)
                    }
                </div>
                <p className=' text-center mb-5'> <Link to='/gallery'><button className='fs-4 bg-dark text-white mt-3 ps-3 pe-3' >See More</button></Link></p>

            </div>
        </div>
    );
};

export default Gallery;