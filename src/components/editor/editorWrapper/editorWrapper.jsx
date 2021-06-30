import { faEye,faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Route, Switch, useHistory, useParams } from "react-router-dom";

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

import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import BounceLoader from "react-spinners/BounceLoader";
import { css } from "@emotion/react";

function EditorWrapper() {
  const { tempid , cvtoken} = useParams();
  const history = useHistory();

  // spinner properties
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#6B82B7");
  const override = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);
  `;

  useEffect(() => {

    // to get all objects from DB and set it 
    axios
      .get(
        `https://still-spire-04865.herokuapp.com/api/user/cv/${userState.userData._id}/${cvtoken}`,
        {
          headers: {
            //   ...authState.authHeaders,
            ...JSON.parse(localStorage.getItem("userData")).headers,
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        setpersonalInfo({  ...res.data.personalInfo });
        seteducationData({ ...res.data.educationData });
        setExperienceArr([...res.data.experienceData])
        setCoursesArrData([...res.data.coursesData])
        setSkillsData([ ...res.data.skillsData]);
        SetArrProjects([ ...res.data.ProjectData]);
        SetArrLangData([ ...res.data.LangData]);
        SetcareerData(res.data.Objective.careerData);

        // navigate to personla info 
        history.push(`/Editor/${tempid}/${cvtoken}/PersonalInfo`)

      })
      .catch((err) => {
        console.log(err);
      });

      // get the cv First Time 
      const body = {
        cvId: cvtoken,
        // userId:authState.userData._id
        userId: JSON.parse(localStorage.getItem("userData")).user._id.toString(),
        data: { }
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
          setLoading(false);
        })
  
        .catch((err) => {
          console.log("Invalid Template selection");
        });




  }, []);

  const userState = useSelector((state) => state.auth);

  const [personalInfo, setpersonalInfo] = useState({
    firstName: "",
    lastName: "",
    DateofBirth: "",
    Title: "",
    email: "",
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
  });

  const [experienceArr, setExperienceArr] = useState([]);

  const [courseData, setCourseData] = useState({
    courseName1: "",
    startDate1: "",
    endDate1: "",
    certificate1: "",
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
//Download Template PDF

const elementRef = React.useRef();
const downloadPdf=()=>{
  const input = elementRef.current.contentWindow.document.documentElement;
   console.log("input",input);
  html2canvas(input,{ useCORS: true})
    .then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('x', 'pt', 'a4');
      pdf.setDisplayMode('fullwidth', 'continuous', 'FullScreen');
      pdf.addImage(imgData, 'JPEG', 0, 0,canvas.width,canvas.height);
      // pdf.output('dataurlnewwindow');'JPEG', 28.345, 28.345, a4Width, a4Width / canvas1.width * height
      pdf.save("download.pdf");
    })
  ;

}
  const [cvTemplate, setCvTemplate] = useState("Cv Template");

  // request the new cv template with new update

  const [template, setTemplate] = useState("");

  const loadNewCvVersion = () => {
    setLoading(true);

    const body = {
      cvId: cvtoken,
      // userId:authState.userData._id
      userId: JSON.parse(localStorage.getItem("userData")).user._id.toString(),
      data: {
         Objective:{careerData},
         coursesData: [ ...coursesArr ] ,
         educationData:{...educationData},
         ProjectData:[...ArrProjects],
         personalInfo:{...personalInfo},
         experienceData:[...experienceArr],
         skillsData:[...skillsData],
         LangData:[...ArrLangData]
      }
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
        setLoading(false);
      })

      .catch((err) => {
        console.log("Invalid Template selection");
      });
  };

  return (
    <div className="editorWrapper-container">
      <div className="left-editor w-100 w-md-50">
        <Navigator tempid={tempid} cvtoken={cvtoken}/>
        {/* to include each editor component here Ex education component , personal information component , ect */}
        <div className="each-form-component">
          <Switch>
            <Route
              path="/Editor/:tempid/:cvtoken/PersonalInfo"
              render={() => (
                <PersonalInfo
                  data={personalInfo}
                  setPersonalData={personalHandler}
                ></PersonalInfo>
              )}
            />
            <Route
              path="/Editor/:tempid/:cvtoken/Education"
              render={() => (
                <Education
                  data={educationData}
                  setEducationData={educationHandler}
                ></Education>
              )}
            />
            <Route path="/Editor/:tempid/:cvtoken/Experiences">
              <Experience
                data={experienceData}
                arrData={experienceArr}
                setExperienceData={experienceHandler}
                setExperienceArr={experienceArrHandler}
              ></Experience>
            </Route>
            <Route
              path="/Editor/:tempid/:cvtoken/Projects"
              render={() => (
                <Projects
                  Arrdata={ArrProjects}
                  SetArrproject={ArrProjectsData}
                  data={ProjectData}
                  setprojectdata={ProjectsHandler}
                />
              )}
            />
            <Route path="/Editor/:tempid/:cvtoken/Skills">
              <Skills data={skillsData} setSkillsData={skillsHandler}></Skills>
            </Route>

            <Route path="/Editor/:tempid/:cvtoken/Courses">
              <Courses
                data={courseData}
                setCourse={courseHandler}
                arrData={coursesArr}
                setCoursesArr={coursesArrHandler}
              ></Courses>
            </Route>

            <Route
              path="/Editor/:tempid/:cvtoken/Languages"
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
              path="/Editor/:tempid/:cvtoken/Career-objective"
              render={() => (
                <Career data={careerData} setCareerData={careerHandeler} />
              )}
            />
          </Switch>
          
        </div>
         
        <button onClick={downloadPdf} className="button-download " >
          <FontAwesomeIcon icon={faFileDownload} className="mr-2 mt-1" />
          Download
        </button>
        
        <button onClick={loadNewCvVersion} className="cv-preview">
          <FontAwesomeIcon icon={faEye} className="mr-2" />
          Preview
        </button>
        
      </div>

      <div className="right-editor d-none d-md-block w-100 w-md-50">
        {/* w-100 w-md-50 */}
        {/* state with the new content "cv template " */}
        {!loading && (
          <iframe
            style={{ width: "100%", height: "100%" }}
            srcDoc={template}
            ref={elementRef}
          ></iframe>
        )}
        <BounceLoader
          color={color}
          css={override}
          loading={loading}
          size={80}
        />
      </div>
     
    </div>
  );
}

export default EditorWrapper;
