import Aboutimg from "../../images/aboutimg.svg";
import "./About.css";
import telescope from "../../images/telescope.svg";
import barchart from "../../images/bar-chart.svg";
import clipboard from "../../images/clipboard.svg";
import Feedback from "../../images/Feedback.PNG";
import Feedback2 from "../../images/Feedback2.jpg";
import Eslam from "../../images/Team/Eslam.JPG";
import Omar from "../../images/Team/Omar.JPG";
import Mayar from "../../images/Team/Mayar.JPG";
import Sohaila from "../../images/Team/Sohaila.PNG";
import Khaled from "../../images/Team/Khaled.png";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import AnimatedNumber from "react-animated-number";
import { useState, useEffect, Fragment } from "react";
const About = () => {
  const [Counter, SetCounter] = useState(0);
  const [done, SetDone] = useState(false);
  const arr = [27508, 1000000000, 2000, 3, 8];
  const speed = 200;

  useEffect(() => {
    if (!done) {
      setTimeout(() => {
        if (Counter < arr[0]) {
          SetCounter(Counter + speed);
        } else {
          SetCounter(arr[0]);
          SetDone(true);
          console.log("l");
        }
      }, 1);
    }
  }, [Counter]);
  return (
    <Fragment>
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
          <p>
            <AnimatedNumber value={Counter}></AnimatedNumber>
          </p>
          <p>Satisfaied Clients</p>
        </div>
        <div className="p-4 text-center">
          <p className="counter">1000000000</p>
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
      <div className="container d-flex flex-wrap mt-5 pt-5 justify-content-between mb-5">
        <div className="align-self-center text-center font-weight-bold text-size-custom">
          <p>
            <span style={{ color: "#6b82b7" }}>Our</span> Values
          </p>
          <p>&amp;</p>
          <p>
            <span style={{ color: "#6b82b7" }}>Our</span> Vission
          </p>
        </div>
        <div className="w-50 align-self-center">
          <p>
            <img alt="icon" src={telescope} className="img-size d-block" />
            We ask recruiters what makes for a successful resume. Then we take
            these insights and build them into our resume templates. Thus, when
            you use our online resume builder, you know you are giving
            recruiters exactly what they want.
          </p>
          <p>
            <img alt="icon" src={barchart} className="img-size d-block" />
            Built for impact we identify and nurture a truly diverse team of
            designers, developers and marketers
          </p>
          <p>
            <img alt="icon" src={clipboard} className="img-size d-block" />
            After a rigorous development and testing process, the outcome was an
            online resume builder that combines functionality and aesthetics to
            maximize users' chances of being invited for job interviews.
          </p>
        </div>
      </div>
      <div className="container d-flex mb-5">
        <img src={Feedback2} alt="Feedback" className="img-fluid w-50 pr-5" />
        <div className="align-self-center text-center flex-grow-1">
          <h1>
            WE WANT YOUR{" "}
            <span style={{ color: "#6b82b7", display: "block" }}>FEEDBACK</span>
          </h1>
        </div>
      </div>
      <div className="back-color h-auto text-white d-flex justify-content-around flex-wrap ">
        <p className="p-4 fa-2x font-weight-bold align-items-center">Idea</p>
        <p className="p-4 w-50">
          By combining their respective backgrounds in technology, marketing,
          and design, the three came up with the idea of an intuitive, web-based
          tool that would make it as simple as possible to produce an
          eye-catching resume.
        </p>
      </div>
      <div className="container text-center mt-5">
        <h3 className="font-weight-bold pb-3">Meet our team</h3>
        <Row className="d-flex flex-wrap justify-content-around mb-5">
          <Card className="w-25 mr-1" style={{ width: "18rem" }}>
            <div className="flip-box image-style w-100">
              <div className="flip-box-inner">
                <div className="flip-box-front">
                  <Card.Img
                    variant="top"
                    src={Eslam}
                    className=" img-fluid  p-3"
                  />
                </div>
                <div className="flip-box-back">
                  <h4 className="p-5">Front-End Developer</h4>
                </div>
              </div>
            </div>
            <Card.Body>
              <Card.Title className="font-weight-bold">
                Eslam Mamdouh
              </Card.Title>
            </Card.Body>
          </Card>
          <Card
            className="w-25 mr-1"
            style={{ width: "18rem", height: "18rem" }}
          >
            <div className="flip-box image-style w-100">
              <div className="flip-box-inner">
                <div className="flip-box-front">
                  <Card.Img
                    variant="top"
                    src={Omar}
                    className=" img-fluid  p-3"
                  />
                </div>
                <div className="flip-box-back">
                  <h4 className="p-5">Front-End Developer</h4>
                </div>
              </div>
            </div>
            <Card.Body>
              <Card.Title className="font-weight-bold">Omar Mohamed</Card.Title>
            </Card.Body>
          </Card>
          <Card className="w-25 mr-1" style={{ width: "18rem" }}>
            <div className="flip-box image-style w-100">
              <div className="flip-box-inner">
                <div className="flip-box-front">
                  <Card.Img variant="top" src="" className=" img-fluid  p-3" />
                </div>
                <div className="flip-box-back">
                  <h4 className="p-5">Front-End Developer</h4>
                </div>
              </div>
            </div>
            <Card.Body>
              <Card.Title className="font-weight-bold">Khaled Adel</Card.Title>
            </Card.Body>
          </Card>
        </Row>
        <Row className="d-flex flex-wrap mb-5 justify-content-center">
          <Card
            className="w-25 mr-5 ml-5"
            style={{ width: "18rem", height: "18rem !important" }}
          >
            <div className="flip-box image-style w-100">
              <div className="flip-box-inner">
                <div className="flip-box-front">
                  <Card.Img
                    variant="top"
                    src={Sohaila}
                    className=" img-fluid  p-3"
                  />
                </div>
                <div className="flip-box-back">
                  <h4 className="p-5">Full Stack Developer</h4>
                </div>
              </div>
            </div>
            <Card.Body>
              <Card.Title className="font-weight-bold">
                Sohaila Mohamed
              </Card.Title>
            </Card.Body>
          </Card>
          <Card className="w-25 mr-1" style={{ width: "18rem" }}>
            <div className="flip-box image-style w-100">
              <div className="flip-box-inner">
                <div className="flip-box-front">
                  <Card.Img
                    variant="top"
                    src={Mayar}
                    className=" img-fluid  p-3"
                  />
                </div>
                <div className="flip-box-back">
                  <h4 className="p-5">Front-End Developer</h4>
                </div>
              </div>
            </div>
            <Card.Body>
              <Card.Title className="font-weight-bold">
                Mayar Mostafa
              </Card.Title>
            </Card.Body>
          </Card>
        </Row>
      </div>
      {/* */}
    </Fragment>
  );
};
export default About;
