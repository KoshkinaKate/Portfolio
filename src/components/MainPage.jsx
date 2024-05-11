// this is first page that should have a link to connect Main Page 2 
import React from "react";
import { Link } from "react-router-dom";
import image from "../pages/IMG_2228.jpg"


export default function MainPage(props) {
  return (
    <div className="main-page">
      <img className="img" src={image} alt="Main Photo" />
      <Link to="/mainpagetwo">
        <div className="portfolio-link">
          <p>Portfolio</p>
        </div>
      </Link>
    </div>
  );
}