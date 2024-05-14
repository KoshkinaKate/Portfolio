// this is first page that should have a link to connect Main Page 2 
import React from "react";
import { Link } from "react-router-dom";
import image from "../pages/MIK05861.jpg"
import "./MainPage.css";


export default function MainPage(props) {
  return (
    <div className="main-page">
    <div className="main-left-half">
      <h1 className="greatings">HEY!</h1>
      <h1 className="name">I am Kate</h1>
      <h3 className="intro">Software Engineer</h3>
      <h4 className="descripton"> With a passion for problem-solving and a readiness to embrace new challenges head-on, I'm eager to take on diverse projects in the realm of software engineering. </h4>
    <Link to="/mainpagetwo">
        <div className="portfolio-link">
          <p>Portfolio</p>
        </div>
      </Link>
    <a href="https://www.linkedin.com/in/kate-koshkina/" target="_blank" rel="linkedin" className="linkedin-link">
      <p className="in"> in </p>
    </a>

    </div>
    <div className="main-right-half">
    <img className="img" src={image} alt="Main Photo" />
    </div>
    </div>
  );
}
