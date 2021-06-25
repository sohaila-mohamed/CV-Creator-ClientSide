import React, { useEffect, useState } from "react";
import FormInput from "../../../ui-utilities/FormInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Skills.css";

const Skills = (props) => {
  const [Skill, setSkill] = useState("");
  const [msg, changeMsg] = useState(true);
  const [SkillsArray, setSkills] = useState([]);

  useEffect(() => {
    setSkills(props.data);
  }, []);

  useEffect(() => {
    props.setSkillsData(SkillsArray);
  }, [SkillsArray]);

  const addSkill = () => {
    Skill.length !== 0 ? setSkills([...SkillsArray, Skill]) : changeMsg(false);
  };

  const getValue = (v) => {
    changeMsg(true);
    setSkill(() => v);
  };

  const removeSkill = (s) => {
    setSkills(SkillsArray.filter((skill) => skill !== s));
  };

  return (
    <React.Fragment>
      <h3>Skills</h3>
      <FormInput
        title="Add skill (10 Max)"
        value={Skill}
        valueBack={getValue}
      />
      <span hidden={msg} className="warnMsg">
        enter a skill first
      </span>
      <br />
      <button
        className="btn addBtn"
        onClick={addSkill}
        disabled={SkillsArray.length === 10 ? true : false}
      >
        Add
      </button>

      <div className="skills-container my-5">
        {SkillsArray.map((skill, index) => (
          <span key={index} className="skill-bill py-2 px-3 m-2">
            {skill}
            <FontAwesomeIcon
              onClick={() => removeSkill(skill)}
              className="ml-2 skill-remove-icon"
              icon={faTimes}
            />
          </span>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Skills;
