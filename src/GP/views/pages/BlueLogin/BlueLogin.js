import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Card, CardBody, CardTitle, Col, Container } from "reactstrap";
import "../../../../assets/css/home.css";
import BlueLoginForm from "../BlueLogin/BlueLoginForm";

const BlueLogin = () => {
  React.useEffect(() => {
    document.body.classList.toggle("login-page");
    return function cleanup() {
      document.body.classList.toggle("login-page");
    };
  });
  return (
    <>
      <div className="content">
        <div className="background-bar1"></div>
        <Container>
          <Col className="ml-auto mr-auto" lg="6" md="10" sm="10" xl="6">
            <Card style={{ marginTop: "180px" }} className="card-white">
              <div className="container-header">
                <CardTitle className="card_title1">Welcome</CardTitle>

                <div
                  style={{ marginTop: "-12px" }}
                  className=" icon-circle icon-circle-blue card_icon"
                >
                  <i
                    className="tim-icons icon-lock-circle"
                    style={{
                      color: "#ffffff",
                      marginLeft: "12px",
                      marginTop: "8px",
                    }}
                  />
                </div>
                <div className="card_title2">Login to Continue</div>
              </div>

              <CardBody>
                {/*Call LoginForm form Component*/}
                <BlueLoginForm />
              </CardBody>
              <div className="card_footer1">
                <h5>
                  <Link className="signup_link" to="/blueauth/forgot">
                    Forgot Password
                  </Link>
                </h5>
              </div>
            </Card>
          </Col>
        </Container>
      </div>
    </>
  );
};

export default BlueLogin;
