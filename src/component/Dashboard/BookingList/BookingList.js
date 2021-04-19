import React, { useEffect, useState } from "react";
import { ClapSpinner } from "react-spinners-kit";
import DashboardHeader from "../../Shared/DashboardSharedComponents/DashboardHeader/DashboardHeader";
import DashboardSidebar from "../../Shared/DashboardSharedComponents/DashboardSidebar/DashboardSidebar";
import "./BookingList.css";
import UserOrders from "./UserOrders";

const BookingList = () => {
  const [userOrders, setUserOrders] = useState([]);
  const email = localStorage.getItem("User Email");
  useEffect(() => {
    fetch("http://localhost:5000/orderList", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => setUserOrders(data));
  }, []);
  return (
    <div className="dashboard-container">
      <div className="dashboard-sidebar">
        <DashboardSidebar />
      </div>{" "}
      <div className="dashboard-content">
        <section className="dashboard-header">
          <DashboardHeader title="Booking List" />
        </section>{" "}
        <div className="orderList-section-title">
          <div>
            <p> Name </p>{" "}
          </div>{" "}
          <div>
            <p> Email ID </p>{" "}
          </div>{" "}
          <div>
            <p> Service </p>{" "}
          </div>{" "}
          <div>
            <p> Pay With </p>{" "}
          </div>{" "}
          <div>
            <p> Status </p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="orderList-section-body">
          {" "}
          {userOrders.length === 0 && (
            <div className="spinner">
              <ClapSpinner />
              <p style={{ textAlign: "left" }}>
                Loading please wait... if you didn't make any payment with{" "}
                {localStorage.getItem("User Email")} account, please add one to
                see here
              </p>
            </div>
          )}{" "}
          {userOrders.map((order) => (
            <UserOrders order={order}> </UserOrders>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default BookingList;
