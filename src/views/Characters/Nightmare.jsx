import React, { Fragment } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Hidden from "@material-ui/core/Hidden";
import { StickyContainer, Sticky } from "react-sticky";

// notation img
import a from "../../assets/img/a.png";
import a_h from "../../assets/img/a-hold.png";
import b from "../../assets/img/b.png";
import b_h from "../../assets/img/b-hold.png";
import k from "../../assets/img/k.png";
import k_h from "../../assets/img/k-hold.png";
import g from "../../assets/img/g.png";
import g_h from "../../assets/img/g-hold.png";
import d1 from "../../assets/img/1.png";
import d2 from "../../assets/img/2.png";
import d3 from "../../assets/img/3.png";
import d4 from "../../assets/img/4.png";
import d5 from "../../assets/img/5.png";
import d6 from "../../assets/img/6.png";
import d7 from "../../assets/img/7.png";
import d8 from "../../assets/img/8.png";
import d9 from "../../assets/img/9.png";
import h from "../../assets/img/h.png";
import m from "../../assets/img/m.png";
import sm from "../../assets/img/sm.png";
import l from "../../assets/img/l.png";
import sl from "../../assets/img/sl.png";
import plus from "../../assets/img/plus.png";
import at from "../../assets/img/at.png";
import ba from "../../assets/img/ba.png";
import ce from "../../assets/img/ce.png";
import gi from "../../assets/img/gi.png";
import lh from "../../assets/img/lh.png";
import re from "../../assets/img/re.png";
import sc from "../../assets/img/sc.png";
import sg from "../../assets/img/sg.png";
import ss from "../../assets/img/ss.png";
import th from "../../assets/img/th.png";
import ua from "../../assets/img/ua.png";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  imgResize: {
    height: "1.4em",
    width: "1.4em",
    verticalAlign: "middle"
  },

  imgResizeSM: {
    height: "1em",
    width: "1em",
    verticalAlign: "middle"
  },
  imgNote: {
    height: "1.4em",
    verticalAlign: "middle"
  }
};

