import Aboutimg from "../../images/aboutimg.svg";
import "./About.css";
function About() {
  return (
    <>
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between mt-5">
          <h1
            className="font-weight-bold align-self-center"
            style={{ width: "2ch", fontSize: "5ch" }}
          >
            WE CREATE CAREERS
            <span
              className="d-block font-weight-light"
              style={{ width: "20ch", fontSize: "0.8ch" }}
            >
              Welcome To our website
            </span>
          </h1>
          <img src={Aboutimg} alt="About" />
        </div>
      </div>
      <div className="back-color h-auto text-white d-flex justify-content-around flex-wrap font-weight-bold">
        <div className="p-4 text-center">
          <p>27508</p>
          <p>Satisfaied Clients</p>
        </div>
        <div className="p-4 text-center">
          <p>1000,000,000</p>
          <p>Users</p>
        </div>
        <div className="p-4 text-center">
          <p>2000</p>
          <p>Custom Tempelates</p>
        </div>
        <div className="p-4 text-center">
          <p>3</p>
          <p>Main Plans</p>
        </div>
        <div className="p-4 text-center">
          <p>8</p>
          <p>Year Of Experiance</p>
        </div>
      </div>
    </>
  );
}
export default About;
