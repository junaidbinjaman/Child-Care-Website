import React, { useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiBarChartAlt, BiUserPlus } from "react-icons/bi";
import { BsGrid, BsInboxes } from "react-icons/bs";
import { RiMessage2Line, RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Logo from "../../../../image/logo.png";
import "./DashboardSidebar.css";

const AdminSidebar = () => {
  const userEmail = localStorage.getItem("User Email");
  useEffect(() => {
    fetch(`http://localhost:5000/admin/${userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          if (!localStorage.getItem("User Role")) {
            localStorage.setItem("User Role", "admin");
          }
        } else {
          if (!localStorage.getItem("User Role")) {
            localStorage.setItem("User Role", "user");
          }
        }
      });
  }, []);

  let displayAdminSidebar;
  let displayUserSidebar;
  const userRoles = localStorage.getItem("User Role");

  if (userRoles === "admin") {
    displayAdminSidebar = "block";
    displayUserSidebar = "none";
  } else {
    displayUserSidebar = "block";
    displayAdminSidebar = "none";
  }

  return (
    <div className="dashboard-sidebar-container">
      <div className="dashboard-sidebar-logo">
        <Link to="/dashboard">
          <img src={Logo} alt="" />
        </Link>{" "}
      </div>{" "}
      <div className="dashboard-sidebar-menu">
        <ul>
          <Link to="/dashboard">
            <li>
              <BiBarChartAlt className="dashboard-sidebaricon" /> Dashboard
            </li>
          </Link>
          <div
            className="user-dashboard"
            style={{ display: displayUserSidebar }}
          >
            <Link to="/bookservice">
              <li>
                {" "}
                <RiShoppingCartLine className="dashboard-sidebaricon" /> Booka a
                Services
              </li>
            </Link>
            <Link to="/bookinglist">
              <li>
                <BsInboxes className="dashboard-sidebaricon" /> Booking List{" "}
              </li>{" "}
            </Link>
            <Link to="/addreview">
              <li>
                <RiMessage2Line className="dashboard-sidebaricon" /> Add a
                Review{" "}
              </li>{" "}
            </Link>
          </div>{" "}
          <div
            className="admin-nevigation"
            style={{ display: displayAdminSidebar }}
          >
            <Link to="/orderlist">
              <li>
                <BsInboxes className="dashboard-sidebaricon" /> Order List{" "}
              </li>{" "}
            </Link>
            <Link to="/addservice">
              <li>
                <AiOutlinePlus className="dashboard-sidebaricon" /> Add Service{" "}
              </li>{" "}
            </Link>
            <Link to="/makeadmin">
              <li>
                <BiUserPlus className="dashboard-sidebaricon" /> Make Admin{" "}
              </li>{" "}
            </Link>
            <Link to="/manageservice">
              <li>
                <BsGrid className="dashboard-sidebaricon" /> Manage Service{" "}
              </li>{" "}
            </Link>
          </div>{" "}
        </ul>{" "}
      </div>{" "}
    </div>
  );
};

export default AdminSidebar;
