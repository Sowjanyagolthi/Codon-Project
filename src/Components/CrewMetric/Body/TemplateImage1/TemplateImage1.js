import React from "react";
import FirstImage from "./firstImage.png";
import SecondImage from "./SecondImage.png";

import "./TemplateImage1.css";

const TemplateImage1 = () => {
  return (
    <div className="image-Container">
      <img className="firstImage" src={FirstImage} alt=""/>
      <img className="secondImage" src={SecondImage} alt=""/>
    </div>
  );
};

export { TemplateImage1 };
