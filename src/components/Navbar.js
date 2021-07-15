import React from "react";
import logo from "../logo.png";

// React Font Awesome //
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars } from "@fortawesome/free-solid-svg-icons";

const logoStyle = {
  height: "2.5rem",
  width: "2.5rem",
  marginLeft: "1rem",
};
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <div className="container">
        <a className="navbar-brand" href="#">
          <img
            className="logoStyle"
            src={logo}
            style={logoStyle}
            alt="logo..."
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contacts
              </a>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;