import { useState, useEffect } from "react";
import ActionBtns from "./../../../ui-utilities/ActionBtns/ActionBtns";
import "./CareerObjective.css";
function Career(props) {
  
  const [Career, SetCareer] = useState("");

  useEffect(() => {
    SetCareer(props.data);
  }, []);

  useEffect(() => {
    props.setCareerData(Career);
  }, [Career]);

  const carrerHandler = (e) => {
    SetCareer(e.target.value);
  };

  const saveChanges = () => {
    props.setCareerData(Career);
  };

  const resetChanges = () => {
    SetCareer("");
    props.setCareerData("");
  };

  return (
    <div>
      <h3 className="mb-4">Career Objective</h3>
      <div className="form-floating">
        {/* <FormInput
          title="Objective"
          type="text"
          value={Career}
          valueBack={carrerHandler}
        /> */}
        <textarea
          id="floatingTextarea2"
          className="form-control"
          rows="6"
          cols="60"
          value={Career}
          onChange={carrerHandler}
          placeholder=" "
        />
        <label htmlFor="floatingTextarea2">Objective</label>
      </div>
      <ActionBtns onSave={saveChanges} onReset={resetChanges} />
    </div>
  );
}
export default Career;
