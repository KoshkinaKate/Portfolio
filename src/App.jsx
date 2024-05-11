//main page where i call it all
import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import MainPageTwo from "./pages/MainPageTwo";
import About from "./pages/About";
import Project from "./pages/Projects";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/mainpagetwo" element={<MainPageTwo />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
    </div>
  );
}


