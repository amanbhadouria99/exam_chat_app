import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import "firebase/app";

import { auth } from '../firebase';
import firebase from "firebase/app";

const Login = () => {
    return(
    <div id="login-page">
      <div id="login-card">
         <h2> Welcome to ExamChat!</h2>

            <div
              className="login-button google"
              onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
             >

              <GoogleOutlined /> Sign in with Google
            </div>

         <br /> <br />

        </div>
        <div id="owner">
            <h2>Made by Aman. HappyCoding :-)</h2>
         </div>
    </div>

    );
}

export default Login;