import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../SharedItem/Loading';
import Users from './Users';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () =>
        fetch('http://localhost:5000/user', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('userToken')}`
            }
        }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1>All Users: {users.length}</h1>
            <div  className="overflow-x-auto">
                <table  className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user,index) =>
                                <Users
                                    key={index}
                                    user={user}
                                    index={index}
                           refetch={refetch}
                                ></Users>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;