
import React from "react";
import { Container, Row } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";
import "../../../assets/css/home.css"
import BlueGenius from "../../../assets/img/BlueGenius.png"
import "../../../assets/css/home.css"
import connect from "../../../assets/img/connect.png"

const Footer = (props) => {
  return (
    <footer className={"footer" + (props.default ? " footer-default" : "")}>
      <Container fluid={props.fluid ? true : false}>     
      <div className="background-bar">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="https://www.bluegiant.com/">
              Blue Giant
            </a>
          </li>{" "}
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.bluegiant.com/About-Us.aspx"
            >
              About us
            </a>
          </li>{" "}
          <li className="nav-item">
            <a className="nav-link" href="https://www.bluegiant.com/About-Us/Blue-Giant-Overview/Contact-Us.aspx">
              Contact Us
            </a>
          </li>
        </ul>
        </div>
        <div className="copyright">
        <div>
        <img src={BlueGenius} alt="logo" 
                    className="Blue-Genius-logo"/>
                    
        </div>
        <div>
        <img  style={{marginTop:"5px"}}
        src={connect} alt="logo" 
                    className="Blue-Genius-logo"/>
        </div>
        </div>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool,
};

export default Footer;
