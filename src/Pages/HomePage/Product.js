import React from 'react';

const Product = ({product}) => {
    const { parts, img, description,minQty,qty,price } = product;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{parts }</h2>
                <p>{description}</p>
                <p><strong>available quantity:</strong> {qty }</p>
                <p><strong>minimum order quantity:</strong> {minQty}</p>
                <p><strong>Price: $</strong>{price}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;