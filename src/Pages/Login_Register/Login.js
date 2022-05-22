import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        
        <div className="container mx-auto lg:w-1/2 w-full my-12">
            <div className="flex flex-col lg:flex-row">
                <div className="card flex-shrink-0 lg:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center">Sign in now!</h1>

                        <form>

                            <input type="email" placeholder="@email.com" name='email' className="input input-bordered mt-5 outline-none w-full" />

                            <input type="password" placeholder="****************" name='password' className="input input-bordered outline-none w-full mt-5" />

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