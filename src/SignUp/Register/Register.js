import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,

    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});


    const nameRef = useRef()
    const emailRef = useRef();
    const passwordRef = useRef()


    const [agree, setAgree] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(name, email, password)
        createUserWithEmailAndPassword(email, password);
    }


    return (

        <div className='container w-25 mx-auto'>

            <h2 className='text-primary text-center mt-5 mb-5'>Please Register</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control ref={nameRef} type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>


                <div>

                    <Form.Check type='checkbox' >
                        <Form.Check.Input onClick={() => setAgree(!agree)} type='checkbox' isValid />
                        <Form.Check.Label className={`ps-2 ${agree ? '' : 'text-danger'}`} >Accept tearm and conditions</Form.Check.Label>
                        <Button disabled={!agree} variant="primary w-50 mx-auto d-block mb-2 mt-3" type="submit">
                            Register
                        </Button>
                    </Form.Check>
                </div>
            </Form>

            <p>New? <Link to="/login" className='text-primary pe-auto text-decoration-none' >Please Login</Link> </p>
            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Register;