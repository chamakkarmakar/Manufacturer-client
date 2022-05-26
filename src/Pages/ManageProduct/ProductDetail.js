import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useProductDetails from '../../hooks/useProductDetail';

const ProductDetail = () => {
    const { productId } = useParams();
    const [user] = useAuthState(auth);
    const [product] = useProductDetails(productId);
    const { parts, minQty, qty, price, description, img } = product;
    const [isDisabled, setIsDisabled] = useState(false);
    let errorElement;

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            product: product.parts,
            productId: productId,
            address: event.target.address.value,
            phone: event.target.phone.value,
            price : event.target.price.value
        }
        console.log(order);
        const url = `https://nameless-ocean-99245.herokuapp.com/order`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        event.target.reset();

    }
   
    const handleMinQty = e => {
        const minqty = e.target.value;
        console.log(minqty);
        if(minqty < minQty || minqty > qty){
            setIsDisabled(true);
            errorElement=<p className='text-red-500 text-center'>Enter minimum quantity</p>
        }
        else {
            setIsDisabled(false);
            errorElement=<p className='text-red-500 text-center hidden'>Enter minimum quantity</p>
        }
       
    }

    return (
        <div className='container w-4/5 mx-auto my-12'>
            <div className="w-3/4 mx-auto">
                <div className="hero bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={img} width='50%' heigth='50%' alt='' />
                        <div>
                            <h1 className="text-5xl font-bold">{parts}</h1>
                            <p className="py-6">{description}</p>
                            <p><strong>available quantity:</strong> {qty}</p>
                            <p><strong>minimum order quantity:</strong> {minQty}</p>
                            <p><strong>Price: $</strong>{price}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-5/5 mx-auto my-20 border-b-2 border-[#0fceeb] pt-3 opacity-25 lg:mx-0"></div>
            
            <div className='w-3/4 mx-auto card shadow-2xl px-20 py-12'>
                <h2 className='text-2xl text-center'>Order Place For <strong>{parts}</strong></h2>
                <form onSubmit={handlePlaceOrder} className='flex flex-col'>


                    <input type="text" placeholder='email' required readOnly className="input input-bordered w-full mt-5" value={user?.email} />

                    <input type="text" placeholder='name' readOnly className="input input-bordered w-full mt-5" value={user?.displayName} />

                    <input type="text" placeholder='product' required readOnly className="input input-bordered w-full mt-5" value={parts} />

                    <label className="input-group mt-5 w-full">
                        <span>Available </span>
                        <input type="number" placeholder="available quantity" readOnly value={qty} className="input input-bordered w-full" />
                    </label>

                    <label className="input-group mt-5 w-full">
                        <span>Price </span>
                        <input type="text" placeholder="Price" readOnly value={price} name='price' className="input input-bordered w-full" />
                    </label>

                    <label className="input-group mt-5 w-full">
                        <span>Order </span>
                        <input type="number" placeholder={`minmun order qty ${minQty}`} onChange={handleMinQty} name='minQty' className="input input-bordered w-full" />
                    </label>
                    {errorElement}

                    <input className="input input-bordered w-full mt-5" type="text" name="address" placeholder='address' autoComplete='off' required />

                    <input className="input input-bordered w-full mt-5" type="text" name="phone" placeholder='phone' required />

                    <input className='btn btn-primary text-white font-bold mt-5' type="submit"
                        value="Place Order" disabled={isDisabled}
                    />
                </form>
            </div>

        </div>
    );
};

export default ProductDetail;