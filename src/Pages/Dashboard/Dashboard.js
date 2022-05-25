import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <h2 className='text-2xl font-bold text-purple-500'>Dashboard</h2>
                    {/* <label htmlFor="dashboard-sidebar" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    <li><Link to='/dashboard'>My Profile</Link></li>

                        {admin ?
                            <>
                                <li><Link to="/dashboard/users">All Users</Link></li>
                                <li><Link to="/dashboard/addProduct">Add Product</Link></li>
                                <li><Link to="/dashboard/manageProduct">Manage Products</Link></li>
                                <li><Link to="/dashboard/manageOrders">Manage Order</Link></li>
                            </> :
                            <>
                                <li><Link to='/dashboard/myorder'>My Order</Link></li>
                                <li><Link to='/dashboard/addreview'>Add Review</Link></li>
                            </>
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;