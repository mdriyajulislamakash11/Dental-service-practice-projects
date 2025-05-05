import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../layouts/MainLayouts';
import Home from '../pages/Home';
import AllTreatments from '../pages/AllTreatments';
import MyProfile from '../pages/MyProfile';
import MyAppoinments from '../pages/MyAppoinments';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        errorElement: <p>error</p>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/allTreatments",
                element: <AllTreatments />
            },
            {
                path: "/myProfie",
                element: <MyProfile />
            },
            {
                path: "/my0Appointments",
                element: <MyAppoinments />
            },
        ]
    }
])

export default router;