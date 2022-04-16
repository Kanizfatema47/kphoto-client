import React from 'react';

const Footer = () => {
    return (
        <div className='container'>
            <h2>footer</h2>
            <div className='d-flex  juatify-content-center'>
                <div className="left-portion ">
                    <img src="" alt="" srcset="" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est voluptas unde porro.</p>
                </div>
                <div className="middle-portion mx-5">
                    <h4>Site Map</h4>
                    <div className='d-flex flex-column '>
                        <p>Home</p>
                        <p>Gallery</p>
                        <p>Blogs</p>
                        <p>About Me</p>
                    </div>
                </div>
                <div className="social-icons">
                    <h4>social icons</h4>
                </div>
            </div>
        </div>
    );
};

export default Footer;