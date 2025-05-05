import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";

const Register = () => {

    const {registerUser} = useContext(AuthContext)




  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200 px-4">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <form className="card-body">
          <h2 className="text-2xl font-bold text-center">Register</h2>

          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>

          {/* Photo URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="url"
              placeholder="Enter photo URL"
              className="input input-bordered"
              required
            />
          </div>

          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>

          <div className="form-control mt-4">
            <button className="btn btn-primary">Register</button>
          </div>

          <p className="text-sm mt-3 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 link-hover font-medium">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
