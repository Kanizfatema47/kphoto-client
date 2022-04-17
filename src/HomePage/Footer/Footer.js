import React from 'react';
import logo from '../../images/logo (1).png'
import facebook from '../../images/social/facebook.png'; 
import github from '../../images/social/github.png'; 
import google from '../../images/social/google.png'; 

const Footer = () => {
    return (
        <footer className='mt-5 pt-5 pb-5' style={{ 'background-color': `#000`, 'color': `#5F9EA0` }}>
            <div className='d-flex container justify-content-evenly '>
                <div className="left-portion footer-inner">
                    <img src={logo} alt="" style={{ 'color': `#5F9EA0` }} />
                    <p>Lorem ipsum dolor sit amet consectetur, <br></br>adipisicing elit. Est voluptas unde porro.</p>
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
                    <div>
                        <a href="www.facebook.com"><img src={facebook} alt="" className='img-fluid' /></a>
                        <a href="www.github.com"><img src={github} alt="" className='img-fluid' /></a>
                        <a href="www.google.com"><img src={google} alt="" className='img-fluid' /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;