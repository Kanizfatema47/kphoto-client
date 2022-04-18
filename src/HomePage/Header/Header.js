import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Container, Nav, Navbar} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo (1).png'
import './Header.css'

const Header = () => {

    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }

    }
    window.addEventListener('scroll', changeBackground);


    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth)
    }
    return (

        // <>
        //     <header className={navbar ? 'header active' : 'header'}>
        //         <div className="navbar container d-flex flex-row justify-content-between align-items-center">
        //             <nav className='d-flex flex-rows justify-content-center align-items-center'>
        //                 <Link className='' to='/'><img src={logo} alt="" style={{'color': `#5F9EA0`}} /> </Link>
        //                 <h2 className='fs-3'>KPhoto</h2>
        //             </nav>
        //             <nav>
        //                 <Link className='' to='/'>Home</Link>
        //                 <Link className='' to='/gallery'>Gallery</Link>
        //                 <Link className='' to='/services'>Services</Link>
        //                 <Link className='' to='/blogs'>Blog</Link>
        //                 <Link className='' to='/about'>About Me</Link>
        //             </nav>
        //             <nav>
        //                 {
        //                     user ? <Button onClick={logout}>LogOut</Button> : <Link className='' to='/login'>Login</Link>

        //                 }
        //                 <Link className='' to='/register'>Register</Link>


        //             </nav>
        //         </div>
        //     </header>
        // </>

        <>
            <header className={navbar ? 'header active' : 'header'}>

                <Navbar collapseOnSelect expand="lg" variant="dark">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <div className='d-flex flex-row justify-content-between align-items-center w-100 nav-section'>
                                <Nav className='d-flex flex-rows justify-content-center align-items-center nav-inner'>
                                    <Link className='' to='/'><img src={logo} alt="" style={{ 'color': `#5F9EA0` }} /> </Link>
                                    <h2 className='fs-3 kphoto text-center'>KPhoto</h2>
                                </Nav>
                                <Nav className="">
                                    <Link className='site' to='/'>Home</Link>
                                    <Link className='site' to='/gallery'>Gallery</Link>
                                    <Link className='site' to='/services'>Services</Link>
                                    <Link className='site' to='/blogs'>Blog</Link>
                                    <Link className='site' to='/about'>About Me</Link>

                                </Nav>
                                <Nav>
                                    {
                                        user ? <Button onClick={logout}>LogOut</Button> : <Link className='' to='/login'>Login</Link>

                                    }
                                    <Link className='' to='/register'>Register</Link>
                                </Nav>
                            </div>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

        </>
    );
};

export default Header;

