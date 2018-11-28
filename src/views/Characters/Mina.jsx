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
class Mina extends Component {
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

    // Root Fang	28	18		-16	-6	-6	4.17%
    // :(4)::A:	:L:	:LH: tip range
    // Root Fang	28	18		-5	:LH:	-6	4.17%
    // :(4)::A: (tip)	:L:
    // Lightning Thrust	18	22		-12	+4	+4	9.17%
    // :(6)::B:	:M:	Can be held
    // Sky Blossom	19	32		-17	LNC	LNC	9.17%
    // :(2):*:(8)::B:	:M:	TC[10-15]
    // Lightning Fang	22	22		-20	-8	-8	2.92%
    // :(1):*:(7)::B:	:L:	TC[6-57]
    // Lightning Fang	22	34		-10	KND	-8	2.92%
    // :(1):*:(7)::B: (tip)	:L:	TC[6-57]
    // Top Hammer Fang	34	20		+1	STN	STN	9.17%
    // :(4)::B:	:M:	More advantage at max range
    // Circular Heaven Spin Kick	22	10		-10	+2	+2	2.92%
    // :(6)::K:	:M:	TJ[5-16]
    // Circular Heaven Spin Kick	22	10,10		-14	-4	-4	2.92,2.92%
    // :(6)::K::K:	:M::M:	TJ[7-18]
    // Circular Heaven Spin Kick	22	10,10,14		-8	+8	STN	2.92,2.92,1.67%
    // :(6)::K::K::K:	:M::M::H:
    // Thunder Kick	30	30		+0	STN	STN	9.17%
    // :(2):*:(8)::K:	:M:	TJ[12-30]
    // Circular Blade Kick	26	32		-12	+8	+8	1.67%
    // :(4)::K:	:M:	:LH: against lows
    // Spinning Divide	28	40		-8	KND	KND	25%
    // :(6)::A+B:	:M:
    // Seong's Diamond Crusher	40	52		-2	LNC	LNC	41.67%
    // :(4)::A+B:	:M:	:LH: against guard crush state
    // Jagged Comet Blade	18	11,21		-22	KND	KND	3.33%
    // :(6)::B+K:	:M::M:	TJ
    // Jagged Comet Blade	18	16,26,5		-2	+6	+6	3.33%
    // :(6)::(B+K):	:M::M::SL:	Last hit only connects on prone or STN
    // Glory Wing	38	36		-6	KND	KND	12.50%
    // :(4)::B+K:	:M:	TC[16-37]
    // Talon Rush	38	44		+8	KND	KND	16.67%
    // :(4)::(B+K):	:M:	:BA:TC[1-13]
    // Sliding	20	26		-22	LNC	LNC	9.17%
    // Run :K:	:L:	TC[26-46] / TJ[6-26]

    //Mina FrameData
    // verticalAttacks start here

