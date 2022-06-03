import React, { useState} from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading,setLoading] = useState(false);

  const HandleSubmit = (e) => {
      e.preventDefault();
      console.log("handelling submit");
      alert("success");
      setUsername("");
      setEmail("");
      setPassword("");
  }
  
  return (
    <div id="Login-page">
      <div id="top_bar">
        <h1 className="ngo_title">NGO</h1>
        <span id="short_title">Let's start by creating your account</span>
      </div>
      <div className="login-container">
        <div className="card" id="login-content">
          <div className="login-title">Sign up</div>
          <hr></hr>
          <form
            id="filling-form"
            // onSubmit={(e) => {
            //   handleSubmit(e);
            // }}
          >
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
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
              Sign Up
            </button>
            {loading && (
              <div className="d-flex justify-content-center mt-3">
                <div className="spinner-border" role="status" />
              </div>
            )}
          </form>
          <hr></hr>
          <div className="login-bottom">
            <div className="no-account">
              Already Have Account? <Link to="/login">Log In...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
