import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import axios from "axios";
import "./login.css";

const Login = () => {
  const [icon, setIcon] = useState(eyeOff);
  const [type, setType] = useState("password");
  const [input, setInput] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    // e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/users/login",
        {
          email: input.email,
          password: input.password,
        }
      );
      localStorage.setItem("token", data.token);
      console.log(data);
      navigate("/");
      // Reload the page
      window.location.reload();
    } catch (error) {
      console.log("something went wrong", error.response.data);
    }
  };

  const handleIcon = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };
  return (
    <div className="login-container container-fluid ">
      <div className="login-wrapper container py-5 d-md-flex justify-content-between ">
        <div className="form-wrapper col-12 col-md-6 me-md-2 p-5 d-flex flex-column justify-content-center">
          <p className="p1">Login to your account</p>
          <p className="p2 text-center">
            Don't have an account?{" "}
            <Link to="/register" className="a3">
              Create a new account
            </Link>
          </p>
          <form onSubmit={handleSubmit}>
            <input
              className="input-field"
              name="email"
              type="email"
              onChange={handleChange}
              placeholder="enter your email"
            />
            <input
              className="input-field"
              name="password"
              type={type}
              onChange={handleChange}
              placeholder="enter your password"
            />
            <span className="login-show-hide" onClick={handleIcon}>
              <Icon className="field-icon" icon={icon} size={20} />
            </span>
            <button className="login-btn">Login</button>
          </form>
          <Link to="/register" className="a3">
            Create an account?
          </Link>
        </div>
        <div className="login-right-side container col-12 col-md-6 ms-md-2 mt-sm-5">
          <p className="title1">About</p>
          <h1>Evangadi network</h1>
          <p>
            No matter what stage of life you are in, whether you’re just
            starting elementary school or being promoted to CEO of a Fortune 500
            company, you have much to offer to those who are trying to follow in
            your footsteps.
          </p>
          <p>
            Wheather you are willing to share your knowledge or you are just
            looking to meet mentors of your own, please start by joining the
            network here.
          </p>
          <button className="right-btn">HOW IT WORKS</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
