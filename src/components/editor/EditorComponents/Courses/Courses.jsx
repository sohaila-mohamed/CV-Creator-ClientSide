import React, { useEffect, useState } from "react";
import FormInput from "../../../ui-utilities/FormInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

const Courses = (props) => {
  const [Course, setCourse] = useState({});
  const [Courses, setCourses] = useState([]);

  useEffect(() => {
    setCourse(props.data);
    setCourses(props.arrData);
  }, []);

  useEffect(() => {
    props.setCourse(Course);
  }, [Course]);

  useEffect(() => {
    props.setCoursesArr(Courses);
  }, [Courses]);

  const courseNameHandler = (v) => {
    setCourse({ ...Course, courseName: v });
  };
  const startDateHandler = (v) => {
    setCourse({ ...Course, startDate: v.toString() });
  };
  const endDateHandler = (v) => {
    setCourse({ ...Course, endDate: v.toString() });
  };
  const certificateHandler = (v) => {
    setCourse({ ...Course, certificate: v });
  };

  const addCourse = () => {
    setCourse({
      courseName: "",
      startDate: "",
      endDate: "",
      certificate: "",
    });
    setCourses([...Courses, Course]);
  };
  const removeCourse = (id) => {
    setCourses(Courses.filter((crs, i) => i !== id));
  };

  return (
    <React.Fragment>
      <h3>Courses</h3>

      <FormInput
        title="Course Name"
        value={Course.courseName}
        valueBack={courseNameHandler}
      />
      <FormInput
        title="Start Date"
        type="date"
        value={Course.startDate}
        valueBack={startDateHandler}
      />
      <FormInput
        title="End Date"
        type="date"
        value={Course.endDate}
        valueBack={endDateHandler}
      />
      <FormInput
        title="Certificate Link"
        value={Course.certificate}
        valueBack={certificateHandler}
      />

      <Button className="mr-0 custom-style mt-3 mb-3" onClick={addCourse}>
        <FontAwesomeIcon icon={faPlus} id="custom-icon"></FontAwesomeIcon>
      </Button>

      {Courses.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Course Name</th>
              <th scope="col">From</th>
              <th scope="col">To</th>
              <th scope="col">Certificate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Courses.map((crs, i) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{crs.courseName}</td>
                <td>{crs.startDate}</td>
                <td>{crs.endDate}</td>
                <td>{crs.certificate}</td>
                <td onClick={() => removeCourse(i)}>
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

export default Courses;
