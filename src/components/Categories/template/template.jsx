import { useParams, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Col, Button } from "react-bootstrap";
import "./template.css";
import axois from "axios";
import { useState, useEffect } from "react";

const Template = () => {
  const { topicId } = useParams();
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    axois
      .get(
        `https://still-spire-04865.herokuapp.com/api/template/cat/${topicId}`
      )
      .then((res) => {
        setTemplates(res.data);
      });
  }, [topicId]);

  return (
    <div>
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
      ))}
    </div>
  );
};

export default withRouter(Template);
