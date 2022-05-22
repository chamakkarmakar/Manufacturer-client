import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../SharedItem/Loading';
import SocialLogin from './SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/"; 
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

        if (user) {
            navigate(from, { replace: true });
        }

    if (loading) {
        return <Loading></Loading>;
    }

    if (error) {
        errorElement = <p className='text-red-900 font-bold text-center'>invalid email/password</p>
    }

    const handleSignIn = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email,password);
        signInWithEmailAndPassword(email, password);
        event.target.reset();
    }
    return (
        <div className="container mx-auto lg:w-1/2 w-full my-12">
            <div className="flex flex-col lg:flex-row">
                <div className="card flex-shrink-0 lg:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center">Sign in now!</h1>
                        {errorElement}
                        <form onSubmit={handleSignIn}>
                            <input type="email" ref={emailRef} placeholder="@email.com" name='email'  className="input input-bordered mt-5 outline-none w-full" />

                            <input type="password" ref={passwordRef} placeholder="****************" name='password' className="input input-bordered outline-none w-full mt-5" />

                            <div className="flex justify-end mt-2">
                                <Link to='/' className="label-text-alt link link-hover text-blue-600">Forgot password?</Link>
                            </div>

                            <div className="mt-6">
                                <button className="btn btn-primary text-white font-bold w-full">Sign in</button>
                            </div>
                            <p className='mt-3 font-bold'>New to this site? <Link to='/register' className='text-blue-500 cursor-pointer'>Create a New Account </Link> </p>
                        </form>
                        
                    </div>
                </div>
                <div className="divider lg:divider-horizontal">OR</div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;