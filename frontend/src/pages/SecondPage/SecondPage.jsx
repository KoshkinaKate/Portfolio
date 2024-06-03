//this page loads when user click on Main Page "portfolio button"
//this page contains two links for About and Projects
import React from "react";
import { Link } from "react-router-dom";
import "./SecondPage.css";

export default function MainPageTwo() {
  return (
    <div className="main-page-two">
      <header>
        <Link to="/about">
            <div className="about-link">
            <p>About</p>
            </div>
            </Link>
        <Link to="/projects">
        <div className="projects-link">
            <p>Projects</p>
            </div>
            </Link>
      </header>
      <div className="content">
        {/*future changes content here */}
      </div>
    </div>
  );
}

