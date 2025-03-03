
import BlueResetPasswordPage from "GP/views/pages/BlueResetPassword/BlueResetPasswordPage.js";
import BlueYardLayoutContainer from "../views/Visuals/BlueYardLayout/BlueYardLayoutContainer.js";
import Login from "../views/pages/BlueLogin/BlueLogin.js"
import Register from "../views/pages/BlueRegister/BlueRegister.js"
import BlueForgotPasswordPage from "GP/views/pages/BlueResetPassword/BlueForgotPasswordPage.js";
import DockEquipmentContainer from "../views/Visuals/DockAssetEquipmentSummary/DockEquipmentContainer.js"


const Blueroutes = [
    {
    path: "/yardlayout",
    name: "Yard Layout",
    element: <BlueYardLayoutContainer/>,
    layout: "/blueadmin",
    rtlName: "تسجيل",
    mini: "R",
    rtlMini: "صع",
    icon: "tim-icons icon-bus-front-12"
  },
  {
    path: "/dockequipment",
    name: "Dock/Asset Equipment Summary",
    element: <DockEquipmentContainer/>,
    layout: "/blueadmin",
    rtlName: "تسجيل",
    mini: "R",
    rtlMini: "صع",
    icon: "tim-icons icon-bus-front-12"
  },
  {
    path: "/register",
    element: <Register/>,
    layout: "/blueadmin",
    // rtlName: "تسجيل",
    // mini: "R",
    // rtlMini: "صع",
    // icon: "tim-icons icon-single-02",
  },
  {
    path: "/login",
     element: <Login/>,
    layout: "/blueauth",
    
  },
  {
    path: "/reset",
    element: <BlueResetPasswordPage/>,
    layout: "/blueauth",
    
  },
  {
    path: "/forgot",
    element: <BlueForgotPasswordPage/>,
    layout: "/blueauth",
    
  },
];

export default Blueroutes;
