import {React,useEffect} from "react";

import {  useNavigate } from "react-router-dom";
import "./Design.css";

const Correct = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 1000)
  }, [])
 


  return (
    <div className="gameArea1" >
      <h3>You are correct</h3>
      {/* <button
        className="btn"
        onClick={() => {
          navigate("/");
        }}
      >
        {" "}
        CLick Here to start
      </button> */}
    </div>
  );
};

export default Correct;
