import React from 'react';

const Banner = () => {
  return (
    <div className="hero min-h-screen " style={{ background: "url('https://images.unsplash.com/photo-1595787142842-7404bc60470d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870')", backgroundSize: 'cover' }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 md:text-5xl text-2xl font-bold">WE ARE EXPERTS IN
            AUTOMOTIVE PRODUCTS</h1>
          <p className="mb-5">We are committed to supplying our customers with robust automotive components and reliable services through our international commercial and production network</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;