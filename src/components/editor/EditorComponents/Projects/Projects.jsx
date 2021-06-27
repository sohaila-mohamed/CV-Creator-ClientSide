import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import FormInput from "../../../ui-utilities/FormInput";
import { useEffect, useState, Fragment } from "react";
import { Button } from "react-bootstrap";
const Projects = function (props) {
  const [Project, SetProject] = useState({});
  const [ArrProjects, SetArrProjects] = useState([]);

  useEffect(() => {
    SetProject(props.data);
    SetArrProjects(props.Arrdata);
    //test
    console.log(props.Arrdata);
  }, []);

  useEffect(() => {
    props.setprojectdata(Project);
  }, [Project]);

  useEffect(() => {
    props.SetArrproject(ArrProjects);
  }, [ArrProjects]);

  const titleHandler = (v) => {
    SetProject({ ...Project, projectTitle: v });
  };

  const dateHandler = (v) => {
    SetProject({ ...Project, date: v.toString() });
  };

  const linkHandler = (v) => {
    SetProject({ ...Project, link: v });
  };

  const descriptionHandler = (v) => {
    SetProject({ ...Project, description: v.target.value });
  };

  const addProjects = () => {
    SetArrProjects([...ArrProjects, Project]);
  };
  const removeProj = (id) => {
    SetArrProjects(ArrProjects.filter((proj, i) => i !== id));
  };
  return (
    <div>
      <h3>Projects</h3>
      <Fragment>
        <FormInput
          title="Project Name"
          value={Project.projectTitle}
          valueBack={titleHandler}
        />
        <FormInput
          title=""
          type="date"
          value={Project.date}
          valueBack={dateHandler}
        />
        <FormInput title="Link" value={Project.link} valueBack={linkHandler} />
        <div className="form-floating mt-5">
          <textarea
            id="floatingTextarea2"
            className="form-control rounded-0 border-dark"
            rows="6"
            cols="60"
            value={Project.description}
            onChange={descriptionHandler}
            placeholder=" "
          />
          <label htmlFor="floatingTextarea2">Description</label>
        </div>
        <Button className="mr-0 custom-style mt-3 mb-3" onClick={addProjects}>
          <FontAwesomeIcon icon={faPlus} id="custom-icon"></FontAwesomeIcon>
        </Button>
      </Fragment>
      {ArrProjects.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Date</th>
              <th scope="col">Link</th>
              <th scope="col">Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {ArrProjects.map((proj, i) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{proj.projectTitle}</td>
                <td>{proj.date}</td>
                <td>{proj.link}</td>
                <td>{proj.description}</td>
                <td onClick={() => removeProj(i)}>
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="mt-2"
                    style={{ color: "red", cursor: "pointer" }}
                  ></FontAwesomeIcon>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default Projects;
