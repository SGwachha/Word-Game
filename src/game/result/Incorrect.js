import React from "react";
import "./Design.css";
import { Navigate, useNavigate } from "react-router-dom";

const Incorrect = () => {

  const navigate = useNavigate();

  return (
    <div className="gameArea1">
      <h3>You are incorrect</h3>
      <button
        className="btn"
        onClick={() => {
          navigate("/");
        }}
      >
        {" "}
        CLick Here to start
      </button>
    </div>
  );
};

export default Incorrect;
