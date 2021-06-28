import React, { useEffect, useState } from "react";
import FormInput from "../../../ui-utilities/FormInput";
import ActionBtns from "../../../ui-utilities/ActionBtns/ActionBtns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

const Experience = (props) => {
  const [Experience, setExperience] = useState({});
  const [Experiences, setExperiences] = useState([]);

  useEffect(() => {
    setExperience(props.data);
    setExperiences(props.arrData);
  }, []);

  useEffect(() => {
    props.setExperienceData(Experience);
  }, [Experience]);

  useEffect(() => {
    props.setExperienceArr(Experiences);
  }, [Experiences]);

  const jobTitle1Handler = (v) => {
    setExperience({ ...Experience, jobTitle: v });
  };
  const companyNameHandler = (v) => {
    setExperience({ ...Experience, companyName: v });
  };
  const startDateHandler = (v) => {
    setExperience({ ...Experience, startDate: v.toString() });
  };
  const endDateHandler = (v) => {
    setExperience({ ...Experience, endDate: v.toString() });
  };
  const PosDesHandler = (v) => {
    setExperience({ ...Experience, PosDes: v.target.value });
  };

  const addExperience = () => {
    setExperience({
      jobTitle: "",
      companyName: "",
      PosDes: "",
      startDate: "",
      endDate: "",
    });
    setExperiences([...Experiences, Experience]);
  };
  const removeExperience = (id) => {
    setExperiences(Experiences.filter((exp, i) => i !== id));
  };

  return (
    <React.Fragment>
      <h3>Experience</h3>
      <FormInput
        title="Job Title"
        value={Experience.jobTitle}
        valueBack={jobTitle1Handler}
      />
      <FormInput
        title="Company Name"
        value={Experience.companyName}
        valueBack={companyNameHandler}
      />
      <FormInput
        title="Start Date"
        type="date"
        value={Experience.startDate}
        valueBack={startDateHandler}
      />
      <FormInput
        title="End Date"
        type="date"
        value={Experience.endDate}
        valueBack={endDateHandler}
      />
      <div className="form-floating mt-5">
        <textarea
          id="floatingTextarea2"
          className="form-control rounded-0 border-dark"
          rows="3"
          cols="60"
          value={Experience.PosDes}
          onChange={PosDesHandler}
          placeholder=" "
        />
        <label htmlFor="floatingTextarea2">Position Description</label>
      </div>

      <Button className="mr-0 custom-style mt-3 mb-3" onClick={addExperience}>
        <FontAwesomeIcon icon={faPlus} id="custom-icon"></FontAwesomeIcon>
      </Button>

      {Experiences.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Job Title</th>
              <th scope="col">Company Name</th>
              <th scope="col">From</th>
              <th scope="col">To</th>
              <th scope="col">Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Experiences.map((exp, i) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{exp.jobTitle}</td>
                <td>{exp.companyName}</td>
                <td>{exp.startDate}</td>
                <td>{exp.endDate}</td>
                <td>{exp.PosDes}</td>
                <td onClick={() => removeExperience(i)}>
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
    </React.Fragment>
  );
};

export default Experience;
