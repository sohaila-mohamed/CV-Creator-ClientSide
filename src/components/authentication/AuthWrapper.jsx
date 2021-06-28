import React from 'react'
import { useHistory } from 'react-router';
import logo from "../../images/white-logo.svg";
import "./authWrapper.css"
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from 'react';
import { useState } from 'react';

function AuthWrapper(props) {


    useEffect(() => {
        
    //  to indicate the home icon is clickable 
       setTimeout(() => {
           setclickable(true)
       }, 1000);
       setTimeout(() => {
        setclickable(false)
       }, 1500);
        
    }, [])

    // clickable indecation
    const [clickable, setclickable] = useState(false)

    
    // back home like 
    const history = useHistory();
    const backHomeHandler= () =>{
        history.push('/')
    }

    // get the url pathname from location then remove ('-') and capitalize first letter 
    // the from will be rendered based on that pathname

    let URL = props.location.pathname
    URL = URL.substr(1,URL.length).split("-").join(" ");
    URL= URL.charAt(0).toUpperCase() + URL.slice(1);

    return (
        <div className="auth-container">
            <div className="auth-left d-md-flex d-none w-md-50 w-100">
                <img src={logo} alt="cv creator" className="auth-logo"/>
                <span>Build your own CV simple in a few steps
                with vrity of pre-built templete</span>

                <div className="auth-lef-layer">
                    <div  className={`back-home ${clickable ? "clickable" : ""} `} onClick={backHomeHandler}>
                        <FontAwesomeIcon icon={faHome} size="2x" />
                        <div>Back Home</div>
                    </div>
                </div>
            </div>
            <div className="auth-right w-md-50 w-100">
                <div className="auth-form-wwrapper">
                    <div className="auth-indecator">
                        {URL}
                    </div>
                    {URL === 'Sign in' ? <SignIn/> :  <SignUp/>}
                </div>
            </div>
        </div>
    )
}

export default AuthWrapper
