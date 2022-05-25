import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit ,reset} = useForm();
    const imageStorageKey='802f56bfe5fcd59ca3de0f2bde1cd914';
    
    const onSubmit = data => {
        const availableQty = parseInt(data.qty);
        const minQty = parseInt(data.minQty);
        const price = parseInt(data.price);

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);


        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const addProduct = {
                        parts: data.parts,
                        description: data.description,
                        qty: availableQty,
                        minQty: minQty,
                        price: price,
                        img: img
                    }
                    // post data 
                    fetch('http://localhost:5000/product', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('userToken')}`
                        },
                        body: JSON.stringify(addProduct)
                    })
                    .then(res =>res.json())
                    .then(inserted =>{
                        if(inserted.insertedId){
                            console.log('Product added successfully')
                            reset();
                        }
                        else{
                            console.error('Failed to add the Product');
                        }
                    })
                }
        }) 
    }
    
    return (
        <div className='my-12'>
            <h2 className="text-2xl">Add a New Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Product Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("parts", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.parts?.type === 'required' && <span className="label-text-alt text-red-500">{errors.parts.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs flex">
                    <label className="label">
                        <span className="label-text">Product Description</span>
                    </label>
                    <textarea
                        className="textarea textarea-bordered w-full max-w-xs"
                        placeholder="Product Description"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'This field is required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description?.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Available Quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("qty", {
                            required: {
                                value: true,
                                message: 'qty is Required'
                            }
                        })}
                    />
                     <label className="label">
                        {errors.qty?.type === 'required' && <span className="label-text-alt text-red-500">{errors.qty?.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Minimum Order Quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Order Quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("minQty", {
                            required: {
                                value: true,
                                message: 'qty is Required'
                            }
                        })}
                    />
                     <label className="label">
                        {errors.minQty?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minQty?.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Price"
                        className="input input-bordered w-full max-w-xs"
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'price is Required'
                            }
                        })}
                    />
                     <label className="label">
                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price?.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Image</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    
                </div>

                <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddProduct;