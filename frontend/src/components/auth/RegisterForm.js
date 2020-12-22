import React, { useState } from "react";

function RegisterForm({ onSubmit, userType, onClickClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="form-card form-popup">
      <div className="form-card-body">
        <div className="loginform-close" onClick={() => onClickClose()}>
          <i className="far fa-times-circle"></i>
        </div>
        <div>
          <div className="text-form">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </div>

          <div className="text-form">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>

          <div className="text-form">
            <label>Password:</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="text-form">
            <button
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
