import Link from "next/link";
import React from "react";
import { FiUser, FiShoppingCart } from "react-icons/fi";
import { Button, Container, Form, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { selectCardCount } from "@/utils/reducers/cart.slice";
import { useSelector } from "react-redux";

const NavbarPage = () => {
  const cardCount = useSelector(selectCardCount);

  return (
    <>
      <Navbar className="custom-navbar navbar navbar navbar-expand-md navbar-dark" arial-label="Furni navigation bar">
        <div className="container">
          <Link id="a" className="navbar-brand" href="/">
            Furni<span>.</span>
          </Link>

          <Button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsFurni"
            aria-controls="navbarsFurni"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Button>

          <div className="collapse navbar-collapse" id="navbarsFurni">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item active">
                <Link className="nav-link" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link" href="./shop">
                  Shop
                </Link>
              </li>
              <li>
                <Link className="nav-link" href="./aboutus">
                  About us
                </Link>
              </li>
              <li>
                <Link className="nav-link" href="./services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="nav-link" href="./blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="nav-link" href="./contactus">
                  Contact us
                </Link>
              </li>
            </ul>

            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <NavDropdown title={<FiUser size={20} style={{ color: "white" }} />} id="basic-nav-dropdown">
                <NavDropdown.Item id="login-link" className="dropdown-menu-item" href="./login">Login</NavDropdown.Item>
                <NavDropdown.Item id="signup-link" className="dropdown-menu-item" href="./signup">Signup</NavDropdown.Item>
              </NavDropdown>
              <li>
                <Link className="nav-link cart-trolley--link " href="./cart">
                  <FiShoppingCart className="cart-trolley" style={{ color: "white", height: "20px", width: "20px" }} />
                  <span className="cart-total--item" style={{ paddingLeft: "5px", paddingRight: "5px" }}>{cardCount}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default NavbarPage;
