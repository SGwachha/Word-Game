import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Design.css";

const Correct = () => {
  const navigate = useNavigate();

  return (
    <div className="gameArea1">
      <h3>You are correct</h3>
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

export default Correct;
