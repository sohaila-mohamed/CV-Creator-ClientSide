import React from "react";
import "./categories.css";
import template from "../../images/template.png";
import heroBg from "../../images/hero-bg.svg";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit } from "@fortawesome/free-solid-svg-icons";

const Categories = () => {
  return (
    <React.Fragment>
      <div className="bgContainer">
          <Container>
            <img className="heroBg" src={heroBg} alt="" />
            <div className="heroContent">
              <Row className="content-Row">
                <Col className="contentHeader" lg="8" md="10" xs="10">
                  <h1>
                    pick a unique template that distinguish your skills &
                    information representation from others
                  </h1>
                </Col>
                <Col className="contentText" lg="8" md="10" xs="10">
                  <p>
                    CV Creator provides customizable, attention-grabbing templates
                    in different categories to help you create a well-organized,
                    professionally formatted and beautifully designed CV
                  </p>
                </Col>
              </Row>
            </div>
            <Row className="nav-section">
              <Col lg="9">
                <ListGroup horizontal>
                  {/* each item will contain a router link to a specific category */}
                  <ListGroup.Item>Basic</ListGroup.Item>
                  <ListGroup.Item>Modern</ListGroup.Item>
                  <ListGroup.Item>College</ListGroup.Item>
                  <ListGroup.Item>Category</ListGroup.Item>
                  <ListGroup.Item>Category</ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
            <Row className="template-view">
              <Col lg="3" md="5" sm="5" xs="8" className="template-container">
                <img src={template} alt="" />
                <div className="overlay">
                  <Button className="Btn Btn-preview">
                    <FontAwesomeIcon icon={faEye} />
                    Preview
                  </Button>
                  <Button className="Btn Btn-edit">
                    <FontAwesomeIcon icon={faEdit} />
                    Edit
                  </Button>
                </div>
              </Col>
              <Col lg="3" md="5" sm="5" xs="8" className="template-container">
                <img src={template} alt="" />
                <div className="overlay">
                  <Button className="Btn Btn-preview">
                    <FontAwesomeIcon icon={faEye} />
                    Preview
                  </Button>
                  <Button className="Btn Btn-edit">
                    <FontAwesomeIcon icon={faEdit} />
                    Edit
                  </Button>
                </div>
              </Col>
              <Col lg="3" md="5" sm="5" xs="8" className="template-container">
                <img src={template} alt="" />
                <div className="overlay">
                  <Button className="Btn Btn-preview">
                    <FontAwesomeIcon icon={faEye} />
                    Preview
                  </Button>
                  <Button className="Btn Btn-edit">
                    <FontAwesomeIcon icon={faEdit} />
                    Edit
                  </Button>
                </div>
              </Col>
              <Col lg="3" md="5" sm="5" xs="8" className="template-container">
                <img src={template} alt="" />
                <div className="overlay">
                  <Button className="Btn Btn-preview">
                    <FontAwesomeIcon icon={faEye} />
                    Preview
                  </Button>
                  <Button className="Btn Btn-edit">
                    <FontAwesomeIcon icon={faEdit} />
                    Edit
                  </Button>
                </div>
              </Col>
              <Col lg="3" md="5" sm="5" xs="8" className="template-container">
                <img src={template} alt="" />
                <div className="overlay">
                  <Button className="Btn Btn-preview">
                    <FontAwesomeIcon icon={faEye} />
                    Preview
                  </Button>
                  <Button className="Btn Btn-edit">
                    <FontAwesomeIcon icon={faEdit} />
                    Edit
                  </Button>
                </div>
              </Col>
              <Col lg="3" md="5" sm="5" xs="8" className="template-container">
                <img src={template} alt="" />
                <div className="overlay">
                  <Button className="Btn Btn-preview">
                    <FontAwesomeIcon icon={faEye} />
                    Preview
                  </Button>
                  <Button className="Btn Btn-edit">
                    <FontAwesomeIcon icon={faEdit} />
                    Edit
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
      </div>
    </React.Fragment>
  );
};

export default Categories;
