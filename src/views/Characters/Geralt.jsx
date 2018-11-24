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
  }
};

function Geralt(props) {
  const { classes } = props;
  //Geralt FrameData
  const geraltFrameData = {
    // verticalAttacks start here

    verticalAttacks: [
      {
        id: 1,

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
        counterHit: "n/a",
        note: ""
      },
      {
        id: 14,
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
        counterHit: "n/a",
        note: ""
      },
      {
        id: 15,
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
        onHit: "n/a",
        counterHit: "+10",
        note: ""
      },
      {
        id: 16,
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
        move: [
          <Fragment>
            <p>Griffin Swipe</p>
            <img className={classes.imgResize} src={d7} />
            <span>*</span>
            <img className={classes.imgResize} src={d8} />
            <span>*</span>
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
        move: [
          <Fragment>
            <p>Turnaround Swipe</p>
            <span>BT</span>
            <img className={classes.imgResize} src={a} />
          </Fragment>
        ],
        impact: [
          <Fragment>
            <p />
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
        move: [
          <Fragment>
            <p>Wyvern Dive</p>
            <img className={classes.imgResize} src={d8} />
            <span>*</span>
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
      }
    ]

    // Crouching Destabilizer	16	12	2	-14	-4	-4
    // :2::K:	:L:	TC / ~FC
    // Dijkstra Legbreaker	18	18	3	-14	-2	4
    // :1::K:	:L:
    // The Law of Surprise	24	20	4	-14	6	STN	11
    // :4::K:	:M:	Bounds on air hit
    // The Law of Surprise ~ Quen Strike		20,20(36)	4,4	-4	10	KND
    // :4::K::K:	:M::M:	NC / Opp. FrC (hit) / Bounds on air hit
    // The Law of Surprise ~ Quen Expel		20,30(44)	4,6	-12	KND	KND
    // :4::K::K: during motion :A:	:M::M:	NC / Bounds on air hit
    // The Law of Surprise ~ Quen Charge		20,44	4,8	6	STN	STN	5
    // :4::K::K: during motion :B:	:M::M:	:BA: / NCC / STN[12?] / Bounds on air hit
    // The Law of Surprise ~ Glyph of Quen - Fleet Footwork		20	4
    // :4::K::2:*:8::B+K:	:M:	:SS: / TS / Bounds on air hit
    // Mahakam Sidewinder	16	12	2	-14	-4	-4
    // FC :K:	:L:	TC / ~FC
    // Manticore Rend	14	18	3	-8	2	2
    // WR :K:	:M:
    // Forktail Pounce	22	16*18*20	3*3*4	-8	4	4
    // :7:*:8:*:9::K:	:M:	TJ
    // Turnaround Cranium Kick		16
    // BT :K:	:H:
    // Turnaround Ankle Stomp		18
    // BT :2::K:	:L:	TC / ~FC
  };

  // console.log(geraltFrameData);
  // console.log(geraltFrameData["verticalAttacks"]);

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Geralt</h4>
            <p className={classes.cardCategoryWhite}>Horizontal Attacks</p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["MOVE", "IMPACT", "OB", "OH", "CH", "NOTE"]}
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
              tableHead={["MOVE", "IMPACT", "OB", "OH", "CH", "NOTE"]}
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
              tableHead={["MOVE", "IMPACT", "OB", "OH", "CH", "NOTE"]}
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

export default withStyles(styles)(Geralt);
