import React, { useEffect, useState } from "react";
import FormInput from "../../../ui-utilities/FormInput";
import ActionBtns from "../../../ui-utilities/ActionBtns/ActionBtns";

const Courses = (props) => {
  const [Courses, setCourses] = useState({});

  useEffect(() => {
    setCourses(props.data);
  }, []);

  useEffect(() => {
    props.setCoursesData(Courses);
  }, [Courses]);

  const courseName1Handler = (v) => {
    setCourses({ ...Courses, courseName1: v });
  };
  const startDate1Handler = (v) => {
    setCourses({ ...Courses, startDate1: v });
  };
  const endDate1Handler = (v) => {
    setCourses({ ...Courses, endDate1: v });
  };
  const certificate1Handler = (v) => {
    setCourses({ ...Courses, certificate1: v });
  };

  const courseName2Handler = (v) => {
    setCourses({ ...Courses, courseName2: v });
  };
  const startDate2Handler = (v) => {
    setCourses({ ...Courses, startDate2: v });
  };
  const endDate2Handler = (v) => {
    setCourses({ ...Courses, endDate2: v });
  };
  const certificate2Handler = (v) => {
    setCourses({ ...Courses, certificate2: v });
  };

  const saveChanges = (e) => {
    // props.setPersonalData(psersonal)
  };

  const resetChanges = (e) => {
    for (const key in Courses) {
      if (Object.hasOwnProperty.call(Courses, key)) {
        Courses[key] = "";
      }
    }
    setCourses({ ...Courses });
    props.setCoursesData(Courses);
  };

  return (
    <React.Fragment>
      <h3>Courses</h3>
      <div className="mb-4 entry-Block">
        <h3>1</h3>
        <FormInput
          title="Course Name"
          value={Courses.courseName1}
          valueBack={courseName1Handler}
        />
        <FormInput
          title="Start Date"
          value={Courses.startDate1}
          valueBack={startDate1Handler}
        />
        <FormInput
          title="End Date"
          value={Courses.endDate1}
          valueBack={endDate1Handler}
        />
        <FormInput
          title="Certificate (if available)"
          value={Courses.endDate1}
          valueBack={endDate1Handler}
        />
      </div>
      <div className="mb-4 entry-Block">
        <h3>2</h3>
        <FormInput
          title="Course Name"
          value={Courses.courseName1}
          valueBack={courseName1Handler}
        />
        <FormInput
          title="Start Date"
          value={Courses.startDate1}
          valueBack={startDate1Handler}
        />
        <FormInput
          title="End Date"
          value={Courses.endDate1}
          valueBack={endDate1Handler}
        />
        <FormInput
          title="Certificate (if available)"
          value={Courses.endDate1}
          valueBack={endDate1Handler}
        />
      </div>

      <ActionBtns onSave={saveChanges} onReset={resetChanges} />
    </React.Fragment>
  );
};

export default Courses;
