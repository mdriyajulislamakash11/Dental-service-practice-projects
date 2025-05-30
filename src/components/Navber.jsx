import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to="/" activeClassName="text-blue-500">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/allTreatments" activeClassName="text-blue-500">
          All Treatments
        </NavLink>
      </li>
      <li>
        <NavLink to="/myProfile" activeClassName="text-blue-500">
          My Profile
        </NavLink>
      </li>
      <li>
        <NavLink to="/myAppointments" activeClassName="text-blue-500">
          My Appointments
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="mx-10">
      <div className="navbar bg-base-100 z-50 fixed top-0 left-0 w-full shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Beautiful Smail</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <Link onClick={logOut} className="btn">LogOut</Link>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
