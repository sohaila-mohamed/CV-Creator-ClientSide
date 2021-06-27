import { useEffect, useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import logo from "../../images/logo.svg";
import { NavLink, useHistory } from "react-router-dom";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { authActions } from "../../store/auth-slice";
import { useRef } from "react";

function Header() {

  const ref = useRef(null);
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setshowDropSown(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);



  const dispatch = useDispatch()
  const authState = useSelector(state => state.auth)

  const [showDropSown, setshowDropSown] = useState(false)

  const toggleDropDown = (event)=>{
    event.preventDefault();
    event.stopPropagation();
    if(event.target === event.currentTarget) {
      // handle
      setshowDropSown((prev)=>{
        return !prev
      })
    }
  }



  const history = useHistory();

  function handleSignUp() {
    history.push("/sign-up");
  }
  function handleSignIn() {
    history.push("/sign-in");
  }
  const logoutHandler = ()=>{
    dispatch(authActions.logoutUser())
    setshowDropSown(false);
  }


  return (
    <Navbar className="shadow" style={{ zIndex: 999 }} bg="white" expand="lg">
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
                {!authState.isLoggedIn &&
                  
                    <NavLink
                      to="/sign-in"
                      className="pr-3 d-lg-none nav-link d-inline-block">
                      Sign-IN
                    </NavLink>
                }
                {!authState.isLoggedIn &&
                  
                    <NavLink
                      to="/sign-up"
                      className="pr-3 d-lg-none nav-link d-inline-block">
                      Sign-UP
                    </NavLink>
                }
              </Nav>
            </Navbar.Collapse>
          </div>
          {authState.isLoggedIn && 
          <div className="col-3 d-none d-lg-flex align-items-center justify-content-end">
            <div className="logged-in">
              <img src="https://image.flaticon.com/icons/png/512/149/149071.png"
                onClick={toggleDropDown}
                alt="" 
                className="avatar"/>
              <FontAwesomeIcon icon={faBars} onClick={toggleDropDown}
                style={{position:"absolute",bottom:"5px",right:"8px",color:"white",fontSize:"20px" }}/>
              {showDropSown && 
                <div className="login-dropdown" ref={ref}>
                    <div onClick={logoutHandler}>logout</div>
                </div>
              }
            </div>
          </div>}
          
          {!authState.isLoggedIn &&
          <div className="col-3  d-none d-lg-flex align-items-center justify-content-end">
            <Button
              variant="primary"
              className="sign-btn d-lg-inline-block d-none"
              id="filled-btn"
              onClick={handleSignIn}
            >
              Sign-IN
            </Button>
            <Button
              className="sign-btn d-lg-inline-block d-none"
              id="outLined-btn"
              onClick={handleSignUp}
            >
              Sign-UP
            </Button>
          </div>
          }
          
        </div>
      </div>
    </Navbar>
  );
}

export default Header;
