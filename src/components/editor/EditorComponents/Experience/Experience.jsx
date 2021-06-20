import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Experience.css";
import FormInput from "../../../ui-utilities/FormInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { react } from "@babel/types";

const Experience = () => {
  const [entries, setEntry] = useState([]);
  const [entryNum, setEntryNum] = useState(1);
  console.log(...entries);

  const addEntry = () => {
    setEntryNum(entryNum + 1);

    setEntry([
      ...entries,
      <React.Fragment key={entryNum}>
        <FormInput title="Job Title" />
        <FormInput title="Company Name" />
        <FormInput title="Start Date" />
        <FormInput title="End Date" />
      </React.Fragment>,
    ]);
  };

  return (
    <React.Fragment>
      <h3>Experience</h3>
      {entries.map((entry) => entry)}
      <Button disabled={entries.length == 3} onClick={() => addEntry()}>
        Add Entry
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </React.Fragment>
  );
};

export default Experience;
