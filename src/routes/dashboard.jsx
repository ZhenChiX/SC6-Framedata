// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Gamepad from "@material-ui/icons/Gamepad";
// core components/views
import Characters from "views/Dashboard/Characters.jsx";
import Terminology from "views/Terminology/Terminology.jsx";
const dashboardRoutes = [
  {
    path: "/characters",
    sidebarName: "Characters",
    navbarName: "Characters",
    icon: Dashboard,
    component: Characters
  },
 
  {
    path: "/terminology",
    sidebarName: "Terminology",
    navbarName: "Terminology",
    icon: Gamepad,
    component: Terminology
  },
 
  { redirect: true, path: "/", to: "characters", navbarName: "Redirect" }
];

export default dashboardRoutes;
