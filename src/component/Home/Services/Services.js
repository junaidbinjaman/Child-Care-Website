import React, { useState } from "react";
import ServiceCard from "./ServiceCard/ServiceCard";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  fetch("http://localhost:5000/allServices")
    .then((result) => result.json())
    .then((data) => setServices(data));

  return (
    <div>
      <h1 className="sub-heading"> Time to know about </h1>{" "}
      <h2> Our Services </h2> <hr />
      <div className="services-row">
        {" "}
        {services.length === 0 && <p> Loading please wait... </p>}{" "}
        {services.slice(-3).map((service) => (
          <ServiceCard service={service}> </ServiceCard>
        ))}{" "}
      </div>{" "}
    </div>
  );
};

export default Services;
