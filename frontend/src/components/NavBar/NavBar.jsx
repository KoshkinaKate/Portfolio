import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/about" className="nav-link"><span>About</span></Link>
      <Link to="/projects" className="nav-link"><span>Projects</span></Link>
      <Link to="/resume" className="nav-link"><span>Resume</span></Link>
      <Link to="/contact" className="nav-link"><span>Contact</span></Link>
    </nav>
  );
}

