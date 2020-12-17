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

  return (
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
        <div className="login-buttons">
          <ul className="nav d-flex justify-content-sm-center justify-content-md-end">
            <li
              className={`nav-item btn btn-info m-1 ${loginOpen && "active"}`}
              onClick={() => {
                setLoginOpen(!loginOpen);
                setTeacherRegisterOpen(false);
                setStudentRegisterOpen(false);
              }}
            >
              Login
            </li>
            <li
              className={`nav-item btn btn-info m-1 ${teacherRegisterOpen &&
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
              className={`nav-item btn btn-info m-1 ${studentRegisterOpen &&
                "active"}`}
              onClick={() => {
                setLoginOpen(false);
                setTeacherRegisterOpen(false);
                setStudentRegisterOpen(!studentRegisterOpen);
              }}
            >
              Student Sign Up
            </li>
          </ul>
          <div className="row">
            {loginOpen && (
              <div className="col-12  strong-shadow">
                <LoginForm onSubmit={login} />
              </div>
            )}

            {teacherRegisterOpen && (
              <div className="col-12">
                <RegisterForm userType="Teacher" onSubmit={register} />
              </div>
            )}

            {studentRegisterOpen && (
              <div className="col-12">
                <RegisterForm userType="Student" onSubmit={register} />
              </div>
            )}
          </div>
        </div>
      </div>
      Free Thinker
      {/* <div className="container">
        <div className="row">
          <div className="col-md-6 mt-4 text-center">
            <h1>Free Thinkers aaa</h1>
          </div>

          <div className="col-md-6 mt-4">
            <ul className="nav d-flex justify-content-sm-center justify-content-md-end">
              <li
                className={`nav-item btn btn-info m-1 ${loginOpen && "active"}`}
                onClick={() => {
                  setLoginOpen(!loginOpen);
                  setTeacherRegisterOpen(false);
                  setStudentRegisterOpen(false);
                }}
              >
                Login
              </li>
              <li
                className={`nav-item btn btn-info m-1 ${teacherRegisterOpen &&
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
                className={`nav-item btn btn-info m-1 ${studentRegisterOpen &&
                  "active"}`}
                onClick={() => {
                  setLoginOpen(false);
                  setTeacherRegisterOpen(false);
                  setStudentRegisterOpen(!studentRegisterOpen);
                }}
              >
                Student Sign Up
              </li>
            </ul>
            <div className="row">
              {loginOpen && (
                <div className="col-12  strong-shadow">
                  <LoginForm onSubmit={login} />
                </div>
              )}

              {teacherRegisterOpen && (
                <div className="col-12">
                  <RegisterForm userType="Teacher" onSubmit={register} />
                </div>
              )}

              {studentRegisterOpen && (
                <div className="col-12">
                  <RegisterForm userType="Student" onSubmit={register} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default LoginPage;
