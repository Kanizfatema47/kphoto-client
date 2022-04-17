import React from 'react';
import faq from '../../images/FAQ.jpg'
const AboutMe = () => {
    return (
        <div>
            <div  style={{ backgroundImage: `url(${faq}`, height: '200px'} } className="faq d-flex align-items-center justify-content-center">
                        <h1 className=' text-center text-white'>About Me</h1>
            </div>
        </div>
    );
};

export default AboutMe;