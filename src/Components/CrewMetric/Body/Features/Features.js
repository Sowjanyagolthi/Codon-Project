import React from "react";
import "./Features.css";

import { FSection3 } from "./FSection3.js";
import { FSection2 } from "./FSection2";
import { FSection1 } from "./FSection1";

const Features = () => {
  return (
    <div className="features-Container">
      <FSection1 />
      <FSection2 />
      <FSection3 />
    </div>
  );
};

export { Features };
