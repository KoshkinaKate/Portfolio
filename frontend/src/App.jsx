//main page where i call it all
import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage"
import SecondPage from "./pages/SecondPage/SecondPage"
import About from "./pages/About/About";
import Project from "./pages/Projects/Projects";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/secondpage" element={<SecondPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
    </div>
  );
}


