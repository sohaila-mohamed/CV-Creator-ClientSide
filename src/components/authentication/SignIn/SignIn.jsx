import React , { Fragment ,useState} from 'react'
import axios from 'axios';
import { useHistory } from 'react-router';
import googleImage from "../../../images/auth/search 1.svg"
import facebookImage from "../../../images/auth/facebook.svg"
import "./SignIn.css"
import { authActions } from '../../../store/auth-slice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


function SignIn() {


    useEffect(() => {
       if(localStorage.getItem("userData"))
           history.push("/");
    }, [])


    const dispatch = useDispatch();
    // go to sign up page
    const history = useHistory();
    function handleSignUp() {
        history.push("/sign-up");
    }

    const [validForm, setValidForm] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    
    const [errorMessage, seterrorMessage] = useState('');

    // handle the change of the email and password
    const emailHandeler= e =>{
        if(errorMessage)
            seterrorMessage("")
        setEmail(e.target.value.trim());
        if(e.target.value && password)
            setValidForm(true);
        else
            setValidForm(false);
    }
    const passwordHandeler= e =>{
        if(errorMessage)
            seterrorMessage("")
        setPassword(e.target.value.trim());
        if(email && e.target.value)
            setValidForm(true);
        else
            setValidForm(false);
    }


    // Form submition
    const signUpHandeler = (e)=>{
        e.preventDefault();
        const body={email,password}
        axios.post("https://still-spire-04865.herokuapp.com/api/login/log",body)
        .then((res)=>{
            console.log("res.headers",res.headers);
            const userBody=res.data;
            let authHeaders={}
            authHeaders["x-login-auth-token"]=res.headers['x-login-auth-token']
            authHeaders["x-session-id"]=res.headers['x-session-id']
            dispatch(authActions.loginUser({userData:userBody , authHeaders:authHeaders}))
            history.push("/");
        })
        .catch((err)=>{
            seterrorMessage("Invalid Email / Password")
        })
        // here we need to make login request and if the response is ok we will dispatch 


    }

    return (
    
    <Fragment>
        <form onSubmit={signUpHandeler}>
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            {/* user Email adress  */}
            <div className="auth-form-group">
                <label htmlFor="email">Email address</label>
                <input type="text"  
                onChange={emailHandeler} value={email}
                id="email" autoComplete='off'/>
            </div>

            {/* user password */}
            <div className="auth-form-group">
                <label htmlFor="password">password</label>
                <input type="password" 
                onChange={passwordHandeler} value={password}
                id="password" autoComplete='off'/>
            </div>

            {/* user confirm password */}
           

            <button className={`sign-in-btn ${validForm ? ['hover-effect'] : ''}`}
            disabled={!validForm}
            onClick={signUpHandeler} type="submit">
                Sign in
            </button>
        <div className="sign-up-link">
                New Member ? <span onClick={handleSignUp}>Sign up</span>
            </div>

        <div className="or-sperator"></div>
        <button className="google-btn">
            <img src={googleImage} alt="sign in with google" className="google-image"/>
            Sign in With Google</button>
        <button className="facebook-btn">
            <img src={facebookImage} alt="sign in with facebook" className="google-image"/>
            Sign in With Facebook</button>
        </form>
        

        <div className="sperator"></div>
        <div className="auth-text">
            By signing in to your account, you agree to Indeed's Terms of Service
            and consent to our Cookie Policy and Privacy Policy.
        </div>
    </Fragment>
    )
}

export default SignIn
