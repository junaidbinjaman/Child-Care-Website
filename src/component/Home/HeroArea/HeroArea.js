import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import HeroImage from "../../../image/childWithColors-removebg-preview.png";
import "./HeroArea.css";

const HeroArea = () => {
  return (
    <div className="heroarea-container">
      <div className="heroarea-left">
        <h1>
          A Warm Nursing <br />
          Environment
        </h1>
        <p>
          We understand the importance of finding quality day care center
          <br />
          Please contact us to know more,
        </p>

        <Popup
          modal
          trigger={<button className="btn-global">Contact Us</button>}
          position="right center"
        >
          <div className="popup-contact-form">
            <p>
              Please fill up the form bellow. We will <br /> contact you very
              soon
            </p>
            <form action="submit">
              <input type="text" name="name" placeholder="Full Name" />
              <br />
              <input type="email" name="email" placeholder="Email Address" />
              <br />
              <input type="number" name="phone" placeholder="Phone Number" />
              <br />
              <input type="text" name="address" placeholder="Living Address" />
              <br />
              <button className="btn-global">Submit </button>
            </form>
          </div>
        </Popup>
      </div>
      <div className="heroarea-right">
        <img src={HeroImage} alt="" />
      </div>
    </div>
  );
};

export default HeroArea;
