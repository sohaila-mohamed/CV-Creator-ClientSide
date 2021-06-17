import { Fragment } from "react";
import { Button, Container } from "react-bootstrap";
import hero from "../../images/All.svg";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.css";
import verified from "../../images/verified.svg";
<<<<<<< HEAD
import descImg_1 from '../../images/description/description-img1.png';
import number_01 from '../../images/description/01.png';
import number_02 from '../../images/description/02.svg';
import number_03 from '../../images/description/03.svg';
import number_04 from '../../images/description/04.svg';
import './description';
import { registration_head, registration_text, categories_text, categories_head, content_head, content_text, export_head, export_text } from "./description";

=======
import Category from "./Categories/Category";
>>>>>>> b618b667de6512798e01f40aaa5f2dab0403ded6
function Home() {

  var description_items = [
    { image: number_01, title: registration_head, text: registration_text },
    { image: number_02, title: categories_head, text: categories_text },
    { image: number_03, title: content_head, text: content_text },
    { image: number_04, title: export_head, text: export_text },
  ];
  var leftSection = (item) => (<Fragment>
    <div className="col-lg-8 col-md-8 col-sm-8 col-12 home-desc-sideText ">
      <h1 >
        {item.title}
      </h1>
      <span>
        {item.text}
      </span>

    </div>
    <div className="col-lg-4 col-md-4 col-sm-4 col-8 offset-2 offset-lg-0 offset-md-0  offset-sm-0 ">
      <img src={descImg_1} className="home-desc-sideImg  "></img>

    </div>
  </Fragment>);
  var rightSection = (item) => (<Fragment>

    <div className="col-lg-4 col-md-4 col-sm-4 col-8 offset-1 offset-lg-0 offset-md-0  offset-sm-0 ">
      <img src={descImg_1} className="home-desc-sideImg img-left "></img>

    </div>

    <div className="col-lg-8 col-md-8 col-sm-8 col-12 home-desc-sideText sideText-text-right ">
      <h1 >
        {item.title}
      </h1>
      <span>
        {item.text}
      </span>

    </div>

  </Fragment>);
  var descriptionList = description_items.map((item, index) => (
    <div className="home-desc-item">
      <div className="row m-0 p-0">
        <div className="col-12  m-0 position-relative  ">
          <img src={item.image} className="home-desc-numbers " />
        </div>
      </div>
      <div className="row m-0 home-desc-line position-relative">
        {index % 2 == 0 ? leftSection(item) : rightSection(item)}
      </div>
    </div>
  ));



  return (
    <Fragment>

      {/* Nav-Header */}
      <div className="card position-relative border-0 mb-3">
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
              Build resume{" "}
              <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
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


      {/* description section  */}
      <div className="home-desc-section">
        <Container className="p-0 home-desc-container">
          <div className="row m-0">
            <div className="col-8 ml-1 ml-sm-0 d-flex">
              <span className="home-desc-header">How to make a resume?</span>
            </div>
          </div>
          {
            descriptionList
          }
        </Container>
      </div>
      <Category />
    </Fragment>
  );
}
export default Home;
