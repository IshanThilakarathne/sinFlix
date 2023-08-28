import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import SingleMovie from "./SingleMovie";
import "./App.css";
import downloadPage from "./downloadPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movie/:id" element={<SingleMovie />} />
      <Route path="download/:id" element={<downloadPage />} />
    </Routes>
    
  );
};

export default App;