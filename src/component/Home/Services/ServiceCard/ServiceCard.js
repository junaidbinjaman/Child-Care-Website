import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ service }) => {
  let img;

  if (service.img === "") {
    img =
      "https://media.istockphoto.com/photos/multiethnic-preschool-teacher-and-students-in-classroom-picture-id1092432244?k=6&m=1092432244&s=612x612&w=0&h=dvq912oCUb_zyzPoKlR8mt4Iedl3gL9se8yp-udVbkE=";
  } else {
    img = service.img;
  }
  return (
    <div className="service-card">
      <img height="232px" src={`http://localhost:5000/${img}`} alt="" />
      <h1> {service.serviceTitle} </h1>{" "}
      <p> {service.serviceDetail.substring(0, 120)} </p>{" "}
      <div className="service-footer">
        <p> Service Author: {service.name} </p>{" "}
      </div>{" "}
    </div>
  );
};

export default ServiceCard;
