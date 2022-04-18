import React from 'react';
import { Link } from 'react-router-dom';
import faq from '../../images/FAQ.jpg'
import women from '../../images/picture.jpg';
import './AboutMe.css'
const AboutMe = () => {
    return (
        <div>
            <div  style={{ backgroundImage: `url(${faq}`, height: '100px'} } className="faq d-flex align-items-center justify-content-center">
                        <h1 className=' text-center text-white'>About Me</h1>
            </div>
            <div className='women d-flex flex-row justify-content-center align-items-center container m-5 p-5'> 
                <img src={women} alt="" className='' />
                <div className='d-flex flex-column justify-content-center'>
                    <h1 className='ms-5'>Hi! I'm Kaniz </h1>
                <p className='ms-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere et maiores, fugiat omnis perferendis ducimus eveniet inventore, quasi sit aliquid dolore tenetur labore eos, ipsam ratione. Optio atque repellat nemo in aperiam?</p>
                <Link to='/' ><button className='bg-dark p-2 text-white mb-4 ms-5 rounded'>Wanna Hire?</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;