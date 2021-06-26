import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <nav
      name="top"
      className="navbar navbar-expand-lg navbar-dark bg-dark main-nav "
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            className="brand-img"
            src="https://www.achieversit.com/assets/images/AIT-white.jpg"
            alt="AIT"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse  justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-md-auto">
            <li className="nav-item">
              <Link className="nav-link f-16" to="/">
                Corporate Training
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link f-16" to="/">
                Placements Page
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link f-16" to="/">
                Reviews
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link f-16" to="/">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
