import { getAuth } from "firebase/auth";
import React from "react";
import {useNavigate, useLocation} from 'react-router-dom';
// import useFirebase from "../../hooks/useFirebase";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from "../../firebase.init";

const auth = getAuth(app);

const Login = () => {
    // const {signInWithGoogle} = useFirebase();
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/';

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(() =>{
            navigate(from, {replace: true});
        })
    }

    return (
        <div>
            <h2>Please Login</h2>
            <div style={{margin: '20px'}}>
                <button onClick={handleGoogleSignIn}>Google Sign In</button>
            </div>
            <form>
                <input type='email' placeholder='Your Email'></input>
                <br></br>
                <input type='password' placeholder="Password" name='' id=''></input>
                <br></br>
                <input type='submit' value='Login'></input>
            </form>
        </div>
    );
};

export default Login;