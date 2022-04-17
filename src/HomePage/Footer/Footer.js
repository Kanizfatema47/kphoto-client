import React from 'react';
import footer from '../../images/footer.jpg'

const Footer = () => {
    return (
        <footer className='' style={{backgroundImage: `url(${footer}` }}>
            <div className='d-flex container juatify-content-center text-white'>
                <div className="left-portion ">
                    <img src="" alt="" />
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
        </footer>
    );
};

export default Footer;