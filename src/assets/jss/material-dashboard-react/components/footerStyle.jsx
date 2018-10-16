import {
  defaultFont,
  container,
  primaryColor
} from "assets/jss/material-dashboard-react.jsx";

const footerStyle = {
  block: {
    color: "#FFFFFF",
    padding: "15px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block",
    ...defaultFont,
    fontWeight: "600",
    fontSize: "12px"
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    fontWeight: "600",
    padding: "15px 0",
    margin: "0",
    fontSize: "14px",
    float: "right!important"
  },
  footer: {
    color: "#FFFFFF",
    bottom: "0",
    borderTop: "1px solid #FFFFFF",
    padding: "15px 0",
    ...defaultFont
  },

  container,
  a: {
    color: "#FFFFFF",
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  }
};
export default footerStyle;
