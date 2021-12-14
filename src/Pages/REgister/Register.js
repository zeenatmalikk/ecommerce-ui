import React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import "./Register.css";
const Register = () => {
  return (
    <div>
      <div className="r-container">
        <div className="r-wrapper">
          <h2 className="r-title">Create an account</h2>
          <form>
            <input
              className="r-input"
              type="text"
              name="Name"
              placeholder="enter your name"
            />
            <input
              className="r-input"
              type="text"
              name="Lname"
              placeholder="enter your lastname"
            />
            <input
              className="r-input"
              type="text"
              name="Uame"
              placeholder="enter your Username"
            />
            <input
              className="r-input"
              type="text"
              name="Password"
              placeholder="enter your Password"
            />
            <input
              className="r-input"
              type="text"
              name="Confirm Password"
              placeholder="enter your Confirm Password"
            />
            <p className="aggreement">
              By creating this I agree to the terms and conditions laid down by
              Privacy Policy
            </p>
            <Button variant="outlined">REGISTER</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
