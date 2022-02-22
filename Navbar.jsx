import React from "react";

function Navbar() {
    return (
        <header>
        <nav className="navbar">
        <ul className="nav-list">
          <div className="list-group">
          <li className="list-item"><a href="#">Home</a></li>
          <li className="list-item"><a href="#">About</a></li>
          <li className="list-item"><a href="#">Works</a></li>
          <li className="list-item"><a href="#">Contact</a></li>
          </div>
        </ul>
      </nav>
      </header>
    );
}

export default Navbar;