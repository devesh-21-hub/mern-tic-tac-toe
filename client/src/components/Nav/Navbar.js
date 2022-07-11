import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div class="nav">
          <input type="checkbox" id="nav-check" />
          <div class="nav-header">
            <div class="nav-title">Tic Tac Toe</div>
          </div>
          <div class="nav-btn">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
