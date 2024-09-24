import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import PropTypes from "prop-types";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Input,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Modal,
  UncontrolledTooltip,
} from "reactstrap";

const BlueAdminNavbar = (props) => {
  // State mgt manage the navabar state
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [modalSearch, setModalSearch] = React.useState(false);
  const {handleMiniClick, brandText, sidebarOpened, toggleSidebar } = props;
  const [color, setColor] = React.useState("navbar-transparent");
  const { activeColor} = props;
  
  // this function opens and closes the collapse on small devices
  const toggleCollapse = () => {
    // if (collapseOpen) {
    //   setColor("navbar-transparent");
    // } else {
    //   setColor("bg-white");
    // }
    // setCollapseOpen(!collapseOpen);
  };

  // this function is to open the Search modal
  const toggleModalSearch = () => {
    setModalSearch(!modalSearch);
  };
  const { logo } = props;
  let logoImg = null;
  let logoText = null;
  if (logo !== undefined) {
    if (logo.outterLink !== undefined) {
      logoImg = (
        <a
          href={logo.outterLink}
          className="simple-text logo-mini"
          target="_blank"
          onClick={props.closeSidebar}
        >
          <div className="logo-img">
            <img src={logo.imgSrc} alt="react-logo" />
          </div>
        </a>
      );
      
    } else {
      logoImg = (
        <NavLink
          to={logo.innerLink}
          className="simple-text logo-mini"
          onClick={props.closeSidebar}
        >
          <div className="logo-img">
            <img src={logo.imgSrc} alt="react-logo" />
          </div>
        </NavLink>
      );
      
    }
  }
  return (
    <div>
       <Navbar
        className={classNames("navbar-absolute fixed-top")}
        expand="lg"
        data={activeColor}
        
      >
        {/* A Bootstrap container that takes up the full width of the viewport. */}
        <Container fluid>
          <div className="navbar-wrapper">
            {/* //A div for the sidebar minimize button. */}
            <div className="navbar-minimize d-inline">
              <Button
                className="minimize-sidebar btn-just-icon"
                color="link"
                id="tooltip209599"
                onClick={handleMiniClick}
              >
                <i className="tim-icons icon-align-center visible-on-sidebar-regular" />
                {/* // An icon for the regular sidebar. */}
                <i className="tim-icons icon-bullet-list-67 visible-on-sidebar-mini" />{" "}
                {/* //An icon for the mini sidebar. */}
              </Button>
              {/* //A tooltip from Reactstrap that appears //when hovering over the
              button, providing additional context ("Sidebar toggle"). */}
              <UncontrolledTooltip
                delay={0}
                target="tooltip209599"
                placement="right"
              >
                Sidebar toggle
              </UncontrolledTooltip>
            </div>
            {/* //A div for the navbar toggle button, with conditional class
            "toggled" based on */}
            <div
              className={classNames("navbar-toggle d-inline", {
                toggled: sidebarOpened,
              })}
            >
              {/* // A button that toggles the sidebar's state when clicked by triggering */}
              <button
                className="navbar-toggler"
                type="button"
                onClick={toggleSidebar}
              >
                {/* //Visual elements of the button. */}
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <div className="logo">
            {logoImg}
            {/* Blue Genius */}
            {logoText}
          </div>
            {/* //A brand/logo element from Reactstrap. It prevents default action
            on click //(likely to prevent page reload) and displays
            props.brandText. */}
            {/* <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
              {props.brandText}
            </NavbarBrand> */}
          </div>
          {/* // A button to toggle the collapse state of the navbar. It calls
          toggleCollapse when clicked. */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleCollapse}
          >
            {/* //Visual elements of the button representing the "kebab" (three
            vertical dots) icon. */}
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </button>
          {/* //A collapsible navbar section from Reactstrap that is controlled by
          collapseOpen state. */}
          <Collapse navbar isOpen={collapseOpen}>
            {/* // A nav element aligned to the right. */}
            <Nav className="ml-auto" navbar>
              {/* // A search bar component. */}
              <InputGroup className="search-bar" tag="li">
                <Button
                  color="link"
                  data-target="#searchModal"
                  data-toggle="modal"
                  id="search-button"
                  onClick={toggleModalSearch}
                >
                  {/* // An icon for the search button. */}
                  <i className="tim-icons icon-zoom-split" />
                  {/* // A text label for the button, visible on smaller screens. */}
                  <span className="d-lg-none d-md-block">Search</span>
                </Button>
              </InputGroup>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <div className="photo">
                    <img alt="..." src={require("assets/img/bill.jpg")} />
                  </div>
                  <b className="caret d-none d-lg-block d-xl-block" />
                  <p className="d-lg-none">Log out</p>
                </DropdownToggle>
                <DropdownMenu className="dropdown-navbar" right tag="ul">
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">Profile</DropdownItem>
                  </NavLink>
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">Settings</DropdownItem>
                  </NavLink>
                  <DropdownItem divider tag="li" />
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">Log out</DropdownItem>
                  </NavLink>
                </DropdownMenu>
              </UncontrolledDropdown>
              <li className="separator d-lg-none" />
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      <Modal
        modalClassName="modal-search"
        isOpen={modalSearch}
        toggle={toggleModalSearch}
      >
        <div className="modal-header">
          <Input id="inlineFormInputGroup" placeholder="SEARCH" type="text" />
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={toggleModalSearch}
          >
            <i className="tim-icons icon-simple-remove" />
          </button>
        </div>
      </Modal>
    </div>
  );
};

BlueAdminNavbar.propTypes = {
  activeColor: PropTypes.oneOf(["primary", "blue", "green", "orange", "red"]).isRequired,
}
export default BlueAdminNavbar;
