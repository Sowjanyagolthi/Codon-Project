import React from "react";
import './UseCases.css'

const UseCases = () => {
  return (
    <div className="container-usecase">
      <div  className="create-container">
        <h1 className="create-text">Create</h1>
        <p className="create-paragraph">
          Trainers can create or schedule courses & classes for an entire year
          or even more.
        </p>
      </div>
      <div className="analyse-container">
        <h1 className="analyse-text">Analyse</h1>
        <p className="analyse-paragraph">
          Continouds feedbacks monitoring inorder to increase the efficiency of
          trainers, trainees & courses
        </p>
      </div>
      <div className="evolve-container">
        <h1 className="evolve-text">Evolve</h1>
        <p className="evolve-paragraph">
          The ease of assigning roles & permissions to experience the customised
          learning platform for mentees and mentors.
        </p>
      </div>
    </div>
  );
};

export { UseCases };
