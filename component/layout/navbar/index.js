import Link from "next/link";
import React from "react";
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
                <Link v className="nav-link" href="./contactus">
                  Contact us
                </Link>
              </li>
            </ul>

            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li>
                <Link id="a" className="nav-link" href="#">
                  <Image alt="user" height={20} width={20}  src="/assets/images/navbarimage/user.svg" />
                </Link>
              </li>
              <li>
                <Link id="a" className="nav-link" href="./cart">
                  <Image alt="cart" height={20} width={20} src="/assets/images/navbarimage/cart.svg" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Navbar> 

{/* <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}

    
    </>
  );
};

export default NavbarPage;
  {/* Start Header/Navigation  */}
    
      {/* End Header/Navigation  */}