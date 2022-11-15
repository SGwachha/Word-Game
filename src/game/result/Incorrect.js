import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import "./Design.css";

const Incorrect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, []);

  return (
    // show you are incorrect
    <div className="gameArea1">
      <h3>You are incorrect</h3>
    </div>
  );
};

export default Incorrect;
