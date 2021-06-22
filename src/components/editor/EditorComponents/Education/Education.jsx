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
      <FormInput
        title="University Name"
        width="100"
        value={Education.university}
        valueBack={universityHandler}
      />
      <FormInput
        title="Graduation year"
        width="100"
        value={Education.graduationYear}
        valueBack={gradYearHandler}
      />
      <FormInput
        title="Grade"
        width="50"
        value={Education.grade}
        valueBack={gradeHandler}
      />

      <ActionBtns onSave={saveChanges} onReset={resetChanges} />
    </div>
  );
}

export default Education;
