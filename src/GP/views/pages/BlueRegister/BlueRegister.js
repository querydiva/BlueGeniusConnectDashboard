import React from "react";
// reactstrap components
import {Card, CardBody, CardFooter, CardTitle, Col, Container, Row,} from "reactstrap";

import SignUpForm from "../BlueRegister/SignUpForm"

const BlueRegister = () => {
    React.useEffect(() => {
        document.body.classList.toggle("register-page");
        return function cleanup() {
            document.body.classList.toggle("register-page");
        };
    });
    return (
        <>
            <div className="content">
                <Container>
                    <Row>
                        <Col className=" ml-auto mr-auto" lg="5" md="6">
                            <Card style={{marginTop: "40px"}}
                                  className="card-register card-white">
                                <div className="container-header">
                                    <CardTitle className="card_title">
                                    Register/SignUp
                                </CardTitle>
                                <div className=" icon-circle icon-circle-blue card_icon">
                                    <i className="tim-icons icon-single-02"
                                       style={{
                                           color: "#ffffff",
                                           marginLeft: "12px", marginTop: "8px"
                                       }}/>
                                </div>
                                </div>
                                <div className="para1">
                                    NOTE: Accounts Registered using e-mail
                                    providers such as Hotmail, Gmail, or Yahoo, will require periodic password
                                    renewal.
                                    By Registering, you agree to our <span style={{color: "blue"}}>Privacy Policy</span>
                                </div>

                                <CardBody>
                                    {/*Call SignUp form Component*/}
                                    <SignUpForm/>
                                </CardBody>
                                <CardFooter style={{marginBottom: "-30px"}}/>
                            </Card>
                        </Col>
                        {/*End of Right Side*/}
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default BlueRegister;
