import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const {_id, parts, img, description,minQty,qty,price } = product;
    const navigate = useNavigate();
    const navigateToProductDetail = id =>{
        navigate(`/product/${id}`);
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{parts }</h2>
                <p>{description}</p>
                <p><strong>available quantity:</strong> {qty }</p>
                <p><strong>minimum order quantity:</strong> {minQty}</p>
                <p><strong>Price: $</strong>{price}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=>navigateToProductDetail(_id)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;