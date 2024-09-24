import React, { useState } from "react";
import {Button, Input, InputGroup, InputGroupAddon, InputGroupText} from "reactstrap";
import "../../../../assets/css/facility.css"
import { useNavigate } from "react-router-dom";



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

    // Whenever an input changes value, change the corresponding state variable
    handleInputChange(event) {
        event.preventDefault();
        const target = event.target;
        this.setState({
            [target.name]: target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        // Reset the alert to empty
        this.setAlertMessage();
        // Call Userfront.login()
        Userfront.login({
            method: "password",
            emailOrUsername: this.state.emailOrUsername,
            password: this.state.password
        }).catch((error) => {
            this.setAlertMessage(error.message);

        });

    }

    setAlertMessage(message) {
        this.setState({alertMessage: message});

    }

    render() {
        return (
            <div style ={{textAlign:"center"}}>
                <form onSubmit={this.handleSubmit}>
                    <InputGroup>
                                           <InputGroupAddon addonType="prepend">
                                          <InputGroupText >
                                             <i className="tim-icons icon-email-85"/>
                                              </InputGroupText>
                                           </InputGroupAddon>
                                               <Input
                                                    placeholder="E-Mail"
                                                    name="emailOrUsername"
                                                    type="email"
                                                    value={this.state.emailOrUsername}
                                                    onChange={this.handleInputChange}
                                                />
                    </InputGroup>
                    <InputGroup className="input-group-focus">
                                                <InputGroupAddon addonType="prepend">
                                              <InputGroupText>
                                                  <i className="tim-icons icon-lock-circle"/>
                                                </InputGroupText>
                                          </InputGroupAddon>
                                             <Input
                                                    name="password"
                                                    type="password"
                                                    placeholder="Password"
                                                    value={this.state.password}
                                                    onChange={this.handleInputChange}

                                                />
                                            </InputGroup>

                    <Alerts className="alerts" message={this.state.alertMessage}/>
                    <Button type="submit" className="login_button "
                            >
                        LOGIN
                    </Button>
                </form>
                {/*<p style={{color:"#204e8e",marginTop:"7px",fontSize:"15px" }}>or</p>*/}
                {/*<SSOButton provider="google" />*/}

            </div>
        );
    }
}



export default BlueLoginForm