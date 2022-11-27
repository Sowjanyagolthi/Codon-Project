import React from "react";
import { Features } from "./Features/Features.js";
import { TemplateImage1 } from "./TemplateImage1/TemplateImage1.js";
import { Section2 } from "./Section2/Section2.js";
import { Section1 } from "./Section1/Section1.js";
import { UseCases } from "./UseCases/UseCases.js";

const Body = () => {
  return (
    <div>
      <Section1 />
      <Section2 />
      <TemplateImage1 />
      <Features />
      <UseCases/>
    </div>
  );
};

export { Body };
