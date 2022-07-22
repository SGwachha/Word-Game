import React, { useState } from "react";
import "./WrodGame.css";

const WordGame = () => {
  const [play, setPlay] = useState(false);
  const [input, setInput] = useState();
  const [show, setShow] = useState(false);

  const sWord = ["hasina", "sanjeev", "bhanu", "rahul", "pravesh", "anish", "basanta"];

  const createNewWord = () => {
    const ranNum = Math.floor(Math.random() * sWord.length);
    const newWord = "";
    const randomWord = "";
    const newName = sWord[ranNum];
    return newName;
  };

  const scrambleWord = (randomWord) =>{
    const scrambledWord = []
    let randomindex = []
    for(let i=0; i=randomWord.length+10 && randomindex.length !== randomWord.length; i++){
      const randompos = Math.floor(Math.random()*(randomWord.length - 0) + 0)
      if(!randomindex.includes(randompos)){
        randomindex.push(randompos)
        scrambledWord.push(randomWord[randompos])
      }
    }
    return scrambledWord
  }

  const handleClick = () => {
    setPlay(true);
    setShow(true);
    const newWord = createNewWord();
    // console.log(newWord)
    const splittedWord = newWord.split('')
    const randomWord = scrambleWord(splittedWord);
    console.log('randomWord is', randomWord.join(""));
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
