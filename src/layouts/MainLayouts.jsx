import React from 'react';
import Navber from '../components/Navber';
import { Outlet } from 'react-router-dom';

const MainLayouts = () => {
    return (
        <div>
            {/* Navbar */}
            <Navber />

            {/* dynamic layouts */}
            <div className='min-h-[calc(100vh - 300px)] w-11/12 mx-auto my-12'>
                <Outlet />
            </div>
            
            
        </div>
    );
};

export default MainLayouts;