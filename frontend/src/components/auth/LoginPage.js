import React from "react";
import { Redirect } from "react-router-dom";
import Auth from "../../services/Auth";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function LoginPage() {
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
    <div className="wrapper">
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-6 " style={{ color: "white" }}>
            <h1>SDA</h1>
            <p>Starter template</p>
          </div>

          <div className="col-md-6">
            <div className="row">
              <div className="col-12  strong-shadow">
                <LoginForm onSubmit={login} />
              </div>

              <div className="col-12 mt-4">
                <RegisterForm userType="Teacher" onSubmit={register} />
              </div>

              <div className="col-12 mt-4">
                <RegisterForm userType="Student" onSubmit={register} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
