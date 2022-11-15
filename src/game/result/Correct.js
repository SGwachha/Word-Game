import {  useEffect } from "react";

import { useNavigate } from "react-router-dom";
import "./Design.css";

const Correct = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, []);

  return (
    //shows you are correct
    <div className="gameArea1">
      <h3>You are correct</h3>

    </div>
  );
};

export default Correct;
