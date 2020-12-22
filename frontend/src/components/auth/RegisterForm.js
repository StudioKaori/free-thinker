import React, { useState } from "react";

function RegisterForm({ onSubmit, userType, onClickClose }) {
  const [name, setName] = useState("");
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
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
            <i className="fa fa-user fa-lg fa-fw" aria-hidden="true"></i>
          </div>

          <div className="inputWithIcon inputIconBg">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
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
              onClick={(e) => onSubmit({ name, email, password, userType })}
            >
              Create {userType} account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
