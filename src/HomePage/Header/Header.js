import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
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


    const [user] = useAuthState(auth);

    const logout = () =>{
        signOut(auth)
    }
    return (

        <>
            <header className={navbar ? 'header active' : 'header'}>
                <div className="navbar container d-flex flex-row justify-content-between align-items-center">
                    <nav className='d-flex flex-rows justify-content-center align-items-center'>
                        <Link className='' to='/'><img src={logo} alt="" style={{'color': `#5F9EA0`}} /> </Link>
                        <h2 className='fs-3'>KPhoto</h2>
                    </nav>
                    <nav>
                        <Link className='' to='/'>Home</Link>
                        <Link className='' to='/gallery'>Gallery</Link>
                        <Link className='' to='/services'>Services</Link>
                        <Link className='' to='/blogs'>Blog</Link>
                        <Link className='' to='/about'>About Me</Link>
                    </nav>
                    <nav>
                        {
                            user ? <Button onClick={logout}>LogOut</Button> : <Link className='' to='/login'>Login</Link>

                        }
                        <Link className='' to='/register'>Register</Link>
                        

                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;

