import React from "react";
import './WrodGame.css'

const WordGame = () => {
  return (
    <>
      <header>
        <h1>Guess the word</h1>
      </header>
      <section>
        <div className="gameArea">
          <h3 className="msg"></h3>
          <input type="text" className="hidden" />
          <button className="btn">Click here to start</button>
        </div>
      </section>
    </>
  );
};

export default WordGame;
