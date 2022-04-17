import React from 'react';
import Services from '../../Pages/Services/Services';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <Gallery></Gallery>
            <Services></Services>
        </div>
    );
};

export default Home;