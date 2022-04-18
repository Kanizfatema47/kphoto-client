import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const RequiredAuth = ({children}) => {
    const location = useLocation()
    const navigate = useNavigate();
    const [user] = useAuthState(auth)

    // if (!user) {
    //     return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    //   }

    if(!user){
        return <Navigate to='/login' state={{from: location}} replace ></Navigate>
    }

    return children ;
};

export default RequiredAuth;