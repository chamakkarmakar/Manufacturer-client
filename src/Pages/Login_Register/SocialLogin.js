import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../SharedItem/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    const [token] = useToken(user);
    
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    },[navigate,from,token])

    if (loading) {
        return <Loading></Loading>;
    }

   
    return (
        <div className="lg:w-1/2 w-full lg:bg-base-300  flex justify-center items-center">
            <button onClick={() => signInWithGoogle()} className='px-5 py-3 btn btn-primary text-white font-bold shadow-2xl rounded-2xl'>Login with Google+</button>
        </div>
    );
};

export default SocialLogin;