import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Auth from "../../services/Auth";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

import "../../css/login.css";

function LoginPage() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [teacherRegisterOpen, setTeacherRegisterOpen] = useState(false);
  const [studentRegisterOpen, setStudentRegisterOpen] = useState(false);

  const login = async (loginData) => {
    const loginSuccess = await Auth.login(loginData);
    if (!loginSuccess) {
      alert("Invalid credentials");
    }
  };

  const register = async (registrationData) => {
    const registerSuccess = await Auth.register(registrationData);
    if (!registerSuccess) {
      alert("Couldn't register check credentials and try again");
    }

    if (registrationData.userType === 1) {
      return <Redirect to="/teacher" />;
    } else if (registrationData.userType === 2) {
      return <Redirect to="/student" />;
    }
  };

  const closeForms = () => {
    if (loginOpen) setLoginOpen(false);
    else if (studentRegisterOpen) setStudentRegisterOpen(false);
    else if (teacherRegisterOpen) setTeacherRegisterOpen(false);
  };

  return (
    <>
      <nav>
        <div className="header-menu-bg">
          <div>
            <div className="header-menu-logo">
              <h1>
                <img
                  src="/assets/img/logo.svg"
                  alt="Free Thinker"
                  title="Free Thinker"
                  className="header-menu-logo-icon"
                />
              </h1>
            </div>
          </div>
        </div>
      </nav>
      <div className="parallax-bg login-bg-01">
        <div class="bubbles">
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
        </div>
        <div className="bg-01">
          <div className="login-logo-wrapper">
            <div className="login-logo-wrapper-inner">
              <img
                src="/assets/img/login-logo.png"
                alt="free thinker logo"
                className="login-logo-img animate__animated animate__rubberBand"
              />

              <div>
                {loginOpen && (
                  <div className="loginform-popup">
                    <div
                      className="loginform-close"
                      onClick={() => closeForms()}
                    >
                      <i className="far fa-times-circle"></i>
                    </div>
                    <LoginForm onSubmit={login} />
                  </div>
                )}

                {teacherRegisterOpen && (
                  <div className="loginform-popup">
                    <div
                      className="loginform-close"
                      onClick={() => closeForms()}
                    >
                      <i className="far fa-times-circle"></i>
                    </div>
                    <RegisterForm userType="Teacher" onSubmit={register} />
                  </div>
                )}

                {studentRegisterOpen && (
                  <div className="loginform-popup">
                    <div
                      className="loginform-close"
                      onClick={() => closeForms()}
                    >
                      <i className="far fa-times-circle"></i>
                    </div>
                    <RegisterForm userType="Student" onSubmit={register} />
                  </div>
                )}
              </div>
              <div className="login-buttons">
                <div
                  className={`loginform-button ${loginOpen && "active"}`}
                  onClick={() => {
                    setLoginOpen(!loginOpen);
                    setTeacherRegisterOpen(false);
                    setStudentRegisterOpen(false);
                  }}
                >
                  Login
                </div>
                <div
                  className={`loginform-button ${teacherRegisterOpen &&
                    "active"}`}
                  onClick={() => {
                    setLoginOpen(false);
                    setTeacherRegisterOpen(!teacherRegisterOpen);
                    setStudentRegisterOpen(false);
                  }}
                >
                  Teacher
                  <br />
                  Sign Up
                </div>
                <div
                  className={`loginform-button ${studentRegisterOpen &&
                    "active"}`}
                  onClick={() => {
                    setLoginOpen(false);
                    setTeacherRegisterOpen(false);
                    setStudentRegisterOpen(!studentRegisterOpen);
                  }}
                >
                  Student
                  <br />
                  Sign Up
                </div>
              </div>

              {/* <ul className="nav d-flex justify-content-sm-center justify-content-md-end"> */}
              {/* <ul>
                  <li
                    className={`loginform-button ${loginOpen &&
                      "active"}`}
                    onClick={() => {
                      setLoginOpen(!loginOpen);
                      setTeacherRegisterOpen(false);
                      setStudentRegisterOpen(false);
                    }}
                  >
                    Login
                  </li>
                  <li
                    className={`loginform-button ${teacherRegisterOpen &&
                      "active"}`}
                    onClick={() => {
                      setLoginOpen(false);
                      setTeacherRegisterOpen(!teacherRegisterOpen);
                      setStudentRegisterOpen(false);
                    }}
                  >
                    Teacher Sign Up
                  </li>
                  <li
                    className={`loginform-button ${studentRegisterOpen &&
                      "active"}`}
                    onClick={() => {
                      setLoginOpen(false);
                      setTeacherRegisterOpen(false);
                      setStudentRegisterOpen(!studentRegisterOpen);
                    }}
                  >
                    Student Sign Up
                  </li>
                </ul> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
