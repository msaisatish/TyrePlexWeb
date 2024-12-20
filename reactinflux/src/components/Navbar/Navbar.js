import React, { useState } from "react";
import home from "../Assets/Home.svg";
import signin from "../Assets/signin.png";
import chevronarrow from "../Assets/up-arrow.png";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      {/* Home Icon for Mobile Devices */}
      <img className="bi" onClick={toggleNav} src={home} alt="Home Icon" />

      {/* Navbar for Larger Screens */}
      <div className={`navbar ${isNavOpen ? "open" : ""}`}>
        <nav>
          <ul className="nav-list">
            {[...Array(3)].map((_, index) => (
              <li className="nav-item" key={index}>
                <a className="fs-16px" href="#">
                  PLACEHOLDER TITLE{" "}
                  <img
                    src={chevronarrow}
                    alt="chevron arrow Icon"
                    class="chevron-arrow"
                  />
                </a>
                <ul className="dropdown" style={{ paddingLeft: "0px" }}>
                  <li>
                    <a href="#">Sub Option 1</a>
                  </li>
                  <li>
                    <a href="#">Sub Option 2</a>
                  </li>
                  <li>
                    <a href="#">Sub Option 3</a>
                  </li>
                </ul>
              </li>
            ))}
            <li className="nav-item">
              <button className="nav-sign-button fs-20px d-flex align-items-center">
                <img
                  src={signin}
                  alt="Sign In Icon"
                  height="20"
                  className="sign-in-icon"
                />
                <span>SIGN IN</span>
              </button>
            </li>
          </ul>
          <hr className="hr-line" />
          <ul className="ul-sub-nav-options">
            {[
              "Placeholder title",
              "Placeholder title",
              "Placeholder title",
              "Placeholder title",
            ].map((title, index) => (
              <li className="li-sub-nav-options" key={index}>
                <a href="#">{title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
