import React from "react";
import image from "../../assets/pictures/Resume.jpg";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      <div className="resume-container">
        <img className="resume-image" src={image} alt="Resume" />
      </div>
    </div>
  );
}
