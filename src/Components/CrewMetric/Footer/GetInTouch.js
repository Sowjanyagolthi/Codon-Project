import React from "react";
import EmailBoxImage from "./EmailBoxImage.js";
import "./Footer.css";

const GetInTouch = () => {
  return (
    <div className="getIntouch-Container">
      <h1>Get in touch</h1>
      <div className="subFooter-Container">
        <div className="footerSection-GetInTouch-EmailBox-Container">
          <p className="emailLogo">
            <EmailBoxImage />
          </p>
          <input className="email-text" placeholder="John doe@gmail.com" />
        </div>
        <div className="footerSection-GetInTouch-ContactDetails-Container">
          <p className="country-code">+91</p>
          <input
            className="phonenumber-text"
            placeholder="Enter phone number"
          />
        </div>
        <button className="contact-section">Reach me</button>
      </div>
    </div>
  );
};

export { GetInTouch };
