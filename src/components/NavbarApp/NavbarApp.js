import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { LANGUAGES } from "../../langs/esp";

export default class NavbarApp extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    activeClassName="active"
                    className="nav-item nav-link"
                    exact
                    to="/"
                  >
                    {LANGUAGES.NAVBARAPP.TITLE}
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <div
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {LANGUAGES.NAVBARAPP.DROPDOWN}
                  </div>
                  <ul
                    className="dropdown-menu bg-dark border-light"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/dc-comic"
                      >
                        {LANGUAGES.NAVBARAPP.DC_COMICS}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/marvel-comic"
                      >
                        {LANGUAGES.NAVBARAPP.MARVEL_COMICS}
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  id="search"
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
                <button
                  className="btn btn-outline-success"
                  type="submit"
                  onClick={() => console.log}
                >
                  {LANGUAGES.NAVBARAPP.BUSCAR}
                </button>
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
