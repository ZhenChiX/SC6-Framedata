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
  imgNote: {
    height: "1.4em",
    verticalAlign: "middle"
  }
};

function Astaroth(props) {
  const { classes } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Horizontal Attacks</h4>
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
                  "+874",
                  "pepe",
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
                  "+874",
                  "pepe"
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
                  "+874",
                  "pepe"
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
                  "+874",
                  "pepe"
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
                  "+874",
                  "pepe"
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
                  "+874",
                  "pepe"
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
                  "+874",
                  "pepe"
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
                  "+874",
                  "pepe"
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
                  "+874",
                  "pepe"
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
                  "+874",
                  "pepe"
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
                  "+874",
                  "pepe"
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
                  "+874",
                  "pepe"
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
                  "+874",
                  "pepe",
                  <p>
                    wonderful <img className={classes.imgNote} src={ba} />
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
                  "-8",
                  "+874",
                  "pepe"
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
                  "+874",
                  "pepe",
                  <img className={classes.imgNote} src={at} />

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
                  "+874",
                  "pepe"
                ],
            
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>

      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Placeholder asdasd</h4>
            <p className={classes.cardCategoryWhite}>
              Placeholder asd asdasd asdasd asdasd
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Command", "Impact", "OnBlock", "OnHit"]}
              tableData={[
                ["66B", "11F", "+874", "+874"],
                ["66B", "11F", "+874", "+874"],
                ["66B", "11F", "+874", "+874"],
                ["66B", "11F", "+874", "+874"],
                ["66B", "11F", "+874", "+874"],
                ["66B", "11F", "+874", "+874"],
                ["66B", "11F", "+874", "+874"],
                ["66B", "11F", "+874", "+874"],
                ["66B", "11F", "+874", "+874"],
                ["66B", "11F", "+874", "+874"],
                ["66B", "11F", "+874", "+874"],
                ["66B", "11F", "+874", "+874"],
                ["66B", "11F", "+874", "+874"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Placeholder </h4>
            <p className={classes.cardCategoryWhite}>Placeholder</p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Command", "Impact", "OnBlock", "OnHit"]}
              tableData={[
                ["66B", "11F", "+874", "+874"],
                ["66B", "11F", "+874", "+874"],
                ["66B", "11F", "+874", "+874"],
                ["66B", "11F", "+874", "+874"],
                ["66B", "11F", "+874", "+874"],
                ["66B", "11F", "+874", "+874"],
                ["66B", "11F", "+874", "+874"],
                ["66B", "11F", "+874", "+874"],
                ["66B", "11F", "+874", "+874"],
                ["66B", "11F", "+874", "+874"],
                ["66B", "11F", "+874", "+874"],
                ["66B", "11F", "+874", "+874"],
                ["66B", "11F", "+874", "+874"],
                ["66B", "11F", "+874", "+874"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Placeholder </h4>
            <p className={classes.cardCategoryWhite}>Placeholder</p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Command", "Impact", "OnBlock", "OnHit"]}
              tableData={[
                ["66B", "11F", "+874", "+874"],
                ["66B", "11F", "+874", "+874"],
                ["66B", "11F", "+874", "+874"],
                ["66B", "11F", "+874", "+874"],
                ["66B", "11F", "+874", "+874"],
                ["66B", "11F", "+874", "+874"],
                ["66B", "11F", "+874", "+874"],
                ["66B", "11F", "+874", "+874"],
                ["66B", "11F", "+874", "+874"],
                ["66B", "11F", "+874", "+874"],
                ["66B", "11F", "+874", "+874"],
                ["66B", "11F", "+874", "+874"],
                ["66B", "11F", "+874", "+874"],
                ["66B", "11F", "+874", "+874"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

export default withStyles(styles)(Astaroth);
