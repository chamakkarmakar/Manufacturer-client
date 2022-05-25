import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
       
            fetch('https://nameless-ocean-99245.herokuapp.com/order')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrders(data)
            })
        
    }, [])
    return (
        <div className="overflow-x-auto">
            <h2>All Orders : {orders.length}</h2>
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>User</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        orders.map((order,index) =>
                            <tr key={index}>
                                <th>{index+1 }</th>
                                <td>{order.product}</td>
                                <td>{order.email}</td>
                                <td><button  className="btn btn-xs">paid</button></td>

                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageOrders;