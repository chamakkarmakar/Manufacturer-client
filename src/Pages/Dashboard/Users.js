import React from 'react';

const Users = ({ user,index,refetch }) => {
    const { email ,role} = user;
    const handleAdmin = () => {
        fetch(`https://nameless-ocean-99245.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('userToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    console.error('Failed to Make an admin');
                }
                return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    console.log(`Successfully made an admin`);
                }

            })
    }
    return (
            <tr key={index}>
                <th>{index + 1}</th>
                <td>{user.email}</td>
                <td>{role !== 'admin' && <button onClick={handleAdmin} className="btn btn-xs">Make Admin</button>}</td>
                <td><button  className="btn btn-xs">Remove User</button></td>
            </tr>
    );
};

export default Users;