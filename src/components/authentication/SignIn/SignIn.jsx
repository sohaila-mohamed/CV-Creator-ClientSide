import React , { Fragment ,useState} from 'react'
import { useHistory } from 'react-router';
import googleImage from "../../../images/auth/search 1.svg"
import facebookImage from "../../../images/auth/facebook.svg"
import "./SignIn.css"
function SignIn() {

    // go to sign up page
    const history = useHistory();
    function handleSignUp() {
        history.push("/sign-up");
    }

    const [validForm, setValidForm] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    // handle the change of the email and password
    const emailHandeler= e =>{
        setEmail(e.target.value.trim());
        if(e.target.value && password)
            setValidForm(true);
        else
            setValidForm(false);
    }
    const passwordHandeler= e =>{
        setPassword(e.target.value.trim());
        if(email && e.target.value)
            setValidForm(true);
        else
            setValidForm(false);
    }


    // Form submition
    const signUpHandeler = (e)=>{
        e.preventDefault();
        console.log(email ,password)
    }

    return (
    
    <Fragment>
            
        <form onSubmit={signUpHandeler}>
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
