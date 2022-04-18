import React from 'react';
import faq from '../../images/FAQ.jpg'
const Blogs = () => {
    return (
        <>
            <div className=' mt-5'>
                <div style={{ backgroundImage: `url(${faq}`, height: '200px' }} className="faq d-flex align-items-center justify-content-center">
                    <h1 className=' text-center text-white'>FAQ</h1>
                </div>
                <div className='container'>
                    <div className="accordion mt-5 mb-5" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Difference between `authorization` and `authentication`
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. Authentication needs usually user's login details. While authorization process is done after the authentication process.                              </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Why are you using `firebase`? What other options do you have to implement authentication?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    FireBase was developed by James Tamplin and Andrew lee in 2011. It is a google backed app development service. It is a software development platform for building mobile and web application. There are many advantages that we get from fireabase. These are :
                                    Fast and safe hosting,
                                    Reliable and Extensive Database,
                                    Free multiplatform authentication,
                                    Testing service to improve app quality,
                                    Free use of firebase dynamic links.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    What other services does `firebase` provide other than authentication?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    There are many services which Firebase provides, Most useful of them are:
                                    1. Cloud Firestore
                                    2. Cloud Functions
                                    3. Hosting
                                    4. Cloud Storage
                                    5.  Google Analytics
                                    6.  Predictions
                                    7. Cloud Messaging                                
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Blogs;