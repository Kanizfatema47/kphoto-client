import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo (1).png'
import facebook from '../../images/social/facebook.png'; 
import github from '../../images/social/github.png'; 
import google from '../../images/social/google.png'; 
import './Footer.css'

const Footer = () => {
    return (
        <footer className='mt-5 pt-5 pb-5 footer'>
            <div className='d-flex container justify-content-evenly footer-section '>
                <div className="left-portion footer-inner d-flex flex-rows justify-content-center align-items-center">
                <Link className='' to='/'><img src={logo} alt="" style={{'color': `#5F9EA0`}} /> </Link>
                        <h2 className='fs-3'>KPhoto</h2>
                </div>
                <div className="middle-portion mx-5">
                    <h4>Site Map</h4>
                    <div className='d-flex flex-column pages'>
                        <Link  to='/'><p>Home</p></Link>
                        <Link to='/gallery'><p>Gallery</p></Link>
                        <Link to='/blogs'><p>Blogs</p></Link>
                        <Link to='/about'><p>About Me</p></Link>
                        
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