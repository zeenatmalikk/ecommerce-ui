import React from "react";
import Button from "@mui/material/Button";
import "./Login.css"
const Login = () => {
  return (
    <div>
      <div className="l-container">
        <div className="l-wrapper">
          <h2 className="l-title">SIGN IN</h2>
          <form>
            <input
              className='l-input'
              type="text"
              name="Uname"
              placeholder="enter your Username"
            />
            <input
              className='l-input'
              type="text"
              name="Password"
              placeholder="enter your Password"
            />
            <Button variant="outlined">SIGN IN</Button>
            <a href="#"> Don't you remember the password?</a>
            <p>
              Already a User? <a href="#">Register</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
