import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);


  return (
    <div id="Login-page2">
      <div id="top_bar">
        <h1 className="ngo_title">NGO</h1>
      </div>
      <div className="login-container">
        <div className="card" id="login-content">
          <div className="login-title2">Log In</div>
          <hr></hr>
          <form
            id="filling-form"
            // onSubmit={(e) => {
            //   handleSubmit(e);
            // }}
          >
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
            //   onClick={(e) => {
            //     handleSubmit(e);
            //   }}
            >
              Log In
            </button>
            {loading && (
              <div className="d-flex justify-content-center mt-3">
                <div className="spinner-border" role="status"></div>
              </div>
            )}
          </form>
          <hr></hr>
          <div className="login-bottom">
            <div className="forgot-password">
              <Link to="/forgot">Forgot Password?</Link>
            </div>
            <div className="no-account">
              Don't Have Account? <Link to="/signup">Sign Up...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
