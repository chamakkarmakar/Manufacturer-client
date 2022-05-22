import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('fakedb_reviews.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data);
        })
    },[])
    return (
        <div>
            <h2 className='text-2xl font-semibold text-center mb-7'>Reviews : {reviews.length}</h2>
            <div className='grid grid-cols-3 gap-5'>
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