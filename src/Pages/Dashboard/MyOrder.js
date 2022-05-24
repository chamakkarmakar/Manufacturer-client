import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setOrders(data);
                });
        }
    }, [user])

    return (
        <div className="overflow-x-auto">
            <table class="table table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Product</th>
                        <th>Phone</th>
                        <th>location</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) =>
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{order.email}</td>
                                <td>{order.product}</td>
                                <td>{order.phone}</td>
                                <td>{order.address}</td>
                            </tr>
                        )}
                </tbody>
            </table>
        </div>
    );
};

export default MyOrder;