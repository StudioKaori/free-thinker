import React, { useState } from "react";

function LoginForm({ onSubmit, onClickClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="form-card form-popup">
      <div className="form-card-body">
        <div className="loginform-close" onClick={() => onClickClose()}>
          <i className="far fa-times-circle" title="Close"></i>
        </div>
        <div>
          <div className="inputWithIcon inputIconBg">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <i className="fa fa-envelope fa-lg fa-fw" aria-hidden="true"></i>
          </div>

          <div className="inputWithIcon inputIconBg">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className="fa fa-key" aria-hidden="true"></i>
          </div>

          <div className="loginform-submit">
            <button
              className="loginform-submit-button"
              onClick={() => onSubmit({ email, password })}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
