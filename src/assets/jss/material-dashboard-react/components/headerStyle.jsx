import {
  container,
  defaultFont,
  primaryColor,
  defaultBoxShadow,
  infoColor,
  successColor,
  warningColor,
  dangerColor
} from "assets/jss/material-dashboard-react.jsx";

const headerStyle = theme => ({
  appBar: {
    backgroundColor: "rgba(0, 0, 0, 0.9);",
    boxShadow: "none",
    borderBottom: "0",
    marginBottom: "0",
    position: "sticky",
    width: "100%",
    paddingTop: "10px",
    zIndex: "1029",
    color: "#FFFFFF",
    border: "0",
    borderRadius: "3px",
    padding: "10px 0",
    transition: "all 150ms ease 0s",
    minHeight: "50px",
    display: "block",
    "@media(max-width: 991px)": {
      minHeight:"30px"
    }
  },
  container: {
    ...container,
    minHeight: "50px",
    "@media(max-width: 991px)": {
      minHeight: "30px"
    }
  },
  flex: {
    flex: 1
  },
  title: {
    ...defaultFont,
    lineHeight: "30px",
    fontSize: "18px",
    borderRadius: "3px",
    textTransform: "none",
    color: "inherit",
    margin: "0",
    "&:hover,&:focus": {
      background: "transparent"
    }
  },
  appResponsive: {
    top: "8px"
  },
  primary: {
    backgroundColor: primaryColor,
    color: "#FFFFFF",
    ...defaultBoxShadow
  },
  info: {
    backgroundColor: infoColor,
    color: "#FFFFFF",
    ...defaultBoxShadow
  },
  success: {
    backgroundColor: successColor,
    color: "#FFFFFF",
    ...defaultBoxShadow
  },
  warning: {
    backgroundColor: warningColor,
    color: "#FFFFFF",
    ...defaultBoxShadow
  },
  danger: {
    backgroundColor: dangerColor,
    color: "#FFFFFF",
    ...defaultBoxShadow
  }
});

export default headerStyle;
