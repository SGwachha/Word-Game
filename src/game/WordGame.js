import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./WrodGame.css";

const WordGame = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
const onSubmit = data =>

{console.log(data);
if(data.inputName==="hasina"){
  console.log("hii")
}
else{
  console.log("bye")
}

}
  const [play, setPlay] = useState(false);
  const [input, setInput] = useState();
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("");

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
    const splittedWord = newWord.split('')
    const randomWord = scrambleWord(splittedWord);
    const finalWord = randomWord.join("");
    setMsg(finalWord);
  };
  return (
    <>
      <header>
        <h1>Guess the word</h1>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
      <section>
        <div className="gameArea">
          <h3 className="msg">Guess The Name: {msg}</h3>
          {show ? (
            <input
              type="text"
              className="hidden"
              placeholder="input"
              value={input}
              {...register("inputName")}
            />
          ) : (
            ""
          )}
          <button type="submit" className="btn" onClick={handleClick}>
            {play ? "Guess" : "Click here to start"}
          </button>
        </div>
      </section>
      </form>
    </>
  );
};

export default WordGame;