function Nightmare(props) {
  const { classes } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Nightmare</h4>
            <p className={classes.cardCategoryWhite}>Horizontal Attacks</p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["MOVE", "IMPACT", "OB", "OH", "CH", "NOTE"]}
              tableData={[
                [
                  <Fragment>
                    <p>Annihilation</p>
                    <p>
                      <img className={classes.imgResize} src={a} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>20F</p>
                    <p>
                      <img className={classes.imgResize} src={h} />
                    </p>
                  </Fragment>,
                  "-4",
                  "+2",
                  "+6",
                  "note"
                ],
                [
                  <Fragment>
                    <p>Annihilation</p>
                    <p>
                      <img className={classes.imgResize} src={a} />
                      <img className={classes.imgResize} src={a} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>20F</p>
                    <p>
                      <img className={classes.imgResize} src={h} />
                      <img className={classes.imgResize} src={h} />
                    </p>
                  </Fragment>,
                  ,
                  "-8",
                  "+2",
                  "+2"
                ],
                [
                  <Fragment>
                    <p>Destruction</p>
                    <p>
                      <img className={classes.imgResize} src={a} />
                      <img className={classes.imgResize} src={b} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>20F</p>

                    <img className={classes.imgResize} src={h} />
                    <img className={classes.imgResize} src={m} />
                  </Fragment>,
                  ,
                  "-12",
                  "0",
                  "0"
                ],
                [
                  <Fragment>
                    <p>Hades Control</p>
                    <p>
                      <img className={classes.imgResize} src={d6} />
                      <img className={classes.imgResize} src={a} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>18F</p>
                    <p>
                      <img className={classes.imgResize} src={h} />
                    </p>
                  </Fragment>,
                  ,
                  "-6",
                  "+4",
                  "+14"
                ],
                [
                  <Fragment>
                    <p>Ax Blow</p>
                    <p>
                      <img className={classes.imgResize} src={d3} />
                      <img className={classes.imgResize} src={a} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>20F</p>
                    <p>
                      <img className={classes.imgResize} src={m} />
                    </p>
                  </Fragment>,
                  ,
                  "-12",
                  "+0",
                  "KND"
                ],
                [
                  <Fragment>
                    <p>Hades Break</p>
                    <p>
                      <img className={classes.imgResize} src={d2} />
                      <img className={classes.imgResize} src={a} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>20F</p>
                    <p>
                      <img className={classes.imgResize} src={l} />
                    </p>
                  </Fragment>,
                  ,
                  "-14",
                  "-4",
                  "-4"
                ],
                [
                  <Fragment>
                    <p>Discus</p>
                    <p>
                      <img className={classes.imgResize} src={d1} />
                      <img className={classes.imgResize} src={a} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>36F</p>
                    <p>
                      <img className={classes.imgResize} src={l} />
                    </p>
                  </Fragment>,
                  ,
                  "-14",
                  "-6",
                  "KND"
                ],
                [
                  <Fragment>
                    <p>Double Discus</p>
                    <p>
                      <img className={classes.imgResize} src={d1} />
                      <img className={classes.imgResize} src={a_h} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>56F</p>
                    <p>
                      <img className={classes.imgResize} src={l} />
                    </p>
                  </Fragment>,
                  ,
                  "-16",
                  "KND",
                  "KND"
                ],
                [
                  <Fragment>
                    <p>Double Discus</p>
                    <p>
                      <img className={classes.imgResize} src={d1} />
                      <img className={classes.imgResize} src={a_h} />
                      <img className={classes.imgResize} src={a} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>56F</p>
                    <p>
                      <img className={classes.imgResize} src={l} />
                      <img className={classes.imgResize} src={l} />
                    </p>
                  </Fragment>,
                  ,
                  "-24",
                  "KND",
                  "KND"
                ],
                [
                  <Fragment>
                    <p>Double Discus</p>
                    <p>
                      <img className={classes.imgResize} src={d1} />
                      <img className={classes.imgResize} src={a_h} />
                      <img className={classes.imgResize} src={b} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>56F</p>
                    <p>
                      <img className={classes.imgResize} src={l} />
                      <img className={classes.imgResize} src={m} />
                    </p>
                  </Fragment>,
                  ,
                  "+8",
                  "KND",
                  "KND",
                  <img className={classes.imgNote} src={ba} />
                ],
                [
                  <Fragment>
                    <p>Decimation</p>
                    <p>
                      <img className={classes.imgResize} src={d4} />
                      <img className={classes.imgResize} src={a} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>14F</p>
                    <p>
                      <img className={classes.imgResize} src={h} />
                    </p>
                  </Fragment>,
                  ,
                  "-12",
                  "0",
                  "0"
                ],
                [
                  <Fragment>
                    <p>Decimation</p>
                    <p>
                      <img className={classes.imgResize} src={d4} />
                      <img className={classes.imgResize} src={a} />
                      <img className={classes.imgResize} src={a} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>14F</p>
                    <p>
                      <img className={classes.imgResize} src={h} />
                      <img className={classes.imgResize} src={h} />
                    </p>
                  </Fragment>,
                  ,
                  "+4",
                  "+14",
                  "+14",
                  <img className={classes.imgNote} src={at} />
                ],
                [
                  <Fragment>
                    <p>Decimation</p>
                    <p>
                      <img className={classes.imgResize} src={d4} />
                      <img className={classes.imgResize} src={a} />
                      <img className={classes.imgResize} src={a_h} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>14F</p>
                    <p>
                      <img className={classes.imgResize} src={h} />
                      <img className={classes.imgResize} src={h} />
                    </p>
                  </Fragment>,
                  ,
                  "+8",
                  "+14",
                  "+14",
                  <p>
                    <img className={classes.imgNote} src={ba} />
                  </p>
                ],
                [
                  <Fragment>
                    <p>Grip Shot to Ax Volcano</p>
                    <p>
                      <img className={classes.imgResize} src={d4} />
                      <img className={classes.imgResize} src={a} />
                      <img className={classes.imgResize} src={b} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>14F</p>
                    <p>
                      <img className={classes.imgResize} src={h} />
                      <img className={classes.imgResize} src={m} />
                    </p>
                  </Fragment>,
                  ,
                  "-6",
                  "LNC",
                  "LNC"
                ],
                [
                  <Fragment>
                    <p>Poseiden Tide</p>
                    <p>
                      <img className={classes.imgResize} src={d2} />
                      <img className={classes.imgResize} src={d1} />
                      <img className={classes.imgResize} src={d4} />
                      <img className={classes.imgResize} src={a} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>34F</p>
                    <p>
                      <img className={classes.imgResize} src={m} />
                    </p>
                  </Fragment>,
                  ,
                  "-14",
                  "KND",
                  "KND",
                  <img className={classes.imgNote} src={at} />
                ],
                [
                  <Fragment>
                    <p>Poseiden Tide Rush</p>
                    <p>
                      <img className={classes.imgResize} src={d2} />
                      <img className={classes.imgResize} src={d1} />
                      <img className={classes.imgResize} src={d4} />
                      <img className={classes.imgResize} src={a} />
                      <img className={classes.imgResize} src={a} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>34F</p>
                    <p>
                      <img className={classes.imgResize} src={m} />
                      <img className={classes.imgResize} src={m} />
                    </p>
                  </Fragment>,
                  ,
                  "-22",
                  "",
                  ""
                ],
                [
                  <Fragment>
                    <p>Poseiden Tide Rush</p>
                    <p>
                      <img className={classes.imgResize} src={d2} />
                      <img className={classes.imgResize} src={d1} />
                      <img className={classes.imgResize} src={d4} />
                      <img className={classes.imgResize} src={a} />
                      <img className={classes.imgResize} src={a} />
                      <img className={classes.imgResize} src={a} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>34F</p>
                    <p>
                      <img className={classes.imgResize} src={m} />
                      <img className={classes.imgResize} src={m} />
                      <img className={classes.imgResize} src={m} />
                    </p>
                  </Fragment>,
                  ,
                  "-22",
                  "",
                  ""
                ],
                [
                  <Fragment>
                    <p>Poseiden Tide Rush</p>
                    <p>
                      <img className={classes.imgResize} src={d2} />
                      <img className={classes.imgResize} src={d1} />
                      <img className={classes.imgResize} src={d4} />
                      <img className={classes.imgResize} src={a} />
                      <img className={classes.imgResize} src={a} />
                      <img className={classes.imgResize} src={a} />
                      <img className={classes.imgResize} src={a} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>34F</p>
                    <p>
                      <img className={classes.imgResize} src={m} />
                      <img className={classes.imgResize} src={m} />
                      <img className={classes.imgResize} src={m} />
                      <img className={classes.imgResize} src={m} />
                    </p>
                  </Fragment>,
                  ,
                  "-22",
                  "",
                  ""
                ],
                [
                  <Fragment>
                    <p>Poseiden Tide Rush</p>
                    <p>
                      <img className={classes.imgResize} src={d2} />
                      <img className={classes.imgResize} src={d1} />
                      <img className={classes.imgResize} src={d4} />
                      <img className={classes.imgResize} src={a} />
                      <img className={classes.imgResize} src={a} />
                      <img className={classes.imgResize} src={a} />
                      <img className={classes.imgResize} src={a} />
                      <img className={classes.imgResize} src={a} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>34F</p>
                    <p>
                      <img className={classes.imgResize} src={m} />
                      <img className={classes.imgResize} src={m} />
                      <img className={classes.imgResize} src={m} />
                      <img className={classes.imgResize} src={m} />
                      <img className={classes.imgResize} src={m} />
                    </p>
                  </Fragment>,
                  ,
                  "-22",
                  "",
                  ""
                ],
                [
                  <Fragment>
                    <p>Poseiden Tide Rush</p>
                    <p>
                      <img className={classes.imgResize} src={d2} />
                      <img className={classes.imgResize} src={d1} />
                      <img className={classes.imgResize} src={d4} />
                      <img className={classes.imgResize} src={a} />
                      <img className={classes.imgResize} src={a} />
                      <img className={classes.imgResize} src={a} />
                      <img className={classes.imgResize} src={a} />
                      <img className={classes.imgResize} src={a} />
                      <img className={classes.imgResize} src={a} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>34F</p>
                    <p>
                      <img className={classes.imgResize} src={m} />
                      <img className={classes.imgResize} src={m} />
                      <img className={classes.imgResize} src={m} />
                      <img className={classes.imgResize} src={m} />
                      <img className={classes.imgResize} src={m} />
                      <img className={classes.imgResize} src={m} />
                    </p>
                  </Fragment>,
                  ,
                  "-16",
                  "-4",
                  "-4"
                ],
                [
                  <Fragment>
                    <p>Hades Break</p>

                    <p>
                      FC
                      <img className={classes.imgResize} src={a} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>20F</p>
                    <p>
                      <img className={classes.imgResize} src={l} />
                    </p>
                  </Fragment>,
                  ,
                  "-14",
                  "-4",
                  "-4"
                ],
                [
                  <Fragment>
                    <p>Reverse Spiral Ax</p>

                    <p>
                      WR
                      <img className={classes.imgResize} src={a} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>26F</p>
                    <p>
                      <img className={classes.imgResize} src={h} />
                    </p>
                  </Fragment>,
                  ,
                  "-2",
                  "KND",
                  "KND"
                ],
                [
                  <Fragment>
                    <p>Greater Annihilation</p>

                    <p>
                      <img className={classes.imgResize} src={d9} />
                      <img className={classes.imgResize} src={a} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>26F</p>
                    <p>
                      <img className={classes.imgResize} src={h} />
                    </p>
                  </Fragment>,
                  ,
                  "-14",
                  "KND",
                  "KND"
                ],
                [
                  <Fragment>
                    <p>Greater Annihilation</p>

                    <p>
                      <img className={classes.imgResize} src={d8} />
                      <img className={classes.imgResize} src={a} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>26F</p>
                    <p>
                      <img className={classes.imgResize} src={h} />
                    </p>
                  </Fragment>,
                  ,
                  "-14",
                  "KND",
                  "KND"
                ],
                [
                  <Fragment>
                    <p>Greater Annihilation</p>

                    <p>
                      <img className={classes.imgResize} src={d7} />
                      <img className={classes.imgResize} src={a} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>26F</p>
                    <p>
                      <img className={classes.imgResize} src={h} />
                    </p>
                  </Fragment>,
                  ,
                  "-14",
                  "-4",
                  "-4"
                ],
                [
                  <Fragment>
                    <p>Reverse Ax Split</p>

                    <p>
                      BT
                      <img className={classes.imgResize} src={a} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p />
                    <p>
                      <img className={classes.imgResize} src={h} />
                    </p>
                  </Fragment>,
                  ,
                  "",
                  "",
                  ""
                ],
                [
                  <Fragment>
                    <p>Hades Break</p>

                    <p>
                      BT
                      <img className={classes.imgResize} src={d2} />
                      <img className={classes.imgResize} src={a} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p />
                    <p>
                      <img className={classes.imgResize} src={l} />
                    </p>
                  </Fragment>,
                  ,
                  "",
                  "",
                  ""
                ]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>

      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Vertical Attacks</h4>
            <p className={classes.cardCategoryWhite}>Vertical Attacks</p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["MOVE", "IMPACT", "OB", "OH", "CH", "NOTE"]}
              tableData={[
                [
                  <Fragment>
                    <p>Great Divide</p>
                    <p>
                      <img className={classes.imgResize} src={b} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>20F</p>
                    <p>
                      <img className={classes.imgResize} src={m} />
                    </p>
                  </Fragment>,
                  "-8",
                  "+2",
                  "+8",
                  "note"
                ],
                [
                  <Fragment>
                    <p>Great Divide</p>
                    <p>
                      <img className={classes.imgResize} src={b} />
                      <img className={classes.imgResize} src={b} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>20F</p>
                    <p>
                      <img className={classes.imgResize} src={m} />
                      <img className={classes.imgResize} src={m} />
                    </p>
                  </Fragment>,
                  ,
                  "-2",
                  "+12",
                  "+12"
                ],
                [
                  <Fragment>
                    <p>Great Divide</p>
                    <p>
                      <img className={classes.imgResize} src={b} />
                      <img className={classes.imgResize} src={b_h} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>20F</p>

                    <img className={classes.imgResize} src={m} />
                    <img className={classes.imgResize} src={m} />
                  </Fragment>,
                  ,
                  "+6",
                  "LNC",
                  "LNC",
                  <img className={classes.imgNote} src={ba} />
                ],
                [
                  <Fragment>
                    <p>Command Kicks</p>
                    <p>
                      <img className={classes.imgResizeSM} src={b} />
                      <img className={classes.imgResize} src={k} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>20F</p>
                    <p>
                      <img className={classes.imgResize} src={m} />
                      <img className={classes.imgResize} src={m} />
                    </p>
                  </Fragment>,
                  ,
                  "-12",
                  "-2",
                  "-2"
                ],
                [
                  <Fragment>
                    <p>Command Kicks</p>
                    <p>
                      <img className={classes.imgResizeSM} src={b} />
                      <img className={classes.imgResize} src={k} />
                      <img className={classes.imgResize} src={k} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>20F</p>
                    <p>
                      <img className={classes.imgResize} src={m} />
                      <img className={classes.imgResize} src={m} />
                      <img className={classes.imgResize} src={m} />
                    </p>
                  </Fragment>,
                  ,
                  "-2",
                  "14",
                  "14"
                ],
                [
                  <Fragment>
                    <p>Castigate</p>
                    <p>
                      <img className={classes.imgResizeSM} src={b} />
                      <img className={classes.imgResize} src={k} />
                      <img className={classes.imgResize} src={a} />
                      <img className={classes.imgResizeSM} src={plus} />
                      <img className={classes.imgResize} src={g} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>20F</p>
                    <p>
                      <img className={classes.imgResize} src={m} />
                      <img className={classes.imgResize} src={m} />
                      <img className={classes.imgResize} src={m} />
                    </p>
                  </Fragment>,
                  ,
                  "",
                  "KND",
                  "KND",
                  <img className={classes.imgNote} src={th} />
                ],
                [
                  <Fragment>
                    <p>Bluster</p>
                    <p>
                      <img className={classes.imgResizeSM} src={b} />
                      <img className={classes.imgResize} src={k} />
                      <img className={classes.imgResize} src={d4} />
                      <img className={classes.imgResize} src={a} />
                      <img className={classes.imgResizeSM} src={plus} />
                      <img className={classes.imgResize} src={g} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>20F</p>
                    <p>
                      <img className={classes.imgResize} src={m} />
                      <img className={classes.imgResize} src={m} />
                      <img className={classes.imgResize} src={m} />
                    </p>
                  </Fragment>,
                  ,
                  "",
                  "KND",
                  "KND",
                  <img className={classes.imgNote} src={th} />
                ],
                [
                  <Fragment>
                    <p>Ax Offering</p>
                    <p>
                      <img className={classes.imgResizeSM} src={b} />
                      <img className={classes.imgResize} src={d6} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>18F</p>
                    <p>
                      <img className={classes.imgResize} src={m} />
                    </p>
                  </Fragment>,
                  ,
                  "-18",
                  "-2",
                  "+4"
                ],
                [
                  <Fragment>
                    <p>Ax Offering</p>
                    <p>
                      <img className={classes.imgResizeSM} src={b} />
                      <img className={classes.imgResize} src={d6} />
                      <img className={classes.imgResize} src={b} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>18F</p>
                    <p>
                      <img className={classes.imgResize} src={m} />
                      <img className={classes.imgResize} src={m} />
                    </p>
                  </Fragment>,
                  ,
                  "-4",
                  "+4",
                  "+14"
                ],

                [
                  <Fragment>
                    <p>Ax Side Divide</p>
                    <p>
                      <img className={classes.imgResize} src={b} />
                      <img className={classes.imgResize} src={b} />
                      <img className={classes.imgResize} src={d6} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>20F</p>
                    <p>
                      <img className={classes.imgResize} src={m} />
                      <img className={classes.imgResize} src={m} />
                    </p>
                  </Fragment>,
                  ,
                  "+2",
                  "+10",
                  "+10"
                ],
                [
                  <Fragment>
                    <p>Ax Side Cannon</p>
                    <p>
                      <img className={classes.imgResize} src={d6} />
                      <img className={classes.imgResize} src={b} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>20F</p>
                    <p>
                      <img className={classes.imgResize} src={m} />
                    </p>
                  </Fragment>,
                  ,
                  "-8",
                  "+2",
                  "KND"
                ],
                [
                  <Fragment>
                    <p>Swipe</p>
                    <p>
                      <img className={classes.imgResize} src={d6} />
                      <img className={classes.imgResize} src={b_h} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>40F</p>
                    <p>
                      <img className={classes.imgResize} src={m} />
                    </p>
                  </Fragment>,
                  ,
                  "+2",
                  "KND",
                  "KND"
                ],
                [
                  <Fragment>
                    <p>Swipe</p>
                    <p>
                      <img className={classes.imgResize} src={d6} />
                      <img className={classes.imgResize} src={b_h} />
                      <img className={classes.imgResize} src={b} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>40F</p>
                    <p>
                      <img className={classes.imgResize} src={m} />
                      <img className={classes.imgResize} src={m} />
                    </p>
                  </Fragment>,
                  ,
                  "+8",
                  "KND",
                  "KND",
                  <img className={classes.imgNote} src={ba} />
                ],
                [
                  <Fragment>
                    <p>Ax Volcano</p>
                    <p>
                      <img className={classes.imgResize} src={d3} />
                      <img className={classes.imgResize} src={b} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>24F</p>
                    <p>
                      <img className={classes.imgResize} src={m} />
                    </p>
                  </Fragment>,
                  ,
                  "-12",
                  "LNC",
                  "LNC"
                ],
                [
                  <Fragment>
                    <p>Ax Volcano</p>
                    <p>
                      <img className={classes.imgResize} src={d3} />
                      <img className={classes.imgResize} src={b_h} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>64F</p>
                    <p>
                      <img className={classes.imgResize} src={m} />
                    </p>
                  </Fragment>,
                  ,
                  "LNC",
                  "LNC",
                  "LNC",
                  <img className={classes.imgNote} src={ua} />
                ],
                [
                  <Fragment>
                    <p>Hades</p>
                    <p>
                      <img className={classes.imgResize} src={d2} />

                      <img className={classes.imgResize} src={b} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>20F</p>
                    <p>
                      <img className={classes.imgResize} src={m} />
                    </p>
                  </Fragment>,
                  ,
                  "-10",
                  "+6",
                  "+6"
                ],
                [
                  <Fragment>
                    <p>Ax Grave</p>
                    <p>
                      <img className={classes.imgResize} src={d1} />

                      <img className={classes.imgResize} src={b} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>24F</p>
                    <p>
                      <img className={classes.imgResize} src={l} />
                    </p>
                  </Fragment>,
                  ,
                  "-18",
                  "KND",
                  "KND"
                ],
                [
                  <Fragment>
                    <p>Bear Fang</p>
                    <p>
                      <img className={classes.imgResize} src={d4} />
                      <img className={classes.imgResize} src={b} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>16F</p>
                    <p>
                      <img className={classes.imgResize} src={m} />
                    </p>
                  </Fragment>,
                  ,
                  "-8",
                  "+6",
                  "+6"
                ],
                [
                  <Fragment>
                    <p>Bear Fang</p>
                    <p>
                      <img className={classes.imgResize} src={d4} />
                      <img className={classes.imgResize} src={b_h} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>42F</p>
                    <p>
                      <img className={classes.imgResize} src={m} />
                    </p>
                  </Fragment>,
                  ,
                  "+6",
                  "KND",
                  "KND",
                  <img className={classes.imgNote} src={ba} />
                ],
                [
                  <Fragment>
                    <p>GoreFang</p>
                    <p>
                      <img className={classes.imgResize} src={d4} />
                      <img className={classes.imgResize} src={b_h} />
                      <img className={classes.imgResize} src={b} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>42F</p>
                    <p>
                      <img className={classes.imgResize} src={m} />
                      <img className={classes.imgResize} src={m} />
                    </p>
                  </Fragment>,
                  ,
                  "0",
                  "0",
                  "+6",

                  <img className={classes.imgNote} src={ba} />
                ],
                [
                  <Fragment>
                    <p>GoreFang</p>
                    <p>
                      <img className={classes.imgResize} src={d4} />
                      <img className={classes.imgResize} src={b_h} />
                      <img className={classes.imgResize} src={b_h} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>42F</p>
                    <p>
                      <img className={classes.imgResize} src={m} />
                      <img className={classes.imgResize} src={m} />
                    </p>
                  </Fragment>,
                  ,
                  "+10",
                  "KND",
                  "KND",
                  <img className={classes.imgNote} src={ba} />
                ],
                [
                  <Fragment>
                    <p>Hades</p>
                    <p>
                      FC
                      <img className={classes.imgResize} src={b} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>20F</p>
                    <p>
                      <img className={classes.imgResize} src={m} />
                    </p>
                  </Fragment>,
                  ,
                  "-10",
                  "+6",
                  "+6"
                ],
                [
                  <Fragment>
                    <p>Poseiden Tide Rush</p>
                    <p>
                      <img className={classes.imgResize} src={d2} />
                      <img className={classes.imgResize} src={d1} />
                      <img className={classes.imgResize} src={d4} />
                      <img className={classes.imgResize} src={a} />
                      <img className={classes.imgResize} src={a} />
                      <img className={classes.imgResize} src={a} />
                      <img className={classes.imgResize} src={a} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>34F</p>
                    <p>
                      <img className={classes.imgResize} src={m} />
                      <img className={classes.imgResize} src={m} />
                      <img className={classes.imgResize} src={m} />
                      <img className={classes.imgResize} src={m} />
                    </p>
                  </Fragment>,
                  ,
                  "-22",
                  "",
                  ""
                ]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Kick Attacks </h4>
            <p className={classes.cardCategoryWhite}>Kick Attacks </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["MOVE", "IMPACT", "OB", "OH", "CH", "NOTE"]}
              tableData={[
                [
                  <Fragment>
                    <p>Annihilation</p>
                    <p>
                      <img className={classes.imgResize} src={a} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>20F</p>
                    <p>
                      <img className={classes.imgResize} src={h} />
                    </p>
                  </Fragment>,
                  "-4",
                  "+2",
                  "+6",
                  "note"
                ]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Dual Button Attacks </h4>
            <p className={classes.cardCategoryWhite}>Dual Button Attacks</p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["MOVE", "IMPACT", "OB", "OH", "CH", "NOTE"]}
              tableData={[
                [
                  <Fragment>
                    <p>Annihilation</p>
                    <p>
                      <img className={classes.imgResize} src={a} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>20F</p>
                    <p>
                      <img className={classes.imgResize} src={h} />
                    </p>
                  </Fragment>,
                  "-4",
                  "+2",
                  "+6",
                  "note"
                ]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>

      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>8-Way Run Moves </h4>
            <p className={classes.cardCategoryWhite}>8-Way Run Moves</p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["MOVE", "IMPACT", "OB", "OH", "CH", "NOTE"]}
              tableData={[
                [
                  <Fragment>
                    <p>Annihilation</p>
                    <p>
                      <img className={classes.imgResize} src={a} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>20F</p>
                    <p>
                      <img className={classes.imgResize} src={h} />
                    </p>
                  </Fragment>,
                  "-4",
                  "+2",
                  "+6",
                  "note"
                ]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>

      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Throws </h4>
            <p className={classes.cardCategoryWhite}>Throws</p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["MOVE", "IMPACT", "OB", "OH", "CH", "NOTE"]}
              tableData={[
                [
                  <Fragment>
                    <p>Annihilation</p>
                    <p>
                      <img className={classes.imgResize} src={a} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>20F</p>
                    <p>
                      <img className={classes.imgResize} src={h} />
                    </p>
                  </Fragment>,
                  "-4",
                  "+2",
                  "+6",
                  "note"
                ]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>

       <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Reversal Edge Attacks </h4>
            <p className={classes.cardCategoryWhite}>Reversal Edge Attacks</p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["MOVE", "IMPACT", "OB", "OH", "CH", "NOTE"]}
              tableData={[
                [
                  <Fragment>
                    <p>Annihilation</p>
                    <p>
                      <img className={classes.imgResize} src={a} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>20F</p>
                    <p>
                      <img className={classes.imgResize} src={h} />
                    </p>
                  </Fragment>,
                  "-4",
                  "+2",
                  "+6",
                  "note"
                ]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>

       <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Gauge Attacks </h4>
            <p className={classes.cardCategoryWhite}>Gauge Attacks</p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["MOVE", "IMPACT", "OB", "OH", "CH", "NOTE"]}
              tableData={[
                [
                  <Fragment>
                    <p>Annihilation</p>
                    <p>
                      <img className={classes.imgResize} src={a} />
                    </p>
                  </Fragment>,
                  <Fragment>
                    <p>20F</p>
                    <p>
                      <img className={classes.imgResize} src={h} />
                    </p>
                  </Fragment>,
                  "-4",
                  "+2",
                  "+6",
                  "note"
                ]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

export default withStyles(styles)(Nightmare);
