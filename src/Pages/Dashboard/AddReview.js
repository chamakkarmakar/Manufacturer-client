import React from 'react';
import { useForm } from "react-hook-form";

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const reviewAdd = {
            user: data.name,
            userReview: data.review,
            ratings: data.rating
        }
        console.log(reviewAdd);

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(reviewAdd)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    console.log('Review added successfully')
                    reset();
                }
                else {
                    console.log('Failed to add the review');
                }
            })
    }
    return (
        <div className='container mx-auto lg:w-1/2'>

            <form onSubmit={handleSubmit(onSubmit)} className='py-5 shadow-2xl flex flex-col justify-center items-center'>
                <h2 className="text-2xl font-semibold">Add Review</h2>
                <div className="form-control w-full max-w-xs flex">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs flex">
                    <label className="label">
                        <span className="label-text">Review</span>
                    </label>
                    <textarea
                        className="textarea textarea-bordered w-full max-w-xs"
                        placeholder="Your Review"
                        {...register("review", {
                            required: {
                                value: true,
                                message: 'This field is required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.review?.type === 'required' && <span className="label-text-alt text-red-500">{errors.review?.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs flex">
                    <label className="label">
                        <span className="label-text">Ratings</span>
                    </label>

                    <select {...register("rating")} className="select select-bordered w-full max-w-xs">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>

                <input className='btn w-full max-w-xs mt-7 text-white' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddReview;