// BlueResetPasswordPage.js

import React, { useState } from "react";
import Userfront from "@userfront/core";

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

import "../../../../assets/css/home.css";
import BlueAuthNavbar from "GP/components/BlueNavbars/BlueAuthNavbar";
import Footer from "GP/components/BlueFooter/BlueFooter";
import CustomModal from "../BlueResetPassword/CustomAlert"


Userfront.init("pn46y6ny");

const BlueForgotPasswordPage = () => {
  React.useEffect(() => {
    document.body.classList.toggle("login-page");
    return function cleanup() {
      document.body.classList.toggle("login-page");
    };
  });

  const [email, setEmail] = useState("");
  const [modalOpen, setModalOpen] = useState(false); // State for controlling modal visibility
  const [modalContent, setModalContent] = useState(""); // State for dynamic modal content
  const toggleModal = () => setModalOpen(!modalOpen); // Function to toggle modal visibility
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Request password reset from Userfront
      const response = await Userfront.sendResetLink(email);
       console.log(response)
      if (response.message === "OK") {
        const resetUrl = response.result.url; // Extracting the reset URL
        // Set the modal content with the reset URL
    setModalContent(
      <p>
        A password reset link has been sent to your email. Click the link below to reset your password:
        <a 
          href={resetUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ color: "blue", textDecoration: "underline" }}
        >
          Reset Your Password
        </a>
      </p>
    );
    setModalOpen(true); // Open the modal
  }
} catch (error) {
  console.error("Error requesting password reset:", error);
  setModalContent(<p>Failed to send password reset link. Please try again.</p>);
  setModalOpen(true);
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
              <Col
                className="ml-auto mr-auto"
                lg="6"
                md="10"
                sm="10"
                xl="6"
              >
                <Card style={{ marginTop: "180px" }} className="card-white">
                  <div className="container-header">
                    <CardTitle className="card_title1">
                      Password RESET
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
                      We'll email you a link to reset your password
                    </div>
                  </div>

                  <CardBody>
                    <form onSubmit={handleSubmit}>
                      <InputGroup className="input-group-focus">
                        <InputGroupText addonType="prepend">
                         
                            <i className="tim-icons icon-email-85" />
                          
                        </InputGroupText>
                        <Input
                          placeholder="Enter Your Email"
                          type="email"
                          value={email}
                          onChange={handleEmailChange}
                          required
                        />
                      </InputGroup>
                      <div className="card_footer1">
                        <Button type="submit" className="login_button">
                          GET RESET LINK
                        </Button>
                      </div>
                    </form>
                  </CardBody>
                </Card>
              </Col>
            </Container>
          
          </div>
             <Footer style={{ color: "#204e8e" }} fluid />
        </div>
      {/* Custom Modal */}
      <CustomModal 
        isOpen={modalOpen} 
        onClose={toggleModal} 
        title="PASSW0RD RESET" 
      >
        <p>{modalContent}</p>
      </CustomModal>
      </div>
      
    </>
  );
};

export default BlueForgotPasswordPage;