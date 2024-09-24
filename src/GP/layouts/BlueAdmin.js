import React from "react";
import { useLocation , Route, Routes, Navigate} from "react-router-dom";
import PerfectScrollbar  from "perfect-scrollbar";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
import Blueroutes from "../../GP/routes/Blueroutes";

import logo from "assets/img/react-logo.png";
import logo1 from "assets/img/logoBlueBig.png"
import BlueFixedPlugin from "GP/components/BlueFixedPlugin/BlueFixedPlugin";
import BlueAdminNavbar from "GP/components/BlueNavbars/BlueAdminNavbar";
import BlueSidebar from "GP/components/BlueSidebars/BlueSidebar";
var ps;

const BlueAdmin = (props) =>{

    // State Hooks
    const [activeColor, setActiveColor] = React.useState("blue");
    const [sidebarMini, setSidebarMini] = React.useState(true);//State to determine if the sidebar is in mini mode, initialized to true.
    const [opacity, setOpacity] = React.useState(0);
    const [sidebarOpened, setSidebarOpened] = React.useState(false);//State to track if the sidebar is opened, initialized to false

    // Ref Hooks
    const mainPanelRef = React.useRef(null);//  Reference to the main panel element.
    const notificationAlertRef = React.useRef(null);

   // Location Hook
   const location = useLocation();//gives us the current location object, which includes the current URL.

   //useEffect Hook for scrolling
   React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    if (mainPanelRef.current) {
      mainPanelRef.current.scrollTop = 0;
    }
  }, [location]);

  // useffect hook for Perfectscrollbar
  React.useEffect(() => {
    let innerMainPanelRef = mainPanelRef;
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.classList.add("perfect-scrollbar-on");
      document.documentElement.classList.remove("perfect-scrollbar-off");
      ps = new PerfectScrollbar(mainPanelRef.current);
      mainPanelRef.current &&
        mainPanelRef.current.addEventListener("ps-scroll-y", showNavbarButton);
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    window.addEventListener("scroll", showNavbarButton);
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.classList.add("perfect-scrollbar-off");
        document.documentElement.classList.remove("perfect-scrollbar-on");
        innerMainPanelRef.current &&
          innerMainPanelRef.current.removeEventListener(
            "ps-scroll-y",
            showNavbarButton
          );
      }
      window.removeEventListener("scroll", showNavbarButton);
    };
  }, []);


//function is designed to control the opacity of a 
//navbar button based on the scroll position. 
  const showNavbarButton = () => {
    if (
      document.documentElement.scrollTop > 50 ||
      document.scrollingElement.scrollTop > 50 ||
      (mainPanelRef.current && mainPanelRef.current.scrollTop > 50)
    ) {
      setOpacity(1);
    } else if (
      document.documentElement.scrollTop <= 50 ||
      document.scrollingElement.scrollTop <= 50 ||
      (mainPanelRef.current && mainPanelRef.current.scrollTop <= 50)
    ) {
      setOpacity(0);
    }
  };
  
  //function generates a list of Route components based on 
  //the provided routes configuration. 

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/blueadmin") {
          console.log(`Generating route: ${prop.layout + prop.path}`); // Log route creation
        return (

          <Route path={prop.path } element={prop.element} key={key} />
        );
      } else {
        return null;
      }
    });
  };
  
  //function is designed to find and return the name of the 
  //active route based on the current URL path.
  const getActiveRoute = (routes) => {
    let activeRoute = "Default Brand Text"; // Default text to return if no active route is found
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else {
        if (
          window.location.pathname.indexOf(
            routes[i].layout + routes[i].path
          ) !== -1
        ) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };
   
  //function is a straightforward event handler designed to update the activeColor state variable when called
  //used in various scenarios, such as changing the theme color, highlighting a selected item, or updating the color of a component dynamically.
  const handleActiveClick = (color) => {
    setActiveColor(color);
  };
  
//function toggles the sidebar-mini class on the document body and
// displays a notification to inform the user //
//whether the sidebar mini mode has been activated or deactivated.
  const handleMiniClick = () => {
    let notifyMessage = "Sidebar mini ";
    if (document.body.classList.contains("sidebar-mini")) {
      setSidebarMini(false);
      notifyMessage += "deactivated...";
    } else {
      setSidebarMini(true);
      notifyMessage += "activated...";
    }
    let options = {};
    options = {
      place: "tr",
      message: notifyMessage,
      type: "primary",
      icon: "tim-icons icon-bell-55",
      autoDismiss: 7,
    };
    notificationAlertRef.current.notificationAlert(options);
    document.body.classList.toggle("sidebar-mini");
  };

  //toggleSidebar and closeSidebar, manage the state and 
  //classes associated with the sidebar's open and closed states. 
  //They provide functionality for toggling the sidebar visibility and 
  //ensuring that the relevant CSS classes are applied to the HTML element.
  const toggleSidebar = () => {
    setSidebarOpened(!sidebarOpened);
    document.documentElement.classList.toggle("nav-open");
  };
  const closeSidebar = () => {
    setSidebarOpened(false);
    document.documentElement.classList.remove("nav-open");
  };
  return (
    <div className="wrapper">
      <div className="rna-container">
        <NotificationAlert ref={notificationAlertRef} />
      </div>

        <BlueSidebar
        {...props}
        routes={Blueroutes}
        activeColor={activeColor}
        logo={{
          outterLink: "https://www.bluegiant.com/",
          text: "Blue Giant",
          imgSrc: logo,
        }}
        closeSidebar={closeSidebar}
      />


       <div className="main-panel" ref={mainPanelRef} data={activeColor} >
        <BlueAdminNavbar data={activeColor}
          {...props}
          handleMiniClick={handleMiniClick}
          brandText={getActiveRoute(Blueroutes)}
          sidebarOpened={sidebarOpened}
          toggleSidebar={toggleSidebar}
          activeColor={activeColor}// Pass activeColor as a prop
          logo={{
            outterLink: "https://www.bluegiant.com/",
            text: "Blue Geinus",
            imgSrc: logo1,
          }}
        />
        <Routes>
          {getRoutes(Blueroutes)}
          <Route
            path="*"
            element={<Navigate to="/blueadmin/yardlayout"/>}
          />
        </Routes>
        {/* {
          // we don't want the Footer to be rendered on full screen maps page
          props?.location?.pathname?.indexOf("full-screen-map") !==
          -1 ? null : (
            <Footer fluid />
          )
        } */}
      </div>
      <BlueFixedPlugin
        activeColor={activeColor}
        sidebarMini={sidebarMini}
        handleActiveClick={handleActiveClick}
        handleMiniClick={handleMiniClick}
      />
      </div>
  )

}
export default BlueAdmin