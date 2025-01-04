import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/footer';
import Navbar from '../pages/shared/NavBar';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Main;