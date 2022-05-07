import React from 'react';
import Banner from '../Banner/Banner';
import Categorys from '../Categorys/Categorys';
import Products from '../Products/Products';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Products></Products>
            <Categorys></Categorys>
        </>
    );
};

export default Home;