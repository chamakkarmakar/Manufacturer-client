import React from 'react';

const Review = ({review}) => {
    const { user,ratings,userReview } = review;
    return (
       
        <div className="card bg-base-100 shadow-xl">
         <div className='flex items-center justify-evenly mt-3'>
            <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt='' />
                </div>
                <div className='mx-5'>
                        <h2 className='text-xl font-bold'>{user}</h2>
                        <p>ratings : { ratings}</p>
                </div>
            </div>
        </div>
        <div className="card-body">
                <p>{ userReview}</p>
        </div>
      </div>
    );
};

export default Review;