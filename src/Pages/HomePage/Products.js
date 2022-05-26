import React from 'react';
import useProduct from '../../hooks/useProduct';
import Product from './Product';

const Products = () => {
    const [products] = useProduct();

    return (
        <div className='container mx-auto my-7 md:w-full'>
            <h1 className='text-2xl text-center font-semibold mb-7'>Products</h1>
            <div className="flex justify-center items-center mx-3">
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-5'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
            </div>

        </div>
    );
};

export default Products;