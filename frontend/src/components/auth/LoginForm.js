import React, { useState } from "react";

function LoginForm({ onSubmit, onClickClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="card">
      <div className="card-body">
        <div className="loginform-close" onClick={() => onClickClose()}>
          <i className="far fa-times-circle"></i>
        </div>
        <div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <button
              className="btn btn-info"
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
