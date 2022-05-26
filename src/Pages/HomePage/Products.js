import React from 'react';
import useProduct from '../../hooks/useProduct';
import Product from './Product';

const Products = () => {
    const [products] = useProduct();

    return (
        <div className='container mx-auto my-16 md:w-full'>
          <h6 tabIndex="0" className="text-center font-normal text-gray-400">Best Of</h6>
              <h1 tabIndex="0" className="mb-5 text-center text-5xl font-extrabold tracking-wide text-gray-800 focus:outline-none md:text-3xl xl:text-5xl">Our Products</h1>
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