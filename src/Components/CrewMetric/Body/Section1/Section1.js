import React from "react";
import "./Section1.css";
import AnalyticsImage from "./AnalyticsImage.png";
import Star4 from "./Star4.png";
import Star2 from "./Star2.png";
import Star7 from "./Star7.png";
import Ellipse from "./Ellipse.png";
import Star6 from "./Star6.png";

const Section1 = () => {
  return (
    <div className="section1-container">
      <div className="learning-text">
        <h1 className="KeepYourTeam-text">
          <span className="starImage-container">
            <img class="star4-image" src={Star4} />
          </span>
          Keep your Team
          <br />
          Engaged with
        </h1>
        <h1 className="gradient-text">Learning ...</h1>
        <div className="contactButton">
          <button className="letsTalk-text">lets Talk</button>
          <button className="GetDemo-text">Get Demo</button>
        </div>
        <p className="star7-image-container">
          <img className="star7-image" src={Star7} alt="" />
        </p>
      </div>
      <span className="star-image-container">
        <img className="star2-image" src={Star2} alt="star2" />
      </span>
      <img
        className="analyticsImage"
        src={AnalyticsImage}
        alt="Analystics Image"
      />
      <span className="star6-image-container">
        <img className="star6-image" src={Star6} alt="star6" />
      </span>
      <div className="blur-Image"></div>
    </div>
  );
};

export { Section1 };
