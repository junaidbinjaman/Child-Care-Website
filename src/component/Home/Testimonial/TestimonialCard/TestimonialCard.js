import React from "react";
import "./TestimonialCard.css";
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-content">
        <p>{testimonial.message}</p>
      </div>
      <div className="testimonial-info">
        <img src={`data:image/png;base64, ${testimonial.img.img}`} alt="" />
        <div>
          <h1>{testimonial.name}</h1>
          <p>{testimonial.email}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
