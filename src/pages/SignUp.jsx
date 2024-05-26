// SignUp.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import './SignUp.css';

const SignUp = () => {
    const navigate = useNavigate();

    const handleSignupClick = () => {
        const card = document.getElementsByClassName('signup-page-one');
        const cardTwo = document.getElementsByClassName('signup-page-two');

        if (!card[0].hasAttribute('hidden')) {
            card[0].setAttribute('hidden', '');
            cardTwo[0].removeAttribute('hidden', '');
            cardTwo[0].style.transform = 'translateX(0)';
        }
    };

    const handleGoogleSuccess = (response) => {
        console.log('Google login successful:', response);
        navigate('/dashboard');
    };

    const handleGoogleFailure = (error) => {
        console.error('Google login failed:', error);
    };

    const handleSubmitClick = () => {
        navigate('/dashboard');
    };

    return (
        <div className="signup-container">
            <div className="signup-page-one">
                <div className="signup-card">
                    <div className="signup-heading poppins-thin">
                        <h1 className="signup-title">Create an account</h1>
                        <p className="signup-subtitle">Enter your email to sign up for this app</p>
                    </div>
                    <div className="signup-form">
                        <input type="text" id="signup-input" size={29} placeholder="john123@gmail.com" className="glassy-input" />
                        <br />
                        <button id="signup-btn" onClick={handleSignupClick}>Sign up with email</button>
                    </div>
                    <div className="signup-divider">
                        <p>or continue with</p>
                    </div>
                    <div className="signup-alternative">
                        <GoogleOAuthProvider clientId="459741616357-k1h92ul4h6q33rp7v28eud7fepmfjnp7.apps.googleusercontent.com">
                            <GoogleLogin
                                onSuccess={handleGoogleSuccess}
                                onFailure={handleGoogleFailure}
                            />
                        </GoogleOAuthProvider>
                    </div>
                    <div className="signup-notice">
                        <p>By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></p>
                    </div>
                </div>
            </div>
            <div className="signup-page-two" hidden>
                <div className="signup-card">
                    <div className="signup-heading-two poppins-thin">
                        <h1 className="signup-title">Join <br />Programmer Bubble</h1>
                        <p className="signup-subtitle">Unlock your coding potential. It’s free and easy.</p>
                    </div>
                    <div className="signup-grid">
                        <div className="signup-row">
                            <input type="text" placeholder="First Name" id="user-firstName" className="glassy-input" size={10} />
                            <input type="text" placeholder="Last Name" id="user-lastName" className="glassy-input" size={10} />
                        </div>
                        <div className="signup-row">
                            <input type="text" placeholder="Password" id="user-password" className="glassy-input" size={10} />
                            <input type="text" placeholder="Confirm Password" id="user-password-confirm" className="glassy-input" size={10} />
                        </div>
                        <div className="signup-column">
                            <p className="poppins-thin"> PROFILE PICTURE (optional) </p>
                            <input type="file" id="user-username" className="glassy-input" />
                            <input type="text" placeholder="Username" id="user-username" className="glassy-input" />
                        </div>
                    </div>
                    <div className="signup-alternative">
                        <button className="submit-glassy-btn" onClick={handleSubmitClick}>SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
