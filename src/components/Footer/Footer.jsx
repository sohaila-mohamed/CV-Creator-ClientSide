import "./Footer.css";
import logo from "../../images/logo.svg";
import Line from "../../images/Line.png";
import facebook from "../../images/facebook.svg";
import Linkedin from "../../images/linkedin.svg";
import twitter from "../../images/twitter.svg";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div id="Footer" className="p-2">
      <div className="container-fluid p-0 d-lg-flex d-md-flex d-block flex-wrap justify-content-between h-100 w-100">
        <div className="mb-3 d-lg-inline-block d-md-inline-block d-sm-block d-block ml-lg-5 ml-md-5 ml-0 align-self-center text-sm-center text-center text-lg-left text-md-left">
          <img src={logo} alt="Logo" id="Footer-logo" />
          <img
            src={Line}
            alt="Line after logo"
            className="ml-3 d-lg-inline-block d-md-inline-block d-sm-none d-none"
          />
        </div>
        <div className="flex-grow-1 text-sm-center text-center text-lg-left text-md-left d-lg-inline-block d-md-inline-block d-sm-block d-block align-self-center">
          <NavLink to="/" href="#" className="Footer-a ml-4">
            Plans
          </NavLink>
          <NavLink to="/" href="#" className="Footer-a ml-4">
            Categories
          </NavLink>
          <NavLink to="/" href="#" className="Footer-a ml-4">
            Tips
          </NavLink>
          <NavLink to="/about-us" className="Footer-a ml-4">
            About
          </NavLink>
          <p className="p-0 ml-4">&copy; 2021 ITI-Team. All Rights Reserved.</p>
        </div>
        <div className="d-lg-inline-block d-md-inline-block d-sm-block d-block align-self-center ml-5 mr-5 text-sm-center text-center text-lg-left text-md-left">
          <img src={facebook} alt="facbook" className="icon mr-3" />
          <img src={Linkedin} alt="linkedin" className="icon mr-3" />
          <img src={twitter} alt="twitter" className="icon mr-3" />
          <p>Support: cvcreator@support.com</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
