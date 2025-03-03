import React from "react";
// reactstrap components
import {Card, CardBody, CardFooter, CardTitle, Col, Container, Row,} from "reactstrap";

import SignUpForm from "../BlueRegister/SignUpForm"
import "../../../../assets/css/home.css"

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
                        <Col className=" ml-auto mr-auto" lg="6" md="10" sm="10" xl="6">
                            <Card style={{marginTop: "180px"}}
                                  className="card-register card-white">
                                <div className="container-header">
                                    <CardTitle className="card_title1">
                                    Register/SignUp
                                </CardTitle>
                                <div   style={{marginTop:"-8px"}}
                                className=" icon-circle icon-circle-blue card_icon">
                                    <i className="tim-icons icon-single-02"
                                       style={{
                                           color: "#ffffff",
                                           marginLeft: "12px", marginTop: "10px"
                                       }}/>
                                </div>
                                </div>
                                <div style= {{marginLeft:"150px"}}>
                                    Don't have an account?Register one!
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
