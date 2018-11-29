import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
  NavLink
} from "react-router-dom";
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

import App from "./Characters.jsx";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import Astaroth from "../Characters/Astaroth.jsx";
import Azwel from "../Characters/Azwel.jsx";
import Cerventes from "../Characters/Cerventes.jsx";
import Chai from "../Characters/Chai.jsx";
import Geralt from "../Characters/Geralt";
import Groh from "../Characters/Groh.jsx";
import Inferno from "../Characters/Inferno.jsx";
import Ivy from "../Characters/Ivy.jsx";
import Kilik from "../Characters/Kilik.jsx";
import Maxi from "../Characters/Maxi.jsx";
import Mina from "../Characters/Mina.jsx";
import Mitsurugi from "../Characters/Mitsurugi.jsx";
import Nightmare from "../Characters/Nightmare.jsx";
import Raphael from "../Characters/Raphael.jsx";
import Siegfreid from "../Characters/Siegfried.jsx";
import Sophitia from "../Characters/Sophitia.jsx";
import Taki from "../Characters/Taki.jsx";
import Talim from "../Characters/Talim.jsx";
import Tira from "../Characters/Tira.jsx";
import Type2B from "../Characters/Type2B.jsx";
import Voldo from "../Characters/Voldo.jsx";
import Yoshimitsu from "../Characters/Yoshimitsu.jsx";
import Zasalamel from "../Characters/Zasalamel.jsx";

class Characters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
    };
  }
  onClickHidden = () => {
    this.setState({ isHidden: !this.state.isHidden });
  };

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
      <Router>
        <Fragment>
          {this.state.isHidden ? (
            <GridContainer onClick={this.onClickHidden}>
              <GridItem xs={12} sm={6} md={4} lg={3}>
                <Link to="/astaroth">
                  <Card title="Astaroth" className="character astaroth" />
                </Link>
              </GridItem>

              <GridItem xs={12} sm={6} md={4} lg={3}>
                <Link to="/azwel">
                  <Card title="Azwel" className="character azwel" />
                </Link>
              </GridItem>
              <GridItem xs={12} sm={6} md={4} lg={3}>
                <Link to="/Cerventes">
                  <Card title="Cervantes" className="character cervantes" />
                </Link>
              </GridItem>
              <GridItem xs={12} sm={6} md={4} lg={3}>
                <Link to="/chai">
                  <Card title="Chai XiangHua" className="character chai" />
                </Link>
              </GridItem>
              <GridItem xs={12} sm={6} md={4} lg={3}>
                <Link to="/geralt">
                  <Card title="Geralt" className="character geralt" />
                </Link>
              </GridItem>
              <GridItem xs={12} sm={6} md={4} lg={3}>
                <Link to="/groh">
                  <Card title="Grøh" className="character groh" />
                </Link>
              </GridItem>
              <GridItem xs={12} sm={6} md={4} lg={3}>
                <Link to="/inferno">
                  <Card title="Inferno" className="character inferno" />
                </Link>
              </GridItem>
              <GridItem xs={12} sm={6} md={4} lg={3}>
                <Link to="/ivy">
                  <Card title="Ivy" className="character ivy" />
                </Link>
              </GridItem>
              <GridItem xs={12} sm={6} md={4} lg={3}>
                <Link to="/kilik">
                  <Card title="Kilik" className="character kilik" />
                </Link>
              </GridItem>
              <GridItem xs={12} sm={6} md={4} lg={3}>
                <Link to="/maxi">
                  <Card title="Maxi" className="character maxi" />
                </Link>
              </GridItem>
              <GridItem xs={12} sm={6} md={4} lg={3}>
                <Link to="/mina">
                  <Card title="Mina" className="character mina" />
                </Link>
              </GridItem>
              <GridItem xs={12} sm={6} md={4} lg={3}>
                <Link to="/mitsurugi">
                  <Card title="Mitsurugi" className="character mitsurugi" />
                </Link>
              </GridItem>
              <GridItem xs={12} sm={6} md={4} lg={3}>
                <Link to="/nightmare">
                  <Card title="Nightmare" className="character nightmare" />
                </Link>
              </GridItem>
              <GridItem xs={12} sm={6} md={4} lg={3}>
                <Link to="/raphael">
                  <Card title="Raphael" className="character raphael" />
                </Link>
              </GridItem>
              <GridItem xs={12} sm={6} md={4} lg={3}>
                <Link to="/siegfried">
                  <Card title="Siegfried" className="character siegfried" />
                </Link>
              </GridItem>
              <GridItem xs={12} sm={6} md={4} lg={3}>
                <Link to="/sophitia">
                  <Card title="Sophitia" className="character sophitia" />
                </Link>
              </GridItem>
              <GridItem xs={12} sm={6} md={4} lg={3}>
                <Link to="/taki">
                  <Card title="Taki" className="character taki" />
                </Link>
              </GridItem>
              <GridItem xs={12} sm={6} md={4} lg={3}>
                <Link to="/talim">
                  <Card title="Talim" className="character talim" />
                </Link>
              </GridItem>
              <GridItem xs={12} sm={6} md={4} lg={3}>
                <Link to="/tira">
                  <Card title="Tira" className="character tira" />
                </Link>
              </GridItem>
              <GridItem xs={12} sm={6} md={4} lg={3}>
                <Link to="/voldo">
                  <Card title="Voldo" className="character voldo" />
                </Link>
              </GridItem>
              <GridItem xs={12} sm={6} md={4} lg={3}>
                <Link to="/yoshimitsu">
                  <Card title="Yoshimitsu" className="character yoshimitsu" />
                </Link>
              </GridItem>
              <GridItem xs={12} sm={6} md={4} lg={3}>
                <Link to="/zasalamel">
                  <Card title="Zasalamel" className="character zasalamel" />
                </Link>
              </GridItem>
              <GridItem xs={12} sm={6} md={4} lg={3}>
                <Link to="/type2b">
                  <Card title="2B" className="character type2b" />
                </Link>
              </GridItem>
            </GridContainer>
          ) : null}
          ;
          <Fragment>
            <Switch>
              <Route path="/astaroth" component={Astaroth} />
              <Route path="/azwel" component={Azwel} />
              <Route path="/cerventes" component={Cerventes} />
              <Route path="/chai" component={Chai} />
              <Route path="/geralt" component={Geralt} />

              <Route path="/groh" component={Groh} />
              <Route path="/inferno" component={Inferno} />
              <Route path="/ivy" component={Ivy} />
              <Route path="/kilik" component={Kilik} />
              <Route path="/maxi" component={Maxi} />
              <Route path="/mina" component={Mina} />
              <Route path="/mitsurugi" component={Mitsurugi} />
              <Route path="/nightmare" component={Nightmare} />
              <Route path="/raphael" component={Raphael} />
              <Route path="/siegfried" component={Siegfreid} />
              <Route path="/sophitia" component={Sophitia} />
              <Route path="/taki" component={Taki} />
              <Route path="/talim" component={Talim} />
              <Route path="/tira" component={Tira} />
              <Route path="/type2B" component={Type2B} />
              <Route path="/voldo" component={Voldo} />
              <Route path="/yoshimitsu" component={Yoshimitsu} />
              <Route path="/zasalamel" component={Zasalamel} />
            </Switch>
            {/* <Route path="/astaroth" component={Astaroth} /> */}
          </Fragment>
        </Fragment>
      </Router>
    );
  }
}

Characters.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Characters);
