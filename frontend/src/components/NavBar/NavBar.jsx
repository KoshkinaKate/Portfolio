import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="burger-icon">
        <div className="burger-lines">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span className="menu-text">Menu</span>
      </div>
      <div className="nav-links">
        <Link to="/secondpage" className="work-page"><span>Kate Koshkina</span></Link>
        <Link to="/" className="nav-link"><span>Welcome Page</span></Link>
        <Link to="/about" className="nav-link"><span>About</span></Link>
        <Link to="/projects" className="nav-link"><span>Projects</span></Link>
        <Link to="/contact" className="nav-link"><span>Contact</span></Link>
      </div>
    </nav>
  );
}




