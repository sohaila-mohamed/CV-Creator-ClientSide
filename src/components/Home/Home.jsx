import { Fragment } from "react";
import { Button } from "react-bootstrap";
import hero from "../../images/All.svg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.css";
import verified from "../../images/verified.svg";
function Home() {
  return (
    <Fragment>
      <div className="card position-relative">
        <img src={hero} alt="hero" className="img-fluid w-100" id="heroimg" />
        <div className="card-img-overlay card-center-text p-0 d-flex">
          <div className="align-self-start">
          <p className="font">
            Build The Perfect Resume With Our Online Resume Maker
          </p>
          <p className="card-text font-textt">
            Get expert tips and step-by-step guidance on how to use our online
            resume maker to create the customized resume.
          </p>
          <Button className="btn-custom text-white">
            Build resume <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </Button>
          <Button className="btn-custon-outline text-color">
            Show tempaltes{" "}
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </Button>
          </div>
          
          
          
          <div className="position-absolute d-lg-flex cards-container align-self-end  d-md-flex d-sm-flex d-none " >
            <div
              className="Floating-card p-4 shadow position-relative align-self-end"
            
            >
              <p>Create Multiple Versions</p>
              <img src={verified} alt="verified" className="img-position" />
            </div>
            <div
              className="Floating-card p-4 shadow position-relative align-self-center"
            
            >
              <p>Custom Layout</p>
              <img src={verified} alt="verified" className="img-position" />
            </div>
            <div
              className="Floating-card p-4 shadow position-relative align-self-start"
            
            >
              <p 
              >
                3 Page CV
              </p>
              <img src={verified} alt="verified" className="img-position" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Home;
