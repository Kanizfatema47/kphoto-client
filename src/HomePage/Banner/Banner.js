import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner/banner1.jpg'
import banner2 from '../../images/banner/banner2.jpg'
import banner3 from '../../images/banner/banner3.jpg'
import banner4 from '../../images/banner/banner4.jpg'
import banner5 from '../../images/banner/banner5.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner '>
            <Carousel className=''>
                <Carousel.Item interval={1000} className=''>
                    <img src={banner1} alt='' className=' '/>
                    <Carousel.Caption>
                        <h1>The Wild Life</h1>
                        <p>Keep your love of nature, for that is the true way to understand art more and more</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500} className=''>
                <img src={banner2} alt=''className=''/>
                    <Carousel.Caption>
                        <h1>The Wild Life</h1>
                        <p>Keep your love of nature, for that is the true way to understand art more and more</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500} className=''>
                <img src={banner3} alt=''className=' '/>
                    <Carousel.Caption>
                        <h1>The Wild Life</h1>
                        <p>Keep your love of nature, for that is the true way to understand art more and more</p>
                    </Carousel.Caption>
                </Carousel.Item >
                <Carousel.Item interval={500} className=''>
                <img src={banner4} alt=''className=' '/>
                    <Carousel.Caption>
                        <h1>The Wild Life</h1>
                        <p>Keep your love of nature, for that is the true way to understand art more and more</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500} className=''>
                <img src={banner5} alt=''className=' '/>
                    <Carousel.Caption>
                        <h1>The Wild Life</h1>
                        <p>Keep your love of nature, for that is the true way to understand art more and more</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;