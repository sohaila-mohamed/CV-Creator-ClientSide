import { Navbar, Nav, Button } from "react-bootstrap";
import logo from "../../images/logo.svg";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <div className="container-fluid">
        <div className="row m-0 p-0 justify-content-start w-100">
          <div className="col-3">
            <Navbar.Brand href="#home" className="m-lg-2">
              <img
                src={logo}
                className="d-inline-block align-center "
                id="Logo"
              />
            </Navbar.Brand>
          </div>
          <div className="col-2 offset-7 d-lg-none d-flex align-content-center justify-content-end">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>
          <div className="col-lg-6 col-12 d-flex align-items-center ">
            <Navbar.Collapse id="basic-navbar-nav ">
              <Nav className="d-flex align-content-center justify-content-center m-auto ">
                <NavLink
                  exact
                  to="/"
                  activeClassName="Active-link"
                  className="pr-3  nav-link position-relative"
                >
                   Home
                </NavLink>
                <NavLink
                  to="/Editor"
                  activeClassName="Active-link"
                  className="pr-3 nav-link position-relative"
                >
                  Resume Builder
                </NavLink>
                <NavLink
                  to="/templates"
                  activeClassName="Active-link"
                  className="pr-3 nav-link position-relative"
                >
                  Templates
                </NavLink>
                <NavLink
                  to="/tips"
                  activeClassName="Active-link"
                  className="pr-3 nav-link position-relative"
                >
                  Tips
                </NavLink>
                <NavLink
                  to="/about-us"
                  activeClassName="Active-link"
                  className="pr-3 nav-link position-relative"
                >
                  About-us
                </NavLink>
                <NavLink
                  to="/sign-in"
                  className="pr-3 d-lg-none nav-link d-inline-block"
                >
                  Sign-IN
                </NavLink>
                <NavLink
                  to="/sign-up"
                  className="pr-3 d-lg-none nav-link d-inline-block"
                >
                  Sign-UP
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </div>
          <div className="col-3  d-none d-lg-flex align-items-center justify-content-end">
            <Button
              variant="primary"
              className="sign-btn d-lg-inline-block d-none"
              id="filled-btn"
            >
              Sign-IN
            </Button>
            <Button
              className="sign-btn d-lg-inline-block d-none"
              id="outLined-btn"
            >
              Sign-UP
            </Button>
          </div>
        </div>
      </div>
    </Navbar>
  );
}

export default Header;
