// BlueResetPassword.js
import React, { useState } from "react";
import Userfront from "@userfront/core";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Button,
  Input,
  InputGroup,
  InputGroupText,
} from "reactstrap";
import BlueAuthNavbar from "GP/components/BlueNavbars/BlueAuthNavbar";
import Footer from "GP/components/BlueFooter/BlueFooter";

const BlueResetPassword = ({ token, uuid }) => {
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handlePasswordVerifyChange = (e) => setPasswordVerify(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (password !== passwordVerify) {
        setMessage("Passwords do not match!");
        setPassword("");
        setPasswordVerify("");
        return;
      }

      console.log("Attempting password reset...");
      await Userfront.updatePassword({ password, token, uuid });

      // Log the user out after resetting the password
      console.log("Logging out user after password reset...");
      await Userfront.logout();

      // Check if the user is logged out
      console.log("User logged out:", !Userfront.auth.loggedIn);

      // Clear session and local storage
      sessionStorage.clear();
      localStorage.clear();

      setMessage(
        "Your password has been successfully reset! Redirecting to login..."
      );

      // Redirect to login after 2 seconds
      setTimeout(() => {
        console.log("Redirecting to login...");
        navigate("/blueauth/login");
      }, 2000);
    } catch (error) {
      console.error("Error during password reset:", error);
      setMessage("Error updating password: " + error.message);
    }
  };

  return (
    <>
      <BlueAuthNavbar />
      <div className="wrapper white-content">
        <div className="full-page">
          <div className="content">
            <div className="background-bar1"></div>
            <Container>
              <Col className="ml-auto mr-auto" lg="6" md="10" sm="10" xl="6">
                <Card style={{ marginTop: "180px" }} className="card-white">
                  <div className="container-header">
                    <CardTitle className="card_title1">
                      Reset Your Password
                    </CardTitle>

                    <div
                      style={{ marginTop: "-12px" }}
                      className="icon-circle icon-circle-blue card_icon"
                    >
                      <i
                        className="tim-icons icon-refresh-01"
                        style={{
                          color: "#ffffff",
                          marginLeft: "12px",
                          marginTop: "8px",
                        }}
                      />
                    </div>
                    <div style={{ marginLeft: "5px" }}>
                      Enter new password and verify new password
                    </div>
                  </div>
                  <CardBody>
                    <form onSubmit={handleSubmit}>
                      <InputGroup className="input-group-focus">
                        <InputGroupText addonType="prepend">
                        
                            <i className="tim-icons icon-lock-circle" />
                          </InputGroupText>
                      
                        <Input
                          placeholder="Enter new password"
                          type="password"
                          value={password}
                          onChange={handlePasswordChange}
                          required
                        />
                      </InputGroup>
                      <InputGroup className="input-group-focus">
                        <InputGroupText addonType="prepend">
                   
                            <i className="tim-icons icon-lock-circle" />
                       
                        </InputGroupText>
                        <Input
                          placeholder="Verify new passwored"
                          type="password"
                          value={passwordVerify}
                          onChange={handlePasswordVerifyChange}
                          required
                        />
                      </InputGroup>
                      <div className="card_footer1">
                        <Button type="submit" className="login_button">
                          RESET PASSWORD
                        </Button>
                      </div>
                    </form>
                    {message && <p style={{ color: "red" }}>{message}</p>}
                  </CardBody>
                </Card>
              </Col>
            </Container>
          </div>
          <Footer style={{ color: "#204e8e" }} fluid />
        </div>
      </div>
    </>
  );
};

export default BlueResetPassword;
