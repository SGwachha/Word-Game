import React, { useState } from "react";
import "./WrodGame.css";

const WordGame = () => {
  const [play, setPlay] = useState(false);
  const [input, setInput] = useState();
  const [show, setShow] = useState(false);

  const sWord = ["hasina", "sanjeev", "bhanu", "rahul"];

  const createNewWord = () => {
    const ranNum = Math.floor(Math.random() * sWord.length);
    const newWord = "";
    const randomWord = "";
    const newName = sWord[ranNum];
    return newName;
  };

  const scrambleWord = (arr) =>{
    for (const i= arr.length-1; i>0; i--)
    {
      const temp =arr[i];
      console.log(temp);
    }
  }

  const handleClick = () => {
    setPlay(true);
    setShow(true);
    const newWord = createNewWord();
    // console.log(newWord);
    const randomWord = scrambleWord(newWord.split(""));
    console.log(randomWord);
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
