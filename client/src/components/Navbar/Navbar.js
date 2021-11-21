import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-light  static-top mb-0 shadow"
      style={{ backgroundColor: "#8661d1" }}
    >
      <div class="container">
        <img
          alt=""
          src="../../Assets/logo.png"
          width="60"
          height="60"
          className="d-inline-block align-top"
        />
        <a class="navbar-brand">
          <Link
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
        </a>

        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link">
                <Link
                  to="/"
                  className="nav-link"
                  style={{
                    fontSize: "1.2rem",
                    color: "white",
                  }}
                >
                  Meal Logs
                </Link>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link">
                <Link
                  to="/create"
                  className="nav-link"
                  style={{
                    fontSize: "1.2rem",
                    color: "white",
                  }}
                >
                  New Meal
                </Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <Link
                  to="/user"
                  className="nav-link"
                  style={{
                    fontSize: "1.2rem",
                    color: "white",
                  }}
                >
                  New User
                </Link>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
