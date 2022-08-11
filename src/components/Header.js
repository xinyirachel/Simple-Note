import React from "react";
import {Link} from "react-router-dom";

function Header() {

    return (
              <nav className="header">
                <div className="btn-container">
                  <Link to="/" className="filter-btn">Notes</Link>
                  <Link to="/tools" className="filter-btn">Tools</Link>
                  <Link to="/about" className="filter-btn">About</Link>                  
                </div>
                <div>
                  <h1 className="title">Simple Note</h1>
                </div>
              </nav>
            );
}

export default Header;