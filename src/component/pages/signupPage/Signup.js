import React from 'react';
import './Signup.css';

const Signup = () => {
    return (
        <div className="login-form">
        <div className="center">
            <h1>SignUp</h1>
            <form >
                <div className="text_field">
                    <input type="text" required />
                   <span></span>
                    <label>Full Name</label>
                </div>
                <div className="text_field">
                    <input type="email" required />
                   <span></span>
                    <label>Email Address</label>
                </div>
                <div className="text_field">
                    <input  type="password" required />
                    <span></span>
                    <label>Password</label>
                </div>
                {/* <div className="pass">Forgot Password?</div> */}
                <input type="submit" value="SignUp" />
                <div className="signup_link">
                   Have a Account? <a href="#">Login</a>
                </div>
            </form>
        </div>
        </div>
    );
};

export default Signup;