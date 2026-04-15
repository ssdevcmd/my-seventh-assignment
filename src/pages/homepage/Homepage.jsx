import React from 'react';
import Banner from '../../components/homepage/Banner';
import Statistics from '../../components/homepage/Statistics';
import Friends from '../../components/homepage/Friends';

const Homepage = () => {
    return (
        <>
            <Banner></Banner>
            <Statistics></Statistics>
            <Friends></Friends>
        </>
    );
};

export default Homepage;