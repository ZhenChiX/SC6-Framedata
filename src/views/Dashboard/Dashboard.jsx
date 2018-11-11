import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/About/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import { bugs, website, server } from "variables/general.jsx";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import Astaroth from "../Characters/Astaroth.jsx";

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={4} lg={3}>
            <Card title="Astaroth" className="character astaroth" />
          </GridItem>
          <GridItem xs={12} sm={6} md={4} lg={3}>
            <Card className="character azwel" />
          </GridItem>
          <GridItem xs={12} sm={6} md={4} lg={3}>
            <Card className="character cervantes" />
          </GridItem>
          <GridItem xs={12} sm={6} md={4} lg={3}>
            <Card className="character chai" />
          </GridItem>
          <GridItem xs={12} sm={6} md={4} lg={3}>
            <Card className="character geralt" />
          </GridItem>
          <GridItem xs={12} sm={6} md={4} lg={3}>
            <Card className="character groh" />
          </GridItem>
          <GridItem xs={12} sm={6} md={4} lg={3}>
            <Card className="character inferno" />
          </GridItem>
          <GridItem xs={12} sm={6} md={4} lg={3}>
            <Card className="character ivy" />
          </GridItem>
          <GridItem xs={12} sm={6} md={4} lg={3}>
            <Card className="character kilik" />
          </GridItem>
          <GridItem xs={12} sm={6} md={4} lg={3}>
            <Card className="character maxi" />
          </GridItem>
          <GridItem xs={12} sm={6} md={4} lg={3}>
            <Card className="character mina" />
          </GridItem>
          <GridItem xs={12} sm={6} md={4} lg={3}>
            <Card className="character mitsurugi" />
          </GridItem>
          <GridItem xs={12} sm={6} md={4} lg={3}>
            <Card className="character nightmare" />
          </GridItem>
          <GridItem xs={12} sm={6} md={4} lg={3}>
            <Card className="character raphael" />
          </GridItem>
          <GridItem xs={12} sm={6} md={4} lg={3}>
            <Card className="character siegfried" />
          </GridItem>
          <GridItem xs={12} sm={6} md={4} lg={3}>
            <Card className="character sophitia" />
          </GridItem>
          <GridItem xs={12} sm={6} md={4} lg={3}>
            <Card className="character taki" />
          </GridItem>
          <GridItem xs={12} sm={6} md={4} lg={3}>
            <Card className="character talim" />
          </GridItem>
          <GridItem xs={12} sm={6} md={4} lg={3}>
            <Card className="character tira" />
          </GridItem>
          <GridItem xs={12} sm={6} md={4} lg={3}>
            <Card className="character voldo" />
          </GridItem>
          <GridItem xs={12} sm={6} md={4} lg={3}>
            <Card className="character yoshimitsu" />
          </GridItem>
          <GridItem xs={12} sm={6} md={4} lg={3}>
            <Card className="character zasalamel" />
          </GridItem>
          <GridItem xs={12} sm={6} md={4} lg={3}>
            <Card className="character type2b" />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
