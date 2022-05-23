import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                <h2 className='text-2xl font-bold text-purple-500'>Dashboard</h2>
                {/* <label htmlFor="dashboard-sidebar" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                        <li><Link to='/dashboard'>My Profile</Link></li>
                        <li><Link to='/dashboard/addreview'>Add Review</Link></li>
                        <li><Link to='/dashboard/order'>My Order</Link></li>
                        <li><Link to='/dashboard/users'>All Users</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;