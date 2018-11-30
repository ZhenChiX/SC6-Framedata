import React, { Fragment, Component } from "react";
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

//toggle switch
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
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
import d1_h from "../../assets/img/1-hold.png";
import d2_h from "../../assets/img/2-hold.png";
import d3_h from "../../assets/img/3-hold.png";
import d4_h from "../../assets/img/4-hold.png";
import d6_h from "../../assets/img/6-hold.png";
import d7_h from "../../assets/img/7-hold.png";
import d8_h from "../../assets/img/8-hold.png";
import d9_h from "../../assets/img/9-hold.png";

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
  },
  toggleStyle: {
    justify: "flex-end"
  }
};

const tableHeadDetail = [
  "MOVE",
  "IMPACT",
  "OnBlock",
  "OnHit",
  "CounterHit",
  "NOTE"
];
const tableHeadSimple = ["M", "I", "OB", "OH", "CH", "NOTE"];
class Sophitia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      checked: true,
      tableHeadData: tableHeadDetail
    };
  }

  toggleTableData = () => {
    const tableHeadData =
      this.state.tableHeadData === tableHeadDetail
        ? tableHeadSimple
        : tableHeadDetail;
    this.setState({
      checked: !this.state.checked,
      tableHeadData: tableHeadData,
      display: !this.state.display
    });
  };

  render() {
    const { classes } = this.props;





    // verticalAttacks start here

    const sophitiaFrameData = {
      verticalAttacks: [
        {
          id: 1,
          command: "A",
          move: [
            <Fragment>
              <p>Starlight Blade</p>
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+2",
          counterHit: "+2",
          note: ""
        },
        {
          id: 2,
          command: "AA",
          move: [
            <Fragment>
              <p>Starlight Blade</p>
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+2",
          counterHit: "+2",
          note: ""
        },
        {
          id: 3,
          command: "AAA",
          move: [
            <Fragment>
              <p>Starlight Blade</p>
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "+6",
          counterHit: "+6",
          note: ""
        },
        {
          id: 4,
          command: "AAA6 ~ AS",
          move: [
            <Fragment>
              <p>Starlight Blade ~ Angel Step</p>
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={d6} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-2",
          onHit: "+8",
          counterHit: "+8",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ss} />
              <p>To Angel Step</p>
            </Fragment>
          ]
        },
        {
          id: 5,
          command: "AK",
          move: [
            <Fragment>
              <p>Slide Tornado</p>
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "0",
          counterHit: "0",
          note: ""
        },
        {
          id: 6,
          command: "6A",
          move: [
            <Fragment>
              <p>Roaring Stream</p>
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "0",
          counterHit: "0",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={gi} />
              <p>GI Low / TC </p>
            </Fragment>
          ]
        },
        {
          id: 7,
          command: "6AA",
          move: [
            <Fragment>
              <p>Roaring Stream</p>
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "-2",
          counterHit: "-2",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={gi} />
              <p>GI Low / TC </p>
            </Fragment>
          ]
        },
        {
          id: 8,
          command: "6AA6 ~ AS",
          move: [
            <Fragment>
              <p>Roaring Stream ~ Angel Step</p>
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={d6} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "0",
          counterHit: "0",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ss} />
              <img className={classes.imgNote} src={gi} />
              <p>GI Low / TC </p>
            </Fragment>
          ]
        },
        {
          id: 9,
          command: "3A",
          move: [
            <Fragment>
              <p>Angel Punisher</p>
              <img className={classes.imgResize} src={d3} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "-2",
          counterHit: "-2",
          note: [
            <Fragment>
              <p>TC</p>
            </Fragment>
          ]
        },
        {
          id: 10,
          command: "2A",
          move: [
            <Fragment>
              <p>Under Slide Blade</p>
              <img className={classes.imgResize} src={d2} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              <img className={classes.imgResize} src={sl} />
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "+6",
          counterHit: "+6",
          note: "TC / ~FC"
        },
        {
          id: 11,
          command: "1A",
          move: [
            <Fragment>
              <p>Iron Butterfly</p>
              <img className={classes.imgResize} src={d1} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>28F</p>
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "-6",
          counterHit: "-6",
          note: "TC"
        },
        {
          id: 12,
          command: "1A",
          move: [
            <Fragment>
              <p>Iron Butterfly</p>
              <img className={classes.imgResize} src={d1} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>28F</p>
              <img className={classes.imgResize} src={l} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-24",
          onHit: "KND",
          counterHit: "KND",
          note: "TC"
        },
        {
          id: 13,
          command: "4A",
          move: [
            <Fragment>
              <p>Cutlass Europa</p>
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "+4",
          counterHit: "+4",
          note: "TC"
        },
        {
          id: 14,
          command: "4AA",
          move: [
            <Fragment>
              <p>Cutlass Europa</p>
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "KND",
          counterHit: "KND",
          note: "TC"
        },
        {
          id: 15,
          command: "4AAA",
          move: [
            <Fragment>
              <p>Cutlass Europa</p>
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={l} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-24",
          onHit: "KND",
          counterHit: "KND",
          note: "TC"
        },
        {
          id: 16,
          command: "4[A]",
          move: [
            <Fragment>
              <p>Cutlass Europa</p>
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={a_h} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>38F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-2",
          onHit: "STN",
          counterHit: "STN",
          note: "TC"
        },

        {
          id: 17,
          command: "4[A]AAA",
          move: [
            <Fragment>
              <p>Cutlass Europa</p>
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={a_h} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>38F</p>
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={l} />
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "KND",
          counterHit: "KND",
          note: "TC"
        },
        {
          id: 18,
          command: "4AB",
          move: [
            <Fragment>
              <p>Cutlass Seraphim</p>
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 19,
          command: "FC A",
          move: [
            <Fragment>
              <p>Under Slide Blade</p>
              <span>FC</span>
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              <img className={classes.imgResize} src={sl} />
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "+6",
          counterHit: "+6",
          note: "TC / ~FC"
        },
        {
          id: 20,
          command: "WR A",
          move: [
            <Fragment>
              <p>Full Turn Blade</p>
              <span>WR</span>
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              <img className={classes.imgResize} src={sl} />
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "+4",
          counterHit: "+4",
          note: "TC"
        },
        {
          id: 21,
          command: "7A",
          move: [
            <Fragment>
              <p>Jumping Mirage Satellite</p>
              <img className={classes.imgResize} src={d7} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+2",
          counterHit: "+2",
          note: "TJ"
        },
        {
          id: 22,
          command: "8*9A",
          move: [
            <Fragment>
              <p>Jumping Mirage Satellite</p>
              <img className={classes.imgResize} src={d8} />
              <span> * </span>
              <img className={classes.imgResize} src={d9} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "KND",
          counterHit: "KND",
          note: "TJ"
        },
        {
          id: 23,
          command: "BT A",
          move: [
            <Fragment>
              <p>Turning Slide Blade</p>
              <span>BT</span>
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "+8",
          counterHit: "+8",
          note: "TJ"
        },
        {
          id: 24,
          command: "BT 2A",
          move: [
            <Fragment>
              <p>Under Slide Blade</p>
              <span>BT</span>
              <img className={classes.imgResize} src={d2} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              <img className={classes.imgResize} src={sl} />
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "+6",
          counterHit: "+6",
          note: "TC / ~FC"
        }
      ],

      // horizontalAttacks start here

      horizontalAttacks: [
        {
          id: 25,
          command: "B",
          move: [
            <Fragment>
              <p>Divine Mist</p>
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "0",
          counterHit: "0",
          note: ""
        },
        {
          id: 26,
          command: "BB",
          move: [
            <Fragment>
              <p>Divine Mist</p>
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+2",
          counterHit: "+2",
          note: ""
        },
        {
          id: 27,
          command: "BBB",
          move: [
            <Fragment>
              <p>Divine Mist</p>
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 28,
          command: "BK",
          move: [
            <Fragment>
              <p>Angel's Flow</p>
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "+2",
          counterHit: "+2",
          note: ""
        },
        {
          id: 29,
          command: "6B",
          move: [
            <Fragment>
              <p>Ascetic's Force</p>
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "-2",
          counterHit: "+4",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={gi} />
              <p>GI non-thrust Mid verticals[8-14] / TC[8~?]</p>
            </Fragment>
          ]
        },
        {
          id: 30,
          command: "6BA",
          move: [
            <Fragment>
              <p>Ascetic's Force</p>
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "+10",
          counterHit: "+10",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={gi} />
              <p>GI non-thrust Mid verticals[8-14] / TC[8~?]</p>
            </Fragment>
          ]
        },
        {
          id: 31,
          command: "6bA",
          move: [
            <Fragment>
              <p>Ascetic's Blade</p>
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResizeSM} src={b} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>44F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={gi} />
              <p>GI non-thrust Mid verticals[8-14] / TC[8~?]</p>
            </Fragment>
          ]
        },
        {
          id: 32,
          command: "6BB",
          move: [
            <Fragment>
              <p>Press the Hilt</p>
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+4",
          counterHit: "+4",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={gi} />
              <p>GI non-thrust Mid verticals[8-14] / TC[8~?]</p>
            </Fragment>
          ]
        },
        {
          id: 33,
          command: "3B",
          move: [
            <Fragment>
              <p>Paladin Purifier</p>
              <img className={classes.imgResize} src={d3} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "LNC",
          counterHit: "LNC",
          note: "TC[8-14]"
        },
        {
          id: 34,
          command: "2B",
          move: [
            <Fragment>
              <p>Guardian Strike</p>
              <img className={classes.imgResize} src={d2} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "0",
          counterHit: "0",
          note: ""
        },
        {
          id: 35,
          command: "2BB",
          move: [
            <Fragment>
              <p>Guardian Strike</p>
              <img className={classes.imgResize} src={d2} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-20",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 36,
          command: "2BK",
          move: [
            <Fragment>
              <p>Guardian Spear Kick</p>
              <img className={classes.imgResize} src={d2} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "+10",
          counterHit: "+10",
          note: [<Fragment />]
        },
        {
          id: 37,
          command: "2BK(Lethal Hit)",
          move: [
            <Fragment>
              <p>Guardian Spear Kick(Lethal Hit)</p>
              <img className={classes.imgResize} src={d2} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={lh} />
              <p>Lethal Hit on behind opponent</p>
            </Fragment>
          ]
        },
        {
          id: 38,
          command: "1B",
          move: [
            <Fragment>
              <p>Nasty Impale</p>
              <img className={classes.imgResize} src={d1} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "-4",
          counterHit: "KND",
          note: [<Fragment />]
        },
        {
          id: 39,
          command: "1BBBB",
          move: [
            <Fragment>
              <p>Nasty Impale</p>
              <img className={classes.imgResize} src={d1} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              <img className={classes.imgResize} src={l} />
              <img className={classes.imgResize} src={l} />
              <img className={classes.imgResize} src={l} />
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "-4",
          counterHit: "KND",
          note: ""
        },
        {
          id: 40,
          command: "4B",
          move: [
            <Fragment>
              <p>Sword Shower</p>
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-2",
          onHit: "+4",
          counterHit: "+4",
          note: [
            <Fragment>
              <p>Force crouch on block</p>
            </Fragment>
          ]
        },
        {
          id: 41,
          command: "FC B",
          move: [
            <Fragment>
              <p>Guardian Strike</p>
              <span>FC</span>
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "0",
          counterHit: "0",
          note: ""
        },
        {
          id: 42,
          command: "FC BB",
          move: [
            <Fragment>
              <p>Guardian Strike</p>
              <span>FC</span>
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-20",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 43,
          command: "FC BK",
          move: [
            <Fragment>
              <p>Guardian Spear Kick</p>
              <span>FC</span>
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "+10",
          counterHit: "+10",
          note: [<Fragment />]
        },
        {
          id: 44,
          command: "FC BK(Lethal Hit)",
          move: [
            <Fragment>
              <p>Guardian Spear Kick(Lethal Hit)</p>
              <span>FC</span>
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={lh} />
              <p>Lethal Hit on behind opponent</p>
            </Fragment>
          ]
        },
        {
          id: 45,
          command: "FC 3B",
          move: [
            <Fragment>
              <p>Under Splash</p>
              <span>FC</span>
              <img className={classes.imgResize} src={d3} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+2",
          counterHit: "+2",
          note: ""
        },
        {
          id: 46,
          command: "WR B",
          move: [
            <Fragment>
              <p>Exile</p>
              <span>WR</span>
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "+4",
          counterHit: "+4",
          note: ""
        },
        {
          id: 47,
          command: "8*9B",
          move: [
            <Fragment>
              <p>Diving Exile</p>
              <img className={classes.imgResize} src={d8} />
              <span> * </span>
              <img className={classes.imgResize} src={d9} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>38F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "KND",
          counterHit: "KND",
          note: "TJ"
        },
        {
          id: 48,
          command: "BT B",
          move: [
            <Fragment>
              <p>Turning Sword Splash</p>
              <span>BT</span>
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+6",
          counterHit: "+6",
          note: ""
        },
        {
          id: 49,
          command: "BT 2B",
          move: [
            <Fragment>
              <p>Turning Under Splash</p>
              <span>BT</span>
              <img className={classes.imgResize} src={d2} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "+4",
          counterHit: "+4",
          note: ""
        }
      ],
      // Kicks start here
      kicks: [
        {
          id: 50,
          command: "K",
          move: [
            <Fragment>
              <p>Kick Duo</p>
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "-2",
          counterHit: "-2",
          note: ""
        },
        {
          id: 51,
          command: "KK",
          move: [
            <Fragment>
              <p>Kick Duo</p>
              <img className={classes.imgResize} src={k} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "+2",
          counterHit: "+2",
          note: ""
        },
        {
          id: 52,
          command: "6K",
          move: [
            <Fragment>
              <p>Holy Punishment</p>
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "+6",
          counterHit: "KND",
          note: ""
        },
        {
          id: 53,
          command: "3K",
          move: [
            <Fragment>
              <p>Flapping Heel Kick</p>
              <img className={classes.imgResize} src={d3} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "+4",
          counterHit: "+4",
          note: ""
        },

        {
          id: 54,
          command: "2K",
          move: [
            <Fragment>
              <p>Spring Under kick</p>
              <img className={classes.imgResize} src={d2} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "-4",
          counterHit: "-4",
          note: "TC"
        },
        {
          id: 55,
          command: "1K",
          move: [
            <Fragment>
              <p>Tornado Low Kick</p>
              <img className={classes.imgResize} src={d1} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "-2",
          counterHit: "KND",
          note: ""
        },
        {
          id: 56,
          command: "1[K]",
          move: [
            <Fragment>
              <p>Tornado Low Kick(Hold)</p>
              <img className={classes.imgResize} src={d1} />
              <img className={classes.imgResize} src={k_h} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>36F</p>
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 57,
          command: "1[K](Lethal Hit)",
          move: [
            <Fragment>
              <p>Tornado Low Kick(Hold)(Lehtal Hit)</p>
              <img className={classes.imgResize} src={d1} />
              <img className={classes.imgResize} src={k_h} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>36F</p>
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={lh} />
              <p>Lethal Hit trigger on a whiffed GI</p>
            </Fragment>
          ]
        },
        {
          id: 58,
          command: "4K",
          move: [
            <Fragment>
              <p>Rising Temple</p>
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-2",
          onHit: "+8",
          counterHit: "+8",
          note: "TC"
        },
        {
          id: 59,
          command: "FC K",
          move: [
            <Fragment>
              <p>Spring Under kick</p>
              <span>FC</span>
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "-4",
          counterHit: "-4",
          note: "TC / ~FC"
        },

        {
          id: 60,
          command: "WR K",
          move: [
            <Fragment>
              <p>Angel's Spring</p>
              <span>WR</span>
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-2",
          onHit: "+8",
          counterHit: "+8",
          note: ""
        },
        {
          id: 61,
          command: "7*8*9K",
          move: [
            <Fragment>
              <p>Holy Crest Kick</p>
              <img className={classes.imgResize} src={d7} />
              <span> * </span>
              <img className={classes.imgResize} src={d8} />
              <span> * </span>
              <img className={classes.imgResize} src={d9} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "+6",
          counterHit: "+6",
          note: "TJ"
        },

        {
          id: 62,
          command: "BT K",
          move: [
            <Fragment>
              <p>Turning Holy High Kick</p>
              <span>BT</span>
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "+2",
          counterHit: "+2",
          note: ""
        },

        {
          id: 63,
          command: "BT 2K",
          move: [
            <Fragment>
              <p>Turning Angel Sweep</p>
              <span>BT</span>
              <img className={classes.imgResize} src={d2} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "-2",
          counterHit: "-2",
          note: "TC"
        }
      ],

      // dual button attackts start here
      dualButtonAttacks: [
        {
          id: 64,
          command: "A+B",
          move: [
            <Fragment>
              <p>Elk Strike</p>
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>42F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "+8",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ba} />
              <img className={classes.imgNote} src={lh} />
              <p>Lethal Hit against GI / TC[10~ ]</p>
            </Fragment>
          ]
        },
        {
          id: 65,
          command: "6A+B",
          move: [
            <Fragment>
              <p>El Fortune</p>
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <img className={classes.imgNote} src={gi} />
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "N/A",
          counterHit: "N/A",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={gi} />
              <p>GI Mid[4-12]</p>
            </Fragment>
          ]
        },
        {
          id: 66,
          command: "8A+B",
          move: [
            <Fragment>
              <p>Angel Fall</p>
              <img className={classes.imgResize} src={d8} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>38F</p>
              <img className={classes.imgResize} src={sm} />
              <span> * </span>
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <p>TJ[14~ ] / On whiff Quake STN</p>
            </Fragment>
          ]
        },
        {
          id: 67,
          command: "8[A+B]",
          move: [
            <Fragment>
              <p>Angel Fall(Hold)</p>
              <img className={classes.imgResize} src={d8} />
              <img className={classes.imgResize} src={a_h} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={b_h} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>68F</p>
              <img className={classes.imgResize} src={sm} />
            </Fragment>
          ],
          onBlock: "UA",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ua} />
            </Fragment>
          ]
        },
        {
          id: 68,
          command: "4A+B",
          move: [
            <Fragment>
              <p>Twin Step Grace</p>
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <p>TC[10~ ]</p>
            </Fragment>
          ]
        },
        {
          id: 69,
          command: "B+K",
          move: [
            <Fragment>
              <p>Temperance Strike</p>
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>26F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "0",
          counterHit: "0",
          note: [
            <Fragment>
              <p>TJ[12-18] / TS</p>
            </Fragment>
          ]
        },
        {
          id: 70,
          command: "B+KB",
          move: [
            <Fragment>
              <p>Temperance Strike</p>
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>26F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-20",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <p>TJ[12-18] / TS</p>
            </Fragment>
          ]
        },
        {
          id: 71,
          command: "6B+K",
          move: [
            <Fragment>
              <p>Quick Strike</p>
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "+2",
          counterHit: "KND",
          note: [
            <Fragment>
              <p>TC[8~ ]</p>
            </Fragment>
          ]
        },
        {
          id: 72,
          command: "8B+K",
          move: [
            <Fragment>
              <p>Angel Stroke</p>
              <img className={classes.imgResize} src={d8} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>30F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "-4",
          counterHit: "KND",
          note: [
            <Fragment>
              <p>TJ[16~ ]</p>
            </Fragment>
          ]
        },
        {
          id: 73,
          command: "8B+KA",
          move: [
            <Fragment>
              <p>Angel Stroke</p>
              <img className={classes.imgResize} src={d8} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>30F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <p>TJ[16~ ]</p>
            </Fragment>
          ]
        },
        {
          id: 74,
          command: "8B+KAB",
          move: [
            <Fragment>
              <p>Angel Stroke</p>
              <img className={classes.imgResize} src={d8} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>30F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={l} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-18",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <p>TJ[16~ ]</p>
            </Fragment>
          ]
        },
        {
          id: 75,
          command: "8B+KB",
          move: [
            <Fragment>
              <p>Angel Fall</p>
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>30F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "+2",
          onHit: "KND",
          counterHit: "KND",
          note: "TJ"
        },
        {
          id: 76,
          command: "8B+KK",
          move: [
            <Fragment>
              <p>Angel's Sault</p>
              <img className={classes.imgResize} src={d8} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>30F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <p>TJ</p>
            </Fragment>
          ]
        },
        {
          id: 77,
          command: "4B+K",
          move: [
            <Fragment>
              <p>Heaven's Gate</p>
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>64F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "UA",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ua} />
              <p>Cancel with G / TC / TJ</p>
            </Fragment>
          ]
        },
        {
          id: 78,
          command: "WR B+K",
          move: [
            <Fragment>
              <p>Dawn of Eos</p>
              <span>WR</span>
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "KND",
          counterHit: "KND",
          note: "LNC on airborne opponent"
        },
        {
          id: 79,
          command: "BT B+K",
          move: [
            <Fragment>
              <p>Hip Charge</p>
              <span>BT</span>
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+8",
          counterHit: "+8",
          note: ""
        }
      ],

      // 8way-run attacks start here
      eightwayrunAttack: [
        {
          id: 80,
          command: "33*66*99A",
          move: [
            <Fragment>
              <p>Silent Cross</p>
              <img className={classes.imgResize} src={d6_h} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "+6",
          counterHit: "+6",
          note: "TC[6~ ]"
        },
        {
          id: 81,
          command: "22A",
          move: [
            <Fragment>
              <p>Shield Rush</p>
              <img className={classes.imgResize} src={d2_h} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "KND",
          counterHit: "KND",
          note: "TS"
        },
        {
          id: 82,
          command: "88A",
          move: [
            <Fragment>
              <p>Inverse Shield Rush</p>
              <img className={classes.imgResize} src={d8_h} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "KND",
          counterHit: "KND",
          note: "TS"
        },
        {
          id: 83,
          command: "44A",
          move: [
            <Fragment>
              <p>Reverse Mirage</p>
              <img className={classes.imgResize} src={d4_h} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "+4",
          counterHit: "LNC",
          note: ""
        },
        {
          id: 84,
          command: "44A6 ~ AS",
          move: [
            <Fragment>
              <p>Reverse Mirage ~ Angel Step</p>
              <img className={classes.imgResize} src={d4_h} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={d6} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+2",
          counterHit: "LNC",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ss} />
              <p>No Stance transition on Counter Hit</p>
            </Fragment>
          ]
        },

        {
          id: 85,
          command: "11*77A",
          move: [
            <Fragment>
              <p>Silent Stream</p>
              <img className={classes.imgResize} src={d1_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d7_h} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>26F</p>
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "-2",
          counterHit: "-2",
          note: [
            <Fragment>
              <p>TC[14~ ]</p>
            </Fragment>
          ]
        },
        {
          id: 86,
          command: "11*77AA",
          move: [
            <Fragment>
              <p>Silent Stream</p>
              <img className={classes.imgResize} src={d1_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d7_h} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>26F</p>
              <img className={classes.imgResize} src={l} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <p>TC[14~ ]</p>
            </Fragment>
          ]
        },
        {
          id: 87,
          command: "11*77A[A]",
          move: [
            <Fragment>
              <p>Silent Stream</p>
              <img className={classes.imgResize} src={d1_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d7_h} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={a_h} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>26F</p>
              <img className={classes.imgResize} src={l} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "UA",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ua} />
              <p>TC[14~ ]</p>
            </Fragment>
          ]
        },
        {
          id: 88,
          command: "33*66*99B",
          move: [
            <Fragment>
              <p>Olympus Cannon</p>
              <img className={classes.imgResize} src={d3_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d6_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d9_h} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-2",
          onHit: "LNC",
          counterHit: "LNC",
          note: [<Fragment />]
        },
        {
          id: 89,
          command: "22*88B",
          move: [
            <Fragment>
              <p>Guardian's Judgment</p>
              <img className={classes.imgResize} src={d2_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d8_h} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-26",
          onHit: "KND",
          counterHit: "KND",
          note: "TC[4~ ]"
        },
        {
          id: 89,
          command: "22*88BA",
          move: [
            <Fragment>
              <p>Guardian's Judgment</p>
              <img className={classes.imgResize} src={d2_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d8_h} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-46",
          onHit: "KND",
          counterHit: "KND",
          note: "TC[4~ ]"
        },
        {
          id: 90,
          command: "22*88BAK",
          move: [
            <Fragment>
              <p>Guardian's Judgment</p>
              <img className={classes.imgResize} src={d2_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d8_h} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-60",
          onHit: "KND",
          counterHit: "KND",
          note: "TC[4~ ]"
        },
        {
          id: 91,
          command: "11*44*77B",
          move: [
            <Fragment>
              <p>Guardian Upper</p>
              <img className={classes.imgResize} src={d1_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d4_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d7_h} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              <p>TC[6-14]</p>
            </Fragment>
          ]
        },
        {
          id: 92,
          command: "11*44*77B(Lethal Hit)",
          move: [
            <Fragment>
              <p>Guardian Upper(Lethal Hit)</p>
              <img className={classes.imgResize} src={d1_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d4_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d7_h} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={gi} />
              <p>Lethal Hit triggers post GI</p>
              <p>TC[6-14]</p>
            </Fragment>
          ]
        },
        {
          id: 93,
          command: "33*66*99K",
          move: [
            <Fragment>
              <p>Plasma Blade</p>
              <img className={classes.imgResize} src={d3_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d6_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d9_h} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "LNC",
          counterHit: "LNC",
          note: ""
        },
        {
          id: 94,
          command: "22*88K",
          move: [
            <Fragment>
              <p>Angel Side Kick</p>
              <img className={classes.imgResize} src={d2_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d8_h} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+4",
          counterHit: "+4",
          note: ""
        },
        {
          id: 95,
          command: "11*44*77K",
          move: [
            <Fragment>
              <p>Tornado High Kick</p>
              <img className={classes.imgResize} src={d1_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d4_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d7_h} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>28F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "0",
          onHit: "LNC",
          counterHit: "LNC",
          note: ""
        },
        {
          id: 96,
          command: "11*44*77kK",
          move: [
            <Fragment>
              <p>Tornado Feint</p>
              <img className={classes.imgResize} src={d1_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d4_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d7_h} />
              <img className={classes.imgResizeSM} src={k} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>46F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "+4",
          onHit: "LNC",
          counterHit: "LNC",
          note: "TC[20~ ]"
        },
        {
          id: 97,
          command: "33*66*99A+B",
          move: [
            <Fragment>
              <p>Lodestar Strike</p>
              <img className={classes.imgResize} src={d3_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d6_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d9_h} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "KND",
          counterHit: "KND",
          note: "TC[6-14]"
        },
        {
          id: 98,
          command: "33*66*99A+B(Lethal Hit)",
          move: [
            <Fragment>
              <p>Lodestar Strike(Lethal Hit)</p>
              <img className={classes.imgResize} src={d3_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d6_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d9_h} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={lh} />
              <p>Lethal Hit against back step opponent</p>
              <p>TC[6-14]</p>
            </Fragment>
          ]
        },
        {
          id: 99,
          command: "22*88A+B",
          move: [
            <Fragment>
              <p>Ascension</p>
              <img className={classes.imgResize} src={d2_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d8_h} />
              <span> * </span>
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>26F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "LNC",
          counterHit: "LNC",
          note: "TC"
        },
        {
          id: 100,
          command: "44*11*77A+B",
          move: [
            <Fragment>
              <p>Twin Step Grace</p>
              <img className={classes.imgResize} src={d4_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d1_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d7_h} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <p>TC</p>
            </Fragment>
          ]
        },
        {
          id: 101,
          command: "33*66*99B+K",
          move: [
            <Fragment>
              <p>Jet Stream Rush</p>
              <img className={classes.imgResize} src={d3_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d6_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d9_h} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "0",
          counterHit: "0",
          note: [
            <Fragment>
              <p>TC</p>
            </Fragment>
          ]
        },
        {
          id: 102,
          command: "33*66*99B+KA",
          move: [
            <Fragment>
              <p>Jet Stream Rush</p>
              <img className={classes.imgResize} src={d3_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d6_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d9_h} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-18",
          onHit: "-2",
          counterHit: "-2",
          note: [
            <Fragment>
              <p>TC</p>
            </Fragment>
          ]
        },
        {
          id: 103,
          command: "33*66*99B+KAK",
          move: [
            <Fragment>
              <p>Jet Stream Rush</p>
              <img className={classes.imgResize} src={d3_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d6_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d9_h} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              <p>TC</p>
            </Fragment>
          ]
        },
        {
          id: 104,
          command: "22*88*11*44*77B+K",
          move: [
            <Fragment>
              <p>Olympus Shower</p>
              <img className={classes.imgResize} src={d2} />
              <span> * </span>
              <img className={classes.imgResize} src={d8} />
              <span> * </span>
              <img className={classes.imgResize} src={d1} />
              <span> * </span>
              <img className={classes.imgResize} src={d4} />
              <span> * </span>
              <img className={classes.imgResize} src={d7} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>26F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment />]
        },
        {
          id: 105,
          command: "22*88*11*44*77B+K(Lethal Hit)",
          move: [
            <Fragment>
              <p>Olympus Shower(Lethal Hit)</p>
              <img className={classes.imgResize} src={d2} />
              <span> * </span>
              <img className={classes.imgResize} src={d8} />
              <span> * </span>
              <img className={classes.imgResize} src={d1} />
              <span> * </span>
              <img className={classes.imgResize} src={d4} />
              <span> * </span>
              <img className={classes.imgResize} src={d7} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>26F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={lh} />
              <p>Lethal Hit on whiffed attacks</p>
            </Fragment>
          ]
        },

        {
          id: 106,
          command: "Run K",
          move: [
            <Fragment>
              <p>Sliding</p>
              <span>Run</span>
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-20",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <p>TC / TJ </p>
            </Fragment>
          ]
        }
      ],

      //throws start here
      throws: [
        {
          id: 107,
          command: "A+G",
          move: [
            <Fragment>
              <p>Widow Maker</p>
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={g} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "+6",
          counterHit: "+6",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={th} />
            </Fragment>
          ]
        },
        {
          id: 108,
          command: "A+G6",
          move: [
            <Fragment>
              <p>Widow Maker</p>
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={g} />
              <img className={classes.imgResize} src={d6} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={th} />
            </Fragment>
          ]
        },
        {
          id: 109,
          command: "4A+G",
          move: [
            <Fragment>
              <p>Holy Cracker</p>
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={g} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={th} />
            </Fragment>
          ]
        },
        {
          id: 110,
          command: "4A+G4*6",
          move: [
            <Fragment>
              <p>Heaven to Hell</p>
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={g} />
              <img className={classes.imgResize} src={d4} />
              <span> * </span>
              <img className={classes.imgResize} src={d6} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={th} />
            </Fragment>
          ]
        },
        {
          id: 111,
          command: "Right Throw",
          move: [
            <Fragment>
              <p>Broken Promise</p>
              <p>Right Side Throw</p>
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={th} />
            </Fragment>
          ]
        },
        {
          id: 112,
          command: "Left Throw",
          move: [
            <Fragment>
              <p>Round Knocker</p>
              <p>Left Side Throw</p>
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={th} />
            </Fragment>
          ]
        },
        {
          id: 113,
          command: "Back Throw",
          move: [
            <Fragment>
              <p>Broken Promise</p>
              <p>Back Throw</p>
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={th} />
            </Fragment>
          ]
        },
        {
          id: 114,
          command: "66A+G",
          move: [
            <Fragment>
              <p>Heaven's Arch</p>
              <img className={classes.imgResize} src={d6_h} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={g} />
              
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={th} />
            </Fragment>
          ]
        },
        {
          id: 115,
          command: "66A+G(Lethal Hit)",
          move: [
            <Fragment>
              <p>Heaven's Arch(Lethal Hit)</p>
              <img className={classes.imgResize} src={d6_h} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={g} />
              
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={th} />
              <img className={classes.imgNote} src={lh} />
              <p>Lethal Hit if opponent GIed 5 times, resets after trigger</p>
            </Fragment>
          ]
        }
      ],
      // reversal edge start here
      reversalEdge: [
        {
          id: 88,
          command: "B+G",
          move: [
            <Fragment>
              <p>Glory's End</p>
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={g} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>46F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "N/A",
          counterHit: "N/A",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={re} />
            </Fragment>
          ]
        },
        {
          id: 89,
          command: "[B+G]",
          move: [
            <Fragment>
              <p>Glory's End</p>
              <img className={classes.imgResize} src={b_h} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={g_h} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>66F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "N/A",
          counterHit: "N/A",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={re} />
              <img className={classes.imgNote} src={ba} />
            </Fragment>
          ]
        },
        {
          id: 90,
          command: "RE A",
          move: [
            <Fragment>
              <p>Destruction of Logres</p>
              <img className={classes.imgNote} src={re} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>N/A</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "STN",
          counterHit: "STN",
          note: ""
        },

        {
          id: 91,
          command: "RE A(Lethal Hit)",
          move: [
            <Fragment>
              <p>Destruction of Logres(Lethal Hit)</p>
              <img className={classes.imgNote} src={re} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>N/A</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={lh} />
              <p>Lethal Hit on RE 2nd stage</p>
            </Fragment>
          ]
        },
        {
          id: 92,
          command: "RE B",
          move: [
            <Fragment>
              <p>Path to Avalon</p>
              <img className={classes.imgNote} src={re} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>N/A</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "STN",
          counterHit: "STN",
          note: ""
        },
        {
          id: 93,
          command: "RE B(Lethal Hit)",
          move: [
            <Fragment>
              <p>Path to Avalon(Lethal Hit)</p>
              <img className={classes.imgNote} src={re} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>N/A</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={lh} />
              <p>Lethal Hit on RE 2nd stage</p>
            </Fragment>
          ]
        },
        {
          id: 94,
          command: "RE B6 ~ AVN",
          move: [
            <Fragment>
              <p>Path to Avalon ~ Avenger</p>
              <img className={classes.imgNote} src={re} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>N/A</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ss} />
              <p>To Avenger Stance</p>
            </Fragment>
          ]
        },
        {
          id: 95,
          command: "RE B ~ AVN(Lethal Hit)",
          move: [
            <Fragment>
              <p>Path to Avalon ~ Avenger(Lethal Hit)</p>
              <img className={classes.imgNote} src={re} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>N/A</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={lh} />
              <p>Lethal Hit on RE 2nd stage</p>
              <img className={classes.imgNote} src={ss} />
              <p>To Avenger Stance</p>
            </Fragment>
          ]
        },
        {
          id: 96,
          command: "RE K",
          move: [
            <Fragment>
              <p>Guinevere's Indiscretion</p>
              <img className={classes.imgNote} src={re} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>N/A</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "STN",
          counterHit: "STN",
          note: ""
        },
        {
          id: 97,
          command: "RE K(Lethal Hit)",
          move: [
            <Fragment>
              <p>Guinevere's Indiscretion(Lethal Hit)</p>
              <img className={classes.imgNote} src={re} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>N/A</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={lh} />
              <p>Lethal Hit on RE 2nd stage</p>
            </Fragment>
          ]
        },
        {
          id: 98,
          command: "RE 6",
          move: [
            <Fragment>
              <p>Foward Step</p>
              <img className={classes.imgNote} src={re} />
              <img className={classes.imgResize} src={d6} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>N/A</p>
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "N/A",
          counterHit: "N/A",
          note: [
            <Fragment>
              <p>Beats</p>
              <img className={classes.imgNote} src={re} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ]
        },
        {
          id: 99,
          command: "RE 2*8",
          move: [
            <Fragment>
              <p>Side Step</p>
              <img className={classes.imgNote} src={re} />
              <img className={classes.imgResize} src={d2} />
              <span> * </span>
              <img className={classes.imgResize} src={d8} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>N/A</p>
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "N/A",
          counterHit: "N/A",
          note: [
            <Fragment>
              <p>Beats</p>
              <img className={classes.imgNote} src={re} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ]
        },
        {
          id: 100,
          command: "RE 4",
          move: [
            <Fragment>
              <p>Back Step</p>
              <img className={classes.imgNote} src={re} />
              <img className={classes.imgResize} src={d4} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>N/A</p>
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "N/A",
          counterHit: "N/A",
          note: [
            <Fragment>
              <p>Beats</p>
              <img className={classes.imgNote} src={re} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ]
        }
      ],

      // gauge attacks start here
      gaugeAttacks: [
        {
          id: 101,
          command: "A+B+K",
          move: [
            <Fragment>
              <p>Chevalier Mal Fet</p>
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sg} />
              <img className={classes.imgNote} src={ce} />
            </Fragment>
          ]
        },
        {
          id: 102,
          command: "4A+B+K",
          move: [
            <Fragment>
              <p>Soul Charge</p>
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>6F</p>
              <img className={classes.imgResize} src={sm} />
            </Fragment>
          ],
          onBlock: "0",
          onHit: "+8",
          counterHit: "+8",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sg} />
              <img className={classes.imgNote} src={ba} />
            </Fragment>
          ]
        },
        {
          id: 103,
          command: "SC 6AA6 ~ SoN",
          move: [
            <Fragment>
              <p>Questing Fang ~ Steed of the Night</p>
              <img className={classes.imgNote} src={sc} />
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={d6} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ss} />
            </Fragment>
          ]
        },

        {
          id: 104,
          command: "SC 1AK",
          move: [
            <Fragment>
              <p>Guilt Seeker</p>
              <img className={classes.imgNote} src={sc} />
              <img className={classes.imgResize} src={d1} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              <img className={classes.imgResize} src={l} />
              <img className={classes.imgResize} src={sm} />
            </Fragment>
          ],
          onBlock: "-22",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sc} />
              <img className={classes.imgNote} src={at} />
              <p>TC</p>
            </Fragment>
          ]
        },
        {
          id: 105,
          command: "SC 3BB",
          move: [
            <Fragment>
              <p>Calamitous Judgment</p>
              <img className={classes.imgNote} src={sc} />
              <img className={classes.imgResize} src={d3} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sc} />
            </Fragment>
          ]
        },
        {
          id: 106,
          command: "SC 1BB6 ~ SoN",
          move: [
            <Fragment>
              <p>Curse of Morgan ~ Steed of the Night</p>
              <img className={classes.imgNote} src={sc} />
              <img className={classes.imgResize} src={d1} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={d6} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              <img className={classes.imgResize} src={l} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sc} />
              <img className={classes.imgNote} src={ss} />
            </Fragment>
          ]
        },
        {
          id: 107,
          command: "SC 4B6 ~ SoN",
          move: [
            <Fragment>
              <p>Benovlence Step ~ Steed of the Night</p>
              <img className={classes.imgNote} src={sc} />
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={d6} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sc} />
              <img className={classes.imgNote} src={lh} />
              <p>Lethal Hit against BT opponent</p>
            </Fragment>
          ]
        },
        {
          id: 108,
          command: "SC 2A+B",
          move: [
            <Fragment>
              <p>Wasteland</p>
              <img className={classes.imgNote} src={sc} />
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>38F</p>
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "+4",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sc} />
            </Fragment>
          ]
        },
        {
          id: 109,
          command: "SC 4A+B6",
          move: [
            <Fragment>
              <p>War of Benwick</p>
              <img className={classes.imgNote} src={sc} />
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={d6} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>34F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sc} />
            </Fragment>
          ]
        },
        {
          id: 110,
          command: "SC 4B+K6 ~ SoN",
          move: [
            <Fragment>
              <p>Morgan's Deception ~ Steed of the Night</p>
              <img className={classes.imgNote} src={sc} />
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
              <img className={classes.imgResize} src={d6} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>26F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sc} />
              <img className={classes.imgNote} src={ss} />
            </Fragment>
          ]
        },
        {
          id: 111,
          command: "SC AVN 6",
          move: [
            <Fragment>
              <p>Steed of the Night</p>
              <img className={classes.imgNote} src={sc} />
              <span>Avenger Stance</span>
              <img className={classes.imgResize} src={d6} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "N/A",
          counterHit: "N/A",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sc} />
              <img className={classes.imgNote} src={ss} />
            </Fragment>
          ]
        },

        {
          id: 112,
          command: "SC AVN 4",
          move: [
            <Fragment>
              <p>Cover of Darkness</p>
              <img className={classes.imgNote} src={sc} />
              <span>Avenger Stance</span>
              <img className={classes.imgResize} src={d4} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "N/A",
          counterHit: "N/A",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sc} />
              <img className={classes.imgNote} src={ss} />
              <p>Teleport behind</p>
            </Fragment>
          ]
        },
        {
          id: 113,
          command: "SC AVN 4*6A",
          move: [
            <Fragment>
              <p>Demon King Slayer</p>
              <img className={classes.imgNote} src={sc} />
              <span>Avenger Stance</span>
              <img className={classes.imgResize} src={d4} />
              <span> * </span>
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>""</p>
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "+4",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sc} />
              <img className={classes.imgNote} src={ss} />

              <img className={classes.imgNote} src={ba} />
            </Fragment>
          ]
        },
        {
          id: 114,
          command: "SC AVN 4*6B",
          move: [
            <Fragment>
              <p>Calamity's Collapse</p>
              <img className={classes.imgNote} src={sc} />
              <span>Avenger Stance</span>
              <img className={classes.imgResize} src={d4} />
              <span> * </span>
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>38F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sc} />
              <img className={classes.imgNote} src={ss} />

              <p>Force Crouch on block</p>
            </Fragment>
          ]
        },
        {
          id: 115,
          command: "SC AVN 4*6K",
          move: [
            <Fragment>
              <p>Destructive Order</p>
              <img className={classes.imgNote} src={sc} />
              <span>Avenger Stance</span>
              <img className={classes.imgResize} src={d4} />
              <span> * </span>
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-2",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sc} />
              <img className={classes.imgNote} src={ss} />
              <p>TJ</p>
            </Fragment>
          ]
        }
      ],
      // special stance start here
      specialAttacks: [
        {
          id: 116,
          command: "B+K ~ AVN",
          move: [
            <Fragment>
              <p>Avenger</p>
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>N/A</p>
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "N/A",
          counterHit: "N/A",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ss} />
            </Fragment>
          ]
        },
        {
          id: 117,
          command: "AVN A",
          move: [
            <Fragment>
              <p>Endless Quest</p>
              <span>Avenger</span>
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              <img className={classes.imgResize} src={l} />
              <img className={classes.imgResize} src={l} />
              <img className={classes.imgResize} src={l} />
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-20",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ss} />
            </Fragment>
          ]
        },
        {
          id: 118,
          command: "AVN A(Lethal Hit)",
          move: [
            <Fragment>
              <p>Endless Quest(Lethal Hit)</p>
              <span>Avenger</span>
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              <img className={classes.imgResize} src={l} />
              <img className={classes.imgResize} src={l} />
              <img className={classes.imgResize} src={l} />
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-20",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ss} />
              <img className={classes.imgNote} src={lh} />
              <p>Lethal Hit after guard break</p>
            </Fragment>
          ]
        },
        {
          id: 119,
          command: "AVN [A]",
          move: [
            <Fragment>
              <p>Endless Quest</p>
              <span>Avenger</span>
              <img className={classes.imgResize} src={a_h} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>33F</p>
              <img className={classes.imgResize} src={l} />
              <img className={classes.imgResize} src={l} />
              <img className={classes.imgResize} src={l} />
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ss} />
            </Fragment>
          ]
        },
        {
          id: 120,
          command: "AVN [A](Lethal Hit)",
          move: [
            <Fragment>
              <p>Endless Quest(Lethal Hit)</p>
              <span>Avenger</span>
              <img className={classes.imgResize} src={a_h} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>34F</p>
              <img className={classes.imgResize} src={l} />
              <img className={classes.imgResize} src={l} />
              <img className={classes.imgResize} src={l} />
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-20",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ss} />
              <img className={classes.imgNote} src={lh} />
              <p>Lethal Hit after guard break</p>
            </Fragment>
          ]
        },
        {
          id: 121,
          command: "AVN B ~ AVN",
          move: [
            <Fragment>
              <p>Nameless Blade ~ Avenger</p>
              <span>Avenger</span>
              <img className={classes.imgResize} src={b} />
              <span> ~ Avenger</span>
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-13",
          onHit: "+3",
          counterHit: "+3",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ss} />
            </Fragment>
          ]
        },
        {
          id: 122,
          command: "AVN BB",
          move: [
            <Fragment>
              <p>Nameless Blade</p>
              <span>Avenger</span>
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "+6",
          counterHit: "+6",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ss} />
              <p>Force crouch on block</p>
            </Fragment>
          ]
        },
        {
          id: 123,
          command: "AVN K ~ AVN",
          move: [
            <Fragment>
              <p>Corbenic's Veil ~ Avenger</p>
              <span>Avenger</span>
              <img className={classes.imgResize} src={k} />
              <span> ~ Avenger</span>
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-11",
          onHit: "+4",
          counterHit: "+4",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ss} />
            </Fragment>
          ]
        },
        {
          id: 124,
          command: "AVN A+B",
          move: [
            <Fragment>
              <p>Arondight's Roar</p>
              <span>Avenger</span>
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ss} />
              <img className={classes.imgNote} src={at} />
            </Fragment>
          ]
        },
        {
          id: 125,
          command: "AVN K ~ AVN",
          move: [
            <Fragment>
              <p>Corbenic's Veil ~ Avenger</p>
              <span>Avenger</span>
              <img className={classes.imgResize} src={k} />
              <span> ~ Avenger</span>
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-11",
          onHit: "+4",
          counterHit: "+4",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ss} />
            </Fragment>
          ]
        },
        {
          id: 126,
          command: "AVN B+K",
          move: [
            <Fragment>
              <p>Sir Galahad's Bravery</p>
              <span>Avenger</span>
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>28F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "+8",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ss} />
              <img className={classes.imgNote} src={ba} />
              <p>Force crouch on block</p>
            </Fragment>
          ]
        },
        {
          id: 127,
          command: "AVN B+K(Lethal Hit)",
          move: [
            <Fragment>
              <p>Sir Galahad's Bravery(Lethal Hit)</p>
              <span>Avenger</span>
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>28F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "+8",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ss} />
              <img className={classes.imgNote} src={ba} />
              <p>Force crouch on block</p>
              <img className={classes.imgNote} src={lh} />
              <p>Lethal Hit on GI</p>
            </Fragment>
          ]
        },
        {
          id: 128,
          command: "AVN 2*8",
          move: [
            <Fragment>
              <p>Avenger Side Step</p>
              <span>Avenger</span>
              <img className={classes.imgResize} src={d2} />
              <span> * </span>
              <img className={classes.imgResize} src={d8} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "N/A",
          counterHit: "N/A",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ss} />
              <p>Side Step</p>
            </Fragment>
          ]
        }
      ]
    };

    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Horizontal Attacks</h4>
              <div
                className={`${classes.toggleStyle} ${
                  classes.cardCategoryWhite
                }`}
              >
                <span>Simple</span>
                <Switch
                  checked={this.state.checked}
                  onClick={this.toggleTableData}
                  color="primary"
                />
                <span>Detail</span>
              </div>
            </CardHeader>
            <CardBody>
              {this.state.display ? (
                <Table
                  tableHeaderColor="primary"
                  tableHead={this.state.tableHeadData}
                  tableData={sophitiaFrameData.verticalAttacks.map(data => [
                    data.command,
                    data.impact,
                    data.onBlock,
                    data.onHit,
                    data.counterHit,
                    data.note
                  ])}
                />
              ) : (
                <Table
                  tableHeaderColor="primary"
                  tableHead={this.state.tableHeadData}
                  tableData={sophitiaFrameData.verticalAttacks.map(data => [
                    data.move,
                    data.impact,
                    data.onBlock,
                    data.onHit,
                    data.counterHit,
                    data.note
                  ])}
                />
              )}
            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Vertical Attacks</h4>
              <div
                className={`${classes.toggleStyle} ${
                  classes.cardCategoryWhite
                }`}
              >
                <span>Simple</span>
                <Switch
                  checked={this.state.checked}
                  onClick={this.toggleTableData}
                  color="primary"
                />
                <span>Detail</span>
              </div>
            </CardHeader>
            <CardBody>
              {this.state.display ? (
                <Table
                  tableHeaderColor="primary"
                  tableHead={this.state.tableHeadData}
                  tableData={sophitiaFrameData.horizontalAttacks.map(data => [
                    data.command,
                    data.impact,
                    data.onBlock,
                    data.onHit,
                    data.counterHit,
                    data.note
                  ])}
                />
              ) : (
                <Table
                  tableHeaderColor="primary"
                  tableHead={this.state.tableHeadData}
                  tableData={sophitiaFrameData.horizontalAttacks.map(data => [
                    data.move,
                    data.impact,
                    data.onBlock,
                    data.onHit,
                    data.counterHit,
                    data.note
                  ])}
                />
              )}
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Kick Attacks </h4>
              <div
                className={`${classes.toggleStyle} ${
                  classes.cardCategoryWhite
                }`}
              >
                <span>Simple</span>
                <Switch
                  checked={this.state.checked}
                  onClick={this.toggleTableData}
                  color="primary"
                />
                <span>Detail</span>
              </div>
            </CardHeader>
            <CardBody>
              {this.state.display ? (
                <Table
                  tableHeaderColor="primary"
                  tableHead={this.state.tableHeadData}
                  tableData={sophitiaFrameData.kicks.map(data => [
                    data.command,
                    data.impact,
                    data.onBlock,
                    data.onHit,
                    data.counterHit,
                    data.note
                  ])}
                />
              ) : (
                <Table
                  tableHeaderColor="primary"
                  tableHead={this.state.tableHeadData}
                  tableData={sophitiaFrameData.kicks.map(data => [
                    data.move,
                    data.impact,
                    data.onBlock,
                    data.onHit,
                    data.counterHit,
                    data.note
                  ])}
                />
              )}
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Dual Button Attacks </h4>
              <div
                className={`${classes.toggleStyle} ${
                  classes.cardCategoryWhite
                }`}
              >
                <span>Simple</span>
                <Switch
                  checked={this.state.checked}
                  onClick={this.toggleTableData}
                  color="primary"
                />
                <span>Detail</span>
              </div>
            </CardHeader>
            <CardBody>
              {this.state.display ? (
                <Table
                  tableHeaderColor="primary"
                  tableHead={this.state.tableHeadData}
                  tableData={sophitiaFrameData.dualButtonAttacks.map(data => [
                    data.command,
                    data.impact,
                    data.onBlock,
                    data.onHit,
                    data.counterHit,
                    data.note
                  ])}
                />
              ) : (
                <Table
                  tableHeaderColor="primary"
                  tableHead={this.state.tableHeadData}
                  tableData={sophitiaFrameData.dualButtonAttacks.map(data => [
                    data.move,
                    data.impact,
                    data.onBlock,
                    data.onHit,
                    data.counterHit,
                    data.note
                  ])}
                />
              )}
            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>
                Special Stance(Avenger Stance)
              </h4>
              <div
                className={`${classes.toggleStyle} ${
                  classes.cardCategoryWhite
                }`}
              >
                <span>Simple</span>
                <Switch
                  checked={this.state.checked}
                  onClick={this.toggleTableData}
                  color="primary"
                />
                <span>Detail</span>
              </div>
            </CardHeader>
            <CardBody>
              {this.state.display ? (
                <Table
                  tableHeaderColor="primary"
                  tableHead={this.state.tableHeadData}
                  tableData={sophitiaFrameData.specialAttacks.map(data => [
                    data.command,
                    data.impact,
                    data.onBlock,
                    data.onHit,
                    data.counterHit,
                    data.note
                  ])}
                />
              ) : (
                <Table
                  tableHeaderColor="primary"
                  tableHead={this.state.tableHeadData}
                  tableData={sophitiaFrameData.specialAttacks.map(data => [
                    data.move,
                    data.impact,
                    data.onBlock,
                    data.onHit,
                    data.counterHit,
                    data.note
                  ])}
                />
              )}
            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>8-Way Run Moves </h4>
              <div
                className={`${classes.toggleStyle} ${
                  classes.cardCategoryWhite
                }`}
              >
                <span>Simple</span>
                <Switch
                  checked={this.state.checked}
                  onClick={this.toggleTableData}
                  color="primary"
                />
                <span>Detail</span>
              </div>
            </CardHeader>
            <CardBody>
              {this.state.display ? (
                <Table
                  tableHeaderColor="primary"
                  tableHead={this.state.tableHeadData}
                  tableData={sophitiaFrameData.eightwayrunAttack.map(data => [
                    data.command,
                    data.impact,
                    data.onBlock,
                    data.onHit,
                    data.counterHit,
                    data.note
                  ])}
                />
              ) : (
                <Table
                  tableHeaderColor="primary"
                  tableHead={this.state.tableHeadData}
                  tableData={sophitiaFrameData.eightwayrunAttack.map(data => [
                    data.move,
                    data.impact,
                    data.onBlock,
                    data.onHit,
                    data.counterHit,
                    data.note
                  ])}
                />
              )}
            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Throws </h4>
              <div
                className={`${classes.toggleStyle} ${
                  classes.cardCategoryWhite
                }`}
              >
                <span>Simple</span>
                <Switch
                  checked={this.state.checked}
                  onClick={this.toggleTableData}
                  color="primary"
                />
                <span>Detail</span>
              </div>
            </CardHeader>
            <CardBody>
              {this.state.display ? (
                <Table
                  tableHeaderColor="primary"
                  tableHead={this.state.tableHeadData}
                  tableData={sophitiaFrameData.throws.map(data => [
                    data.command,
                    data.impact,
                    data.onBlock,
                    data.onHit,
                    data.counterHit,
                    data.note
                  ])}
                />
              ) : (
                <Table
                  tableHeaderColor="primary"
                  tableHead={this.state.tableHeadData}
                  tableData={sophitiaFrameData.throws.map(data => [
                    data.move,
                    data.impact,
                    data.onBlock,
                    data.onHit,
                    data.counterHit,
                    data.note
                  ])}
                />
              )}
            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Reversal Edge Attacks </h4>
              <div
                className={`${classes.toggleStyle} ${
                  classes.cardCategoryWhite
                }`}
              >
                <span>Simple</span>
                <Switch
                  checked={this.state.checked}
                  onClick={this.toggleTableData}
                  color="primary"
                />
                <span>Detail</span>
              </div>
            </CardHeader>
            <CardBody>
              {this.state.display ? (
                <Table
                  tableHeaderColor="primary"
                  tableHead={this.state.tableHeadData}
                  tableData={sophitiaFrameData.reversalEdge.map(data => [
                    data.command,
                    data.impact,
                    data.onBlock,
                    data.onHit,
                    data.counterHit,
                    data.note
                  ])}
                />
              ) : (
                <Table
                  tableHeaderColor="primary"
                  tableHead={this.state.tableHeadData}
                  tableData={sophitiaFrameData.reversalEdge.map(data => [
                    data.move,
                    data.impact,
                    data.onBlock,
                    data.onHit,
                    data.counterHit,
                    data.note
                  ])}
                />
              )}
            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Gauge Attacks </h4>
              <div
                className={`${classes.toggleStyle} ${
                  classes.cardCategoryWhite
                }`}
              >
                <span>Simple</span>
                <Switch
                  checked={this.state.checked}
                  onClick={this.toggleTableData}
                  color="primary"
                />
                <span>Detail</span>
              </div>
            </CardHeader>
            <CardBody>
              {this.state.display ? (
                <Table
                  tableHeaderColor="primary"
                  tableHead={this.state.tableHeadData}
                  tableData={sophitiaFrameData.gaugeAttacks.map(data => [
                    data.command,
                    data.impact,
                    data.onBlock,
                    data.onHit,
                    data.counterHit,
                    data.note
                  ])}
                />
              ) : (
                <Table
                  tableHeaderColor="primary"
                  tableHead={this.state.tableHeadData}
                  tableData={sophitiaFrameData.gaugeAttacks.map(data => [
                    data.move,
                    data.impact,
                    data.onBlock,
                    data.onHit,
                    data.counterHit,
                    data.note
                  ])}
                />
              )}
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}
export default withStyles(styles)(Sophitia);
