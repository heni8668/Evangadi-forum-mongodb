import React, { useContext } from "react";
import Logo from "../../Assets/evangadi-logo.png";
import { UserContext } from "../../context/UserContext";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ logout }) => {
  const [userData, setUserData] = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignin = (e) => {
    e.preventDefault();
    if (userData.user) {
      logout();
    }
    navigate("/login");
  };

  function drop() {
    var x = document.getElementById("my-links");
    if (x.classList.contains("show")) {
      x.classList.remove("show");
    } else {
      x.classList.add("show");
    }
  }
  return (
    <>
      <div className="header container-fluid">
        <div className="inner-container container d-flex justify-content-around">
          {userData.user ? (
            <Link to="/" className="">
              <img src={Logo} alt="Evangadi logo" />
            </Link>
          ) : (
            <Link to="/login" className="">
              <img src={Logo} alt="Evangadi logo" />
            </Link>
          )}
          <button onClick={drop} className="icon d-sm-block d-md-none">
            ☰
          </button>

          <div className="nav-links d-flex justify-content-between d-none d-md-block">
            <Link to="/">Home</Link>
            <Link to="/">How it works</Link>
            <button onClick={handleSignin} className="header-btn">
              {userData.user ? "LogOut" : "Sign In"}
            </button>
          </div>
        </div>
      </div>

      <div className="d-block justify-content-between d-md-none" id="my-links">
        <div className="d-md-none">
          <Link to="/">Home</Link>
        </div>
        <hr className="d-md-none" />
        <div className="d-md-none">
          <Link to="/">How it works</Link>
        </div>
        <hr className="d-md-none" />
        <div onClick={handleSignin} className="d-md-none header-btn">
          <Link to="/">{userData.user ? "LogOut" : "Sign In"}</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
