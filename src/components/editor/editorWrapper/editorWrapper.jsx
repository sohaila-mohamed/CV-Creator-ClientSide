import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Route, Switch, useParams } from "react-router-dom";
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
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

function EditorWrapper() {
  const { cvid } = useParams();

  const [change, setchange] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://still-spire-04865.herokuapp.com/api/user/cv/60d85e33c80e820004b12bf6/60da11bfb994410004b4f140",
        {
          headers: {
            //   ...authState.authHeaders,
            ...JSON.parse(localStorage.getItem("userData")).headers,
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        setpersonalInfo({ ...personalInfo, ...res.data.personalInfo });
        seteducationData({ ...educationData, ...res.data.educationData });
        // setExperienceData({...experienceData,...res.data.experienceData})
        // setCoursesData({...coursesData,...res.data.coursesData})
        setSkillsData([...skillsData, ...res.data.skillsData]);
        SetArrProjects([...ArrProjects, ...res.data.ProjectData]);
        SetArrLangData([...ArrLangData, ...res.data.LangData]);
        SetcareerData(res.data.Objective.careerData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const userState = useSelector((state) => state.auth);

  const [personalInfo, setpersonalInfo] = useState({
    firstName: "",
    lastName: "",
    DateofBirth: "",
    Title: "",
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
    jobTitle: "",
    companyName: "",
    PosDes: "",
    startDate: "",
    endDate: "",
  });

  const [experienceArr, setExperienceArr] = useState([]);

  const [courseData, setCourseData] = useState({
    courseName: "",
    startDate: "",
    endDate: "",
    certificate: "",
  });
  const [coursesArr, setCoursesArrData] = useState([]);

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
  const experienceArrHandler = (data) => {
    setExperienceArr(data);
  };
  const careerHandeler = (data) => {
    SetcareerData(data);
  };
  const courseHandler = (data) => {
    setCourseData(data);
  };
  const coursesArrHandler = (data) => {
    setCoursesArrData(data);
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

  const [cvTemplate, setCvTemplate] = useState("Cv Template");

  // request the new cv template with new update

  const [template, setTemplate] = useState("");
  const loadNewCvVersion = () => {
    const body = {
      cvId: "60da11bfb994410004b4f140",
      // userId:authState.userData._id
      userId: JSON.parse(localStorage.getItem("userData")).user._id.toString(),
      data: { personalInfo: { ...personalInfo } },
    };

    axios
      .put("https://still-spire-04865.herokuapp.com/api/user/cv/update", body, {
        headers: {
          //   ...authState.authHeaders,
          ...JSON.parse(localStorage.getItem("userData")).headers,
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then(async (res) => {
        setTemplate(res.data);
      })

      .catch((err) => {
        console.log("Invalid Template selection");
      });
  };

  return (
    <div className="editorWrapper-container">
      <div className="left-editor w-100 w-md-50">
        <Navigator cvid={cvid} />
        {/* to include each editor component here Ex education component , personal information component , ect */}
        <div className="each-form-component">
          <Switch>
            <Route
              path="/Editor/:cvid/PersonalInfo"
              render={() => (
                <PersonalInfo
                  data={personalInfo}
                  setPersonalData={personalHandler}
                ></PersonalInfo>
              )}
            />
            <Route
              path="/Editor/:cvid/Education"
              render={() => (
                <Education
                  data={educationData}
                  setEducationData={educationHandler}
                ></Education>
              )}
            />
            <Route path="/Editor/:cvid/Experiences">
              <Experience
                data={experienceData}
                arrData={experienceArr}
                setExperienceData={experienceHandler}
                setExperienceArr={experienceArrHandler}
              ></Experience>
            </Route>
            <Route
              path="/Editor/:cvid/Projects"
              render={() => (
                <Projects
                  Arrdata={ArrProjects}
                  SetArrproject={ArrProjectsData}
                  data={ProjectData}
                  setprojectdata={ProjectsHandler}
                />
              )}
            />
            <Route path="/Editor/:cvid/Skills">
              <Skills data={skillsData} setSkillsData={skillsHandler}></Skills>
            </Route>

            <Route path="/Editor/:cvid/Courses">
              <Courses
                data={courseData}
                setCourse={courseHandler}
                arrData={coursesArr}
                setCoursesArr={coursesArrHandler}
              ></Courses>
            </Route>

            <Route
              path="/Editor/:cvid/Languages"
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
              path="/Editor/:cvid/Career-objective"
              render={() => (
                <Career data={careerData} setCareerData={careerHandeler} />
              )}
            />
          </Switch>
        </div>
      </div>

      <div className="right-editor d-none d-md-block w-100 w-md-50">
        {/* w-100 w-md-50 */}
        <button onClick={loadNewCvVersion}>
          <FontAwesomeIcon icon={faEye} className="mr-2" />
          Preview
        </button>
        {/* state with the new content "cv template " */}

        <iframe
          style={{ width: "100%", height: "100%" }}
          srcDoc={template}
        ></iframe>
      </div>
    </div>
  );
}

export default EditorWrapper;
