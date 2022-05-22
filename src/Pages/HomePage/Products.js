import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('fakedb_parts.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data);
            })
    }, [])

    return (
        <div className='container mx-auto my-7'>
            <h1 className='text-2xl text-center font-semibold'>Products: {products.length}</h1>
            <div className='grid grid-cols-3 gap-5'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>

        </div>
    );
};

export default Products;