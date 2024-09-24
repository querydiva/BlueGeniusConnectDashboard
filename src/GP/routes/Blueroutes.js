import BlueYardLayoutContainer from "../views/Visuals/BlueYardLayout/BlueYardLayoutContainer.js";

// import BlueDashboard from "../../GP/views/Visuals/BlueDashboard/BlueDashboard.js"
import Login from "../views/pages/BlueLogin/BlueLogin.js"
import Register from "../views/pages/BlueRegister/BlueRegister.js"
const Blueroutes = [
  {
    path: "/login",
    name: "Login",
    element: <Login/>,
    layout: "/blueauth",
  },
  {
    path: "/yardlayout",
    name: "Yard Layout",
    element: <BlueYardLayoutContainer/>,
    layout: "/blueadmin",
  },
];

export default Blueroutes;
