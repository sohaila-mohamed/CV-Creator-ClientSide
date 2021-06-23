import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CvD1 from "../CvTemplate/CvD1";

import "./editorWrapper.css";

import Navigator from "./Navigator/Navigator";

import PersonalInfo from "../EditorComponents/PersonalInfo/PersonalInfo";
import Career from "../EditorComponents/CareerObjective/CareerObjective";
import Education from "../EditorComponents/Education/Education";
import Experience from "./../EditorComponents/Experience/Experience";
import Courses from "./../EditorComponents/Courses/Courses";
import Skills from "./../EditorComponents/Skills/Skills";

function EditorWrapper() {
  const [personalInfo, setpersonalInfo] = useState({
    firstName: "",
    lastName: "",
    age: "",
    phoneNumber: "",
  });

  const [educationData, seteducationData] = useState({
    university: "",
    graduationYear: "",
    grade: "",
  });

  const [experienceData, setExperienceData] = useState({
    jobTitle1: "",
    companyName1: "",
    startDate1: "",
    endDate1: "",
    jobTitle2: "",
    companyName2: "",
    startDate2: "",
    endDate2: "",
  });

  const [coursesData, setCoursesData] = useState({
    courseName1: "",
    startDate1: "",
    endDate1: "",
    certificate1: "",
    courseName2: "",
    startDate2: "",
    endDate2: "",
    certificate2: "",
  });

  const [skillsData, setSkillsData] = useState([]);

  const [careerData, SetcareerData] = useState("");

  const personalHandler = (data) => {
    setpersonalInfo(data);
  };
  const educationHandler = (data) => {
    seteducationData(data);
  };
  const experienceHandler = (data) => {
    setExperienceData(data);
  };
  const careerHandeler = (data) => {
    SetcareerData(data);
  };
  const coursesHandler = (data) => {
    setCoursesData(data);
  };

  const skillsHandler = (data) => {
    setSkillsData(data);
  };

  return (
    <div className="editorWrapper-container">
      <div className="left-editor w-100 w-md-50">
        <Navigator />

        {/* to include each editor component here Ex education component , personal information component , ect */}
        <div className="each-form-component">
          <Switch>
            <Route
              path="/Editor/PersonalInfo"
              render={() => (
                <PersonalInfo
                  data={personalInfo}
                  setPersonalData={personalHandler}
                ></PersonalInfo>
              )}
            />
            <Route
              path="/Editor/Education"
              render={() => (
                <Education
                  data={educationData}
                  setEducationData={educationHandler}
                ></Education>
              )}
            />
            <Route path="/Editor/Experiences">
              <Experience
                data={experienceData}
                setExperienceData={experienceHandler}
              ></Experience>
            </Route>
            <Route path="/Editor/Projects" render={() => <h3>Projects</h3>} />
            <Route path="/Editor/Skills">
              <Skills data={skillsData} setSkillsData={skillsHandler}></Skills>
            </Route>
            <Route path="/Editor/Courses">
              <Courses
                data={coursesData}
                setCoursesData={coursesHandler}
              ></Courses>
            </Route>
            <Route path="/Editor/Languages" render={() => <h3>Languages</h3>} />
            <Route
              path="/Editor/Career-objective"
              render={() => (
                <Career data={careerData} setCareerData={careerHandeler} />
              )}
            />
          </Switch>
        </div>
      </div>

      <div className="right-editor d-none d-md-block w-100 w-md-50">
        <button>
          <FontAwesomeIcon icon={faEye} className="mr-2" />
          Preview
        </button>

        {/* to include the cv component here  */}
        <CvD1 />
      </div>
    </div>
  );
}

export default EditorWrapper;
