import React from 'react';
import facebook from '../../images/social/facebook.png'
import google from '../../images/social/google.png'
import github from '../../images/social/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const SocialLogin = () => {

    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithGithub] = useSignInWithGithub(auth)



    return (
        <div>
        <div className='d-flex align-items-center'>
            <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            <p className='mt-2 px-2'>or</p>
            <div style={{ height: '1px' }} className='bg-primary w-50'></div>
        </div>

        <div className='social-inner d-flex flex-row justify-content-center align-items-center'>
            <button onClick={()=> signInWithGoogle()}
             
                className='btn btn-none w-50 d-block mx-auto my-2'>
                <img style={{ width: '30px' }} src={google} alt="" />
                
            </button>
            <button className='btn btn-none w-50 d-block mx-auto my-2'>
                <img style={{ width: '30px' }} src={facebook} alt="" />
                
            </button>
            <button onClick={()=> signInWithGithub()}
                
                className='btn btn-none w-50 d-block mx-auto'>
                <img style={{ width: '30px' }} src={github} alt="" />
               
            </button>
        </div>
    </div>
    );
};

export default SocialLogin;