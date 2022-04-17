import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo (1).png'
import './Header.css'

const Header = () => {

    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
        if(window.scrollY >= 80){
            setNavbar(true)
        }
        else{
            setNavbar(false)
        }
       
    }
    window.addEventListener('scroll', changeBackground);
    return (

        <>
            <header className={navbar ? 'header active' : 'header'}>
                <div className="navbar container d-flex flex-row justify-content-between align-items-center">
                    <nav>
                        <Link className='' to='/'><img src={logo} alt="" style={{'color': `#5F9EA0`}} /> </Link>
                    </nav>
                    <nav>
                        <Link className='' to='/'>Home</Link>
                        <Link className='' to='/gallery'>Gallery</Link>
                        <Link className='' to='/services'>Services</Link>
                        <Link className='' to='/blogs'>Blog</Link>
                        <Link className='' to='/about'>About Me</Link>
                    </nav>
                    <nav>
                        <Link className='' to='/login'>Login</Link>
                        <Link className='' to='/register'>Register</Link>
                        

                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;

