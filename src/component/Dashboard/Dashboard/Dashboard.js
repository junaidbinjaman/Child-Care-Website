import React from "react";
import DashboardHeader from "../../Shared/DashboardSharedComponents/DashboardHeader/DashboardHeader";
import DashboardSidebar from "../../Shared/DashboardSharedComponents/DashboardSidebar/DashboardSidebar";
import "./Dashboard.css";

const Dashboard = () => {
  document.title = "Dashboard";

  return (
    <div className="dashboard-container">
      <div className="dashboard-sidebar">
        <DashboardSidebar />
      </div>{" "}
      <div className="dashboard-content">
        <section className="dashboard-header">
          <DashboardHeader title="Dashboard" />
        </section>{" "}
        <h1 style={{ textAlign: "center", marginTop: "20vh" }}>
          Hello {localStorage.getItem("User Email").split("@")[0]}! Welcome Back{" "}
        </h1>{" "}
      </div>{" "}
    </div>
  );
};

export default Dashboard;
