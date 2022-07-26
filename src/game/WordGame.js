import React from "react";
import "./WrodGame.css";

const WordGame = ({children}) => {

  return (
    <>
      <header>
        <h1>Guess the Name</h1>
      </header>
      <section>
        <div className="gameArea">
           {children}
        </div>
      </section>
    </>
  );
};

export default WordGame;
