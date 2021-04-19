import React from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "./DashboardHeader.css";

const DashboardHeader = ({ title }) => {
  const userLogOut = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div className="admin-header-container">
      <div className="component-title">
        <h3> {title} </h3>{" "}
      </div>{" "}
      <div className="user-name">
        <Popup
          trigger={
            <h3> {localStorage.getItem("User Email").substring(0, 9)}... </h3>
          }
          position="bottom left"
          on={["hover", "focus"]}
          arrow="center left"
        >
          <ul className="admin-access">
            <li>
              <Link to="/"> Go To Home </Link>{" "}
            </li>{" "}
            <li>
              <a href="#"> Settings </a>{" "}
            </li>{" "}
            <li>
              <a href="mailto:junaid65859@gmail.com"> Contact Developer </a>{" "}
            </li>{" "}
            <li
              onClick={userLogOut}
              style={{ color: "red", cursor: "pointer", fontWeight: "bold" }}
            >
              Logout{" "}
            </li>{" "}
          </ul>{" "}
        </Popup>{" "}
      </div>{" "}
    </div>
  );
};

export default DashboardHeader;
