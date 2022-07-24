import React, { useEffect, useState } from "react";
import "./WrodGame.css";

// function of project

const WordGame = () => {
  const [play, setPlay] = useState(false);
  const [currentWord, setCurrentWord] = useState('')
  const [input, setInput] = useState();
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("");
  const [milyo, setMilyo] = useState(false)

  const sWord = [
    "hasina",
    "sanjeev",
    "bhanu",
    "rahul",
    "pravesh",
    "anish",
    "basanta",
  ];

  const createNewWord = () => {
    const ranNum = Math.floor(Math.random() * sWord.length);
    const newWord = "";
    const randomWord = "";
    const newName = sWord[ranNum];
    return newName;
  };

  function scrambleWord(sWord) {
    const scrambledWord = [];
    let randomindex = [];
    do {
      const randompos = Math.floor(Math.random() * sWord.length);
      if (!randomindex.includes(randompos)) {
        randomindex.push(randompos);
        scrambledWord.push(sWord[randompos]);
      }
    } while (randomindex.length !== sWord.length);
    return scrambledWord;
  }

  
  const handleClick = () => {
    setPlay(true);
    setShow(true);
    const newWord = createNewWord();
    const splittedWord = newWord.split("");
    const randomWord = scrambleWord(splittedWord);
    const finalWord = randomWord.join("");
    setMsg(finalWord);
  };

  const checkResult = () =>{
    console.log('checkoing', input)
    if(sWord.includes(input)){
      setMilyo(true)
    }
    else{
      setMilyo(false)
      setInput('')
      setCurrentWord(scrambleWord(
        sWord[Math.floor(Math.random() * sWord.length)]
      ))
    }
  }
  
  useEffect(()=>{   
    setCurrentWord(scrambleWord(
      sWord[Math.floor(Math.random() * sWord.length)]
    ))
  },[])

  return (
    <>
      {/* Design of project */}
      <header>
        <h1>Guess the word</h1>
      </header>
      <div
        style={{
          display: milyo ? "block" : "none"
        }}
      >milyo</div>
      <section>
        <div className="gameArea">
          {show ? (
            <>
              <h3 className="msg">Guess The Name: {currentWord}</h3>
              <input
                type="text"
                className="hidden"
                placeholder="input"
                value={input}
                onChange = {e => setInput(e.target.value)}
              />
            </>
          ) : (
            ""
          )}
          <button className="btn" onClick={play ? checkResult : handleClick}>
            {play ? "Guess" : "Click here to start"}
          </button>
        </div>
      </section>
    </>
  );
};

export default WordGame;
