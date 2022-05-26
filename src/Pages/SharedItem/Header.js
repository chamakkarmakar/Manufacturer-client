import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading';

const Header = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  // console.log(user);
  const menuItems =
    <>
      <li><Link to='/home'>Home</Link></li>
      <li><Link to='/products'>Products</Link></li>
      <li><Link to='/summary'>Business Summary</Link></li>
      <li><Link to='/reviews'>Reviews</Link></li>
      <li><Link to='/blog'>Blog</Link></li>
      <li><Link to='/portfolio'>My PortFolio</Link></li>
      {
        user && <>
          <li><Link to='/dashboard'>Dashboard</Link></li>
          <li><Link to='/profile'>{user.displayName}</Link></li>
        </>
      }
      <li>{user ? <button onClick={() => handleLogOut()} className="btn btn-ghost">Sign out</button> : <Link to='/login'>Sign in</Link>}</li>
    </>
  const handleLogOut = () => {
    signOut(auth);
    localStorage.removeItem('userToken');
  }
  return (
    <div className="navbar bg-base-100 sticky top-0">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-md text-secondary">Automoto Parts</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
        <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
      </div>

    </div>
  );
};

export default Header;