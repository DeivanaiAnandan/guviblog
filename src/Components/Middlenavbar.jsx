import React from "react";
import { Link, NavLink } from "react-router-dom";
function Middlenavbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.5)" }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav fw-bold">
              <NavLink style={({ isActive }) => ({
                                color: isActive
                                    ? "green"
                                    : "black",
                            })} className="nav-link mr-5" to={"/"}>ALL</NavLink>
              <NavLink style={({ isActive }) => ({
                                color: isActive
                                    ? "green"
                                    : "black",
                            })}className="nav-link mr-5" to={"/fullstack"}>FULLSTACK DEVELOPMENT</NavLink>
              <NavLink style={({ isActive }) => ({
                                color: isActive
                                    ? "green"
                                    : "black",
                            })}className="nav-link mr-5" to={"/datascience"}>DATA SCIENCE</NavLink>
              <NavLink style={({ isActive }) => ({
                                color: isActive
                                    ? "green"
                                    : "black",
                            })}className="nav-link mr-5" to={"/cybersecurity"}>CYBER SECURITY</NavLink>
              <NavLink style={({ isActive }) => ({
                                color: isActive
                                    ? "green"
                                    : "black",
                            })}className="nav-link mr-5" to={"/career"}>CAREER</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Middlenavbar;
