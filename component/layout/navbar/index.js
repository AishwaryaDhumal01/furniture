import React from "react";
import { Button } from "react-bootstrap";




const Navbar = () => {
  return (
    <>
      {/* Start Header/Navigation  */}
      <nav
        className="custom-navbar navbar navbar navbar-expand-md navbar-dark "
        arial-label="Furni navigation bar"
      >
        <div className="container">
          <a id="a" className="navbar-brand" href="\">
            Furni<span>.</span>
            
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsFurni"
            aria-controls="navbarsFurni"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsFurni">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item active">
                <a id="a" className="nav-link" href="\">
                  Home 
                </a>
              </li>
              <li>
                
                <a id="a" className="nav-link" href="./shop">
                  Shop
                </a>
              </li>
              <li>
                <a id="a" className="nav-link" href="./aboutus">
                  About us
                </a>
              </li>
              <li>
                <a id="a" className="nav-link" href="./services">
                  Services
                </a>
              </li>
              <li>
                <a id="a" className="nav-link" href="./blog">
                  Blog
                </a>
              </li>
              <li>
                <a v className="nav-link" href="./contactus">
                  Contact us
                </a>
              </li>
            </ul>

            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li>
                <a id="a" className="nav-link" href="#">
                  <img src="assets/images/navbarimage/user.svg" />
                </a>
              </li>
              <li>
                <a id="a" className="nav-link" href="./cart">
                  <img src="assets/images/navbarimage/cart.svg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* End Header/Navigation  */}
    </>
  );
};

export default Navbar;
