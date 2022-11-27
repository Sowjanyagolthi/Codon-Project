import React from "react";
import { Footer } from "./Footer/Footer.js";
import { Body } from "./Body/Body.js";
import {CMHeader} from './CMHeader/CMHeader.js'
import "./CrewMetrics.css"

const CrewMetrics = () => {
  return (
    <div>
      <CMHeader/>
      <Body />
      <Footer />
    </div>
  );
};

export { CrewMetrics };
