import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    return (
        // <div className='register-form'>
        //     <h2 style={{ textAlign: 'center' }}>Please Register</h2>
        //     <form >
        //         <input type="text" name="name" id="" placeholder='Your Name' />

        //         <input type="email" name="email" id="" placeholder='Email Address' required />

        //         <input type="password" name="password" id="" placeholder='Password' required />
        //         <input type="checkbox" name="terms" id="terms" />
        //         <label className={`ps-2 `} htmlFor="terms">Accept Genius Car Terms and Conditions</label>
        //         <input

        //             className='w-50 mx-auto btn btn-primary mt-2'
        //             type="submit"
        //             value="Register" />
        //     </form>
        //     <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' >Please Login</Link> </p>
        //     <SocialLogin></SocialLogin>
        // </div>
         <div className='container w-50 mx-auto'>
       
         <h2 className='text-primary text-center mt-2'>Please Login</h2>
         <Form>
         <Form.Group className="mb-3" controlId="formBasicName">
                 <Form.Control  type="text" placeholder="Enter Name" required />
             </Form.Group>
             <Form.Group className="mb-3" controlId="formBasicEmail">
                 <Form.Control  type="email" placeholder="Enter email" required />
             </Form.Group>
             <Form.Group className="mb-3" controlId="formBasicPassword">
                 <Form.Control type="password" placeholder="Password" required />
             </Form.Group>
             <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                 Register
             </Button>
         </Form>
        
         <p>New? <Link to="/login" className='text-primary pe-auto text-decoration-none' >Please Login</Link> </p>
         <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' >Reset Password</button> </p>
         <SocialLogin></SocialLogin>
        
     </div>
    );
};

export default Register;