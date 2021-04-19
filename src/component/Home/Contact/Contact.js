import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="sub-heading">Still Any Confussion</h1>
      <h2>Contact Us </h2>
      <hr />
      <form action="submit" className="contact-form">
        <div className="input-group">
          <input type="text" placeholder="First Name" name="first-name" />
          <input type="text" placeholder="Last Name" name="last-name" />
        </div>
        <div className="input-group">
          <input type="text" placeholder="Email" name="email" />
          <input type="text" placeholder="Address" name="address" />
        </div>
        <div className="input-group">
          <textarea placeholder="Type Your Message" name="message"></textarea>
        </div>
        <input type="submit" className="btn-global" />
      </form>
    </div>
  );
};

export default Contact;
