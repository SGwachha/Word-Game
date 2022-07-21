import React, { useState } from "react";
import "./WrodGame.css";

const WordGame = () => {
  const [play, setPlay] = useState(false);
  const [input, setInput] = useState();
  const [show, setShow] = useState(false);

  const sWord = ["hasina", "sanjeev", "bhanu"];

  const createNewWord = () => {
    const ranNum = Math.floor(Math.random() * sWord.length);
    console.log(ranNum)
  };

  const handleClick = () => {
    // setInput(!input);
    setPlay(true);
    setShow(true);
    createNewWord();
  };
  return (
    <>
      <header>
        <h1>Guess the word</h1>
      </header>
      <section>
        <div className="gameArea">
          <h3 className="msg"></h3>
          {show ? (
            <input
              type="text"
              className="hidden"
              placeholder="input"
              value={input}
            />
          ) : (
            ""
          )}
          <button className="btn" onClick={handleClick}>
            {play ? "Guess" : "Click here to start"}
          </button>
        </div>
      </section>
    </>
  );
};

export default WordGame;
