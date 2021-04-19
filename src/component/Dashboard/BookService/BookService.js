import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import DashboardHeader from "../../Shared/DashboardSharedComponents/DashboardHeader/DashboardHeader";
import DashboardSidebar from "../../Shared/DashboardSharedComponents/DashboardSidebar/DashboardSidebar";
import "./BookService.css";
import CardForm from "./CardForm";

const stripePromise = loadStripe(
  "pk_test_51GLa1LIIMauOZTYM5CKAYYH1rFktpU5cZ4KRzuNmOwE2xjOgJ0eo0imUizZ6e1v5bdCjwwGs9RPQ5trdi78qX1XN00yhJoJHF2"
);

const BookService = () => {
  const [bookingInfo, setBookingInfo] = useState("");
  const [billingEmail, setBillingEmail] = useState("");

  const handleBillingEmail = (event) => {
    event.preventDefault();
    const billingEmail = localStorage.getItem("User Email");
    setBillingEmail(billingEmail);
  };

  const bookingFormValue = (event) => {
    const newFrom = { ...bookingInfo };
    newFrom[event.target.name] = event.target.value;
    setBookingInfo(newFrom);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-sidebar">
        <DashboardSidebar />
      </div>{" "}
      <div className="dashboard-content">
        <section className="dashboard-header">
          <DashboardHeader title="Book a Service"></DashboardHeader>
        </section>
        <div className="dashboard-booking-form">
          <form action="submit">
            <input
              onBlur={bookingFormValue}
              type="text"
              placeholder="Full Name"
              name="name"
            />
            <br />
            <input
              onBlur={bookingFormValue}
              type="email"
              placeholder="Email"
              name="email"
              value={billingEmail}
            />
            <br />
            <button
              className="billing-email-button"
              onClick={handleBillingEmail}
            >
              Set user email as a billing email address
            </button>
            <br />
            <input
              onBlur={bookingFormValue}
              type="text"
              placeholder="Service Title"
              value="Day Baby Care"
              name="serviceTitle"
            />
            <br />
            <p>Pay with credit card</p>
          </form>
          <div style={{ width: "400px" }}>
            <Elements stripe={stripePromise}>
              <CardForm bookingInfo={bookingInfo}></CardForm>
            </Elements>
          </div>
          <p style={{ marginTop: "50px", color: "#383838" }}>
            Please Note: The form input fuild are using onblur function. So
            please do not forget to blur on each input field{" "}
          </p>
        </div>
      </div>{" "}
    </div>
  );
};

export default BookService;
