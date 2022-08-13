import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";
// import useFirebase from "../../hooks/useFirebase";

const auth = getAuth(app);

const Home = () => {
    // const {user} = useFirebase();
    const [user] = useAuthState(auth);
    return(
        <div>
            <h2>This is Home</h2>
            <p>Current user: {user? user.displayName : 'no body here'}</p>
        </div>
    );
};


export default Home;