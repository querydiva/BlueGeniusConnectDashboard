/*!

=========================================================
* Black Dashboard PRO React - v1.2.0
=========================================================

* Coded by Gurpreet kaur

=========================================================
*/
import React from "react";
import classnames from "classnames";
import {NavLink} from "react-router-dom";
import "../../../assets/css/home.css"

// reactstrap components
import {Collapse, Container, Nav, Navbar, NavItem,} from "reactstrap";
import Logo from "../../../assets/img/1.png"
import "../../../assets/css/home.css"
import { transform } from "typescript";

const BlueAuthNavbar = (props) => {
    const [collapseOpen, setCollapseOpen] = React.useState(false);
    const [color, setColor] = React.useState("navbar-transparent");
    // this function opens and closes the collapse on small devices
    // it also adds navbar-transparent class to the navbar when closed
    // ad bg-white when opened
    const toggleCollapse = () => {
        if (collapseOpen) {
            setColor("navbar-transparent");
        } else {
            setColor("bg-white");
        }
        setCollapseOpen(!collapseOpen);
    };
    return (
        <>
        <Navbar
            className={classnames("navbar-absolute fixed-top ", color)}
            expand="lg"
            
        >
            <Container fluid>
              
                <div className="navbar-wrapper">
                    <img src={Logo} alt="logo" 
                    className="white_logo"/>
                </div>
               
            
                <button
                    aria-controls="navigation-index"
                    aria-expanded={false}
                    aria-label="Toggle navigation"
                    className="navbar-toggler"
                    data-toggle="collapse"
                    type="button"
                    onClick={toggleCollapse}
                >
                    <span style={{backgroundColor:"#204e8e"}}
                        className="navbar-toggler-bar navbar-kebab"/>
                    <span style={{backgroundColor:"#204e8e"}} className="navbar-toggler-bar navbar-kebab"/>
                    <span style={{backgroundColor:"#204e8e"}} className="navbar-toggler-bar navbar-kebab"/>
                </button>


                <Collapse isOpen={collapseOpen} navbar>
          
        </Collapse>
               
            </Container>
           
        </Navbar>
       
        {/* Blue background bar below the app bar */}
      
  </>      
    );
};

export default BlueAuthNavbar;