    const minaFrameData = {
      verticalAttacks: [
        {
          id: 1,
          command: "A",
          move: [
            <Fragment>
              <p>Fang</p>
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "+2",
          counterHit: "+2",
          note: ""
        },
        {
          id: 2,
          command: "AA",
          move: [
            <Fragment>
              <p>Twin Fang</p>
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
          onBlock: "-12",
          onHit: "0",
          counterHit: "0",
          note: "Jails"
        },
        {
          id: 3,
          command: "AAA",
          move: [
            <Fragment>
              <p>Tumultuous Assault</p>
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
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "0",
          counterHit: "",
          note: ""
        },
        {
          id: 4,
          command: "AAB",
          move: [
            <Fragment>
              <p>Twin Fang Trust</p>
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={b} />
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
          onBlock: "-14",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 5,
          command: "6A",
          move: [
            <Fragment>
              <p>Violet Squall</p>
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-18",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 6,
          command: "6A(tip)",
          move: [
            <Fragment>
              <p>Violet Squall(tip)</p>
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={lh} />
              <p>Lethal Hit on Run counter(tip)</p>
            </Fragment>
          ]
        },
        {
          id: 7,
          command: "3A",
          move: [
            <Fragment>
              <p>Wing Cross</p>
              <img className={classes.imgResize} src={d3} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>26F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "-6",
          counterHit: "-6",
          note: ""
        },
        {
          id: 8,
          command: "3A(tip)",
          move: [
            <Fragment>
              <p>Wing Cross(tip)</p>
              <img className={classes.imgResize} src={d3} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>26F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "+4",
          counterHit: "",
          note: ""
        },
        {
          id: 9,
          command: "3AA",
          move: [
            <Fragment>
              <p>Wing Cross</p>
              <img className={classes.imgResize} src={d3} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>26F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 10,
          command: "3AA(tip)",
          move: [
            <Fragment>
              <p>Wing Cross(tip)</p>
              <img className={classes.imgResize} src={d3} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>26F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "KND",
          counterHit: "KND",
          note: <p>NC on tip range</p>
        },
        {
          id: 11,
          command: "2A",
          move: [
            <Fragment>
              <p>Knee Slicer</p>
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
          counterHit: "",
          note: "TC"
        },
        {
          id: 12,
          command: "1A",
          move: [
            <Fragment>
              <p>Opening Treasure</p>
              <img className={classes.imgResize} src={d1} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "AT",
          counterHit: "AT",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={at} />
              <p>Forward attack throw</p>
            </Fragment>
          ]
        },
        {
          id: 13,
          command: "1[A]",
          move: [
            <Fragment>
              <p>Holding Treasure</p>
              <img className={classes.imgResize} src={d1} />
              <img className={classes.imgResize} src={a_h} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "AT",
          counterHit: "AT",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={at} />
              <p>Back attack throw</p>
            </Fragment>
          ]
        },
        {
          id: 14,
          command: "1A(tip)",
          move: [
            <Fragment>
              <p>Opening Treasure(tip)</p>
              <img className={classes.imgResize} src={d1} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "-4",
          counterHit: "",
          note: [
            <Fragment>
              <p>No AT at tip range</p>
            </Fragment>
          ]
        },
        {
          id: 15,
          command: "4A",
          move: [
            <Fragment>
              <p>Shadow Step Slice</p>
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>26F</p>
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-18",
          onHit: "-6",
          counterHit: "",
          note: ""
        },
        {
          id: 16,
          command: "7A",
          move: [
            <Fragment>
              <p>Divine Biting Strike</p>
              <img className={classes.imgResize} src={d7} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>36F</p>
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-15",
          onHit: "-3",
          counterHit: "",
          note: ""
        },
        {
          id: 17,
          command: "8*9A",
          move: [
            <Fragment>
              <p>Divine Biting Strike</p>
              <img className={classes.imgResize} src={d7} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>36F</p>
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 18,
          command: "FC 2A",
          move: [
            <Fragment>
              <p>Knee Slicer</p>
              <span>FC</span>
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
          counterHit: "",
          note: "TC"
        },
        {
          id: 19,
          command: "FC 3A",
          move: [
            <Fragment>
              <p>Hilt</p>
              <span>FC</span>
              <img className={classes.imgResize} src={d3} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "0",
          counterHit: "",
          note: ""
        },
        {
          id: 20,
          command: "FC 3AK",
          move: [
            <Fragment>
              <p>Hilt Kick</p>
              <span>FC</span>
              <img className={classes.imgResize} src={d3} />
              <img className={classes.imgResize} src={a} />
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
          counterHit: "",
          note: "Jails"
        },
        {
          id: 21,
          command: "WR A",
          move: [
            <Fragment>
              <p>Fang Strike</p>
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
          onBlock: "-4",
          onHit: "+6",
          counterHit: "",
          note: ""
        },
        {
          id: 22,
          command: "WR AA",
          move: [
            <Fragment>
              <p>Twin Fang Strike</p>
              <span>WR</span>
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-7",
          onHit: "+2",
          counterHit: "",
          note: ""
        },
        {
          id: 23,
          command: "BT A",
          move: [
            <Fragment>
              <p>Reverse Dance Blade</p>
              <span>BT</span>
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-2",
          onHit: "+8",
          counterHit: "+8",
          note: ""
        },
        {
          id: 24,
          command: "BT 2A",
          move: [
            <Fragment>
              <p>Reverse Biting Strike</p>
              <span>BT</span>
              <img className={classes.imgResize} src={d2} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "+4",
          counterHit: "+4",
          note: "TC[13~?F]"
        }
      ],

      // horizontalAttacks start here

      horizontalAttacks: [
        {
          id: 25,
          command: "B",
          move: [
            <Fragment>
              <p>Meteor Shower</p>
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "+2",
          counterHit: "",
          note: ""
        },
        {
          id: 26,
          command: "BB",
          move: [
            <Fragment>
              <p>Meteor Shower</p>
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
          onBlock: "-14",
          onHit: "-6",
          counterHit: "-6",
          note: ""
        },
        {
          id: 27,
          command: "BBA",
          move: [
            <Fragment>
              <p>Assailing Arc</p>
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "-4",
          counterHit: "+2",
          note: ""
        },
        {
          id: 28,
          command: "BBB",
          move: [
            <Fragment>
              <p>Meteor Shower</p>
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 29,
          command: "B4B",
          move: [
            <Fragment>
              <p>Retreating Divide</p>
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "-2",
          counterHit: "",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ss} />
              <p>On Hit/Block to Lingering Step</p>
            </Fragment>
          ]
        },
        {
          id: 30,
          command: "b6",
          move: [
            <Fragment>
              <p>Double Hilt</p>
              <img className={classes.imgResizeSM} src={b} />
              <img className={classes.imgResize} src={d6} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 31,
          command: "6B",
          move: [
            <Fragment>
              <p>Braided Spear</p>
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>44F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={lh} />
              <p>Lethal Hit on back step opponent</p>
            </Fragment>
          ]
        },
        {
          id: 32,
          command: "6bA",
          move: [
            <Fragment>
              <p>Strangling Slash</p>
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResizeSM} src={b} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>28F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "0",
          counterHit: "",
          note: ""
        },
        {
          id: 33,
          command: "6bA(tip)",
          move: [
            <Fragment>
              <p>Strangling Slash(tip)</p>
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResizeSM} src={b} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>28F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <p>Tip range </p>
            </Fragment>
          ]
        },
        {
          id: 34,
          command: "3B",
          move: [
            <Fragment>
              <p>Lifting Heavens</p>
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
          id: 35,
          command: "3B(tip)",
          move: [
            <Fragment>
              <p>Lifting Heavens(tip)</p>
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
          note: [
            <Fragment>
              <p>Different launch properties</p>
            </Fragment>
          ]
        },
        {
          id: 36,
          command: "3bK",
          move: [
            <Fragment>
              <p>Thrust Kick</p>
              <img className={classes.imgResize} src={d3} />
              <img className={classes.imgResizeSM} src={b} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 37,
          command: "3b:K",
          move: [
            <Fragment>
              <p>Thrust Kick(JF)</p>
              <img className={classes.imgResize} src={d3} />
              <img className={classes.imgResizeSM} src={b} />
              <span>:</span>
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <p>Just Frame version</p>
            </Fragment>
          ]
        },
        {
          id: 38,
          command: "2B",
          move: [
            <Fragment>
              <p>Dancing Fang</p>
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
          onBlock: "-12",
          onHit: "+2",
          counterHit: "",
          note: ""
        },
        {
          id: 39,
          command: "2BA",
          move: [
            <Fragment>
              <p>Dancing Fang Sweep</p>
              <img className={classes.imgResize} src={d2} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 40,
          command: "2BB",
          move: [
            <Fragment>
              <p>Back Step Fang</p>
              <img className={classes.imgResize} src={d2} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "-2",
          counterHit: "",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ss} />
              <p>On Hit/Block to Lingering Step</p>
            </Fragment>
          ]
        },
        {
          id: 41,
          command: "2BK",
          move: [
            <Fragment>
              <p>Spring Barrage</p>
              <img className={classes.imgResize} src={d2} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 42,
          command: "1B",
          move: [
            <Fragment>
              <p>Lightning Fang</p>
              <img className={classes.imgResize} src={d1} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-20",
          onHit: "-8",
          counterHit: "+2",
          note: [
            <Fragment>
              <p>Can be cannceled with G</p>
            </Fragment>
          ]
        },

        {
          id: 43,
          command: "1B(tip)",
          move: [
            <Fragment>
              <p>Lightning Fang(tip)</p>
              <img className={classes.imgResize} src={d1} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <p>Can be cannceled with G</p>
            </Fragment>
          ]
        },
        {
          id: 44,
          command: "4B",
          move: [
            <Fragment>
              <p>Retreating Fang</p>
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "-2",
          counterHit: "+4",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ss} />
              <p>On Hit/Block to Lingering Step</p>
            </Fragment>
          ]
        },
        {
          id: 45,
          command: "7B",
          move: [
            <Fragment>
              <p>Divine Lifting Heavens</p>
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
          onBlock: "-16",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 46,
          command: "8*9B",
          move: [
            <Fragment>
              <p>Divine Lifting Heavens</p>
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
          onBlock: "-12",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 47,
          command: "FC 2B",
          move: [
            <Fragment>
              <p>Torrential Rush</p>
              <span>FC</span>
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
          onHit: "+2",
          counterHit: "",
          note: ""
        },
        {
          id: 48,
          command: "FC 2BB",
          move: [
            <Fragment>
              <p>Torrential Rush</p>
              <span>FC</span>
              <img className={classes.imgResize} src={d2} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "+4",
          counterHit: "+4",
          note: ""
        },
        {
          id: 49,
          command: "WR B",
          move: [
            <Fragment>
              <p>Lifting Wing</p>
              <span>WR</span>
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "LNC",
          counterHit: "LNC",
          note: ""
        },
        {
          id: 50,
          command: "BT B",
          move: [
            <Fragment>
              <p>Reverse Air Parting</p>
              <span>BT</span>
              <img className={classes.imgResize} src={b} />
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
          counterHit: "",
          note: "TC"
        },
        {
          id: 51,
          command: "BT 2B",
          move: [
            <Fragment>
              <p>Crouching Air Parting</p>
              <span>BT</span>
              <img className={classes.imgResize} src={d2} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+2",
          counterHit: "+2",
          note: "TC"
        }
      ],
      // Kicks start here
      kicks: [
        {
          id: 52,
          command: "K",
          move: [
            <Fragment>
              <p>Snap Kick</p>
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
          counterHit: "",
          note: ""
        },
        {
          id: 53,
          command: "6K",
          move: [
            <Fragment>
              <p>Banishment Kick</p>
              <img className={classes.imgResize} src={d6} />
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
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={gi} />
              <p>GI High/Mid verticals except kicks</p>
            </Fragment>
          ]
        },
        {
          id: 54,
          command: "3K",
          move: [
            <Fragment>
              <p>Belly Crush Kick</p>
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
          onBlock: "-12",
          onHit: "-4",
          counterHit: "",
          note: ""
        },

        {
          id: 55,
          command: "3KK",
          move: [
            <Fragment>
              <p>Belly Crush Kick</p>
              <img className={classes.imgResize} src={d3} />
              <img className={classes.imgResize} src={k} />
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
          onBlock: "-8",
          onHit: "0",
          counterHit: "",
          note: ""
        },
        {
          id: 56,
          command: "2K",
          move: [
            <Fragment>
              <p>Earth Kick</p>
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
          counterHit: "",
          note: ""
        },
        {
          id: 57,
          command: "1K",
          move: [
            <Fragment>
              <p>Rock Breaker</p>
              <img className={classes.imgResize} src={d1} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-18",
          onHit: "-6",
          counterHit: "",
          note: ""
        },
        {
          id: 58,
          command: "4K",
          move: [
            <Fragment>
              <p>Check Mate</p>
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "0",
          counterHit: "",
          note: ""
        },
        {
          id: 59,
          command: "4KB",
          move: [
            <Fragment>
              <p>Check Mate</p>
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={k} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "0",
          counterHit: "",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={gi} />
              <p>GI High/Mid verticals except kicks</p>
            </Fragment>
          ]
        },
        {
          id: 60,
          command: "FC 2K",
          move: [
            <Fragment>
              <p>Earth Kick</p>
              <span>FC</span>
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
          counterHit: "",
          note: ""
        },
        {
          id: 61,
          command: "FC 1K",
          move: [
            <Fragment>
              <p>Liquid Rising</p>
              <span>FC</span>
              <img className={classes.imgResize} src={d1} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-24",
          onHit: "LNC",
          counterHit: "LNC",
          note: ""
        },
        {
          id: 62,
          command: "FC 1KK",
          move: [
            <Fragment>
              <p>Liquid Rising</p>
              <span>FC</span>
              <img className={classes.imgResize} src={d1} />
              <img className={classes.imgResize} src={k} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              <img className={classes.imgResize} src={l} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-22",
          onHit: "LNC",
          counterHit: "LNC",
          note: ""
        },
        {
          id: 63,
          command: "WR K",
          move: [
            <Fragment>
              <p>Shattering Kick</p>
              <span>WR</span>
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 64,
          command: "7K",
          move: [
            <Fragment>
              <p>Giant Rising Kick</p>
              <img className={classes.imgResize} src={d7} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "-4",
          counterHit: "",
          note: ""
        },
        {
          id: 65,
          command: "8*9K",
          move: [
            <Fragment>
              <p>Giant Rising Kick</p>
              <img className={classes.imgResize} src={d8} />
              <span> * </span>
              <img className={classes.imgResize} src={d9} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "0",
          counterHit: "",
          note: ""
        },

        {
          id: 66,
          command: "BT K",
          move: [
            <Fragment>
              <p>Reverse Snap Kick</p>
              <span>BT</span>
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "+4",
          counterHit: "+4",
          note: ""
        },

        {
          id: 67,
          command: "BT 2K",
          move: [
            <Fragment>
              <p>Reverse Earth Kick</p>
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
          onHit: "-4",
          counterHit: "-4",
          note: "TC"
        }
      ],

      // dual button attackts start here
      dualButtonAttacks: [
        {
          id: 68,
          command: "A+B",
          move: [
            <Fragment>
              <p>Roaring Heaven</p>
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>38F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "+6",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ba} />
              <img className={classes.imgNote} src={lh} />
              <p>Lethal Hit against GI</p>
            </Fragment>
          ]
        },
        {
          id: 69,
          command: "6A+B",
          move: [
            <Fragment>
              <p>Iron Chin Strike</p>
              <img className={classes.imgResize} src={d6} />
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
          onBlock: "-14",
          onHit: "-4",
          counterHit: "",
          note: ""
        },
        {
          id: 70,
          command: "2A+B",
          move: [
            <Fragment>
              <p>Sweeping Blade</p>
              <img className={classes.imgResize} src={d2} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>36F</p>
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "+4",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ba} />
              <img className={classes.imgNote} src={lh} />
              <p>Lethal Hit against red guard gauge</p>
            </Fragment>
          ]
        },
        {
          id: 71,
          command: "4A+B",
          move: [
            <Fragment>
              <p>Dancing Crane</p>
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "0",
          counterHit: "",
          note: ""
        },
        {
          id: 72,
          command: "4A+BA",
          move: [
            <Fragment>
              <p>Dancing Crane</p>
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+2",
          counterHit: "",
          note: ""
        },
        {
          id: 73,
          command: "4A+BAB",
          move: [
            <Fragment>
              <p>Dancing Crane</p>
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "+4",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ba} />
            </Fragment>
          ]
        },
        {
          id: 74,
          command: "4A+BA+B",
          move: [
            <Fragment>
              <p>Heavy Crane</p>
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+4",
          counterHit: "",
          note: ""
        },
        {
          id: 75,
          command: "9A+B",
          move: [
            <Fragment>
              <p>Seong's Crushing Long Blade</p>
              <img className={classes.imgResize} src={d9} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>84F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "KND",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ua} />
            </Fragment>
          ]
        },
        {
          id: 76,
          command: "9a+bG",
          move: [
            <Fragment>
              <p>Seong's Crushing Long Blade ~ Lingering Step</p>
              <img className={classes.imgResize} src={d9} />
              <img className={classes.imgResizeSM} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResizeSM} src={b} />
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
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ss} />
              <p>G canceled to Lingering Step</p>
            </Fragment>
          ]
        },
        {
          id: 77,
          command: "9A+BB",
          move: [
            <Fragment>
              <p>Seong's Quick Long Blade</p>
              <img className={classes.imgResize} src={d9} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>67F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "+16",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ba} />
            </Fragment>
          ]
        },
        {
          id: 78,
          command: "8A+B",
          move: [
            <Fragment>
              <p>Radiant Wing</p>
              <img className={classes.imgResize} src={d8} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-20",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 79,
          command: "B+K",
          move: [
            <Fragment>
              <p>Heaven's Wheel</p>
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
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
          id: 80,
          command: "6B+K",
          move: [
            <Fragment>
              <p>Fang Barrage</p>
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
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
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
          id: 81,
          command: "2B+K",
          move: [
            <Fragment>
              <p>Shadow Fang</p>
              <img className={classes.imgResize} src={d2} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "-2",
          counterHit: "",
          note: ""
        },
        {
          id: 82,
          command: "4B+K",
          move: [
            <Fragment>
              <p>?????</p>
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>36F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={gi} />
              <p>GI High/Mid verticals except kicks</p>
            </Fragment>
          ]
        },

        {
          id: 83,
          command: "8B+K",
          move: [
            <Fragment>
              <p>?????</p>
              <img className={classes.imgResize} src={d8} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "+2",
          counterHit: "",
          note: ""
        },
        {
          id: 84,
          command: "8B+KB",
          move: [
            <Fragment>
              <p>?????</p>
              <img className={classes.imgResize} src={d8} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "+2",
          counterHit: "",
          note: ""
        },
        {
          id: 85,
          command: "8B+KBB",
          move: [
            <Fragment>
              <p>?????</p>
              <img className={classes.imgResize} src={d8} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={b} />
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
          onBlock: "-12",
          onHit: "+4",
          counterHit: "",
          note: ""
        },
        {
          id: 86,
          command: "8B+K:B:B",
          move: [
            <Fragment>
              <p>?????</p>
              <img className={classes.imgResize} src={d8} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
              <span>:</span>
              <img className={classes.imgResize} src={b} />
              <span>:</span>
              <img className={classes.imgResize} src={b} />
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
          onBlock: "-12",
          onHit: "+4",
          counterHit: "",
          note: "Just Frame"
        }
      ],

      // 8way-run attacks start here
      eightwayrunAttack: [
        {
          id: 87,
          command: "66A",
          move: [
            <Fragment>
              <p>Circular Heaven Slash</p>
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
          onBlock: "-8",
          onHit: "+2",
          counterHit: "+2",
          note: "TC[9-26] into crouch"
        },
        {
          id: 88,
          command: "22*88A",
          move: [
            <Fragment>
              <p>Heavy Willow Divide</p>
              <img className={classes.imgResize} src={d2_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d8_h} />
              <span> * </span>
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
          onHit: "-4",
          counterHit: "-4",
          note: "TJ"
        },
        {
          id: 89,
          command: "22*88AA",
          move: [
            <Fragment>
              <p>Heavy Willow Divide</p>
              <img className={classes.imgResize} src={d2_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d8_h} />
              <span> * </span>
              <img className={classes.imgResize} src={a} />
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
          onBlock: "-12",
          onHit: "KND",
          counterHit: "KND",
          note: "TJ"
        },
        {
          id: 89,
          command: "11*77A",
          move: [
            <Fragment>
              <p>Sparrow Sweep</p>
              <img className={classes.imgResize} src={d1_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d7_h} />
              <span> * </span>
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>28F</p>
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "+0",
          counterHit: "+0",
          note: ""
        },

        {
          id: 90,
          command: "11*77A(tip)",
          move: [
            <Fragment>
              <p>Sparrow Sweep(tip)</p>
              <img className={classes.imgResize} src={d1_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d7_h} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>28F</p>
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 91,
          command: "44A",
          move: [
            <Fragment>
              <p>Root Fang</p>
              <img className={classes.imgResize} src={d4_h} />
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
          note: [<Fragment />]
        },
        {
          id: 92,
          command: "44A(tip)",
          move: [
            <Fragment>
              <p>Root Fang(tip)</p>
              <img className={classes.imgResize} src={d4_h} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>28F</p>
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-5",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={lh} />
              <p>Lethal Hit on tip range</p>
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
                  tableData={minaFrameData.verticalAttacks.map(data => [
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
                  tableData={minaFrameData.verticalAttacks.map(data => [
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
                  tableData={minaFrameData.horizontalAttacks.map(data => [
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
                  tableData={minaFrameData.horizontalAttacks.map(data => [
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
                  tableData={minaFrameData.kicks.map(data => [
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
                  tableData={minaFrameData.kicks.map(data => [
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
                  tableData={minaFrameData.dualButtonAttacks.map(data => [
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
                  tableData={minaFrameData.dualButtonAttacks.map(data => [
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
                  tableData={minaFrameData.eightwayrunAttack.map(data => [
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
                  tableData={minaFrameData.eightwayrunAttack.map(data => [
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
                  tableData={minaFrameData.throws.map(data => [
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
                  tableData={minaFrameData.throws.map(data => [
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
                  tableData={minaFrameData.reversalEdge.map(data => [
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
                  tableData={minaFrameData.reversalEdge.map(data => [
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
                  tableData={minaFrameData.gaugeAttacks.map(data => [
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
                  tableData={minaFrameData.gaugeAttacks.map(data => [
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
export default withStyles(styles)(Mina);
