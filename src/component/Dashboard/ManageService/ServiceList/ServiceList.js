import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import "./ServiceList.css";

const ServiceList = ({ service, index }) => {
  const pageReload = () => {
    window.location.reload();
  };
  const handleDeleteBtn = () => {
    console.log(service._id);
    fetch(`http://localhost:5000/deleteService/${service._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => data);
    pageReload();
  };
  return (
    <div className="service-list-container">
      <div>
        <p> {index + 1} </p>{" "}
      </div>{" "}
      <div>
        <p> {service.serviceDetail.substring(0, 60)} </p>{" "}
      </div>{" "}
      <div onClick={handleDeleteBtn}>
        <RiDeleteBin5Line className="delete-icon" />
      </div>{" "}
    </div>
  );
};

export default ServiceList;
