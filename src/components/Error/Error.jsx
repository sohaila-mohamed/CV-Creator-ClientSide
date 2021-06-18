import ErrorImg from "../../images/Error.svg";
import "./Error.css";
import { NavLink } from "react-router-dom";

function Error() {
  return (
    <div className="container mt-5 mb-5 d-flex">
      <img src={ErrorImg} alt="Error" className="d-inline-block img-fluid" />
      <div className="d-inline-block align-self-center ml-5">
        <h1 className="m-0 p-0" style={{ color: "#6b82b7" }}>
          404 Error
        </h1>
        <p className="textColor mt-3">
          The link you cilcked may be broken or the page may have been removed.
        </p>
        <p id="error-text" className="mt-5">
          Visit the{" "}
          <NavLink to="/" className="error-Link">
            {" "}
            Home{" "}
          </NavLink>{" "}
          page or{" "}
          <NavLink to="/" className="error-Link">
            {" "}
            contact
          </NavLink>{" "}
          me
        </p>
      </div>
    </div>
  );
}
export default Error;
