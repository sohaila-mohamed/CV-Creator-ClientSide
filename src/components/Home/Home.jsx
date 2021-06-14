import { Fragment } from "react";
import { Button } from "react-bootstrap";
import hero from "../../images/All.svg";
import arrow from "../../images/right-arrow 1.svg";
import arrowWhite from "../../images/arrow-white.svg";
import "./Home.css";
function Home() {
  return (
    <Fragment>
      <div className="card position-relative">
        <img src={hero} alt="hero" className="img-fluid w-100" />
        <div className="card-img-overlay card-center-text p-0">
          <p className="font">
            Build The Perfect Resume With Our Online Resume Maker
          </p>
          <p className="card-text font-textt">
            Get expert tips and step-by-step guidance on how to use our online
            resume maker to create the customized resume.
          </p>
          <Button className="btn-custom text-white">
            Build resume <img src={arrowWhite} alt="arrow" />
          </Button>
          <Button className="btn-custon-outline text-color">
            Show tempaltes <img src={arrow} alt="arrow" />
          </Button>
        </div>
      </div>
    </Fragment>
  );
}
export default Home;
