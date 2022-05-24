import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import MapInfo from './MapInfo';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <MapInfo></MapInfo>
        </div>
    );
};

export default Home;