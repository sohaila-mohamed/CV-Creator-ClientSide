import "./Footer.css";
import logo from "../../images/logo.svg";

function Footer() {
  return (
    <div id="Footer">
      <div className="container-fluid">
        <div className="row m-0 justify-content-start">
          <img src={logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
}
export default Footer;
