import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, withRouter, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Col, Button } from "react-bootstrap";
import "./template.css";
import axois from "axios";
import axios from "axios";

const Template = (props) => {
  const { topicId } = useParams();
  const [templates, setTemplates] = useState([]);
  const { preview } = props;
  const history = useHistory();
  const authState = useSelector((state) => state.auth);

  useEffect(() => {
    axois
      .get(
        `https://still-spire-04865.herokuapp.com/api/template/cat/${topicId}`
      )
      .then((res) => {
        setTemplates(res.data);
      });
  }, [topicId]);

  const edit = (tempID) => {
    const body = {
      tempId: tempID,
      userId: JSON.parse(localStorage.getItem("userData")).user._id.toString(),
    };

    axios
      .put("https://still-spire-04865.herokuapp.com/api/user/cv", body, {
        headers: {
          ...JSON.parse(localStorage.getItem("userData")).headers,
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        const cvtoken=res.headers['x-cv-token'];
        history.push(`/Editor/${tempID}/${cvtoken}`);
      })
      .catch((err) => {
        console.log(err);
      });

    
  };

  return (
    <React.Fragment>
      {templates.map((t, index) => (
        <Col
          key={index + 1}
          lg="3"
          md="5"
          sm="5"
          xs="8"
          className="template-container"
        >
          <img src={t.image} alt="" />
          <div className="overlay">
            <Button
              onClick={() => preview(t.image)}
              className="Btn Btn-preview"
            >
              <FontAwesomeIcon icon={faEye} />
              Preview
            </Button>
            <Button onClick={() => edit(t.templateId)} className="Btn Btn-edit">
              <FontAwesomeIcon icon={faEdit} />
              Create My Cv
            </Button>
          </div>
        </Col>
      ))}
    </React.Fragment>
  );
};

export default withRouter(Template);
