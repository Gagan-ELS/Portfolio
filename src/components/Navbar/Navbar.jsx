import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Outlet } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid navbar-brand">
          <span className="align-middle">
            <img
              src="download.png"
              alt="profile picture"
              width="40"
              height="40"
              className="d-inline-block align-middle"
              style={{ marginRight: "10px" }}
            />
            <button>
              <h5>
                <b>GAGANDEEP N</b>
              </h5>
            </button>
          </span>

          <span className="navbar-text align-middle">
            <a href="#home">
              <button
                className="align-top home"
                style={{ marginRight: "50px" }}
              >
                <h5>
                  <b>HOME</b>
                </h5>
              </button>
            </a>
            <a href="#about">
              <button
                className="align-top about"
                style={{ marginRight: "50px" }}
              >
                <h5>
                  <b>ABOUT</b>
                </h5>
              </button>
            </a>

            <a href="#contact">
              <button
                className="align-top contact"
                style={{ marginRight: "100px" }}
              >
                <h5>
                  <b>CONTACT</b>
                </h5>
              </button>
            </a>
          </span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
