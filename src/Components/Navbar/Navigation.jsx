import "./Navigation.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-white p-0">
        <Container>
          <Link to="/" className="text-decoration-none">
            <Navbar.Brand className="navbrand"><img src="/src/Img/Logo.png" width={'130px'} alt="Florida" /></Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto gap-3">
              <NavLink to="/" className="navLinkbtn">
                Home
              </NavLink>
              <NavLink to="/About" className="navLinkbtn">
                About
              </NavLink>
              <NavLink to="/Services" className="navLinkbtn">
                Services
              </NavLink>
              <NavLink to="/Shop" className="navLinkbtn">
                Shop
              </NavLink>
            </Nav>
            {/* From Uiverse.io by d4niz */}
            <Link className="contactButton m-3" to="/Contact">
              Contact Us
              <div className="iconButton">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
