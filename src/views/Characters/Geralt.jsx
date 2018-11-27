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

class Geralt extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      tableHeadData: tableHeadData
    });
  };
  // handleChange = name => event => {
  //   this.setState({ [name]: event.target.checked });
  // };

  render() {
    const { classes } = this.props;

    //Geralt FrameData
    const geraltFrameData = {
      // verticalAttacks start here

      verticalAttacks: [
        {
          id: 1,
          command: "A",
          move: [
            <Fragment>
              <p>Steel Whirlwind</p>
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
          onHit: "-4",
          counterHit: "-4",
          note: ""
        },
        {
          id: 2,
          command: "AA",
          move: [
            <Fragment>
              <p>Steel Whirlwind</p>
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
          onBlock: "-10",
          onHit: "+2",
          counterHit: "+2",
          note: ""
        },
        {
          id: 3,
          command: "AAA",
          move: [
            <Fragment>
              <p>Steel Whirlwind</p>
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
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+8",
          counterHit: "+8",
          note: ""
        },
        {
          id: 4,
          command: "6A",
          move: [
            <Fragment>
              <p>Svalblod Strike</p>
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "-4",
          counterHit: "0",
          note: ""
        },
        {
          id: 5,
          command: "6AA",
          move: [
            <Fragment>
              <p>Svalblod Strike</p>
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 6,
          command: "6AB",
          move: [
            <Fragment>
              <p>Berserker Crush</p>
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "+2",
          counterHit: "+2",
          note: ""
        },
        {
          id: 7,
          command: "3A",
          move: [
            <Fragment>
              <p>Bonhart Blitz</p>
              <img className={classes.imgResize} src={d3} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "-2",
          counterHit: "-2",
          note: ""
        },
        {
          id: 8,
          command: "2A",
          move: [
            <Fragment>
              <p>Shank Slash</p>
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
          onHit: "+4",
          counterHit: "+4",
          note: ""
        },
        {
          id: 9,
          command: "1A",
          move: [
            <Fragment>
              <p>Sweeping Aard Thrust</p>
              <img className={classes.imgResize} src={d1} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>26F</p>
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-20",
          onHit: "-10",
          counterHit: "-4",
          note: ""
        },
        {
          id: 10,
          command: "1AA",
          move: [
            <Fragment>
              <p>Sweeping Aard Thrust</p>
              <img className={classes.imgResize} src={d1} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>26F</p>
              <img className={classes.imgResize} src={l} />
              <img className={classes.imgResize} src={sm} />
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "+4",
          counterHit: "+4",
          note: ""
        },
        {
          id: 11,
          command: "1AB",
          move: [
            <Fragment>
              <p>Kingsweeper</p>
              <img className={classes.imgResize} src={d1} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>26F</p>
              <img className={classes.imgResize} src={l} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-22",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 12,
          command: "1AB(Lethal Hit)",
          move: [
            <Fragment>
              <p>Kingsweeper(Lethal Hit)</p>
              <img className={classes.imgResize} src={d1} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>26F</p>
              <img className={classes.imgResize} src={l} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-22",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={lh} />
              <p>When hitting an opponent with a full soul gauge</p>
            </Fragment>
          ]
        },
        {
          id: 13,
          command: "4A",
          move: [
            <Fragment>
              <p>Adrenaline Onslaught</p>
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>

              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "-6",
          counterHit: "N/A",
          note: ""
        },
        {
          id: 14,
          command: "4A CH",
          move: [
            <Fragment>
              <p>Adrenaline Onslaught(Counter Hit)</p>
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "0",
          counterHit: "N/A",
          note: ""
        },
        {
          id: 15,
          command: "4A:A",
          move: [
            <Fragment>
              <p>Adrenaline Onslaught(Counter Hit)</p>
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={a} />
              <span>:</span>
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "N/A",
          counterHit: "+10",
          note: ""
        },
        {
          id: 16,
          command: "FC A",
          move: [
            <Fragment>
              <p>Gnomish Knee Slash</p>
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
          onHit: "+4",
          counterHit: "+4",
          note: ""
        },
        {
          id: 17,
          command: "WR A",
          move: [
            <Fragment>
              <p>Feline Lacerate</p>
              <span>WR</span>
              <img className={classes.imgResize} src={a} />
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
          counterHit: "+2",
          note: ""
        },
        {
          id: 18,
          command: "7*8*9A",
          move: [
            <Fragment>
              <p>Griffin Swipe</p>
              <img className={classes.imgResize} src={d7} />
              <span> * </span>
              <img className={classes.imgResize} src={d8} />
              <span> * </span>
              <img className={classes.imgResize} src={d9} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "+6",
          counterHit: "+6",
          note: ""
        },
        {
          id: 19,
          command: "BT A",
          move: [
            <Fragment>
              <p>Turnaround Swipe</p>
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
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: ""
        },
        {
          id: 20,
          command: "BT 2A",
          move: [
            <Fragment>
              <p>Turnaround Shincracker</p>
              <span>BT</span>
              <img className={classes.imgResize} src={d2} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
              <img className={classes.imgResize} src={sl} />
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: ""
        }
      ],

      // horizontalAttacks start here

      horizontalAttacks: [
        {
          id: 21,
          command: "B",
          move: [
            <Fragment>
              <p>Wolf Bite</p>
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "0",
          counterHit: "0",
          note: ""
        },
        {
          id: 22,
          command: "BB",
          move: [
            <Fragment>
              <p>Wolf Bite</p>
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
          id: 23,
          command: "BBB",
          move: [
            <Fragment>
              <p>Wolf Bite</p>
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
          onBlock: "-10",
          onHit: "+6",
          counterHit: "+6",
          note: ""
        },
        {
          id: 24,
          command: "6B",
          move: [
            <Fragment>
              <p>Impaling Hilt</p>
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "0",
          counterHit: "0",
          note: ""
        },
        {
          id: 25,
          command: "6BB",
          move: [
            <Fragment>
              <p>Impaling Hilt ~ Igni Burn</p>
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "0",
          counterHit: "0",
          note: ""
        },
        {
          id: 26,
          command: "3B",
          move: [
            <Fragment>
              <p>Skelliger Uppercut</p>
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
          onBlock: "-14",
          onHit: "LNC",
          counterHit: "LNC",
          note: ""
        },
        {
          id: 27,
          command: "2B",
          move: [
            <Fragment>
              <p>Sunderstep</p>
              <img className={classes.imgResize} src={d2} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+2",
          counterHit: "+2",
          note: ""
        },
        {
          id: 28,
          command: "1B",
          move: [
            <Fragment>
              <p>Crippling Strike</p>
              <img className={classes.imgResize} src={d1} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>26F</p>
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 29,
          command: "4B",
          move: [
            <Fragment>
              <p>Backhand Eviscerate</p>
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 30,
          command: "4B",
          move: [
            <Fragment>
              <p>Backhand Eviscerate(Lethal Hit)</p>
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={lh} />
              <p>Against soul charged opponent</p>
            </Fragment>
          ]
        },
        {
          id: 31,
          command: "4[B]",
          move: [
            <Fragment>
              <p>Backhand Eviscerate</p>
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={b_h} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>44F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "SLNC",
          counterHit: "SLNC",
          note: ""
        },
        {
          id: 32,
          command: "4[B]",
          move: [
            <Fragment>
              <p>Backhand Eviscerate(Lethal Hit)</p>
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={b_h} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>44F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "SLNC",
          counterHit: "SLNC",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={lh} />
              <p>Against soul charged opponent</p>
            </Fragment>
          ]
        },
        {
          id: 33,
          command: "FC B",
          move: [
            <Fragment>
              <p>Dwarven Dismember</p>
              <span>FC</span>
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+2",
          counterHit: "+2",
          note: ""
        },
        {
          id: 34,
          command: "WR B",
          move: [
            <Fragment>
              <p>Panther Shred</p>
              <span>WR</span>
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
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
          id: 35,
          command: "7B",
          move: [
            <Fragment>
              <p>Wyvern Dive</p>
              <img className={classes.imgResize} src={d7} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>36F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+2",
          counterHit: "+2",
          note: ""
        },
        {
          id: 36,
          command: "8*9B",
          move: [
            <Fragment>
              <p>Wyvern Dive</p>
              <img className={classes.imgResize} src={d8} />
              <span> * </span>
              <img className={classes.imgResize} src={d9} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>36F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 37,
          command: "BT B",
          move: [
            <Fragment>
              <p>Turnaround Crush</p>
              <span>BT</span>
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: ""
        },
        {
          id: 38,
          command: "BT 2B",
          move: [
            <Fragment>
              <p>Turnaround Crippler</p>
              <span>BT</span>
              <img className={classes.imgResize} src={d2} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: ""
        }
      ],

      // Kicks start here
      kicks: [
        {
          id: 39,
          command: "K",
          move: [
            <Fragment>
              <p>Septum Deviator</p>
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "0",
          counterHit: "0",
          note: ""
        },
        {
          id: 40,
          command: "6K",
          move: [
            <Fragment>
              <p>Splintered Sternum </p>
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
          onBlock: "-10",
          onHit: "+2",
          counterHit: "KND",
          note: ""
        },
        {
          id: 41,
          command: "6[K]",
          move: [
            <Fragment>
              <p>Splintered Sternum </p>
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResize} src={k_h} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>34F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "+2",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 42,
          command: "3K",
          move: [
            <Fragment>
              <p>Kidney Crunch</p>
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
          onBlock: "-8",
          onHit: "+2",
          counterHit: "+2",
          note: ""
        },

        {
          id: 43,
          command: "2K",
          move: [
            <Fragment>
              <p>Crouching Destabilizer</p>
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
          note: ""
        },
        {
          id: 44,
          command: "2K",
          move: [
            <Fragment>
              <p>Dijkstra Legbreaker</p>
              <img className={classes.imgResize} src={d1} />
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
          counterHit: "+4",
          note: ""
        },
        {
          id: 45,
          command: "4K",
          move: [
            <Fragment>
              <p>The Law of Surprise</p>
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "+6",
          counterHit: "STN",
          note: ""
        },
        {
          id: 46,
          command: "4KK",
          move: [
            <Fragment>
              <p>The Law of Surprise ~ Quen Strike</p>
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={k} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "+10",
          counterHit: "KND",
          note: ""
        },
        {
          id: 47,
          command: "4KK~A",
          move: [
            <Fragment>
              <p>The Law of Surprise ~ Quen Expel</p>
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={k} />
              <img className={classes.imgResize} src={k} />
              <span>~</span>
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 48,
          command: "4KK~B",
          move: [
            <Fragment>
              <p>The Law of Surprise ~ Quen Charge</p>
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={k} />
              <img className={classes.imgResize} src={k} />
              <span>~</span>
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "+6",
          onHit: "STN",
          counterHit: "STN",
          note: <img className={classes.imgNote} src={ba} />
        },
        {
          id: 49,
          command: "4KK~ 2/8B+K",
          move: [
            <Fragment>
              <p>The Law of Surprise ~ Glyph of Quen - Fleet Footwork </p>
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={k} />
              <span>~</span>
              <img className={classes.imgResize} src={d2} />
              <span> * </span>
              <img className={classes.imgResize} src={d8} />
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
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: <img className={classes.imgNote} src={ss} />
        },
        {
          id: 50,
          command: "FC K",
          move: [
            <Fragment>
              <p>Mahakam Sidewinder</p>
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
          note: "TC / FC"
        },
        {
          id: 51,
          command: "WR K",
          move: [
            <Fragment>
              <p>Manticore Rend </p>
              <span>WR</span>
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+2",
          counterHit: "+2",
          note: ""
        },
        {
          id: 52,
          command: "7*8*9K",
          move: [
            <Fragment>
              <p>Forktail Pounce</p>
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
          onBlock: "-8",
          onHit: "+4",
          counterHit: "+4",
          note: "TJ"
        },
        {
          id: 53,
          command: "BT K",
          move: [
            <Fragment>
              <p>Turnaround Cranium Kick</p>
              <span>BT</span>
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: ""
        },
        {
          id: 54,
          command: "BT 2K",
          move: [
            <Fragment>
              <p>Turnaround Ankle Stomp</p>
              <span>BT</span>
              <img className={classes.imgResize} src={d2} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>F</p>
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: "TC / FC"
        }
      ],
      // dual button attackts start here
      dualButtonAttacks: [
        {
          id: 55,
          command: "A+B",
          move: [
            <Fragment>
              <p>Thunderbolt Overdose</p>
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>36F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "+4",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={lh} />
              <p>Against Impact Counter</p>
            </Fragment>
          ]
        },
        {
          id: 56,
          command: "A+B(Lethal Hit)",
          move: [
            <Fragment>
              <p>Thunderbolt Overdose(Lethal Hit)</p>
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>36F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "+4",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={lh} />
              <p>Against Impact Counter</p>
            </Fragment>
          ]
        },
        {
          id: 57,
          command: "B+K",
          move: [
            <Fragment>
              <p>Rolling Charge</p>
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>44F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <p>TC / LNC grounded opponent</p>
            </Fragment>
          ]
        },
        {
          id: 58,
          command: "B+K ~ 2*8B+K",
          move: [
            <Fragment>
              <p>Rolling Charge ~ Fleet Footwork</p>
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
              <span>~</span>
              <img className={classes.imgResize} src={d2} />
              <span> * </span>
              <img className={classes.imgResize} src={d8} />
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
              <p>TC / TS</p>
            </Fragment>
          ]
        },
        {
          id: 59,
          command: "6B+K",
          move: [
            <Fragment>
              <p>Swallow Surge</p>
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
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
          note: ""
        },
        {
          id: 60,
          command: "6B+K B",
          move: [
            <Fragment>
              <p>Swallow Surge</p>
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
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
          onBlock: "-14",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 61,
          command: "6B+K B",
          move: [
            <Fragment>
              <p>Swallow Surge(Against Soul-Charged Enemy)</p>
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
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
          onBlock: "-14",
          onHit: "STN",
          counterHit: "STN",
          note: "Against Soul-Charged Opponent / Ground STN"
        },
        {
          id: 62,
          command: "2*8B+K",
          move: [
            <Fragment>
              <p>Fleet Footwork</p>
              <img className={classes.imgResize} src={d2} />
              <span> * </span>
              <img className={classes.imgResize} src={d8} />
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
          note: <img className={classes.imgNote} src={ss} />
        },
        {
          id: 63,
          command: "BT B+K",
          move: [
            <Fragment>
              <p>Precision Aard Pummel</p>
              <span>BT</span>
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
          onBlock: "-12",
          onHit: "STN",
          counterHit: "STN",
          note: ""
        },
        {
          id: 64,
          command: "BT B+KB",
          move: [
            <Fragment>
              <p>Precision Aard Pummel</p>
              <span>BT</span>
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
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
          onBlock: "-10",
          onHit: "KND",
          counterHit: "KND",
          note: "Jails"
        },
        {
          id: 65,
          command: "K+G",
          move: [
            <Fragment>
              <p>Appeal</p>

              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={g} />
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
          note: "Taunt"
        }
      ],

      // 8way-run attacks start here
      eightwayrunAttack: [
        {
          id: 66,
          command: "33*66*99A",
          move: [
            <Fragment>
              <p>Cleaving Pirouette</p>
              <img className={classes.imgResize} src={d3_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d6_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d9_h} />
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
          onHit: "0",
          counterHit: "0",
          note: ""
        },
        {
          id: 66,
          command: "33*66*99AA",
          move: [
            <Fragment>
              <p>Cleaving Pirouette</p>
              <img className={classes.imgResize} src={d3_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d6_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d9_h} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "2",
          counterHit: "2",
          note: "Jails"
        },
        {
          id: 67,
          command: "33*66*99AB",
          move: [
            <Fragment>
              <p>Cleaving Pirouette ~ Quen Strike</p>
              <img className={classes.imgResize} src={d3_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d6_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d9_h} />
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
          onBlock: "-4",
          onHit: "10",
          counterHit: "KND",
          note: ""
        },
        {
          id: 67,
          command: "33*66*99AB~A",
          move: [
            <Fragment>
              <p>Cleaving Pirouette ~ Quen Expel</p>
              <img className={classes.imgResize} src={d3_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d6_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d9_h} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={b} />
              <span>~</span>
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 68,
          command: "33*66*99AB~A",
          move: [
            <Fragment>
              <p>Cleaving Pirouette ~ Quen Charge</p>
              <img className={classes.imgResize} src={d3_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d6_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d9_h} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={b} />
              <span>~</span>
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
          onBlock: "+6",
          onHit: "KND",
          counterHit: "KND",
          note: <img className={classes.imgNote} src={ba} />
        },
        {
          id: 69,
          command: "33*66*99AB~2*8B+K",
          move: [
            <Fragment>
              <p>Cleaving Pirouette ~ Glyph of Quen - Fleet Footwork</p>
              <img className={classes.imgResize} src={d3_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d6_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d9_h} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={b} />
              <span>~</span>
              <img className={classes.imgResize} src={d2} />
              <span> * </span>
              <img className={classes.imgResize} src={d8} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "N/A",
          counterHit: "N/A",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ss} />
              <p>TS</p>
            </Fragment>
          ]
        },
        {
          id: 70,
          command: "33*66*99AK",
          move: [
            <Fragment>
              <p>Toussant Two-Step</p>
              <img className={classes.imgResize} src={d3_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d6_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d9_h} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "+4",
          counterHit: "+4",
          note: ""
        },
        {
          id: 71,
          command: "33*66*99A[K]",
          move: [
            <Fragment>
              <p>Toussant Two-Step</p>
              <img className={classes.imgResize} src={d3_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d6_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d9_h} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={k_h} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "+2",
          onHit: "+10",
          counterHit: "+10",
          note: ""
        },
        {
          id: 72,
          command: "22*88A",
          move: [
            <Fragment>
              <p>Sword Deflection </p>
              <img className={classes.imgResize} src={d2_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d8_h} />

              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>32F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "0",
          counterHit: "0",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={lh} />
              <p>Lethal Hit on successful GI</p>
              <img className={classes.imgNote} src={gi} />
              <p>GI horizontals excpet kicks</p>
            </Fragment>
          ]
        },
        {
          id: 73,
          command: "22*88A(Lethal Hit)",
          move: [
            <Fragment>
              <p>Sword Deflection(Lethal Hit) </p>
              <img className={classes.imgResize} src={d2_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d8_h} />

              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>32F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={lh} />
              <p>Lethal Hit on successful GI</p>
              <img className={classes.imgNote} src={gi} />
              <p>GI horizontals excpet kicks</p>
            </Fragment>
          ]
        },
        {
          id: 74,
          command: "11*44*77A",
          move: [
            <Fragment>
              <p>Deadly Retribution</p>
              <img className={classes.imgResize} src={d1_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d4_h} />
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
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={at} />
              <p>Extra damages against Soul Charged opponent</p>
            </Fragment>
          ]
        },
        {
          id: 75,
          command: "66B",
          move: [
            <Fragment>
              <p>Gyrating Slash</p>
              <img className={classes.imgResize} src={d6_h} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>30F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "-4",
          counterHit: "-4",
          note: ""
        },
        {
          id: 76,
          command: "66BA",
          move: [
            <Fragment>
              <p>Gyrating Slash</p>
              <img className={classes.imgResize} src={d6_h} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>30F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "+4",
          counterHit: "+4",
          note: ""
        },
        {
          id: 77,
          command: "66BA(Lethal Hit)",
          move: [
            <Fragment>
              <p>Gyrating Slash(Lethal Hit)</p>
              <img className={classes.imgResize} src={d6_h} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>30F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={lh} />
              <p>STN against Soul Charged opponent</p>
            </Fragment>
          ]
        },
        {
          id: 78,
          command: "66BB",
          move: [
            <Fragment>
              <p>Alzur's Double-Cross</p>
              <img className={classes.imgResize} src={d6_h} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>30F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 79,
          command: "33*99B",
          move: [
            <Fragment>
              <p>Fiery Dancer</p>
              <img className={classes.imgResize} src={d3_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d9_h} />
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
          onBlock: "-14",
          onHit: "STN",
          counterHit: "STN",
          note: ""
        },
        {
          id: 80,
          command: "22*88B",
          move: [
            <Fragment>
              <p>Circle of Power</p>
              <img className={classes.imgResize} src={d2_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d8_h} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>42F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-2",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 81,
          command: "11*44*77B",
          move: [
            <Fragment>
              <p>Swift Silver</p>
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
              <p>26F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-18",
          onHit: "-8",
          counterHit: "-8",
          note: <p>Extra damages against Soul Charged opponent</p>
        },
        {
          id: 82,
          command: "11*44*77BB",
          move: [
            <Fragment>
              <p>Swift Silver</p>
              <img className={classes.imgResize} src={d1_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d4_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d7_h} />
              <img className={classes.imgResize} src={b} />
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
          onBlock: "-16",
          onHit: "KND",
          counterHit: "KND",
          note: <p>Extra damages against Soul Charged opponent</p>
        },

        {
          id: 83,
          command: "33*66*99K",
          move: [
            <Fragment>
              <p>Sir Ravix Roundhouse</p>
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
              <p>18F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "+4",
          counterHit: "+4",
          note: ""
        },
        {
          id: 84,
          command: "22*88K",
          move: [
            <Fragment>
              <p>Dijksta Legbreaker</p>
              <img className={classes.imgResize} src={d2_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d8_h} />
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
          counterHit: "+4",
          note: ""
        },
        {
          id: 85,
          command: "11*44*77K",
          move: [
            <Fragment>
              <p>The Law of Surprise</p>
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
              <p>24F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "+6",
          counterHit: "STN",
          note: ""
        },
        {
          id: 86,
          command: "11*44*77KK",
          move: [
            <Fragment>
              <p>The Law of Surprise ~ Quen Strike</p>
              <img className={classes.imgResize} src={d1_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d4_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d7_h} />
              <img className={classes.imgResize} src={k} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "+10",
          counterHit: "KND",
          note: ""
        },
        {
          id: 87,
          command: "11*44*77KK~A",
          move: [
            <Fragment>
              <p>The Law of Surprise ~ Quen Expel</p>
              <img className={classes.imgResize} src={d1_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d4_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d7_h} />
              <img className={classes.imgResize} src={k} />
              <img className={classes.imgResize} src={k} />
              <span>~</span>
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 88,
          command: "11*44*77K~B",
          move: [
            <Fragment>
              <p>The Law of Surprise ~ Quen Charge</p>
              <img className={classes.imgResize} src={d1_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d4_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d7_h} />
              <img className={classes.imgResize} src={k} />
              <img className={classes.imgResize} src={k} />
              <span>~</span>
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "+6",
          onHit: "STN",
          counterHit: "STN",
          note: <img className={classes.imgNote} src={ba} />
        },
        {
          id: 89,
          command: "11*44*77KK~ 2/8B+K",
          move: [
            <Fragment>
              <p>The Law of Surprise ~ Glyph of Quen - Fleet Footwork </p>
              <img className={classes.imgResize} src={d1_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d4_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d7_h} />
              <img className={classes.imgResize} src={k} />
              <span>~</span>
              <img className={classes.imgResize} src={d2} />
              <span> * </span>
              <img className={classes.imgResize} src={d8} />
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
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: <img className={classes.imgNote} src={ss} />
        },
        {
          id: 89,
          command: "33*66*99 B+K",
          move: [
            <Fragment>
              <p>Whirling Manticore</p>
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
              <p>28F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "LNC",
          counterHit: "LNC",
          note: <p>TJ</p>
        },

        {
          id: 90,
          command: "22*88B+K",
          move: [
            <Fragment>
              <p>Fleet Footwork</p>
              <img className={classes.imgResize} src={d2_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d8_h} />
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
          note: <img className={classes.imgNote} src={ss} />
        },
        {
          id: 91,
          command: "11*44*77B+K",
          move: [
            <Fragment>
              <p>Rolling Charge</p>
              <img className={classes.imgResize} src={d1_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d4_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d7_h} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>44F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <p>TC / LNC grounded opponent</p>
            </Fragment>
          ]
        },
        {
          id: 92,
          command: "11*44*77B+K ~ 2*8B+K",
          move: [
            <Fragment>
              <p>Rolling Charge ~ Fleet Footwork</p>
              <img className={classes.imgResize} src={d1_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d4_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d7_h} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
              <span>~</span>
              <img className={classes.imgResize} src={d2} />
              <span> * </span>
              <img className={classes.imgResize} src={d8} />
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
              <p>TC / TS</p>
            </Fragment>
          ]
        },
        {
          id: 93,
          command: "RUN K",
          move: [
            <Fragment>
              <p>Viper in the Grass</p>
              <span>RUN</span>
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>26F</p>
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-22",
          onHit: "KND",
          counterHit: "KND",
          note: <p>TJ /TC</p>
        }
      ],

      //throws start here
      throws: [
        {
          id: 94,
          command: "A+G",
          move: [
            <Fragment>
              <p>Monster Slayer</p>
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
              <p>Foward RingOut</p>
            </Fragment>
          ]
        },
        {
          id: 95,
          command: "4A+G",
          move: [
            <Fragment>
              <p>Geralt's Fury</p>
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
              <p>Side switch</p>
            </Fragment>
          ]
        },
        {
          id: 96,
          command: "Left Throw",
          move: [
            <Fragment>
              <p>Temerian Devil</p>
              <p>Left side throw</p>
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
              <p>Left side throw</p>
            </Fragment>
          ]
        },
        {
          id: 97,
          command: "Right Throw",
          move: [
            <Fragment>
              <p>Adrenaline Rush</p>
              <p>Right side throw</p>
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
              <p>Right side throw</p>
              <p>Foward RingOut</p>
            </Fragment>
          ]
        },
        {
          id: 98,
          command: "Back Throw",
          move: [
            <Fragment>
              <p>Mutant's Wrath</p>
              <p>Back throw</p>
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
              <p>Back throw</p>
            </Fragment>
          ]
        },
        {
          id: 99,
          command: "A+G*4A+G A+B",
          move: [
            <Fragment>
              <p>Vaulting Aard Hammer</p>
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={g} />
              <span> * </span>
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={g} />
              <span> </span>
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
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={th} />
              <img className={classes.imgNote} src={sg} />
            </Fragment>
          ]
        },
        {
          id: 100,
          command: "A+G*4A+G A+B(Lethal Hit)",
          move: [
            <Fragment>
              <p>Vaulting Aard Hammer(Lethal Hit)</p>
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={g} />
              <span> * </span>
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={g} />
              <span> </span>
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
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={th} />
              <img className={classes.imgNote} src={sg} />
              <img className={classes.imgNote} src={lh} />
              <p>Lethal Hit against Soul Charged opponent</p>
            </Fragment>
          ]
        }
      ],
      // reversal edge start here
      reversalEdge: [
        {
          id: 101,
          command: "B+G",
          move: [
            <Fragment>
              <p>Parry</p>
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={g} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>44F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "N/A",
          counterHit: "N/A",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={re} />
            </Fragment>
          ]
        },
        {
          id: 102,
          command: "(B+G)",
          move: [
            <Fragment>
              <p>Parry</p>
              <img className={classes.imgResize} src={b_h} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={g_h} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>44F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-4",
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
          id: 103,
          command: "RE A",
          move: [
            <Fragment>
              <p>School of the Wolf</p>
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
          onHit: "N/A",
          counterHit: "N/A",
          note: ""
        },
        {
          id: 104,
          command: "RE AA",
          move: [
            <Fragment>
              <p>School of the Wolf</p>
              <img className={classes.imgNote} src={re} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>N/A</p>
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 105,
          command: "RE AA(Lethal Hit)",
          move: [
            <Fragment>
              <p>School of the Wolf(Lethal Hit)</p>
              <img className={classes.imgNote} src={re} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>N/A</p>
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={lh} />
              <p>Lethal Hit on RE 2nd stage</p>
            </Fragment>
          ]
        },
        {
          id: 106,
          command: "RE B",
          move: [
            <Fragment>
              <p>Butcher of Blaviken</p>
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
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={at} />
              <img className={classes.imgNote} src={lh} />
              <p>Lethal Hit on RE 2nd stage</p>
            </Fragment>
          ]
        },
        {
          id: 107,
          command: "RE K",
          move: [
            <Fragment>
              <p>Flood of Anger</p>
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
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={lh} />
              <p>Lethal Hit on RE 2nd stage</p>
            </Fragment>
          ]
        },
        {
          id: 108,
          command: "RE G",
          move: [
            <Fragment>
              <p>Guard</p>
              <img className={classes.imgNote} src={re} />
              <img className={classes.imgResize} src={g} />
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
          note: ""
        },
        {
          id: 109,
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
          id: 110,
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
          id: 111,
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
          id: 112,
          command: "A+B+K",
          move: [
            <Fragment>
              <p>Hunt of the White Wolf</p>
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
              <img className={classes.imgNote} src={at} />
            </Fragment>
          ]
        },
        {
          id: 113,
          command: "6B[B]",
          move: [
            <Fragment>
              <p>Impaling Hilt ~ Igni Burn</p>
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={b_h} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={sm} />
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sg} />
              <p>Jails</p>
            </Fragment>
          ]
        },
        {
          id: 114,
          command: "6A+B",
          move: [
            <Fragment>
              <p>Quen Strike</p>
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>43F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "+10",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sg} />
            </Fragment>
          ]
        },
        {
          id: 115,
          command: "6A+B~A",
          move: [
            <Fragment>
              <p>Quen Expel</p>
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={b} />
              <span>~</span>
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>44F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "+10",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sg} />
            </Fragment>
          ]
        },
        {
          id: 116,
          command: "6A+B~B",
          move: [
            <Fragment>
              <p>Quen Charge</p>
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={b} />
              <span>~</span>
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>44F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "+6",
          onHit: "STN",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sg} />
              <img className={classes.imgNote} src={ba} />
            </Fragment>
          ]
        },
        {
          id: 117,
          command: "6A+B ~ 2*8B+K",
          move: [
            <Fragment>
              <p>Glyph of Quen - Fleet Footwork </p>
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={b} />
              <span>~</span>
              <img className={classes.imgResize} src={d2} />
              <span> * </span>
              <img className={classes.imgResize} src={d8} />
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
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sg} />
              <img className={classes.imgNote} src={ss} />
              <p>TS</p>
            </Fragment>
          ]
        },
        {
          id: 118,
          command: "2A+B",
          move: [
            <Fragment>
              <p>Igni Burn</p>
              <img className={classes.imgResize} src={d2} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "+4",
          counterHit: "+4",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sg} />
              <p>Jails</p>
            </Fragment>
          ]
        },
        {
          id: 119,
          command: "2[A+B]",
          move: [
            <Fragment>
              <p>Igni Burn</p>
              <img className={classes.imgResize} src={d2} />
              <img className={classes.imgResize} src={a_h} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={b_h} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={sm} />
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sg} />
              <p>Jails</p>
            </Fragment>
          ]
        },
        {
          id: 120,
          command: "4*11*44*77A+B",
          move: [
            <Fragment>
              <p>Yrden Glyph</p>
              <img className={classes.imgResize} src={d4} />
              <span> * </span>
              <img className={classes.imgResize} src={d1_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d4_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d7_h} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>N/A</p>
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sg} />
              <img className={classes.imgNote} src={gi} />
              <p>GI all levels from [6-18F]</p>
            </Fragment>
          ]
        },
        {
          id: 121,
          command: "8A+B",
          move: [
            <Fragment>
              <p>Aard Push</p>
              <img className={classes.imgResize} src={d8} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>10F</p>
              <img className={classes.imgResize} src={sm} />
            </Fragment>
          ],
          onBlock: "-10F",
          onHit: "+4",
          counterHit: "+4",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sg} />
              <p>STN grounded oponent</p>
            </Fragment>
          ]
        },
        {
          id: 122,
          command: "33*66*99A+B",
          move: [
            <Fragment>
              <p>Igni Armor Melter</p>
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
              <p>60F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "STN",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sg} />
              <img className={classes.imgNote} src={ua} />
              <p> Can be cancelled with G</p>
            </Fragment>
          ]
        },
        {
          id: 123,
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
              <p>Invincible[4~?F]</p>
            </Fragment>
          ]
        },
        {
          id: 124,
          command: "SC AAAA",
          move: [
            <Fragment>
              <p>Wolven Storm</p>
              <img className={classes.imgNote} src={sc} />
              <img className={classes.imgResize} src={a} />
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
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sc} />
            </Fragment>
          ]
        },
        {
          id: 125,
          command: "SC 6ABB",
          move: [
            <Fragment>
              <p>Ursine Rage</p>
              <img className={classes.imgNote} src={sc} />
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sc} />
            </Fragment>
          ]
        },
        {
          id: 126,
          command: "SC 3A",
          move: [
            <Fragment>
              <p>Tawny Owl Upsurge</p>
              <img className={classes.imgNote} src={sc} />
              <img className={classes.imgResize} src={d3} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "-2",
          counterHit: "-2",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sc} />
            </Fragment>
          ]
        },
        {
          id: 127,
          command: "SC 3AA",
          move: [
            <Fragment>
              <p>Tawny Owl Upsurge</p>
              <img className={classes.imgNote} src={sc} />
              <img className={classes.imgResize} src={d3} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={a} />
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
          onHit: "-10",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sc} />
            </Fragment>
          ]
        },
        {
          id: 128,
          command: "SC 3AAA",
          move: [
            <Fragment>
              <p>Tawny Owl Upsurge</p>
              <img className={classes.imgNote} src={sc} />
              <img className={classes.imgResize} src={d3} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "+2",
          counterHit: "+2",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sc} />
            </Fragment>
          ]
        },
        {
          id: 128,
          command: "SC 3AAAA",
          move: [
            <Fragment>
              <p>Tawny Owl Upsurge</p>
              <img className={classes.imgNote} src={sc} />
              <img className={classes.imgResize} src={d3} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sc} />
            </Fragment>
          ]
        },
        {
          id: 129,
          command: "SC 33*66*99AAA",
          move: [
            <Fragment>
              <p>Blizzard Frenzy</p>
              <img className={classes.imgNote} src={sc} />
              <img className={classes.imgResize} src={d3_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d6_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d9_h} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={m} />
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
        }
      ]
    };

    // Blizzard Frenzy		14,16,26	2,3,4	4	KND	KND
    // SC:(3):*:(6):*:(9)::A::A::A:	:H::H::M:	:SC: / First 2 hits NC

    //toggle detail/simple display
    // const tableHeadDetail = [
    //   "MOVE",
    //   "IMPACT",
    //   "OnBlock",
    //   "OnHit",
    //   "CounterHit",
    //   "NOTE"
    // ];
    // const tableHeadSimple = ["M", "I", "OB", "OH", "CH", "NOTE"];

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
                <span>Numeric</span>
                <Switch
                  checked={this.state.checked}
                  onClick={this.toggleTableData}
                  // value= "tableHeadDetail"
                  color="primary"
                />
                <span>Detail</span>
              </div>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={this.state.tableHeadData}
                // tableHead={tableHeadDetail}
                tableData={geraltFrameData.verticalAttacks.map(data => [
                  data.move,
                  data.impact,
                  data.onBlock,
                  data.onHit,
                  data.counterHit,
                  data.note
                ])}
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
                tableHead={this.state.tableHeadData}
                tableData={geraltFrameData.horizontalAttacks.map(data => [
                  data.move,
                  data.impact,
                  data.onBlock,
                  data.onHit,
                  data.counterHit,
                  data.note
                ])}
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
                tableHead={this.state.tableHeadData}            
                tableData={geraltFrameData.kicks.map(data => [
                  data.move,
                  data.impact,
                  data.onBlock,
                  data.onHit,
                  data.counterHit,
                  data.note
                ])}
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
                tableHead={this.state.tableHeadData}              
                tableData={geraltFrameData.dualButtonAttacks.map(data => [
                  data.move,
                  data.impact,
                  data.onBlock,
                  data.onHit,
                  data.counterHit,
                  data.note
                ])}
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
                tableHead={this.state.tableHeadData}              
                tableData={geraltFrameData.eightwayrunAttack.map(data => [
                  data.move,
                  data.impact,
                  data.onBlock,
                  data.onHit,
                  data.counterHit,
                  data.note
                ])}
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
                tableHead={this.state.tableHeadData}        
                tableData={geraltFrameData.throws.map(data => [
                  data.move,
                  data.impact,
                  data.onBlock,
                  data.onHit,
                  data.counterHit,
                  data.note
                ])}
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
                tableHead={tableHeadDetail}
                tableData={geraltFrameData.reversalEdge.map(data => [
                  data.move,
                  data.impact,
                  data.onBlock,
                  data.onHit,
                  data.counterHit,
                  data.note
                ])}
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
                tableHead={this.state.tableHeadData}              
                tableData={geraltFrameData.gaugeAttacks.map(data => [
                  data.move,
                  data.impact,
                  data.onBlock,
                  data.onHit,
                  data.counterHit,
                  data.note
                ])}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}
export default withStyles(styles)(Geralt);
