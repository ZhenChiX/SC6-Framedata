// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Gamepad from "@material-ui/icons/Gamepad";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views
import Characters from "views/Dashboard/Characters.jsx";
// import UserProfile from "views/UserProfile/UserProfile.jsx";
// import TableList from "views/Characters/TableList.jsx";
import Terminology from "views/Terminology/Terminology.jsx";
import Icons from "views/Icons/Icons.jsx";
import Astaroth from "views/Characters/Astaroth.jsx";
import Azwel from "views/Characters/Azwel.jsx";
const dashboardRoutes = [
  {
    path: "/characters",
    sidebarName: "Characters",
    navbarName: "Characters",
    icon: Dashboard,
    component: Characters
  },
  // {
  //   path: "/user",
  //   sidebarName: "User Profile",
  //   navbarName: "Profile",
  //   icon: Person,
  //   component: UserProfile
  // },
  // {
  //   path: "/framedata",
  //   sidebarName: "Characters FrameData",
  //   navbarName: "Characters FrameData",
  //   icon: "content_paste",
  //   component: TableList
  // },
  {
    path: "/terminology",
    sidebarName: "Terminology",
    navbarName: "Terminology",
    icon: Gamepad,
    component: Terminology
  },
  // {
  //   path: "/astaroth",
  //   sidebarName: "Astaroth",
  //   navbarName: "Astaroth",
  //   icon: LibraryBooks,
  //   component: Astaroth
  // },
  // {
  //   path: "/azwel",
  //   sidebarName: "Azwel",
  //   navbarName: "Azwel",
  //   icon: LibraryBooks,
  //   component: Azwel
  // },
  // {
  //   path: "/icons",
  //   sidebarName: "Icons",
  //   navbarName: "Icons",
  //   icon: BubbleChart,
  //   component: Icons
  // },
  // {
  //   path: "/maps",
  //   sidebarName: "Maps",
  //   navbarName: "Map",
  //   icon: LocationOn,
  //   component: Maps
  // },
  // {
  //   path: "/notifications",
  //   sidebarName: "Notifications",
  //   navbarName: "Notifications",
  //   icon: Notifications,
  //   component: NotificationsPage
  // },
  // {
  //   path: "/upgrade-to-pro",
  //   sidebarName: "Upgrade To PRO",
  //   navbarName: "Upgrade To PRO",
  //   icon: Unarchive,
  //   component: UpgradeToPro
  // },
  { redirect: true, path: "/", to: "characters", navbarName: "Redirect" }
];

export default dashboardRoutes;
