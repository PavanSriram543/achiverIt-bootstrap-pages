import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const CustomNav = () => {
  return (
    <nav className="CoustomNav second-nav navbar-expand-lg navbar-light bg-white p-3 bx-shadow">
      <div className="container-fluid ">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-lg-0 sec-nav ">
            <li className="nav-item pb-10 link-hover">
              <Link to="/" className="nav-link p-1">
                <i className="fa fa-bars" aria-hidden="true" />
                Courser
              </Link>
            </li>
            <li className="nav-item pb-10">
              <Link to="/" className="nav-link p-1">
                UI Development
              </Link>
            </li>
            <li className="nav-item pb-10">
              <Link to="/" className="nav-link p-1">
                Angular
              </Link>
            </li>
            <li className="nav-item pb-10">
              <Link to="/" className="nav-link p-1">
                ReactJS
              </Link>
            </li>
            <li className="nav-item pb-10">
              <Link to="/" className="nav-link p-1">
                VUEJS
              </Link>
            </li>
            <li className="nav-item pb-10">
              <Link to="/" className="nav-link p-1">
                MEARN
              </Link>
            </li>
            <li className="nav-item pb-10">
              <Link to="/" className="nav-link p-1">
                MEAN
              </Link>
            </li>
            <li className="nav-item pb-10">
              <Link to="/" className="nav-link p-1">
                Digital Marketing
              </Link>
            </li>
            <li className="nav-item pb-10">
              <Link to="/" className="nav-link p-1">
                Python
              </Link>
            </li>
            <li className="nav-item pb-10">
              <Link to="/" className="nav-link p-1">
                IONIC
              </Link>
            </li>
            <li className="nav-item pb-10">
              <Link to="/" className="nav-link p-1">
                React Native
              </Link>
            </li>
            <li className="nav-item pb-10">
              <Link to="/" className="nav-link p-1">
                WEB DEV
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default CustomNav;
