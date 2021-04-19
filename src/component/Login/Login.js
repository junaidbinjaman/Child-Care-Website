import firebase from "firebase/app";
import "firebase/auth";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useHistory, useLocation } from "react-router";
import Logo from "../../image/logo.png";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import firebaseConfig from "./firebase.config";
import "./Login.css";

firebase.initializeApp(firebaseConfig);

const Login = () => {
  let history = useHistory();
  let location = useLocation();
  const [loginForm, setLoginForm] = useState("null");
  const [registerForm, setRegisterForm] = useState("none");
  const [formValue, setFormValue] = useState("");

  const hideRegisterForm = () => {
    setLoginForm("none");
    setRegisterForm(null);
  };

  const hideLoginForm = () => {
    setLoginForm(null);
    setRegisterForm("none");
  };

  const getInputData = (event) => {
    event.preventDefault();
    const newForm = { ...formValue };
    newForm[event.target.name] = event.target.value;
    setFormValue(newForm);
  };

  let { from } = location.state || { from: { pathname: "/" } };
  const handleEmailLoginSignup = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(formValue.email, formValue.password)
      .then((userCredential) => {
        var user = userCredential.user;
        localStorage.setItem("Refresh Token", user.refreshToken);
        localStorage.setItem("User Email", user.email);
        history.replace(from);
        console.log(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage, errorCode);
      });

    firebase
      .auth()
      .createUserWithEmailAndPassword(formValue.email, formValue.password)
      .then((userCredential) => {
        var user = userCredential.user;
        localStorage.setItem("Refresh Token", user.refreshToken);
        localStorage.setItem("User Email", user.email);
        history.replace(from);
        console.log(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleLoginSignup = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
        localStorage.setItem("Refresh Token", user.refreshToken);
        localStorage.setItem("User Email", user.email);
        history.replace(from);
        console.log(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
      });
  };
  return (
    <div className="login-conatiner">
      <section>
        <Header />
      </section>{" "}
      <section className="login-form-area">
        <img src={Logo} alt="" />
        <form action="submit">
          <input
            onBlur={getInputData}
            style={{ display: loginForm }}
            type="text"
            placeholder="First Name"
            name="firstName"
          />
          <br />
          <input
            onBlur={getInputData}
            style={{ display: loginForm }}
            type="text"
            placeholder="Last Name"
            name="lastName"
          />
          <br />
          <input
            onBlur={getInputData}
            type="email"
            placeholder="Email"
            name="email"
          />
          <br />
          <input
            onBlur={getInputData}
            type="password"
            placeholder="Password"
            name="password"
          />
          <br />
          <input
            style={{ display: loginForm }}
            type="password"
            placeholder="Confirm Password"
          />
          <br />
          <input
            onClick={handleEmailLoginSignup}
            type="submit"
            className="btn-global"
          />
          <p style={{ display: loginForm }}>
            Already have an account ?{" "}
            <b onClick={hideRegisterForm} style={{ cursor: "pointer" }}>
              Login{" "}
            </b>{" "}
          </p>{" "}
          <p style={{ display: registerForm }}>
            Don 't you have an accout?{" "}
            <b style={{ cursor: "pointer" }} onClick={hideLoginForm}>
              Create One{" "}
            </b>{" "}
          </p>{" "}
        </form>{" "}
      </section>{" "}
      <section className="google-login">
        <hr />
        <button
          onClick={handleGoogleLoginSignup}
          style={{ display: registerForm }}
          className="btn-global google-login-btn"
        >
          <FaGoogle className="google-icon" /> Login With Google{" "}
        </button>{" "}
        <button
          onClick={handleGoogleLoginSignup}
          style={{ display: loginForm }}
          className="btn-global google-login-btn"
        >
          <FaGoogle className="google-icon" /> SignUp With Google{" "}
        </button>{" "}
      </section>{" "}
      <section className="login-footer">
        <Footer />
      </section>{" "}
    </div>
  );
};

export default Login;
