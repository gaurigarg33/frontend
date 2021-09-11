import React from "react";
import { useSelector } from "react-redux";
// import { User } from "../actions/index";

import logo from "../insta-logo.png";

const Navbar35 = () => {
  const user = useSelector((state: any) => state.user);

  return (
    <nav className="navbar35 navbar-expand-lg card">
      <div className="container35">
        <a className="navbar-brand35" href="./#/day-35">
          <img src={logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler35"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon35"></span>
        </button>
        <div className="search35">
          <input
            type="text"
            className="form-control35 form-control-sm"
            placeholder="🔍 Search"
          />
        </div>
        <div className="collapse35 navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav35 mr-auto">
            <li className="nav-item35 active">
              <a className="nav-link35" href="./#/day-35">
                <i className="bi bi-house-fill35"></i>{" "}
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item35">
              <a className="nav-link35" href="./#/day-35">
                <i className="bi bi-chat35"></i>
              </a>
            </li>
            <li className="nav-item35">
              <a className="nav-link35" href="./#/day-35">
                <i className="bi bi-compass35"></i>
              </a>
            </li>
            <li className="nav-item35">
              <a className="nav-link35" href="./#/day-35">
                <i className="bi bi-heart35"></i>
              </a>
            </li>
            <li className="nav-item35">
              <a className="nav-link35" href="./#/day-35">
                <img src={user.profilePicture} alt="profilePicture35" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar35;