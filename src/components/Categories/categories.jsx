import React, { useState, useEffect } from "react";
import { NavLink, useRouteMatch, Switch, Route } from "react-router-dom";
import axois from "axios";
import "./categories.css";

import heroBg from "../../images/hero-bg.svg";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

import Template from "./template/template";

const Categories = () => {
  const { path } = useRouteMatch();
  const [categories, SetCategories] = useState([]);

  useEffect(() => {
    axois
      .get("https://still-spire-04865.herokuapp.com/api/template/cat")
      .then((res) => {
        SetCategories(res.data);
      });
  }, []);

  return (
    <React.Fragment>
      <div className="bgContainer">
        <Container>
          <img className="heroBg" src={heroBg} alt="" />
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
                    // activeClassName="selected"
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
                <Template />
              </Route>
            </Switch>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Categories;
