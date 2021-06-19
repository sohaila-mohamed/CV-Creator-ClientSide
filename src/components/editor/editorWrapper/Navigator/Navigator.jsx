import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navigator.css"
function Navigator() {
    return (
        <div className="navigator-container">
            <div className="cv-image-upload">
              Upload Your CV
            {/* <input type="file" /> */}
            </div>

            
            {/* <div className="each-section">Education</div> */}
            
            <div className="each-section">
                <NavLink
                to="/Editor/PersonalInfo"
                exact
                className="each-section-link"
                activeClassName="active-route"
                >
                   Personal <br /> information
                </NavLink>
            </div>
            
            
            <div className="each-section">
                <NavLink
                to="/Editor/Education"
                className="each-section-link"
                exact
                activeClassName="active-route"
                >
                    Education
                </NavLink>
            </div>

            <div className="each-section">
                <NavLink
                to="/Editor/Contacts"
                className="each-section-link"
                exact
                activeClassName="active-route"
                >
                    Contacts
                </NavLink>
            </div>

            <div className="each-section">
                <NavLink
                to="/Editor/Experiences"
                className="each-section-link"
                exact
                activeClassName="active-route"
                >
                    Experiences
                </NavLink>
            </div>
            
            
            
            <div className="each-section">
                <NavLink
                to="/Editor/Skilles"
                className="each-section-link"
                exact
                activeClassName="active-route"
                >
                    Skilles
                </NavLink>
            </div>
            
            
            
            <div className="each-section">
                <NavLink
                to="/Editor/Courses"
                className="each-section-link"
                exact
                activeClassName="active-route"
                >
                    Courses
                </NavLink>
            </div>
            

            
            <div className="each-section">
                <NavLink
                to="/Editor/Media-accounts"
                className="each-section-link"
                exact
                activeClassName="active-route"
                >
                   Media <br /> accounts
                </NavLink>
            </div>

            
            <div className="each-section">
                <NavLink
                to="/Editor/About-me"
                className="each-section-link"
                exact
                activeClassName="active-route"
                >
                   About me
                </NavLink>
            </div>

        </div>
    )
}

export default Navigator
