import React from "react";
import { Route, Routes } from "react-router-dom";
import Correct from "./game/result/Correct";
import Incorrect from "./game/result/Incorrect";
import WordGame from "./game/WordGame";
import Game from "./game/result/game";

const Router = () => {
  return (
    <WordGame>
      <Routes>
        <Route path='/' element={<Game />} />
        <Route path="/correct" element={<Correct />} />
        <Route path="/incorrect" element={<Incorrect />} />
      </Routes>
    </WordGame>
  );
};

export default Router;
