import React from 'react';

const Review = ({review}) => {
    const { img,user,ratings,userReview } = review;
    return (
       
        <div class="card w-96 bg-base-100 shadow-xl">
         <div className='flex items-center justify-evenly mt-3'>
            <div class="avatar">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={ img} alt='' />
                </div>
                <div className='mx-5'>
                        <h2 className='text-xl font-bold'>{user}</h2>
                        <p>ratings : { ratings}</p>
                </div>
            </div>
        </div>
        <div class="card-body">
                <p>{ userReview}</p>
        </div>
      </div>
    );
};

export default Review;