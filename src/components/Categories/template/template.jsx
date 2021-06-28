import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Col, Button } from "react-bootstrap";
import template from "../../../images/template.png";

const Template = () => {
  const { topicId } = useParams();
  console.log(topicId);

  return (
    // <h1>{topicId}</h1>
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
  );
};

export default Template;
