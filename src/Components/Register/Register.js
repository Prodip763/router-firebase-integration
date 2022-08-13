import React from "react";

const Register = () =>{
    return(
        <div>
            <h2>Please Register</h2>
            <form>
                <input type='text' placeholder='Your name'></input>
                <br></br>
                <input type='email' placeholder='Your Email'></input>
                <br></br>
                <input type='password' placeholder="Password" name='' id=''></input>
                <br></br>
                <input type='submit' value='Register'></input>
            </form>
        </div>
    );
};

export default Register;