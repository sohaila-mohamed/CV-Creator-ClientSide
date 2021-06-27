import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import CvD1 from "../CvTemplate/CvD1";
import Education from "../EditorComponents/Education/Education";
import PersonalInfo from "../EditorComponents/PersonalInfo/PersonalInfo";
import Career from "../EditorComponents/CareerObjective/CareerObjective";
import Languages from "../EditorComponents/Languages/Languages";

import "./editorWrapper.css";

import Navigator from "./Navigator/Navigator";
import Experience from "./../EditorComponents/Experience/Experience";
import Courses from "./../EditorComponents/Courses/Courses";
import Skills from "./../EditorComponents/Skills/Skills";
import Projects from "./../EditorComponents/Projects/Projects";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function EditorWrapper() {
  useEffect(() => {
    // get the template id from url
    //get user id from state
    // const userID = userState.userData._id
  }, []);

  const userState = useSelector((state) => state.auth);

  const [personalInfo, setpersonalInfo] = useState({
    firstName: "",
    lastName: "",
    DateofBirth: "",
    position: "",
    phoneNumber: "",
    address: "",
    Linkedin: "",
    GitHub: "",
  });

  const [educationData, seteducationData] = useState({
    university: "",
    collage: "",
    uGraduationYear: "",
    uStartYear: "",
    uGrade: "",

    highSchool: "",
    hGraduationYear: "",
    hGrade: "",
  });

  const [experienceData, setExperienceData] = useState({
    jobTitle1: "",
    companyName1: "",
    PosDes1: "",
    startDate1: "",
    endDate1: "",
    jobTitle2: "",
    companyName2: "",
    startDate2: "",
    endDate2: "",
    PosDes2: "",
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

  const [LangData, SetLangData] = useState({
    Lang: "",
    rate: "",
  });

  const [ArrLangData, SetArrLangData] = useState([]);

  const [ProjectData, SetProjectData] = useState({
    projectTitle: "",
    date: "",
    to: "",
    description: "",
    link: "",
  });

  const [ArrProjects, SetArrProjects] = useState([]);

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
  const LangHandler = (data) => {
    SetLangData(data);
  };
  const LangArrHandler = (data) => {
    SetArrLangData(data);
  };
  const ProjectsHandler = (data) => {
    SetProjectData(data);
  };
  const skillsHandler = (data) => {
    setSkillsData(data);
  };
  const ArrProjectsData = (data) => {
    SetArrProjects(data);
  };

  const [cvTemplate, setcvTemplate] = useState("Cv Template");
  // request the new cv template with new update
  const loadNewCvVersion = () => {
    const body = { userId: "", cvId: "", data: "" };
    axios
      .post(
        "https://still-spire-04865.herokuapp.com/api/user/cv/update",
        body,
        userState.authHeaders
      )
      .then((res) => {
        // set the new cv template and fill each object
      })
      .catch((err) => {});
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
            <Route
              path="/Editor/Projects"
              render={() => (
                <Projects
                  Arrdata={ArrProjects}
                  SetArrproject={ArrProjectsData}
                  data={ProjectData}
                  setprojectdata={ProjectsHandler}
                />
              )}
            />
            <Route path="/Editor/Skills">
              <Skills data={skillsData} setSkillsData={skillsHandler}></Skills>
            </Route>
            <Route path="/Editor/Courses">
              <Courses
                data={coursesData}
                setCoursesData={coursesHandler}
              ></Courses>
            </Route>
            <Route
              path="/Editor/Languages"
              render={() => (
                <Languages
                  data={LangData}
                  SetLangageData={LangHandler}
                  Arr={ArrLangData}
                  LangArrData={LangArrHandler}
                ></Languages>
              )}
            />
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
        <button onClick={loadNewCvVersion}>
          <FontAwesomeIcon icon={faEye} className="mr-2" />
          Preview
        </button>
        {/* state with the new content "cv template " */}
        <CvD1>
          <div dangerouslySetInnerHTML={{ __html: cvTemplate }}></div>
        </CvD1>
      </div>
    </div>
  );
}

export default EditorWrapper;
