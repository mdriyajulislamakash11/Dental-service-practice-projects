import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../layouts/MainLayouts';
import Home from '../pages/Home';
import AllTreatments from '../pages/AllTreatments';
import MyProfile from '../pages/MyProfile';
import MyAppoinments from '../pages/MyAppoinments';
import DetailsCard from '../pages/DetailsCard';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        errorElement: <p>error</p>,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: async () => {
                    const serviceRes = await fetch("/service.json");
                    const serviceData = await serviceRes.json()

                    const feedbackRes = await fetch("/happyclients.json")
                    const feedbackData = await feedbackRes.json()

                    return {serviceData, feedbackData}
                }
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
            {
                path: "/service/:id",
                element: <DetailsCard />
            },
        ]
    }
])

export default router;