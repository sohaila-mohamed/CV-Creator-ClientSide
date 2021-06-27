import React, { useEffect, useState } from "react";
import FormInput from "../../../ui-utilities/FormInput";
import ActionBtns from "../../../ui-utilities/ActionBtns/ActionBtns";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Experience = (props) => {
  const [Experience, setExperience] = useState({});

  useEffect(() => {
    setExperience(props.data);
  }, []);

  useEffect(() => {
    props.setExperienceData(Experience);
  }, [Experience]);

  const jobTitle1Handler = (v) => {
    setExperience({ ...Experience, jobTitle1: v });
  };
  const companyName1Handler = (v) => {
    setExperience({ ...Experience, companyName1: v });
  };
  const startDate1Handler = (v) => {
    setExperience({ ...Experience, startDate1: v });
  };
  const endDate1Handler = (v) => {
    setExperience({ ...Experience, endDate1: v });
  };

  const jobTitle2Handler = (v) => {
    setExperience({ ...Experience, jobTitle2: v });
  };
  const companyName2Handler = (v) => {
    setExperience({ ...Experience, companyName2: v });
  };
  const startDate2Handler = (v) => {
    setExperience({ ...Experience, startDate2: v });
  };
  const endDate2Handler = (v) => {
    setExperience({ ...Experience, endDate2: v });
  };
  const PosDes1Handler = (v) => {
    setExperience({ ...Experience, PosDes1: v });
  };
  const PosDes2Handler = (v) => {
    setExperience({ ...Experience, PosDes2: v });
  };
  const saveChanges = (e) => {
    // props.setPersonalData(psersonal)
  };

  const resetChanges = (e) => {
    for (const key in Experience) {
      if (Object.hasOwnProperty.call(Experience, key)) {
        Experience[key] = "";
      }
    }
    setExperience({ ...Experience });
    props.setExperienceData(Experience);
  };

  // const [entries, setEntry] = useState([]);
  // const [entryNum, setEntryNum] = useState(1);
  // console.log(...entries);

  // const addEntry = () => {
  //   setEntryNum(entryNum + 1);

  // setEntry([
  //   ...entries,
  //   ,
  // ]);
  // };

  return (
    <React.Fragment>
      <h3>Experience</h3>
      <div className="mb-4 entry-Block">
        <h3>1</h3>
        <FormInput
          title="Job Title"
          value={Experience.jobTitle1}
          valueBack={jobTitle1Handler}
        />
        <FormInput
          title="Company Name"
          value={Experience.companyName1}
          valueBack={companyName1Handler}
        />
        <FormInput
          title="Title Description"
          value={Experience.PosDes1}
          valueBack={PosDes1Handler}
        />
        <div className="d-flex justify-content-between">
          <FormInput
            title="Start Date"
            width="45"
            value={Experience.startDate1}
            valueBack={startDate1Handler}
          />
          <FormInput
            title="End Date"
            width="50"
            value={Experience.endDate1}
            valueBack={endDate1Handler}
          />
        </div>
      </div>
      <div className="mb-4 entry-Block">
        <h3>2</h3>
        <FormInput
          title="Job Title"
          value={Experience.jobTitle2}
          valueBack={jobTitle2Handler}
        />
        <FormInput
          title="Company Name"
          value={Experience.companyName2}
          valueBack={companyName2Handler}
        />
        <FormInput
          title="Title Description"
          value={Experience.PosDes2}
          valueBack={PosDes2Handler}
        />
        <div className="d-flex justify-content-between">
          <FormInput
            title="Start Date"
            width="45"
            value={Experience.startDate2}
            valueBack={startDate2Handler}
          />
          <FormInput
            title="End Date"
            width="50"
            value={Experience.endDate2}
            valueBack={endDate2Handler}
          />
        </div>
      </div>
      {/* <Button disabled={entries.length == 2} onClick={() => addEntry()}>
        Add Entry
        <FontAwesomeIcon icon={faPlus} />
      </Button> */}
      <ActionBtns onSave={saveChanges} onReset={resetChanges} />
    </React.Fragment>
  );
};

export default Experience;
