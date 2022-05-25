import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import MapInfo from './MapInfo';
import OurClients from './OurClients';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <OurClients></OurClients>
            <MapInfo></MapInfo>
        </div>
    );
};

export default Home;