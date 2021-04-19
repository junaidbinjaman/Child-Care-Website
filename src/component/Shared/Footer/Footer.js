import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { FaPinterestSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-row">
        <div className="footer-first-collam">
          <h1> About Us </h1>{" "}
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Quis
            ipsum suspend issem acenas accumsan lacus{" "}
          </p>{" "}
          <hr />
          <AiFillFacebook className="footer-first-collam-icon" />
          <AiFillTwitterSquare className="footer-first-collam-icon" />
          <AiFillLinkedin className="footer-first-collam-icon" />
          <AiFillInstagram className="footer-first-collam-icon" />
          <FaPinterestSquare className="footer-first-collam-icon" />
        </div>
        <div className="footer-second-collam">
          <h1>Menu</h1>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <li>About</li>
            <li>Services</li>
            <li>Testimonials</li>
            <li>Blogs</li>
            <li>Contact Us</li>
          </ul>
        </div>{" "}
        <div className="footer-third-collam">
          <h1>Account</h1>
          <ul>
            <Link to="/login">
              <li>Login</li>
            </Link>
            <Link to="/dashboard">
              <li>Dashboard</li>
            </Link>
            <li>Add a Review</li>
            <li>Your Message</li>
            <li>Setting</li>
            <li>Get Support</li>
          </ul>
        </div>{" "}
        <div className="footer-fourth-collam">
          <h1>Cpmpany Info</h1>
          <p>
            <b>Office Address</b>
          </p>
          <p className="text-secondary">
            New York - 1010101 Hudson
            <br /> Yord
          </p>
          <p className="text-secondary">Call now</p>
          <button className="btn-global">
            <a
              href="tel:56456"
              style={{ color: "white", textDecoration: "none" }}
            >
              +2025550295
            </a>
          </button>
        </div>{" "}
      </div>{" "}
      <p className="copy-right-text">
        {" "}
        ©Copy Right {new Date().getFullYear()}, All Right Reserved{" "}
      </p>{" "}
    </div>
  );
};

export default Footer;
