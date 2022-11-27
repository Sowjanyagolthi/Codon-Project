import React from "react";
import aboutCrewMetics from "./aboutCrewMetrics.png";
import "./Section2.css";
import Star5 from './Star5.png'

const Section2 = () => {
  return (
    <div className="crewMetrics-Details-Container">
        <div className="background-Image">
          <img class="star5-image"src={Star5} alt=""/>
          <h1 className="text">
            Why Opt
            <br /> for US ?
          </h1>
      </div>
      <div className="crewMetrics-Details">
        <p>
        Crew metrics lets the organisation manage their employees learning
        curves by closely monitoring their skill development which intern helps
        tariners, Project mangers and leads to guide them to better heights.
        </p>
      </div>
    </div>
  );
};

export { Section2 };
