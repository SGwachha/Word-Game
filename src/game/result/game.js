import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Game = () => {
  const navigate = useNavigate();

  const [play, setPlay] = useState(false);
  const [currentWord, setCurrentWord] = useState("");
  const [input, setInput] = useState();
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("");

  const sWord = [
    "hasina",
    "sanjeev",
    "bhanu",
    "rahul",
    "pravesh",
    "anish",
    "basanta",
    "luv",
    "jeevan",
    "sandesh",
    "pushpa",
    "abhinav",
    "keshav",
    "sushil",
    "tika",
    "amrita",
    "biplap",
    "saroj",
    "nabin",
  ];

  const createNewWord = () => {
    //function calling
    const ranNum = Math.floor(Math.random() * sWord.length);
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

  useEffect(() => {
    setCurrentWord(
      scrambleWord(sWord[Math.floor(Math.random() * sWord.length)])
    );
  }, []);

  const handleClick = () => {
    setPlay(true);
    setShow(true);
    const newWord = createNewWord();
    const splittedWord = newWord.split("");
    const randomWord = scrambleWord(splittedWord);
    const finalWord = randomWord.join("");
    setMsg(finalWord);
  };

  const checkResult = () => {
    console.log("checkoing", input);
    if (sWord.includes(input)) {
      navigate("/correct");
    } else {
      navigate("/incorrect");
    }
  };

  return (
    <>
      {/* conditional rendering and design */}
      {show ? (
        <>
          <h3 className="msg">Guess The Name: {currentWord}</h3>
          <input
            type="text"
            className="hidden"
            placeholder="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </>
      ) : (
        ""
      )}
      {/* conditional rendering for button */}
      <button className="btn" onClick={play ? checkResult : handleClick}>
        {play ? "Guess" : "Click here to start"}
      </button>
    </>
  );
};

export default Game;
