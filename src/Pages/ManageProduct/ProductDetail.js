import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { productId } = useParams();
    return (
        <div>
            <h2>Product Details : { productId}</h2>
        </div>
    );
};

export default ProductDetail;