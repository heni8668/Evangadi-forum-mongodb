import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import "./signup.css";

const Signup = () => {
  const [input, setInput] = useState({});
  const [icon, setIcon] = useState(eyeOff);
  const [type, setType] = useState("password");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(input);
    try {
      const res = await axios.post(
        "http://localhost:8000/api/users/register",
        input
      );
      console.log(res);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const handleShowHide = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };
  return (
    <div className=" container-fluid signup-page">
      <div className="container d-md-flex mx-auto py-5 align-items-center">
        <div className="form-wrapper col-10 col-md-6 me-md-2 p-5 d-flex flex-column">
          <p className="p11">Join the network</p>
          <p className="p22 lorem">
            Already have an account?
            <Link to="/login" className="a11">
              Login
            </Link>
          </p>

          <form onSubmit={handleSubmit}>
            <input
              className="in11 mr-1"
              type="text"
              name="username"
              onChange={handleChange}
              id=""
              placeholder="username"
            />
            <div className="first-last d-flex">
              <input
                className="in11 me-1"
                type="text"
                name="firstname"
                onChange={handleChange}
                id=""
                placeholder="Firstname"
              />
              <input
                className="in11 ms-1"
                type="text"
                name="lastname"
                onChange={handleChange}
                id=""
                placeholder="Lastname"
              />
            </div>
            <input
              className="in11"
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Email address"
              id=""
              required
            />
            <input
              className="in11"
              type={type}
              name="password"
              onChange={handleChange}
              placeholder="password"
            />
            {/* show and hide put here */}
            <span>
              <Icon
                icon={icon}
                size={20}
                className="show-hide field-icon"
                onClick={handleShowHide}
              />
            </span>

            <button className="signupBtn">Agree and Join</button>
          </form>
          <p className="mt-md-5 mt-sm-5 text-center texttag">
            I agree to the{" "}
            <Link to="" className="a22">
              Privacy Policy
            </Link>
            and{" "}
            <Link to="" className="a22">
              {" "}
              terms of service.
            </Link>
          </p>
          <Link to="/login" className="a33 text-center">
            Already have an account?
          </Link>
        </div>
        <div className="signup-right container  col-12 col-md-6 ms-md-2 mt-sm-5">
          <p className="forTitle">About</p>
          <h1 className="right-title">Evangadi Networks</h1>
          <p className="right-p">
            No matter what stage of life you are in, whether you’re just
            starting elementary school or being promoted to CEO of a Fortune 500
            company, you have much to offer to those who are trying to follow in
            your footsteps.
          </p>
          <p className="right-p">
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

export default Signup;
