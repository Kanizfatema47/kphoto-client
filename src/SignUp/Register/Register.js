import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
       
    ] = useCreateUserWithEmailAndPassword(auth);


    const nameRef = useRef()
    const emailRef = useRef();
    const passwordRef = useRef()

    const handleSubmit =(e)=>{
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(name,email,password)
        createUserWithEmailAndPassword(email, password);
    }


    return (

        <div className='container w-50 mx-auto'>

            <h2 className='text-primary text-center mt-2'>Please Register</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control ref={nameRef} type="text" placeholder="Enter Name"  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
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