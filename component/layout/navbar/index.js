import Link from "next/link";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  NavbarCollapse,
} from "react-bootstrap";
import Image from "next/image";


const NavbarPage = () => {
  return (
    <>
  <Navbar
        className="custom-navbar navbar navbar navbar-expand-md navbar-dark "
        arial-label="Furni navigation bar"
      >
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
                <Link className="nav-link" href="/">Home</Link>
              
              </li>
              <li>
                
                <Link className="nav-link" href="./shop">
                  Shop
                </Link>
              </li>
              <li>
                <Link id="a" className="nav-link" href="./aboutus">
                  About us
                </Link>
              </li>
              <li>
                <Link id="a" className="nav-link" href="./services">
                  Services
                </Link>
              </li>
              <li>
                <Link id="a" className="nav-link" href="./blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link id="a" className="nav-link" href="./news">
                  News
                </Link>
              </li>
              <li>
                <Link  className="nav-link" href="./contactus">
                  Contact us
                </Link>
              </li>
            </ul>

            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li>
                <Link id="a" className="nav-link" href="./login">
                  <Image alt="user" height={20} width={20}  src="/assets/images/navbarimage/user.svg" />
                </Link>
              </li>
              <li>
                <Link id="a" className="nav-link cart-trolley--link " href="./cart">
                <FiShoppingCart className="cart-trolley" style={{color:"white", height:"20px", width:"20px"}} /> 
                  <span className="cart-total--item" style={{paddingLeft: "5px", paddingRight: "5px"
     }}>10</span>
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
  {/* Start Header/Navigation  */}
    
      {/* End Header/Navigation  */}