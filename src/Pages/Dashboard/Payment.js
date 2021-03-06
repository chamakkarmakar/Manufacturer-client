import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../SharedItem/Loading';
import CheckOut from './CheckOut';

const stripePromise = loadStripe('pk_test_51L3b0tDzQt40PM7bQ3EgXUO4SW0ntrI12qTdRDTerunqHpR4KqyESq11eJUUMETLRoerXkoAgjJ5iqBDtkR5F2P100QP8wtCdK');

const Payment = () => {
    const { id } = useParams();
    const url = `https://nameless-ocean-99245.herokuapp.com/order/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        // headers: {
        //     'authorization': `Bearer ${localStorage.getItem('userToken')}`
        // }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <h2 className="card-title">Please Pay for </h2>
                    <span className='text-primary'>{order.product}</span>
                    <p>Please pay: ${order.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckOut order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;