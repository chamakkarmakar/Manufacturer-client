import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://nameless-ocean-99245.herokuapp.com/product')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProducts(data);
            })
    }, [])

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