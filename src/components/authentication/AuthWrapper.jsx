import React from 'react'
import { useHistory } from 'react-router';
import logo from "../../images/white-logo.svg";
import "./authWrapper.css"
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
function AuthWrapper(props) {


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
                    <div className="back-home" onClick={backHomeHandler}>Back Home</div>
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
