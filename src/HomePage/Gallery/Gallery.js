import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Gallery = () => {

    return (
        <div>
            <h2>Gallery</h2>
            <div className='m-auto'>
                <ButtonGroup aria-label="Basic example">
                    <Link to='/all' ><Button variant="secondary" >All</Button></Link>
                    <Link to='/wildlife'> <Button variant="secondary" >Wildlife</Button></Link>
                    <Link to='/nature'><Button variant="secondary" >Bird</Button></Link>
                </ButtonGroup>
            </div>
            <Button>See All</Button>
        </div>
    );
};

export default Gallery;