import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://nameless-ocean-99245.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setReviews(data);
            })
    }, [])
    return (
        <div className='container mx-auto my-16 md:w-full'>
        <h6 tabIndex="0" className="text-center font-normal text-gray-400">Client</h6>
            <h1 tabIndex="0" className="mb-5 text-center text-5xl font-extrabold tracking-wide text-gray-800 focus:outline-none md:text-3xl xl:text-5xl"> Reviews</h1>
            <div className="flex justify-center items-center mx-3">
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-5'>
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;