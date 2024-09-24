import React from "react";
import {Button, Form, Input, InputGroup, InputGroupAddon, InputGroupText} from "reactstrap";
import "../../../../assets/css/facility.css"

import Alerts from "../BlueRegister/Alert";

import Userfront from "@userfront/core";


// Initialize Userfront Core JS
Userfront.init("pn46y6ny");



// Define the Signup form component
class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            passwordVerify: "",
            alertMessage: "",
            username: "",
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setAlertMessage = this.setAlertMessage.bind(this);
    }

    // Whenever an input changes value, change the corresponding state variable
    handleInputChange(event) {
        // console.log(event.target.value);
        event.preventDefault();
        const target = event.target;
        this.setState({
            [target.name]: target.value,
        });
    }

    // Handle the form submission by calling Userfront.signup()
    handleSubmit(event) {
        event.preventDefault();
        this.setAlertMessage();


        // Verify that the passwords match
        if (this.state.password !== this.state.passwordVerify) {
            return this.setAlertMessage('Passwords must match');
        }
       // Verify username is not empty
        if(this.state.username ===""){
            return this.setAlertMessage("Username is not allowed to be empty")
        }

        // Call Userfront.signup()
        Userfront.signup({
            method: "password",
            email: this.state.email,
            password: this.state.password,
            username: this.state.username,

        })
            .catch((error) => {
                this.setAlertMessage(error.message);
            });
    }

    setAlertMessage(message) {
        this.setState({alertMessage: message});
    }

    render() {
        return (
            <div style={{marginTop: "-40px"}}>
                <Alerts className="alerts" message={this.state.alertMessage}/>
                <Form className="form" onSubmit={this.handleSubmit}>
                    <InputGroup className="input-group-focus">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                                <i className="tim-icons icon-single-02"/>
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input
                            placeholder="UserName"
                            name="username"
                            type="username"
                            value={this.state.username}
                            onChange={this.handleInputChange}
                        />
                    </InputGroup>
                    <InputGroup className="input-group-focus">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                                <i className="tim-icons icon-email-85"/>
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input
                            placeholder="E-Mail"
                            name="email"
                            type="email"
                            value={this.state.email}
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

                    <InputGroup className="input-group-focus">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                                <i className="tim-icons icon-lock-circle"/>
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input
                            name="passwordVerify"
                            placeholder="Verify Password"
                            type="password"
                            value={this.state.passwordVerify}
                            onChange={this.handleInputChange}
                        />
                    </InputGroup>

                    <Button type="submit"
                            className=" login_button"
                    >
                        SIGNUP
                    </Button>
                </Form>
            </div>
        );
    }
}

export default SignUpForm;