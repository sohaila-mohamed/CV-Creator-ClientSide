import React , { Fragment ,useState} from 'react'
import logo from "../../../images/white-logo.svg";
import "./SignUp.css"

function SignUp() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const firstNameHandeler= e =>{
        setFirstName(e.target.value.trim());
    }

    const lastNameHandeler= e =>{
        setLastName(e.target.value.trim());
    }


    const signUpHandeler = (e)=>{
        e.preventDefault();
        console.log(firstName ,lastName)
    }

    return (
        <div className="sign-up-container">
            <div className="sign-up-left">
                <img src={logo} alt="cv creator" className="auth-logo"/>
                <span>Build your own CV simple in a few steps
                with vrity of pre-built templete</span>
            </div>
            <div className="sign-up-right">
                <div className="sign-up-form">
                    <div className="auth-indecator">
                        Sign up
                    </div>
                    <form onSubmit={signUpHandeler}>

                        {/* first name and last name  */}
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
                            <input type="text"  id="email" autoComplete='off'/>
                        </div>

                        {/* user password */}
                        <div className="auth-form-group">
                            <label htmlFor="password">password</label>
                            <input type="text"  id="password" autoComplete='off'/>
                        </div>

                        {/* user confirm password */}
                        <div className="auth-form-group">
                            <label htmlFor="Confirm-password">Confirm password</label>
                            <input type="text"  id="Confirm-password" autoComplete='off'/>
                        </div>

                        <button className="sign-up-btn" onClick={signUpHandeler} type="submit">
                            Sign up
                        </button>

                        <div className="sign-in-link">
                            Already Member ? <span>Sign in</span>
                        </div>

                    </form>
                    <div className="sperator"></div>
                    <div className="auth-text">
                        By signing in to your account, you agree to Indeed's Terms of Service
                        and consent to our Cookie Policy and Privacy Policy.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
