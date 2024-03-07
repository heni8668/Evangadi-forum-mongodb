import React from "react";
import "./footer.css";
import logo from "../../Assets/evangadi-logo-footer.png";

const Footer = () => {
  return (
    <div className="container-fluid">
      <footer className="footer-wrapper d-md-flex justify-content-around">
        <div className="logo-icon-wrapper">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="icon">
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
          </div>
        </div>

        <div className="row">
          <h3 className="title">Useful link</h3>
          <div className="useful-link">
            <a className="footer-links" href="#">
              How it work
            </a>
            <a className="" href="#">
              terms of services
            </a>
            <a className="" href="#">
              privacy policy
            </a>
          </div>
        </div>

        <div className="row">
          <div className="contact-info">
            <div className="title">Contact info</div>
            <p>Evangadi Network</p>
            <p>support@evangadi.com</p>
            <p>+222222222222</p>
          </div>
        </div>
      </footer>
      {/* <div className="footer-wrapper footer-copyright">
        <h2>Developed by heni</h2>
      </div> */}
    </div>
  );
};

export default Footer;
