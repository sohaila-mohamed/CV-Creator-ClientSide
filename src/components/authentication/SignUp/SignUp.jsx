import React , { Fragment ,useState} from 'react'
import { useHistory } from 'react-router';
import BounceLoader from "react-spinners/BounceLoader";


import { css } from "@emotion/react";
import "./SignUp.css"

function SignUp() {

     // go to sign up page
    const history = useHistory();
    function handleSignIn() {
        history.push("/sign-in");
    }


    // Form Validation propertiy to control the button wheather it's disabled or not 
    const [validForm, setValidForm] = useState(false);


    // spinner properties
    let [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#6B82B7");
    const override = css`
    position: absolute;
    top: 50%;
    left:50%;
    transform:translate(-50%,-100%);
    `;
   



    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    

    // input handlers for each input field
    const firstNameHandeler= e =>{
        setFirstName(e.target.value);

        // check if the form valid or not to make sign up button enabled 
        if(e.target.value && lastName && email && password && confirmPassword)
             setValidForm(true);
        else
             setValidForm(false);

    }


    const lastNameHandeler= e =>{
        setLastName(e.target.value.trim());
        // check if the form valid or not to make sign up button enabled 
        if(firstName && e.target.value && email && password && confirmPassword)
             setValidForm(true);
        else
             setValidForm(false);
    }



    const emailHandeler= e =>{
        setEmail(e.target.value.trim());
        // check if the form valid or not to make sign up button enabled 
        if(firstName && lastName && e.target.value && password && confirmPassword)
        setValidForm(true);
        else
        setValidForm(false);
    }


    const passwordHandeler= e =>{
        setPassword(e.target.value.trim());
        // check if the form valid or not to make sign up button enabled 
        if(firstName && lastName && email && e.target.value && confirmPassword)
             setValidForm(true);
        else
             setValidForm(false);
    }


    const confirmPasswordHandeler= e =>{
        setConfirmPassword(e.target.value.trim());
        // check if the form valid or not to make sign up button enabled 
        if(firstName && lastName && email && password && e.target.value)
             setValidForm(true);
        else
             setValidForm(false);
    }

    


    const signUpHandeler = (e)=>{
        e.preventDefault();
        const userInfo = {
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        }
        console.log(userInfo);

        // reseting the for fileds
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");


        setValidForm(false);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);

    }

    return (
        <Fragment>
            
                <form onSubmit={signUpHandeler}>
                    {/* first name and last name  */}
                    <BounceLoader color={color}  css={override} loading={loading}  size={80} />
                    <div className={`inputs ${loading ? ['auth-form-hidden'] : ''}`}>
                        <div className="auth-names">
                            
                            {/* first name  */}
                            <div className="auth-form-group">
                                <label htmlFor="email">First name</label>
                                <input type="text" 
                                onChange={firstNameHandeler} value={firstName}
                                id="email" autoComplete='off'/>
                            </div>
                            
                            <div className="auth-form-group">
                                <label htmlFor="email">Last name</label>
                                <input type="text"
                                    onChange={lastNameHandeler} value={lastName}
                                id="email" autoComplete='off'/>
                            </div>
                        </div>

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
                        <div className="auth-form-group">
                            <label htmlFor="Confirm-password">Confirm password</label>
                            <input type="password"  
                            onChange={confirmPasswordHandeler} value={confirmPassword}
                            id="Confirm-password" autoComplete='off'/>
                        </div>
                    </div>

                    <button 
                    className={`sign-up-btn ${validForm ? ['hover-effect'] : ''}`}
                     disabled={!validForm} 
                     onClick={signUpHandeler} 
                     type="submit">
                        Sign up
                    </button>

                    <div className="sign-in-link">
                        Already Member ? <span onClick={handleSignIn}>Sign in</span>
                    </div>

                </form>
                <div className="sperator"></div>
                <div className="auth-text">
                    By signing in to your account, you agree to Indeed's Terms of Service
                    and consent to our Cookie Policy and Privacy Policy.
                </div>
        </Fragment>
    )
}

export default SignUp
