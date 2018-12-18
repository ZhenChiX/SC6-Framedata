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
              <img className={classes.imgResize} src={l} />
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
          command: "66B",
          move: [
            <Fragment>
              <p>Lightning Thrust</p>
              <img className={classes.imgResize} src={d6_h} />
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
          onHit: "+4",
          counterHit: "+4",
          note: "Can be held, more advantage on block at max held"
        },
        {
          id: 94,
          command: "22*88B",
          move: [
            <Fragment>
              <p>Sky Blossom</p>
              <img className={classes.imgResize} src={d2_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d8_h} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-18",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              <p>TC[10-15]</p>
            </Fragment>
          ]
        },
        {
          id: 95,
          command: "11*77B",
          move: [
            <Fragment>
              <p>Lightning Fang</p>
              <img className={classes.imgResize} src={d1_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d7_h} />
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
          counterHit: "-8",
          note: [
            <Fragment>
              <p>TC[6-57]</p>
            </Fragment>
          ]
        },
        {
          id: 96,
          command: "11*77B(tip)",
          move: [
            <Fragment>
              <p>Lightning Fang(tip)</p>
              <img className={classes.imgResize} src={d1_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d7_h} />
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
              <p>TC[6-57]</p>
            </Fragment>
          ]
        },
        {
          id: 97,
          command: "44B",
          move: [
            <Fragment>
              <p>Top Hammer Fang</p>
              <img className={classes.imgResize} src={d4_h} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>34F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "+1",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              <p>More advantage on block at max range</p>
            </Fragment>
          ]
        },
        {
          id: 98,
          command: "66K",
          move: [
            <Fragment>
              <p>Circular Heaven Spin Kick</p>
              <img className={classes.imgResize} src={d6_h} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "+2",
          counterHit: "+2",
          note: [
            <Fragment>
              <p>TJ[5-16]</p>
            </Fragment>
          ]
        },
        {
          id: 99,
          command: "66KK",
          move: [
            <Fragment>
              <p>Circular Heaven Spin Kick</p>
              <img className={classes.imgResize} src={d6_h} />
              <img className={classes.imgResize} src={k} />
              <img className={classes.imgResize} src={k} />
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
          onHit: "-4",
          counterHit: "-4",
          note: [
            <Fragment>
              <p>TJ[7-18]</p>
            </Fragment>
          ]
        },
        {
          id: 100,
          command: "66KKK",
          move: [
            <Fragment>
              <p>Circular Heaven Spin Kick</p>
              <img className={classes.imgResize} src={d6_h} />
              <img className={classes.imgResize} src={k} />
              <img className={classes.imgResize} src={k} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+8",
          counterHit: "STN",
          note: ""
        },
        {
          id: 101,
          command: "22*88K",
          move: [
            <Fragment>
              <p>Thunder Kick</p>
              <img className={classes.imgResize} src={d2_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d8_h} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>30F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "+0",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              <p>TJ[12-30]</p>
            </Fragment>
          ]
        },
        {
          id: 102,
          command: "44K",
          move: [
            <Fragment>
              <p>Circular Blade Kick</p>
              <img className={classes.imgResize} src={d4_h} />
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
          onHit: "+8",
          counterHit: "+8",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={lh} />
              <p>Lethal hit against lows</p>
            </Fragment>
          ]
        },
        {
          id: 103,
          command: "66A+B",
          move: [
            <Fragment>
              <p>Spinning Divide</p>
              <img className={classes.imgResize} src={d6_h} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>28F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 104,
          command: "44A+B",
          move: [
            <Fragment>
              <p>Seong's Diamond Crusher</p>
              <img className={classes.imgResize} src={d4_h} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>40F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-2",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={lh} />
              <p>Lethal Hit against guard crush opponent</p>
            </Fragment>
          ]
        },
        {
          id: 105,
          command: "66B+K",
          move: [
            <Fragment>
              <p>Jagged Comet Blade</p>
              <img className={classes.imgResize} src={d6_h} />
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
          onBlock: "-22",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <p>TJ</p>
            </Fragment>
          ]
        },
        {
          id: 106,
          command: "66(B+K)",
          move: [
            <Fragment>
              <p>Jagged Comet Blade(Hold)</p>
              <img className={classes.imgResize} src={d6_h} />
              <img className={classes.imgResize} src={b_h} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k_h} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>N/A</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={sl} />
            </Fragment>
          ],
          onBlock: "-2",
          onHit: "+6",
          counterHit: "+6",
          note: [
            <Fragment>
              <p>TJ</p>
            </Fragment>
          ]
        },
        {
          id: 107,
          command: "44B+K",
          move: [
            <Fragment>
              <p>Glory Wing</p>
              <img className={classes.imgResize} src={d4_h} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>38F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <p>TC[16-37]</p>
            </Fragment>
          ]
        },
        {
          id: 108,
          command: "44(B+K)",
          move: [
            <Fragment>
              <p>Talon Rush</p>
              <img className={classes.imgResize} src={d4_h} />
              <img className={classes.imgResize} src={b_h} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k_h} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>N/A</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "+8",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ba} />
              <p>TC[1-13]</p>
            </Fragment>
          ]
        },
        {
          id: 109,
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
          onBlock: "-22",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              <p>TC[26-46] / TJ [6-26]</p>
            </Fragment>
          ]
        }
      ],

      //throws start here
      throws: [
        {
          id: 110,
          command: "A+G",
          move: [
            <Fragment>
              <p>Crushing Soul</p>
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
          onHit: "N/A",
          counterHit: "N/A",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={th} />
            </Fragment>
          ]
        },
        {
          id: 111,
          command: "4A+G",
          move: [
            <Fragment>
              <p>Dropping Embrace</p>
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
          onHit: "N/A",
          counterHit: "N/A",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={th} />
            </Fragment>
          ]
        },
        {
          id: 112,
          command: "46A+G",
          move: [
            <Fragment>
              <p>Furious Swing</p>
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={d6} />
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
          onHit: "N/A",
          counterHit: "N/A",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={th} />
            </Fragment>
          ]
        },
        {
          id: 113,
          command: "46A+G~B",
          move: [
            <Fragment>
              <p>Furious Swing ~ Stone Shock</p>
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={g} />
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
          onHit: "+8",
          counterHit: "+8",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={th} />
            </Fragment>
          ]
        },
        {
          id: 114,
          command: "46A+G~[B]",
          move: [
            <Fragment>
              <p>Furious Swing ~ Stone Shock</p>
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={g} />
              <img className={classes.imgResize} src={b_h} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "+8",
          onHit: "+8",
          counterHit: "+8",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={th} />
              <img className={classes.imgNote} src={ba} />
            </Fragment>
          ]
        },
        {
          id: 115,
          command: "Right Throw",
          move: [
            <Fragment>
              <p>Mi-Na Frankensteiner</p>
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
          onHit: "N/A",
          counterHit: "N/A",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={th} />
            </Fragment>
          ]
        },
        {
          id: 116,
          command: "Left Throw",
          move: [
            <Fragment>
              <p>Riding Mustang</p>
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
          onHit: "N/A",
          counterHit: "N/A",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={th} />
            </Fragment>
          ]
        },
        {
          id: 117,
          command: "Back Throw",
          move: [
            <Fragment>
              <p>Stalk Cutter</p>
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
          onHit: "N/A",
          counterHit: "N/A",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={th} />
            </Fragment>
          ]
        }
      ],
      // reversal edge start here
      reversalEdge: [
        {
          id: 118,
          command: "B+G",
          move: [
            <Fragment>
              <p>Jade Break</p>
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
          onBlock: "-10",
          onHit: "N/A",
          counterHit: "N/A",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={re} />
            </Fragment>
          ]
        },
        {
          id: 119,
          command: "(B+G)",
          move: [
            <Fragment>
              <p>Jade Break</p>
              <img className={classes.imgResize} src={b_h} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={g_h} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>F</p>
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
          id: 120,
          command: "RE A",
          move: [
            <Fragment>
              <p>??????</p>
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
          onBlock: "-4",
          onHit: "STN",
          counterHit: "STN",
          note: ""
        },
        {
          id: 121,
          command: "RE AA",
          move: [
            <Fragment>
              <p>??????</p>
              <img className={classes.imgNote} src={re} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>N/A</p>
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
          id: 122,
          command: "RE AA(Lethal Hit)",
          move: [
            <Fragment>
              <p>??????(Lethal Hit)</p>
              <img className={classes.imgNote} src={re} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>N/A</p>
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-12",
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
          id: 123,
          command: "RE AB",
          move: [
            <Fragment>
              <p>??????</p>
              <img className={classes.imgNote} src={re} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>N/A</p>
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 124,
          command: "RE AB(Lethal Hit)",
          move: [
            <Fragment>
              <p>??????</p>
              <img className={classes.imgNote} src={re} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>N/A</p>
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-4",
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
          id: 125,
          command: "RE B",
          move: [
            <Fragment>
              <p>??????</p>
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
          onBlock: "+15",
          onHit: "LNC",
          counterHit: "LNC",
          note: ""
        },
        {
          id: 126,
          command: "RE B(Lethal Hit)",
          move: [
            <Fragment>
              <p>??????(Lethal Hit)</p>
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
          onBlock: "+15",
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
          id: 127,
          command: "RE K",
          move: [
            <Fragment>
              <p>??????</p>
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
          onBlock: "+12",
          onHit: "LNC",
          counterHit: "LNC",
          note: ""
        },
        {
          id: 128,
          command: "RE K(Lethal Hit)",
          move: [
            <Fragment>
              <p>??????(Lethal Hit)</p>
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
          onBlock: "+12",
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
          id: 129,
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
          id: 130,
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
          id: 131,
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
          id: 132,
          command: "A+B+K",
          move: [
            <Fragment>
              <p>New Seong Style: Scarlet Meteor</p>
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
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
          onBlock: "",
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
          id: 133,
          command: "SC 6A",
          move: [
            <Fragment>
              <p>Shattering Violet Squall</p>
              <img className={classes.imgNote} src={sc} />
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
          onBlock: "+2",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sc} />
              <img className={classes.imgNote} src={ba} />
            </Fragment>
          ]
        },
        {
          id: 134,
          command: "SC BBB",
          move: [
            <Fragment>
              <p>Shattering Meteor Shower</p>
              <img className={classes.imgNote} src={sc} />
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
          onBlock: "+4",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sc} />
              <img className={classes.imgNote} src={ba} />
              <p>BA on 3rd hit</p>
            </Fragment>
          ]
        },
        {
          id: 135,
          command: "SC 1B",
          move: [
            <Fragment>
              <p>Shattering Lightning Fang</p>
              <img className={classes.imgNote} src={sc} />
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
          onBlock: "+2",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sc} />
              <img className={classes.imgNote} src={ba} />
              <p>TC[5-56]</p>
            </Fragment>
          ]
        },
        {
          id: 136,
          command: "SC FC 1KK",
          move: [
            <Fragment>
              <p>Liquid Rising</p>
              <img className={classes.imgNote} src={sc} />
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
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-29",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sc} />
              <img className={classes.imgNote} src={ss} />
              <p>To Lingering Stance</p>
            </Fragment>
          ]
        },
        {
          id: 137,
          command: "SC FC 1KKB",
          move: [
            <Fragment>
              <p>Seong Cloud Burst</p>
              <img className={classes.imgNote} src={sc} />
              <img className={classes.imgResize} src={d1} />
              <img className={classes.imgResize} src={k} />
              <img className={classes.imgResize} src={k} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              <img className={classes.imgResize} src={l} />
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sc} />
            </Fragment>
          ]
        },
        {
          id: 138,
          command: "SC 66A",
          move: [
            <Fragment>
              <p>Seong Snapping Jaw</p>
              <img className={classes.imgNote} src={sc} />
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
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sc} />
            </Fragment>
          ]
        },
        {
          id: 139,
          command: "SC 66AA",
          move: [
            <Fragment>
              <p>Seong Snapping Jaw</p>
              <img className={classes.imgNote} src={sc} />
              <img className={classes.imgResize} src={d6_h} />
              <img className={classes.imgResize} src={a} />
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
          onBlock: "-6",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sc} />
            </Fragment>
          ]
        },
        {
          id: 140,
          command: "SC 22*88AAA",
          move: [
            <Fragment>
              <p>Whirling Willow Frenzy</p>
              <img className={classes.imgNote} src={sc} />
              <img className={classes.imgResize} src={d2_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d8_h} />
              <span> * </span>
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={a} />
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
          onBlock: "-12",
          onHit: "+5",
          counterHit: "+5",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sc} />
            </Fragment>
          ]
        },
        {
          id: 141,
          command: "SC 22*88AAAA",
          move: [
            <Fragment>
              <p>Whirling Willow Frenzy</p>
              <img className={classes.imgNote} src={sc} />
              <img className={classes.imgResize} src={d2_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d8_h} />
              <span> * </span>
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sc} />
            </Fragment>
          ]
        },
        {
          id: 142,
          command: "11*77B",
          move: [
            <Fragment>
              <p>Shattering Lightning Fang</p>
              <img className={classes.imgNote} src={sc} />
              <img className={classes.imgResize} src={d1_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d7_h} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "+2",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sc} />
              <img className={classes.imgNote} src={ba} />
              <p>TC[5-56]</p>
            </Fragment>
          ]
        },
        {
          id: 143,
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
          id: 144,
          command: "SC 66A+B",
          move: [
            <Fragment>
              <p>Shattering Spinning Divide</p>
              <img className={classes.imgNote} src={sc} />
              <img className={classes.imgResize} src={d6_h} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>28F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "+2",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sc} />
              <img className={classes.imgNote} src={ba} />
            </Fragment>
          ]
        },
        {
          id: 145,
          command: "SC 44A+B",
          move: [
            <Fragment>
              <p>Shattering Seong's Diamond Crusher</p>
              <img className={classes.imgNote} src={sc} />
              <img className={classes.imgResize} src={d4_h} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>40F</p>
              <img className={classes.imgResize} src={h} />
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "+6",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sc} />
              <img className={classes.imgNote} src={ba} />
              <img className={classes.imgNote} src={lh} />
              <p>Lethal Hit against guard crush opponent</p>
            </Fragment>
          ]
        },
        {
          id: 146,
          command: "SC 44B+K",
          move: [
            <Fragment>
              <p>Shattering Talon Rush</p>
              <img className={classes.imgNote} src={sc} />
              <img className={classes.imgResize} src={d4_h} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>38F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "+8",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sc} />
              <img className={classes.imgNote} src={ba} />
            </Fragment>
          ]
        },
        {
          id: 147,
          command: "SC 44(B+K)",
          move: [
            <Fragment>
              <p>Shattering Talon Rush</p>
              <img className={classes.imgNote} src={sc} />
              <img className={classes.imgResize} src={d4_h} />
              <img className={classes.imgResize} src={b_h} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k_h} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "UA",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={sc} />
              <img className={classes.imgNote} src={ua} />
            </Fragment>
          ]
        }
      ],
      // special stance start here
      specialAttacks: [
        {
          id: 148,
          command: "LS A",
          move: [
            <Fragment>
              <p>Violet Squall</p>
              <span>LS</span>
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ss} />
            </Fragment>
          ]
        },
        {
          id: 149,
          command: "LS B",
          move: [
            <Fragment>
              <p>Lightning Fang</p>
              <span>LS</span>
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
          counterHit: "-8",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ss} />
            </Fragment>
          ]
        },
        {
          id: 150,
          command: "LS K",
          move: [
            <Fragment>
              <p>Spinning Storm Kick</p>
              <span>LS</span>
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>36F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "+6",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ss} />
              <img className={classes.imgNote} src={ba} />
            </Fragment>
          ]
        }
      ]
    };

    return (
      <Fragment>
            <h3 className="characters_name">{this.props.location.pathname.replace(/\//g, '').toUpperCase()}</h3>
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
              <h4 className={classes.cardTitleWhite}>
                Special Stance(Lingering Step)
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
                  tableData={minaFrameData.specialAttacks.map(data => [
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
                  tableData={minaFrameData.specialAttacks.map(data => [
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
      </Fragment>
    );
  }
}
export default withStyles(styles)(Mina);
