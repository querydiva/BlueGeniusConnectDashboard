
import React, { useEffect } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";



import "../../assets/css/home.css"
import  BlueRoutes from "../routes/Blueroutes";
import BlueAuthNavbar from "../components/BlueNavbars/BlueAuthNavbar";

import Footer from "../components/BlueFooter/BlueFooter"
 


const Pages = (props) => {
  const location = useLocation();
  console.log("Current Location:", location.pathname);
  useEffect(() => {
    document.documentElement.classList.remove("nav-open");
  }, []);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/blueauth") {
        console.log(`Generating route: ${prop.layout + prop.path}`); // Log route creation
        return (
          <Route
            path={ prop.path}
            element={prop.element}
            key={key}
          />
        );
      }
      return null;
    });
  };
  
  // Get the active route name
  const getActiveRoute = (routes) => {
    let activeRoute = "Brand Text";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].layout + routes[i].path === location.pathname) {
        return routes[i].name;
      }
    }
    return activeRoute;
  };

  // Get full page class name based on the route
  const getFullPageName = (routes) => {
    const pageName = getActiveRoute(routes);
    switch (pageName) {
      case "Login":
        return "login-page";
      case "Register":
        return "register-page";
      default:
        return "default-page";
    }
  };

  return (
    <>
      <BlueAuthNavbar />
     
      <div className="wrapper white-content">
    
        <div className="full-page ">
     
          <Routes>
            {getRoutes(BlueRoutes)}
            <Route path="*" element={<Navigate to="/blueauth/login" />} />
          </Routes>
         
          <Footer style={{ color: "#204e8e" }} fluid />
        </div>
      </div>
    </>
  );
};


export default Pages;
