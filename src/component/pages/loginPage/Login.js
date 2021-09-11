import React,{useContext,useState} from 'react';
import "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import '../../../firebase.config';
import { UserContext } from './../../../App';
import { useHistory,useLocation } from "react-router";




const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
      })
    const handleSignInGoogle = () => {
        const provider = new GoogleAuthProvider();

        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then(res => {
            const { displayName, email, photoURL } = res.user;
            const signedInUser = {
              isSignedIn: true,
              name: displayName,
              email: email,
              photo: photoURL
            }
            setUser(signedInUser)
            setLoggedInUser(signedInUser)
            history.replace(from);
            console.log(displayName, photoURL, email)
          })
          .catch(err => {
            console.log(err)
            console.log(err.message)
          })
    }

    return (
        <div className="login-form">
            <div className="center">
                <h1>Login</h1>
                <form >
                    <div className="text_field">
                        <input type="text" required />
                        <span></span>
                        <label>Username</label>
                    </div>
                    <div className="text_field">
                        <input type="password" required />
                        <span></span>
                        <label>Password</label>
                    </div>
                    <div className="pass">Forgot Password?</div>
                    <input type="submit" value="Login" />
                    <div className="signup_link">
                        {/* Not a member? <a href="#">Signup</a> */}
                        <h6>Login With </h6>
                        <FontAwesomeIcon icon={faGoogle}
                            onClick={handleSignInGoogle}
                            className="me-3"
                            style={{ fontSize: '25px', color: '#3B86E8', cursor: 'pointer' }} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;