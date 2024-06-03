import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import image from "../../assets/pictures/MIK05861.jpg";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="main-page">
      <div className="main-left-half">
        <h1 className="greatings">Hello</h1>
        <h1 className="name">I'm Kate</h1>
        <h3 className="intro">software engineer  .  front-end  .  back-end  .  </h3>
        <h4 className="descripton">
        I'm ready to assist with your projects and am eager for new opportunities.
        </h4>
        <Link className ="topage"to="/secondpage">
          <div className="portfolio-link">
            <p>P o r t f o l i o</p>
          </div>
        </Link>
        <a
          href="https://www.linkedin.com/in/kate-koshkina/"
          target="_blank"
          rel="link"
          className="linkedin-link"
        >
          <FaLinkedin />
        </a>
      </div>
      <div className="main-right-half">
        <div className="img-container">
          <img className="img" src={image} alt="Main Photo" />
        </div>
      </div>
    </div>
  );
}






