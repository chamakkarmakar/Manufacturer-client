import React from 'react';
import { Link } from 'react-router-dom';

const MyPortfolio = () => {
    return (
        <div>
            <section class="mt-20 bg-white">
                <div class="mx-auto max-w-2xl px-6 text-center">
                    <h2 class="font-body dark:text-secondary_light mb-3 text-center text-4xl text-gray-800 md:text-5xl lg:text-5xl">Hello! I'm <span class="rounded text-primary font-semibold px-1 ">Chamak Karmakar</span></h2>
                    <h2 class="font-light text-xl my-5">Frontend Developer</h2>

                    <div class="w-5/5 mx-auto my-0 border-b-2 border-[#0fceeb] pt-3 opacity-25 lg:mx-0"></div>
                    <div class="mt-16 flex items-end justify-center"></div>
                </div>
            </section>
            <hr class="border-gray-300" />

            <section class="px-20 mt-10">
                <h4 class="mb-8 text-3xl font-bold text-center md:text-left">PERSONAL INFORMATION</h4>
                <div class="grid grid-cols-1 md:grid-cols-6 my-10">
                    <div class="flex flex-col  mb-4 md:mb-0">
                        <h5 class="text-xl font-bold">Email Address:</h5>
                    </div>
                    <div class="flex flex-col">
                        <p>chamakkarmakar.ck@gmail.com</p>
                    </div>
                </div>
            </section >
            <hr class="border-gray-300" />

            <section class="px-20 mt-10">
                <h4 class="mb-8 text-3xl font-bold text-center md:text-left">Education</h4>
                <div class="grid grid-cols-1 md:grid-cols-6 my-10">
                    <div class="flex flex-col col-span-2 mb-4 md:mb-0">
                        <h5 class="text-xl md:text-2xl  font-bold">B.Sc in Computer Science and Engineering</h5>
                        <h6 class="text-lg font-bold">BGC Trust University, Chattogram</h6>
                        <p>Jan 2017 - Dec 2021</p>
                    </div>
                    <div class="flex flex-col col-span-4 ">
                        <p>I have completed my Graduation from here. It is the place where my journey of coding started here. I have participated in several programming contests. 
                        </p>
                        
                    </div>
                </div>
            </section>
            <hr class="border-gray-300" />

            <section class="px-20 mt-10">
                <h4 class="mb-8 text-3xl font-bold text-center md:text-left">Projects</h4>
                <div class="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 gap-6 mb-10">
                    <div class="flex flex-col bg-white rounded p-4 items-center shadow-lg border-r-8 border-[#0fceeb]">
                        <h2 class="font-medium   text-blue-800">Surprise Dairy!</h2>
                        <Link to='https://warehouse-management-cli-2f12c.web.app/' class="text-blue-500">Live Site</Link>
                        <p class="p-4 text-gray-600">
                            Web application for managing inventory of Dairy Based Products. The Concept is Inventory Management.
                        </p>
                        <p><span className="text-xl font-semibold">Technology : </span>React, Node.JS, Express.JS, MongoDB</p>
                    </div>
                    <div class="flex flex-col bg-white rounded p-4 items-center shadow-lg border-r-8 border-[#0fceeb]">
                        
                        <h2 class="font-medium   text-blue-800">Attorney@Law</h2>
                        <Link to='https://independent-service-provider-1.web.app/' class="text-blue-500">Live Site</Link>                    
                        <p class="p-4 text-gray-600">
                            Web application for a Law Service Provider. The Concept is Independent Service Provider.
                        </p>
                        <p><span className="text-xl font-semibold">Technology : </span>React, JS, JSX</p>
                    </div>
                    <div class="flex flex-col bg-white rounded p-4 items-center shadow-lg border-r-8 border-[#0fceeb]">
                        
                        <h2 class="font-medium   text-blue-800">Product (iMAC) Review</h2>
                        <Link to='https://iridescent-mooncake-ef1f54.netlify.app/' class="text-blue-500">Live Site</Link>                    
                        <p class="p-4 text-gray-600">
                            Web application for a Product (iMAC) Review. The Concept is the review of a specific product.
                        </p>
                        <p><span className="text-xl font-semibold">Technology : </span>React, JS, JSX</p>
                    </div>
                </div>
            </section>

            <hr class="border-gray-300" />
            <section class="px-20 mt-10">
                <h4 class="mb-8 text-3xl font-bold text-center md:text-left">Skills</h4>
                <div class="grid lg:grid-cols-1 sm:grid-cols-1 my-10">
                    <div class="flex flex-wrap gap-4 text-white">
                        <div class="pill bg-gray-400 rounded-full text-sm font-normal   px-4 py-1 mr-2">
                            HTML & CSS
                        </div>
                        <div class="pill bg-gray-400 rounded-full text-sm font-normal   px-4 py-1 mr-2">
                            TailwindCSS
                        </div>
                        <div class="pill bg-gray-400 rounded-full text-sm font-normal   px-4 py-1 mr-2">
                            Bootstrap
                        </div>
                        <div class="pill bg-gray-400 rounded-full text-sm font-normal   px-4 py-1 mr-2">
                            JavaScript
                        </div>
                        <div class="pill bg-gray-400 rounded-full text-sm font-normal   px-4 py-1 mr-2">
                            NodeJS
                        </div>
                        <div class="pill bg-gray-400 rounded-full text-sm font-normal   px-4 py-1 mr-2">
                            ReactJS
                        </div>
                        <div class="pill bg-gray-400 rounded-full text-sm font-normal   px-4 py-1 mr-2">
                            ExpressJS
                        </div>
                        <div class="pill bg-gray-400 rounded-full text-sm font-normal   px-4 py-1 mr-2">
                            API
                        </div>
                        <div class="pill bg-gray-400 rounded-full text-sm font-normal   px-4 py-1 mr-2">
                            MongoDB
                        </div>
                        <div class="pill bg-gray-400 rounded-full text-sm font-normal   px-4 py-1 mr-2">
                            Firebase
                        </div>

                    </div>
                </div>
            </section>
        </div >
    );
};

export default MyPortfolio;