import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import DashboardHeader from "../../Shared/DashboardSharedComponents/DashboardHeader/DashboardHeader";
import DashboardSidebar from "../../Shared/DashboardSharedComponents/DashboardSidebar/DashboardSidebar";
import "./ManageService.css";
import ServiceList from "./ServiceList/ServiceList";

const ManageService = () => {
  document.title = "Manage Services";
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  console.log(services);

  return (
    <div className="dashboard-container">
      <div className="dashboard-sidebar">
        <DashboardSidebar />
      </div>{" "}
      <div className="dashboard-content">
        <section className="dashboard-header">
          <DashboardHeader title="Manage Service" />
        </section>{" "}
        <div className="service-section-title">
          <div>
            <p> No </p>{" "}
          </div>{" "}
          <div>
            <p> Service Title </p>{" "}
          </div>{" "}
          <div>
            <p>Action</p>{" "}
          </div>{" "}
        </div>
        <div className="services-container">
          {services.length === 0 && (
            <p style={{ textAlign: "center" }}>Loading please wait...</p>
          )}
          {services.map((service, index) => (
            <ServiceList service={service} index={index}></ServiceList>
          ))}
        </div>
      </div>{" "}
    </div>
  );
};

export default ManageService;
