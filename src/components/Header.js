import React from "react";
import {Link} from "react-router-dom";

function Header() {
    return (
              <nav className="header">
                <span className="btn-container-left">
                  <Link to="/" className="filter-btn">Notes</Link>
                  <Link to="/tools" className="filter-btn">Tools</Link>
                  <Link to="/about" className="filter-btn">About</Link>
                </span>
                <h1 className="title">Simple Note</h1>
              </nav>
            );
}

export default Header;