import React, { useEffect, useState } from 'react';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://nameless-ocean-99245.herokuapp.com/product')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProducts(data);
            })
    }, [])

    const handleProductDelete = id => {
        const proceed = window.confirm('Are you sure to delete?');
        if (proceed) {
            const url = `https://nameless-ocean-99245.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('userToken')}`
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
        }
    }
    
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Available Quantity</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product =>
                            <tr key={product._id}>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={product.img} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{product.parts}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span className="badge badge-ghost badge-sm px-5 py-3">{product.qty}</span>
                            </td>
                            <td>{product.price}</td>
                            <th>
                                <button onClick={()=>handleProductDelete(product._id)} className="btn btn-ghost btn-xs">delete</button>
                            </th>
                        </tr>
                            )
                   }
                </tbody>

            </table>
        </div>
    );
};

export default ManageProduct;