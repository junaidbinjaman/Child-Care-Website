import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../image/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <section className="header-section">
      <div className="header-container">
        <div className="header-logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>{" "}
        </div>{" "}
        <div className="header-navbar">
          <ul>
            <li>
              {" "}
              <a href="#about"> About Us </a>{" "}
            </li>{" "}
            <li>
              <a href="#service"> Service </a>{" "}
            </li>{" "}
            <li>
              {" "}
              <a href="#testimonial"> Testimonial </a>{" "}
            </li>{" "}
            <li>
              {" "}
              <a href="#event"> Events </a>{" "}
            </li>{" "}
            <li>
              <a href="#blogs"> Blogs </a>{" "}
            </li>{" "}
            <li>
              <a href="#contact"> Contact Us </a>{" "}
            </li>{" "}
            <Link to="/dashboard">
              <li
                style={{
                  background: "#393d72",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                My Account
              </li>
            </Link>
          </ul>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

export default Header;
