import { getAuth } from "firebase/auth";
import React from "react";
// import useFirebase from "../../hooks/useFirebase";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from "../../firebase.init";

const auth = getAuth(app);

const Login = () => {
    // const {signInWithGoogle} = useFirebase();
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    return (
        <div>
            <h2>Please Login</h2>
            <div style={{margin: '20px'}}>
                <button onClick={()=> signInWithGoogle()}>Google Sign In</button>
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