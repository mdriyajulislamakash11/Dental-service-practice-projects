import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import AllTreatments from "../pages/AllTreatments";
import MyProfile from "../pages/MyProfile";
import MyAppoinments from "../pages/MyAppoinments";
import DetailsCard from "../pages/DetailsCard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../auth/PrivateRoute";

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
          const serviceData = await serviceRes.json();

          const feedbackRes = await fetch("/happyclients.json");
          const feedbackData = await feedbackRes.json();

          return { serviceData, feedbackData };
        },
      },
      {
        path: "/allTreatments",
        element: <AllTreatments />,
        loader: () => fetch("/service.json"),
      },
      {
        path: "/myProfile",
        element: <MyProfile />,
      },
      {
        path: "/myAppointments",
        element: <MyAppoinments />,
      },
      {
        path: "/service/:id",
        element: (
          <PrivateRoute>
            <DetailsCard />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const res = await fetch("/service.json");
          const data = await res.json();
          const singleData = data.find((service) => service.id == params.id);
          return singleData;
        },
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
