import React from "react";
import {Button, Input, InputGroup,  InputGroupText} from "reactstrap";
import "../../../../assets/css/facility.css"

import Alerts from "../BlueLogin/BlueAlerts"
import Userfront from "@userfront/core";

Userfront.init("pn46y6ny");

// Define the Login form component
class BlueLoginForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        emailOrUsername: "",
        password: "",
        alertMessage: "",
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.setAlertMessage = this.setAlertMessage.bind(this);
    }
  
    // Handle input change
    handleInputChange(event) {
      event.preventDefault();
      const target = event.target;
      this.setState({
        [target.name]: target.value,
      });
    }
  
    // Handle form submission
    handleSubmit(event) {
      event.preventDefault();
      this.setAlertMessage(""); // Reset alert message
  
      // Email Validation: First check if the email is empty
      if (!this.state.emailOrUsername) {
        this.setAlertMessage("Email is required.");
        return;
      }
  
      // If the email is not empty, check for valid email syntax
      if (!this.validateEmail(this.state.emailOrUsername)) {
        this.setAlertMessage("Please enter a valid email address.");
        return;
      }
  
      // Password Validation
      if (!this.state.password) {
        this.setAlertMessage("Password is required.");
        return;
      }
  
      // Call Userfront login
        Userfront.login({
        method: "password",
        emailOrUsername: this.state.emailOrUsername,
        password: this.state.password,
      })
      .then(() => {
        // Retrieve username after successful login and update state
        const username = Userfront.user.username;
        this.setState({ username });
        })
      
      
      .catch((error) => {
        this.setAlertMessage(error.message);
      });
    }
  
    // Email validation function with regex
    validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    // Set alert message for errors
    setAlertMessage(message = "") {
      this.setState({ alertMessage: message });
    }
  
    render() {
      return (
        <div style={{ textAlign: "center" }}>
          <form onSubmit={this.handleSubmit}>
            {/* Email Field */}
            <InputGroup className="input-group-focus">
  <InputGroupText addontype="prepend">
    <i className="tim-icons icon-email-85" />
  </InputGroupText>
  <Input
    placeholder="E-Mail"
    name="emailOrUsername"
    type="email" // Use type="email" for email validation, if required
    value={this.state.emailOrUsername}
    onChange={this.handleInputChange}
  />
</InputGroup>
  
<InputGroup className="input-group-focus">
  <InputGroupText addontype="prepend">
    <i className="tim-icons icon-lock-circle" />
  </InputGroupText>
  <Input
    name="password"
    type="password" // Password field
    placeholder="Password"
    value={this.state.password}
    onChange={this.handleInputChange}
    required // Optional: add validation if needed
  />
</InputGroup>

  
            {/* Display Alerts */}
            <Alerts className="alerts" message={this.state.alertMessage} />
  
            {/* Submit Button */}
            <Button type="submit" className="login_button">
              LOGIN
            </Button>
          </form>
        </div>
      );
    }
  }
  
  
  export default BlueLoginForm;