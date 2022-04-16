import React from 'react';
import { Button, Container, Nav, Navbar} from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" sticky='top' variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className='w-25'>React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className=' d-flex justify-content-between'>
                        <Nav className="">
                            <Nav.Link className='pe-5 ms-5' to="/">Home</Nav.Link>
                            <Nav.Link className='pe-5' to="/gallery">Gallery</Nav.Link>
                            <Nav.Link className='pe-5' to="/services">Services</Nav.Link>
                            <Nav.Link className='pe-5' to="/blogs">Blogs</Nav.Link>
                        </Nav>
                        <Nav>
                            <Button>cart</Button>
                            <Nav.Link to="/login">Login</Nav.Link>
                            <Nav.Link to="/register">Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;