import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../SharedItem/Loading';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    
        if (user) {
            console.log(user);
        }
    

    if (loading) {
        return <Loading></Loading>;
    }

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
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
                <div className="lg:w-1/2 w-full bg-base-300 flex justify-center items-center">
                    <button className='px-5 py-3 btn btn-primary text-white font-bold rounded-2xl'>Login with Google+</button>
                </div>
            </div>
        </div>
    );
};

export default Login;