import React from "react";

import "./login.css";

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login_container">
      <div className="login_form_box">
        <form action="#" className="login_form">
          <div className="login_logo">
            <h2>Admin Login</h2>
          </div>
          <label className="login_label" for="email">
            Email
          </label>
          <input
            className="login_input"
            type="email"
            name="email"
            placeholder="youremail@example.com"
            required
          />
          <label className="login_label" for="password">
            Password
          </label>
          <input
            className="login_input"
            type="password"
            name="pass"
            placeholder="Password"
            required
          />
          <button type="button" className="btn_md">
            Login
          </button>

          <div className="login_btn_div">
            <Link to="/" className="login_back_home">
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
