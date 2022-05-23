import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useProductDetails from '../../hooks/useProductDetail';

const ProductDetail = () => {
    const { productId } = useParams();
    const [user] = useAuthState(auth);
    const [product] = useProductDetails(productId);
    
    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email:user.email,
            product: product.parts,
            productId: productId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        console.log(order);
    }

    return (
        <div className='container lg:w-1/2 w-4/5 mx-auto my-12'>
            <h2 className='text-2xl text-center'>Please Order: {product.parts}</h2>
            <form onSubmit={handlePlaceOrder} className='flex flex-col'>
            <input type="text" placeholder='email' required readOnly  className="input input-bordered w-full mt-5" value={user?.email}/>
               
                <input type="text" placeholder='name'  readOnly  className="input input-bordered w-full mt-5" value={user?.displayName}/>
               
                <input type="text" placeholder='product' required readOnly  className="input input-bordered w-full mt-5" value={product.parts}/>
               
                <input className="input input-bordered w-full mt-5" type="text" name="address" placeholder='address' autoComplete='off' required />
               
                <input className="input input-bordered w-full mt-5" type="text" name="phone" placeholder='phone' required />
               
                <input className='btn btn-primary text-white font-bold mt-5' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default ProductDetail;