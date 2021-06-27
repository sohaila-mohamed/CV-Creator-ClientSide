import React, { useEffect, useState } from "react";
import ActionBtns from "../../../ui-utilities/ActionBtns/ActionBtns";
import FormInput from "../../../ui-utilities/FormInput";

function Education(props) {
  const [Education, setEducation] = useState({});

  useEffect(() => {
    setEducation(props.data);
  }, []);

  // save Changes on update to make the data presesting

  useEffect(() => {
    props.setEducationData(Education);
  }, [Education]);

  const universityHandler = (v) => {
    setEducation({ ...Education, university: v });
  };
  const gradYearHandler = (v) => {
    setEducation({ ...Education, graduationYear: v });
  };
  const gradeHandler = (v) => {
    setEducation({ ...Education, grade: v });
  };
  const uStartYearHandler = (v) => {
    setEducation({ ...Education, uStartYear: v });
  };
  const collageHandler = (v) => {
    setEducation({ ...Education, collage: v });
  };
  const uGradYearHandler = (v) => {
    setEducation({ ...Education, uGraduationYear: v });
  };
  const uGradeHandler = (v) => {
    setEducation({ ...Education, uGrade: v });
  };

  const highSchoolHandler = (v) => {
    setEducation({ ...Education, highSchool: v });
  };
  const hGradYearHandler = (v) => {
    setEducation({ ...Education, hGraduationYear: v });
  };
  const hGradeHandler = (v) => {
    setEducation({ ...Education, hGrade: v });
  };

  const saveChanges = (e) => {
    // props.setPersonalData(psersonal)
  };

  const resetChanges = (e) => {
    for (const key in Education) {
      if (Object.hasOwnProperty.call(Education, key)) {
        Education[key] = "";
      }
    }
    setEducation({ ...Education });
    props.setEducationData(Education);
  };

  return (
    <div>
      <h3>Education</h3>
      <div className="collage pb-3">
        <div className="d-flex justify-content-between">
          <FormInput
            title="University Name"
            width="45"
            value={Education.university}
            valueBack={universityHandler}
          />
          <FormInput
            title="Collage Name"
            width="50"
            value={Education.collage}
            valueBack={collageHandler}
          />
        </div>
        <div className="d-flex justify-content-between">
          <FormInput
            title="Start year"
            width="45"
            type="number"
            value={Education.uStartYear}
            valueBack={uStartYearHandler}
          />
          <FormInput
            title="Graduation year"
            width="50"
            type="number"
            value={Education.uGraduationYear}
            valueBack={uGradYearHandler}
          />
        </div>
        <FormInput
          title="Grade"
          width="50"
          value={Education.uGrade}
          valueBack={uGradeHandler}
        />
      </div>

      <div className="high Scholl mt-5">
        <FormInput
          title="High Scholl Name"
          width="100"
          value={Education.highSchool}
          valueBack={highSchoolHandler}
        />
        <FormInput
          title="Graduation year"
          width="100"
          value={Education.hGraduationYear}
          valueBack={hGradYearHandler}
        />
        <FormInput
          title="Grade"
          width="50"
          value={Education.hGrade}
          valueBack={hGradeHandler}
        />
      </div>

      <ActionBtns onSave={saveChanges} onReset={resetChanges} />
    </div>
  );
}

export default Education;
