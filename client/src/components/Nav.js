import React from "react";
import "../assets/css/Nav.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <h1>Google Books Search</h1>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item one">
            <a className="nav-link" href="/search">
              Search
            </a>
          </li>
          <li className="nav-item two">
            <a className="nav-link" href="/saved">
              Saved
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
