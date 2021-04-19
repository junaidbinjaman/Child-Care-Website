import React, { useState } from "react";
import { ClapSpinner } from "react-spinners-kit";
import DashboarHead from "../../Shared/DashboardSharedComponents/DashboardHeader/DashboardHeader";
import DashboardSidebar from "../../Shared/DashboardSharedComponents/DashboardSidebar/DashboardSidebar";
import AllOrders from "./AllOrders";
import "./OrderList.css";

const OrderList = () => {
  document.title = "All Order List";
  const [allOrders, setAllOrders] = useState([]);

  fetch("http://localhost:5000/allOrders")
    .then((res) => res.json())
    .then((data) => setAllOrders(data));
  return (
    <div className="dashboard-container">
      <div className="dashboard-sidebar">
        <DashboardSidebar />
      </div>{" "}
      <div className="dashboard-content">
        <section className="dashboard-header">
          <DashboarHead title="Order List" />
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
          {allOrders.length === 0 && (
            <div className="spinner">
              <ClapSpinner />
            </div>
          )}{" "}
          {allOrders &&
            allOrders.map((order) => (
              <AllOrders order={order}> </AllOrders>
            ))}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default OrderList;
