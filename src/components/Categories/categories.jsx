import React, { useState, useEffect } from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import axois from "axios";
import "./categories.css";

import heroBg from "../../images/hero-bg.svg";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

import Template from "./template/template";

const Categories = () => {
  const [categories, SetCategories] = useState([]);
  const [PreviewPath, setPath] = useState("");
  const [Preview, setPreview] = useState(false);

  useEffect(() => {
    axois
      .get("https://still-spire-04865.herokuapp.com/api/template/cat")
      .then((res) => {
        SetCategories(res.data);
      });
  }, []);

  const previewImage = (img) => {
    setPath(img);
    setPreview(true);
  };

  const hidePreview = () => {
    console.log("hidden");
    setPreview(false);
  };

  return (
    <React.Fragment>
      <div className="bgContainer">
        <img className="heroBg" src={heroBg} alt="" />
        <Container>
          {Preview ? (
            <div className="preview-overlay">
              <FontAwesomeIcon onClick={()=>hidePreview()} icon={faTimes} />
              <div className="container">
                <img src={PreviewPath} alt="" />
              </div>
            </div>
          ) : null}
          <div className="heroContent">
            <Row className="content-Row">
              <Col className="contentHeader" lg="8" md="10" xs="10">
                <h1>
                  pick a unique template that distinguish your skills &amp;
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
                {categories.map((c, index) => (
                  <NavLink
                    activeClassName="selected"
                    key={index + 1}
                    to={`/templates/${c.name}`}
                  >
                    <ListGroup.Item>{c.name}</ListGroup.Item>
                  </NavLink>
                ))}
              </ListGroup>
            </Col>
          </Row>
          <Row className="template-view">
            <Switch>
              <Route path="/templates/:topicId">
                <Template preview={previewImage} />
              </Route>
            </Switch>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Categories;
