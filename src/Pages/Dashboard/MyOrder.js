import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`https://nameless-ocean-99245.herokuapp.com/order?email=${user.email}`,{
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('userToken')}`
                }
            })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('userToken');
                    navigate('/');
                }
                return res.json()
            })
                .then(data => {
                    console.log(data);
                    setOrders(data);
                });
        }
    }, [user,navigate])

    return (
        <div className="overflow-x-auto">
            <table className="table table-compact w-full">
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