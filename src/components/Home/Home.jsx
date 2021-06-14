import { Fragment } from "react";
import hero from "../../images/All.svg";
import "./Home.css";
function Home() {
  return (
    <Fragment>
      <div className="card">
        <img src={hero} alt="hero" className="img-fluid w-100" />
        <div className="card-img-overlay">
          <p className="font">
            Build The Perfect Resume With Our Online Resume Maker
          </p>
          <p className="card-text">
            Get expert tips and step-by-step guidance on how to use our online
            resume maker to create the customized resume.
          </p>
        </div>
      </div>
    </Fragment>
  );
}
export default Home;
