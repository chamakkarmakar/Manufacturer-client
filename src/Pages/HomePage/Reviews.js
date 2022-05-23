import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data);
        })
    },[])
    return (
        <div className='container mx-auto lg:w-full w-4/5 my-12'>
            <h2 className='text-2xl font-semibold text-center mb-7'>Reviews</h2>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;