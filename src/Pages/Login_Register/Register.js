import React, { useEffect, useRef } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../SharedItem/Loading';
import SocialLogin from './SocialLogin';

const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    let from = location.state?.from?.pathname || "/"; 
    let errorElement;
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [token] = useToken(user);
    
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    },[navigate,from,token])

    if (loading || updating) {
        return <Loading></Loading>;
    }

    if (error || updateError) {
        errorElement = <p className='text-red-900 font-bold text-center'>invalid email/password</p>
    }

    const handleSignUp = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        updateProfile(auth.currentUser,
            { displayName: name });
        console.log(name,password,email)
        createUserWithEmailAndPassword(email,password);

        event.target.reset();
    }
    return (
        <div className="container mx-auto lg:w-1/2 w-full my-12">
            <div className="flex flex-col lg:flex-row">
                <div className="card flex-shrink-0 lg:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center">Sign up now!</h1>
                        {errorElement}
                        <form onSubmit={handleSignUp}>
                            <input type="text" ref={nameRef} placeholder="User Name" name='username' className="input input-bordered mt-5 outline-none w-full" />

                            <input type="email" ref={emailRef} placeholder="@email.com" name='email' className="input input-bordered mt-5 outline-none w-full" />

                            <input type="password" ref={passwordRef} placeholder="****************" name='password' className="input input-bordered outline-none w-full mt-5" />

                            <div className="mt-6">
                                <button className="btn btn-primary text-white font-bold w-full">Sign up</button>
                            </div>
                            <p className='mt-3 font-bold'>Already have an Account? Please <Link to='/login' className='text-blue-500 cursor-pointer'>Sign in </Link> </p>
                        </form>
                    </div>
                </div>
                <div className="divider lg:divider-horizontal">OR</div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;