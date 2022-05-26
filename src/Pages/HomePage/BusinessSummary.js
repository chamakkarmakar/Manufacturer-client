import { PaperAirplaneIcon, SpeakerphoneIcon, StarIcon } from '@heroicons/react/solid';
import React from 'react';
const BusinessSummary = () => {
    return (
        <div class="bg-zinc-100 p-10">
            <h1 tabIndex="0" className="mb-5 text-center text-5xl font-extrabold tracking-wide text-gray-800 focus:outline-none md:text-3xl xl:text-5xl">Business Summary</h1>
            <div class="md:flex">
                <div class="flex items-center rounded-tl-lg bg-[#0a9dff8e] p-8 text-white sm:rounded-tr-lg md:w-7/12 md:rounded-tr-none md:rounded-bl-lg">
                    <div>
                        <h1 class="mb-5 text-4xl font-bold">Already Gained Trust of a <span class="text-slate-600">LOT OF CAR OWNERS</span>!</h1>
                        <h2 class="mb-12 text-justify text-sm">Several Years of expertise in this field make us great in this field. We offer service parts at very competitive prices with Free Delivery across the whole of Great Bangladesh (BD). We specialize in all the major car parts. our business stats say about our excellence.</h2>
                        <div class="flex">
                            <div class="mr-5">

                                <PaperAirplaneIcon className='w-5 h-5'></PaperAirplaneIcon>

                                <p class="text-3xl font-bold">14k+</p>
                                <p class="text-sm">Car Parts Delivered.</p>
                            </div>
                            <div class="mr-6">
                                    <StarIcon className='w-5 h-5'></StarIcon>
                                <p class="text-3xl font-bold">10/10</p>
                                <p class="text-sm">Rated by the Customers!</p>
                            </div>
                            <div>
                                <SpeakerphoneIcon className='w-5 h-5'></SpeakerphoneIcon>

                                <p class="text-3xl font-bold">2+</p>
                                <p class="text-">Times awarded for Best Car Parts Manufacturer!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative md:w-5/12">
                    <div class="absolute h-full w-full rounded-br-lg bg-[#0fceeb7a] opacity-50 sm:rounded-bl-lg md:rounded-bl-none md:rounded-tr-lg"></div>
                    <img class="h-full w-full rounded-br-lg object-cover sm:rounded-bl-lg md:rounded-bl-none md:rounded-tr-lg" src="https://images.unsplash.com/photo-1519752594763-2633d8d4ea29?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070" alt="Banner Desktop" />
                </div>
            </div>
        </div>

    );
};

export default BusinessSummary;