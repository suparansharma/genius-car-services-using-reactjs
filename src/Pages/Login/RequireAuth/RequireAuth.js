import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({children}) => {
    const [user,loading] = useAuthState(auth);
    const location = useLocation();
    if(loading){
        return <Loading></Loading>;
    }
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }

    if(!user.emailVerified){
        return <div>
            <h3 className='text-danger'> Your Email is not verified!!</h3>
            <h3 className='text-danger'> Please Verify your email address!</h3>
            <button>Send verification</button>
        </div>
    }
    return children;
};

export default RequireAuth;