import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light  static-top mb-0 shadow"
      style={{ backgroundColor: "#8661d1" }}
    >
      <div className="container">
        <img
          alt="Calorie Journal Logo"
          src="https://user-images.githubusercontent.com/37651620/142762093-45207811-0c6e-4b62-9cb2-8d0009efb4ea.png"
          width="70"
          height="70"
          className="d-inline-block align-top"
        />
          <Link
          className="navbar-brand"
            to="/"
            className="navbar-brand"
            style={{
              color: "white",
              fontSize: "1.5rem",
              marginRight: "15rem",
              marginLeft: "28rem",
            }}
          >
            Calorie Journal
          </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link
                className="nav-link"
                  to="/"
                  className="nav-link"
                  style={{
                    fontSize: "1.2rem",
                    color: "white",
                  }}
                >
                  Calorie Info
                </Link>
            </li>
            <li className="nav-item active">
                <Link
                className="nav-link"
                  to="/create"
                  className="nav-link"
                  style={{
                    fontSize: "1.2rem",
                    color: "white",
                  }}
                >
                  Add Food details
                </Link>
            </li>
            <li className="nav-item">
                <Link
                className="nav-link"
                  to="/user"
                  className="nav-link"
                  style={{
                    fontSize: "1.2rem",
                    color: "white",
                  }}
                >
                  New User
                </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
