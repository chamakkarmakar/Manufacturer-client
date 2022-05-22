import React from 'react';

const MyPortfolio = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://api.lorem.space/image/movie?w=260&h=400" className="max-w-sm rounded-lg shadow-2xl" alt=''/>
                    <div>
                        <h1 className="text-5xl font-bold">CHAMAK KARMAKAR</h1>
                        <p className="py-4">Phone : 01756-949075</p>
                        <p>Email : chamakkarmakar.ck@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly items-center">
            <div>
                <h2 className='text-3xl'>Educational BackGround</h2>
                <h4>B.Sc in Computer Science & Engineering (2017-2021) </h4>
                <p>BGC TRUST UNIVERSITY, BANGLADESH.</p>
            </div>
            <div>
                <h2 className='text-3xl'>Key Skills</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>BOOTSTRAP</li>
                    <li>TAILWIND</li>
                    <li>JAVASCRIPTS</li>
                    <li>REACT</li>
                    <li>NODE.JS</li>
                    <li>EXPRESS.JS</li>
                </ul>
            </div>
            </div>
        </div>
    );
};

export default MyPortfolio;