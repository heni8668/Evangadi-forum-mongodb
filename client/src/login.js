import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
// import { eyeOff } from "react-icons-kit/feather/eyeOff";
// import { eye } from "react-icons-kit/feather/eye";
import "./login.css";

const Login = () => {
  return (
    <div className="container-fluid login-wrapper">
      <div className="container">
        <div className="main">
          <p className="p1">Login to your account</p>
          <p className="p2 text-center">
            Don't have an account?
            <Link to="/">Create a new account</Link>`
          </p>

          <form>
            <input
              className="input-field"
              name="email"
              type="email"
              placeholder="enter your email"
            />
            <input
              className="input-field"
              name="password"
              type="password"
              placeholder="enter your password"
            />
            <span>
              <Icon className="field-icon" size={20} />
            </span>
            <button className="login-btn">Login</button>
          </form>
          <Link to="/signup" className="test">
            create an account?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
