import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";

const Login = () => {
  const { googleLogin, loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    //Login User
    loginUser(email, password)
    .then((result) =>{
        console.log(result.user)
        
    })
    .catch((error) => {
        console.log(error.message)
    })


  };

  const handleGoogleLogin = () => {
    googleLogin().then((result) => {
      console.log(result.user);
      navigate("/");
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200 px-4">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <form className="card-body" onSubmit={handleLoginUser}>
          <h2 className="text-2xl font-bold text-center">Login</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
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
            <button className="btn btn-primary">Login</button>
          </div>
          <p className="text-sm mt-3 text-center">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-blue-500 link-hover font-medium"
            >
              Register here
            </Link>
          </p>
        </form>
      </div>

      {/* social Login */}
      <div>
        <button onClick={handleGoogleLogin}>Google</button>
      </div>
    </div>
  );
};

export default Login;
