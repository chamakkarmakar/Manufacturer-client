import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../SharedItem/Loading';


const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        <Loading></Loading>
    }
    const handleUpdateProfile = e => {
        e.preventDefault();
        const updateProfile = {
            displayName: e.target.name.value,
            email: e.target.email.value,
            location: e.target.address.value,
            education : e.target.education.value,
            linkedin: e.target.linkedin.value
        }
        console.log(updateProfile);
        fetch(`https://nameless-ocean-99245.herokuapp.com/user/${user?.email}`,{
            method: 'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateProfile)
        })
        .then(res=>res.json())
            .then(data => {
                if (data.modifiedCount) {
                toast("Your Information successfully Updated")
            }
            // console.log(data);
        })
        e.target.reset();
    }
    return (
        <div>
            <h1 className='text-2xl text-center'>My Profile</h1>
            <form onSubmit={handleUpdateProfile} className='md:w-9/12 w-full mx-auto'>

                <div className='flex flex-col md:flex-row justify-between items-center mt-5'>
                    <label htmlFor="name" className='text-lg '>Name: </label>
                    <input className="border rounded h-10 w-9/12 px-4 focus:outline-none" value={user.displayName} type="text" name="name" />
                </div>

                <div className='flex flex-col md:flex-row justify-between items-center mt-5'>
                    <label htmlFor="email" className='text-lg '>Email: </label>
                    <input className="border rounded h-10 w-9/12 px-4 focus:outline-none" type="email" value={user.email} name="email" readOnly />
                </div>

                <div className='flex flex-col md:flex-row justify-between items-center mt-5'>
                    <label htmlFor="address" className='text-lg '>Location : </label>
                    <textarea className="border rounded h-20 w-9/12 px-4 focus:outline-none" type="text" name="address" />
                </div>

                <div className='flex flex-col md:flex-row justify-between items-center mt-5'>
                    <label htmlFor="education" className='text-lg '>Education : </label>
                    <select className="border rounded h-20 w-9/12 px-4 focus:outline-none" name="education">
                        <option value="hons">Hon's</option>
                        <option value="masters">Master's</option>
                        <option value="graduated">Graduated</option>
                        <option value="college">College Student</option>
                        <option value="school">School Student</option>
                    </select>
                </div>

                <div className='flex flex-col md:flex-row justify-between items-center mt-5'>
                    <label htmlFor="linkedin" className='text-lg '>LinkedIn: </label>
                    <input className="border rounded h-10 w-9/12 px-4 focus:outline-none" type="text" name="linkedin" />
                </div>

                <button type="submit" className="text-white bg-rose-500 hover:bg-rose-800 my-9 focus:outline-none  font-medium rounded-lg text-sm w-auto md:mx-auto  px-5 py-2.5 ml-16 text-center">Update</button>
            </form>
        </div>
    );
};

export default MyProfile;