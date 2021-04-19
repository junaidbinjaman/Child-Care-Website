import React, { useState } from "react";
import "./Testimonial.css";
import TestimonialCard from "./TestimonialCard/TestimonialCard";

const Testimonial = () => {
  const [reviewData, setReviewData] = useState([]);
  fetch("http://localhost:5000/allReviews")
    .then((res) => res.json())
    .then((data) => setReviewData(data));

  return (
    <div className="testimonial-container">
      <h1 className="sub-heading"> Time to know about </h1>{" "}
      <h2> What Parents Say </h2> <hr />
      <div className="testimonial-row">
        {" "}
        {reviewData.length === 0 && <p> Loading please wait... </p>}{" "}
        {reviewData.slice(-2).map((testimonial) => (
          <TestimonialCard testimonial={testimonial}> </TestimonialCard>
        ))}{" "}
      </div>{" "}
    </div>
  );
};

export default Testimonial;
