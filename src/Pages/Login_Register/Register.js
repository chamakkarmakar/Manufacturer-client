import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="container mx-auto lg:w-1/2 w-full my-12">
            <div className="flex flex-col lg:flex-row">
                <div className="card flex-shrink-0 lg:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center">Sign up now!</h1>

                        <form>
                            <input type="text" placeholder="User Name" name='username' className="input input-bordered mt-5 outline-none w-full" />

                            <input type="email" placeholder="@email.com" name='email' className="input input-bordered mt-5 outline-none w-full" />

                            <input type="password" placeholder="****************" name='password' className="input input-bordered outline-none w-full mt-5" />

                            <div className="mt-6">
                                <button className="btn btn-primary text-white font-bold w-full">Sign up</button>
                            </div>
                            <p className='mt-3 font-bold'>Already have an Account? Please <Link to='/login' className='text-blue-500 cursor-pointer'>Sign in </Link> </p>
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

export default Register;