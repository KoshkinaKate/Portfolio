import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import SecondPage from "./pages/SecondPage/SecondPage";
import About from "./pages/About/About";
import Project from "./pages/Projects/Projects";
import NavBar from "./components/NavBar/NavBar";
import Resume from "./pages/Resume/Resume";
import Contact from "./pages/Contact/Contact";

export default function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== '/' && <NavBar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/secondpage" element={<SecondPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}



