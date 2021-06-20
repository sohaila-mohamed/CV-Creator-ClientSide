import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CvD1 from "../CvTemplate/CvD1";
import Education from "../EditorComponents/Education/Education";
import PersonalInfo from "../EditorComponents/PersonalInfo/PersonalInfo";
import "./editorWrapper.css";
import Navigator from "./Navigator/Navigator";
import Experience from "./../EditorComponents/Experience/Experience";
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

  const personalHandler = (data) => {
    setpersonalInfo(data);
  };
  const educationHandler = (data) => {
    seteducationData(data);
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
            <Route path="/Editor/Education" component={Education} />
            <Route path="/Editor/Contacts" render={() => <p>Contacts</p>} />
            <Route path="/Editor/Experiences" component={Experience} />
            <Route path="/Editor/Skilles" render={() => <h3>Skilles</h3>} />
            <Route path="/Editor/Courses" render={() => <h3>Courses</h3>} />
            <Route
              path="/Editor/Media-accounts"
              render={() => <h3>Media-accounts</h3>}
            />
            <Route path="/Editor/About-me" render={() => <h3>About me</h3>} />
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
