import React, { Fragment, Component } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Popup from "../Popup/Popup.jsx";
import Modal from "@material-ui/core/Modal";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Hidden from "@material-ui/core/Hidden";
//icon
import Info from "@material-ui/icons/Info";
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
    verticalAlign: "bottom"
  },

  imgResizeSM: {
    height: "1em",
    width: "1em",
    verticalAlign: "bottom",
    border: "1px solid black",
    borderRadius: "3px"
  },
  imgNote: {
    height: "1.4em",
    verticalAlign: "bottom"
  },
  toggleStyle: {
    justify: "flex-end",
    display: "grid",
    gridTemplateColumns: "9fr 1fr"
  },
  infoIcon: {
    margin: "auto"
  },

  modal: {
    top: "25vh",
    left: "10%"
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
class Groh extends Component {
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

  //Handle Modal

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;

    //Groh FrameData
    // verticalAttacks start here

    const grohFrameData = {
      verticalAttacks: [
        {
          id: 1,
          command: "A",
          move: [
            <Fragment>
              <p>Knight's Oath</p>
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "+4",
          counterHit: "+4",
          note: ""
        },
        {
          id: 2,
          command: "AA",
          move: [
            <Fragment>
              <p>Knight's Oath</p>
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
          onHit: "+4",
          counterHit: "+4",
          note: ""
        },
        {
          id: 3,
          command: "AAA",
          move: [
            <Fragment>
              <p>Knight's Oath</p>
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
          onBlock: "-6",
          onHit: "+6",
          counterHit: "+6",
          note: ""
        },
        {
          id: 4,
          command: "6A",
          move: [
            <Fragment>
              <p>Questing Fang</p>
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "0",
          counterHit: "+4",
          note: ""
        },
        {
          id: 5,
          command: "6AA",
          move: [
            <Fragment>
              <p>Questing Fang</p>
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={a} />
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
          id: 6,
          command: "6A6 ~ AVN",
          move: [
            <Fragment>
              <p>Questing Fang ~ Avenger</p>
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={d6} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "+4",
          counterHit: "+8",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ss} />
              <p>To Avenger Stance</p>
            </Fragment>
          ]
        },
        {
          id: 7,
          command: "3A",
          move: [
            <Fragment>
              <p>Cutting Truth</p>
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
          onHit: "0",
          counterHit: "+6",
          note: ""
        },
        {
          id: 8,
          command: "2A",
          move: [
            <Fragment>
              <p>Gallant Slash</p>
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
          note: "TC"
        },
        {
          id: 9,
          command: "1A",
          move: [
            <Fragment>
              <p>Saint Mia</p>
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
          onBlock: "-16",
          onHit: "+4",
          counterHit: "+4",
          note: [
            <Fragment>
              <p>TC / ~FC</p>
            </Fragment>
          ]
        },
        {
          id: 10,
          command: "4A",
          move: [
            <Fragment>
              <p>Sir Tristan's Charity</p>
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>30F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "+4",
          counterHit: "+4",
          note: "TS"
        },
        {
          id: 11,
          command: "4A6 ~ AVN",
          move: [
            <Fragment>
              <p>Sir Tristan's Charity ~ Avenger</p>
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={d6} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>30F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "+3",
          onHit: "+11",
          counterHit: "+11",
          note: "TS"
        },
        {
          id: 12,
          command: "FC 2A",
          move: [
            <Fragment>
              <p>Kneeling Slash</p>
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
          onHit: "+6",
          counterHit: "+6",
          note: "TC / ~FC"
        },
        {
          id: 13,
          command: "WR A",
          move: [
            <Fragment>
              <p>Ascending Slash</p>
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
          onBlock: "-12",
          onHit: "+4",
          counterHit: "+4",
          note: ""
        },
        {
          id: 14,
          command: "WR A6 ~ AVN",
          move: [
            <Fragment>
              <p>Ascending Slash ~ Avenger</p>
              <span>WR</span>
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={d6} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+8",
          counterHit: "+8",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ss} />
              <p>To Avenger Stance</p>
            </Fragment>
          ]
        },
        {
          id: 15,
          command: "7A",
          move: [
            <Fragment>
              <p>Vaulting Slash</p>
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
          onBlock: "-6",
          onHit: "",
          counterHit: "",
          note: "TJ"
        },
        {
          id: 16,
          command: "8*9A",
          move: [
            <Fragment>
              <p>Vaulting Slash</p>
              <img className={classes.imgResize} src={d8} />
              <span> * </span>
              <img className={classes.imgResize} src={d9} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "KND",
          counterHit: "KND",
          note: "TJ"
        },

        {
          id: 17,
          command: "BT A",
          move: [
            <Fragment>
              <p>Penitent Slash</p>
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
          onBlock: "-8",
          onHit: "+2",
          counterHit: "+2",
          note: ""
        },
        {
          id: 18,
          command: "BT 2A",
          move: [
            <Fragment>
              <p>Atoning Slash</p>
              <span>BT</span>
              <img className={classes.imgResize} src={d2} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              <img className={classes.imgResize} src={sl} />
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "+6",
          counterHit: "+6",
          note: "TC / ~FC"
        }
      ],
      // horizontalAttacks start here

      horizontalAttacks: [
        {
          id: 19,
          command: "B",
          move: [
            <Fragment>
              <p>Knight's Accolade</p>
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
          id: 20,
          command: "BB",
          move: [
            <Fragment>
              <p>Knight's Accolade</p>
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
          onBlock: "-6",
          onHit: "+4",
          counterHit: "+4",
          note: ""
        },
        {
          id: 21,
          command: "BBB",
          move: [
            <Fragment>
              <p>Knight's Accolade</p>
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
          onBlock: "-4",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 22,
          command: "6B",
          move: [
            <Fragment>
              <p>Darting Raven</p>
              <img className={classes.imgResize} src={d6} />
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
          id: 23,
          command: "6BB",
          move: [
            <Fragment>
              <p>Darting Raven</p>
              <img className={classes.imgResize} src={d6} />
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
          onBlock: "-10",
          onHit: "+2",
          counterHit: "+2",
          note: ""
        },
        {
          id: 24,
          command: "6BB6 ~ AVN",
          move: [
            <Fragment>
              <p>Darting Raven ~ Avenger</p>
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={d6} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "+8",
          counterHit: "+8",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ss} />
              <p>To Avenger Stance</p>
            </Fragment>
          ]
        },
        {
          id: 25,
          command: "3B",
          move: [
            <Fragment>
              <p>Steel Judgment</p>
              <img className={classes.imgResize} src={d3} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "",
          counterHit: "LNC",
          note: ""
        },
        {
          id: 26,
          command: "2B",
          move: [
            <Fragment>
              <p>Gallant Strike</p>
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
          onBlock: "-10",
          onHit: "+2",
          counterHit: "+2",
          note: ""
        },
        {
          id: 27,
          command: "1B",
          move: [
            <Fragment>
              <p>Curse of Morgan</p>
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
          onBlock: "-14",
          onHit: "+2",
          counterHit: "+2",
          note: [<Fragment />]
        },
        {
          id: 28,
          command: "1BB",
          move: [
            <Fragment>
              <p>Curse of Morgan</p>
              <img className={classes.imgResize} src={d1} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              <img className={classes.imgResize} src={l} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "-3",
          counterHit: "-3",
          note: [<Fragment />]
        },
        {
          id: 29,
          command: "4B",
          move: [
            <Fragment>
              <p>Benovlence Step</p>
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
          onBlock: "-7",
          onHit: "+4",
          counterHit: "+4",
          note: ""
        },
        {
          id: 30,
          command: "4B(Lethal Hit)",
          move: [
            <Fragment>
              <p>Benovlence Step(Lethal Hit)</p>
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
          onBlock: "-7",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={lh} />
              <p>Lethal Hit against BT opponent</p>
            </Fragment>
          ]
        },
        {
          id: 31,
          command: "FC B",
          move: [
            <Fragment>
              <p>Kneeling Strike</p>
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
          onBlock: "-10",
          onHit: "+2",
          counterHit: "+2",
          note: "TC / ~FC"
        },
        {
          id: 32,
          command: "WR B",
          move: [
            <Fragment>
              <p>Ascending Thrust</p>
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
          onBlock: "-12",
          onHit: "0",
          counterHit: "0",
          note: ""
        },
        {
          id: 33,
          command: "WR B6 ~ AVN",
          move: [
            <Fragment>
              <p>Ascending Thrust ~ Avenger</p>
              <span>WR</span>
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={d6} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "+8",
          counterHit: "+8",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ss} />
              <p>To Avenger Stance</p>
            </Fragment>
          ]
        },
        {
          id: 34,
          command: "7B",
          move: [
            <Fragment>
              <p>Vaulting Strike</p>
              <img className={classes.imgResize} src={d7} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>30F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "",
          counterHit: "",
          note: "TJ"
        },
        {
          id: 35,
          command: "8*9B",
          move: [
            <Fragment>
              <p>Vaulting Strike</p>
              <img className={classes.imgResize} src={d8} />
              <span> * </span>
              <img className={classes.imgResize} src={d9} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>30F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "KND",
          counterHit: "KND",
          note: "TJ"
        },
        {
          id: 36,
          command: "BT B",
          move: [
            <Fragment>
              <p>Penitent Strike</p>
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
          onHit: "+2",
          counterHit: "+2",
          note: ""
        },
        {
          id: 37,
          command: "BT 2B",
          move: [
            <Fragment>
              <p>Atoning Strike</p>
              <span>BT</span>
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
          onHit: "+2",
          counterHit: "+2",
          note: "TC / ~FC"
        }
      ],
      // Kicks start here
      kicks: [
        {
          id: 38,
          command: "K",
          move: [
            <Fragment>
              <p>Noble Courage</p>
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
          id: 39,
          command: "6K",
          move: [
            <Fragment>
              <p>Lofty Faith</p>
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
          onHit: "+4",
          counterHit: "+4",
          note: ""
        },
        {
          id: 40,
          command: "3K",
          move: [
            <Fragment>
              <p>Rising Courage</p>
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
          onBlock: "-4",
          onHit: "+6",
          counterHit: "+10",
          note: ""
        },

        {
          id: 41,
          command: "2K",
          move: [
            <Fragment>
              <p>Vigilant Courage</p>
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
          note: "TC / ~FC"
        },
        {
          id: 42,
          command: "1K",
          move: [
            <Fragment>
              <p>Chivalrous Courage </p>
              <img className={classes.imgResize} src={d1} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "0",
          counterHit: "KND",
          note: "TC"
        },
        {
          id: 43,
          command: "4K",
          move: [
            <Fragment>
              <p>Valiant Strike</p>
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
          onBlock: "-10",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 44,
          command: "FC K",
          move: [
            <Fragment>
              <p>Kneeling Swipe</p>
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
          id: 45,
          command: "WR K",
          move: [
            <Fragment>
              <p>Ascending Knee</p>
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
          onBlock: "-8",
          onHit: "+6",
          counterHit: "+6",
          note: ""
        },
        {
          id: 46,
          command: "7*8*9K",
          move: [
            <Fragment>
              <p>Vaulting Drive</p>
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
          onBlock: "-10",
          onHit: "+4",
          counterHit: "+4",
          note: "TJ"
        },

        {
          id: 47,
          command: "BT K",
          move: [
            <Fragment>
              <p>Penitent Blow</p>
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
          onBlock: "-8",
          onHit: "+2",
          counterHit: "+2",
          note: ""
        },

        {
          id: 48,
          command: "BT 2K",
          move: [
            <Fragment>
              <p>Atoning Swipe</p>
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
          id: 49,
          command: "A+B",
          move: [
            <Fragment>
              <p>Scarlet Sleeve</p>
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
          onBlock: "+4",
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
          id: 50,
          command: "A+B6 ~ AVN",
          move: [
            <Fragment>
              <p>Scarlet Sleeve ~ Avenger</p>
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={d6} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>38F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "+9",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ba} />
              <img className={classes.imgNote} src={lh} />
              <p>Lethal Hit against GI</p>
              <img className={classes.imgNote} src={ss} />
              <p>To Avenger Stance</p>
            </Fragment>
          ]
        },
        {
          id: 51,
          command: "6A+B",
          move: [
            <Fragment>
              <p>Broceliande's Splendor</p>
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
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
          onBlock: "-14",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment />]
        },
        {
          id: 52,
          command: "6A+B(Lethal Hit)",
          move: [
            <Fragment>
              <p>Broceliande's Splendor(Lethal Hit)</p>
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
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
          onBlock: "-14",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={lh} />
              <p>Lethal Hit on Counter Hit</p>
            </Fragment>
          ]
        },
        {
          id: 53,
          command: "6A+B6 ~ AVN",
          move: [
            <Fragment>
              <p>Broceliande's Splendor ~ Avenger</p>
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={d6} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ss} />
              <p>To Avenger Stance</p>
            </Fragment>
          ]
        },
        {
          id: 54,
          command: "2A+B",
          move: [
            <Fragment>
              <p>Dolorous Stroke</p>
              <img className={classes.imgResize} src={d2} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>46F</p>
              <img className={classes.imgResize} src={l} />
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
          id: 55,
          command: "4A+B",
          move: [
            <Fragment>
              <p>War of Benwick</p>
              <img className={classes.imgResize} src={d4} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>34F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "LNC",
          counterHit: "LNC",
          note: ""
        },
        {
          id: 56,
          command: "8A+B",
          move: [
            <Fragment>
              <p>Sir Gareth's Zest</p>
              <img className={classes.imgResize} src={d8} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
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
          onBlock: "-24",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              <p>TJ</p>
            </Fragment>
          ]
        },
        {
          id: 57,
          command: "8A+B6 ~ AVN",
          move: [
            <Fragment>
              <p>Sir Gareth's Zest ~ Avenger</p>
              <img className={classes.imgResize} src={d8} />
              <img className={classes.imgResize} src={a} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={d6} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-22",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ss} />
              <p>To Avenger Stance </p>
              <p>TJ</p>
            </Fragment>
          ]
        },
        {
          id: 58,
          command: "6B+K ~ AVN",
          move: [
            <Fragment>
              <p>Battle of Bedegraine ~ Avenger</p>
              <img className={classes.imgResize} src={d6} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>26F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ba} />
              <img className={classes.imgNote} src={ss} />
              <p>To Avenger Stance </p>
            </Fragment>
          ]
        },
        {
          id: 59,
          command: "2B+K",
          move: [
            <Fragment>
              <p>Gallatin Eclipse</p>
              <img className={classes.imgResize} src={d2} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>60F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "UA",
          onHit: "KND",
          counterHit: "KND",
          note: <img className={classes.imgNote} src={ua} />
        },
        {
          id: 60,
          command: "4B+K",
          move: [
            <Fragment>
              <p>Morgan's Deception</p>
              <img className={classes.imgResize} src={d4} />
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
          onHit: "0",
          counterHit: "0",
          note: ""
        },
        {
          id: 61,
          command: "8B+K",
          move: [
            <Fragment>
              <p>Fang Barrage</p>
              <img className={classes.imgResize} src={d8} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>36F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <p>TJ</p>
              <p>STN against ground opponent</p>
            </Fragment>
          ]
        },
        {
          id: 62,
          command: "BT B+K",
          move: [
            <Fragment>
              <p>Merlin's Counsel</p>
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
        }
      ],

      // 8way-run attacks start here
      eightwayrunAttack: [
        {
          id: 63,
          command: "33*66*99A",
          move: [
            <Fragment>
              <p>Sir Lancelot's Fervor</p>
              <img className={classes.imgResize} src={d6_h} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "0",
          counterHit: "0",
          note: ""
        },
        {
          id: 64,
          command: "33*66*99AA",
          move: [
            <Fragment>
              <p>Sir Lancelot's Fervor</p>
              <img className={classes.imgResize} src={d6_h} />
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
          onBlock: "-14",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 65,
          command: "22*88A",
          move: [
            <Fragment>
              <p>Bertilak the Headless</p>
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
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-2",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 66,
          command: "22*88[A]",
          move: [
            <Fragment>
              <p>Bertilak the Headless(Hold)</p>
              <img className={classes.imgResize} src={d2_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d8_h} />
              <span> * </span>
              <img className={classes.imgResize} src={a_h} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>N/A</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-2",
          onHit: "STN",
          counterHit: "STN",
          note: ""
        },

        {
          id: 67,
          command: "11*44*77A",
          move: [
            <Fragment>
              <p>Morgause's Mischief</p>
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
              <p>34F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "+4",
          counterHit: "+4",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={gi} />
              <p>GI High/Mid verticals except Kicks</p>
            </Fragment>
          ]
        },
        {
          id: 68,
          command: "11*44*77A(Lethal Hit)",
          move: [
            <Fragment>
              <p>Morgause's Mischief(Lethal Hit)</p>
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
              <p>34F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={gi} />
              <p>GI High/Mid verticals except Kicks</p>
              <img className={classes.imgNote} src={lh} />
              <p>Lethal hit on successful GI</p>
            </Fragment>
          ]
        },
        {
          id: 69,
          command: "33*66*99B",
          move: [
            <Fragment>
              <p>Sir Gawain's Charge</p>
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
              <p>22F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "-2",
          counterHit: "-2",
          note: [
            <Fragment>
              <p>TS</p>
            </Fragment>
          ]
        },
        {
          id: 70,
          command: "33*66*99BB",
          move: [
            <Fragment>
              <p>Sir Gawain's Charge</p>
              <img className={classes.imgResize} src={d3_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d6_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d9_h} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={b} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <p>TS</p>
            </Fragment>
          ]
        },
        {
          id: 71,
          command: "22*88B",
          move: [
            <Fragment>
              <p>Sable Grief</p>
              <img className={classes.imgResize} src={d2_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d8_h} />
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
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 72,
          command: "22*88B(Lethal Hit)",
          move: [
            <Fragment>
              <p>Sable Grief(Lethal Hit)</p>
              <img className={classes.imgResize} src={d2_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d8_h} />
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
              <img className={classes.imgNote} src={lh} />
              <p>Lethal Hit on whiff verticals</p>
            </Fragment>
          ]
        },
        {
          id: 73,
          command: "22*88bA",
          move: [
            <Fragment>
              <p>Troubadour's Elegy</p>
              <img className={classes.imgResize} src={d1_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d7_h} />
              <img className={classes.imgResizeSM} src={b} />
              <img className={classes.imgResize} src={a} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>17F</p>
              <img className={classes.imgResize} src={h} />
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "+6",
          counterHit: "+6",
          note: ""
        },
        {
          id: 74,
          command: "11*44*77B",
          move: [
            <Fragment>
              <p>King Pellinore's Delight</p>
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
              <p>28F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "+2",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <p>Force Crouch on block</p>
            </Fragment>
          ]
        },
        {
          id: 75,
          command: "33*66*99K",
          move: [
            <Fragment>
              <p>Intrepid Adventure</p>
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
              <p>24F</p>
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "LNC",
          counterHit: "LNC",
          note: ""
        },
        {
          id: 76,
          command: "22*88K",
          move: [
            <Fragment>
              <p>Chivalrous Courage</p>
              <img className={classes.imgResize} src={d2_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d8_h} />
              <img className={classes.imgResize} src={k} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              <img className={classes.imgResize} src={l} />
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "0",
          counterHit: "KND",
          note: "TC"
        },
        {
          id: 77,
          command: "11*44*77K",
          move: [
            <Fragment>
              <p>Faith's Reprisal </p>
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
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={lh} />
              <p>Lethal hit on whiff light attacks</p>
              <p>TJ</p>
            </Fragment>
          ]
        },
        {
          id: 78,
          command: "22*88*33*66*99A+B",
          move: [
            <Fragment>
              <p>Sir Tristan's Triumph</p>
              <img className={classes.imgResize} src={d2_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d8_h} />
              <span> * </span>
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
              <p>22F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <p>TJ / Jails</p>
            </Fragment>
          ]
        },
        {
          id: 79,
          command: "33*66*99B+K",
          move: [
            <Fragment>
              <p>Sir Garlon's Wile</p>
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
              <p>18F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "0",
          counterHit: "0",
          note: ""
        },
        {
          id: 80,
          command: "33*66*99B+K6 ~ AVN",
          move: [
            <Fragment>
              <p>Sir Garlon's Wile ~ Avenger</p>
              <img className={classes.imgResize} src={d3_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d6_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d9_h} />
              <img className={classes.imgResize} src={b} />
              <img className={classes.imgResize} src={plus} />
              <img className={classes.imgResize} src={k} />
              <img className={classes.imgResize} src={d6} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "+10",
          counterHit: "+10",
          note: [
            <Fragment>
              <img className={classes.imgNote} src={ss} />
              <p>To Avenger Stance</p>
            </Fragment>
          ]
        },
        {
          id: 81,
          command: "22*88*11*44*77B+K",
          move: [
            <Fragment>
              <p>Sir Percival's Gratitude</p>
              <img className={classes.imgResize} src={d2_h} />
              <span> * </span>
              <img className={classes.imgResize} src={d8_h} />
              <span> * </span>
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
              <p>18F</p>
              <img className={classes.imgResize} src={m} />
              <img className={classes.imgResize} src={m} />
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <p>TJ</p>
            </Fragment>
          ]
        },

        {
          id: 82,
          command: "Run K",
          move: [
            <Fragment>
              <p>Dauntless Slide</p>
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
          id: 83,
          command: "A+G",
          move: [
            <Fragment>
              <p>Camlann's Lament</p>
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
          id: 84,
          command: "4A+G",
          move: [
            <Fragment>
              <p>Lohengrin's Courage</p>
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
          id: 85,
          command: "Right Throw",
          move: [
            <Fragment>
              <p>Sire Balin's Swords</p>
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
          id: 86,
          command: "Left Throw",
          move: [
            <Fragment>
              <p>Nimue's Embrace</p>
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
          id: 87,
          command: "Back Throw",
          move: [
            <Fragment>
              <p>Astolat's Echo</p>
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
      <Fragment>
        <h3 className="characters_name">
          {this.props.location.pathname.replace(/\//g, "").toUpperCase()}
        </h3>
        <Modal
          style={styles.modal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <Popup
            text={[
              "Avenger Stance = AVN",
              "Steed of the Night = SoN"
            ]}
          />
        </Modal>
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
                  <div>
                    <span>Simple</span>

                    <Switch
                      checked={this.state.checked}
                      onClick={this.toggleTableData}
                      color="primary"
                    />
                    <span>Detail</span>
                  </div>
                  <div title="More Info" className="infoIcon">
                    <Info
                      onClick={this.handleOpen}
                      className={`${classes.cardTitleWhite} ${
                        classes.infoIcon
                      }`}
                    />
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                {this.state.display ? (
                  <Table
                    tableHeaderColor="primary"
                    tableHead={this.state.tableHeadData}
                    tableData={grohFrameData.verticalAttacks.map(data => [
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
                    tableData={grohFrameData.verticalAttacks.map(data => [
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
                  <div>
                    <span>Simple</span>

                    <Switch
                      checked={this.state.checked}
                      onClick={this.toggleTableData}
                      color="primary"
                    />
                    <span>Detail</span>
                  </div>
                  <div title="More Info" className="infoIcon">
                    <Info
                      onClick={this.handleOpen}
                      className={`${classes.cardTitleWhite} ${
                        classes.infoIcon
                      }`}
                    />
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                {this.state.display ? (
                  <Table
                    tableHeaderColor="primary"
                    tableHead={this.state.tableHeadData}
                    tableData={grohFrameData.horizontalAttacks.map(data => [
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
                    tableData={grohFrameData.horizontalAttacks.map(data => [
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
                  <div>
                    <span>Simple</span>

                    <Switch
                      checked={this.state.checked}
                      onClick={this.toggleTableData}
                      color="primary"
                    />
                    <span>Detail</span>
                  </div>
                  <div title="More Info" className="infoIcon">
                    <Info
                      onClick={this.handleOpen}
                      className={`${classes.cardTitleWhite} ${
                        classes.infoIcon
                      }`}
                    />
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                {this.state.display ? (
                  <Table
                    tableHeaderColor="primary"
                    tableHead={this.state.tableHeadData}
                    tableData={grohFrameData.kicks.map(data => [
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
                    tableData={grohFrameData.kicks.map(data => [
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
                  <div>
                    <span>Simple</span>

                    <Switch
                      checked={this.state.checked}
                      onClick={this.toggleTableData}
                      color="primary"
                    />
                    <span>Detail</span>
                  </div>
                  <div title="More Info" className="infoIcon">
                    <Info
                      onClick={this.handleOpen}
                      className={`${classes.cardTitleWhite} ${
                        classes.infoIcon
                      }`}
                    />
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                {this.state.display ? (
                  <Table
                    tableHeaderColor="primary"
                    tableHead={this.state.tableHeadData}
                    tableData={grohFrameData.dualButtonAttacks.map(data => [
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
                    tableData={grohFrameData.dualButtonAttacks.map(data => [
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
                  <div>
                    <span>Simple</span>

                    <Switch
                      checked={this.state.checked}
                      onClick={this.toggleTableData}
                      color="primary"
                    />
                    <span>Detail</span>
                  </div>
                  <div title="More Info" className="infoIcon">
                    <Info
                      onClick={this.handleOpen}
                      className={`${classes.cardTitleWhite} ${
                        classes.infoIcon
                      }`}
                    />
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                {this.state.display ? (
                  <Table
                    tableHeaderColor="primary"
                    tableHead={this.state.tableHeadData}
                    tableData={grohFrameData.specialAttacks.map(data => [
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
                    tableData={grohFrameData.specialAttacks.map(data => [
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
                  <div>
                    <span>Simple</span>

                    <Switch
                      checked={this.state.checked}
                      onClick={this.toggleTableData}
                      color="primary"
                    />
                    <span>Detail</span>
                  </div>
                  <div title="More Info" className="infoIcon">
                    <Info
                      onClick={this.handleOpen}
                      className={`${classes.cardTitleWhite} ${
                        classes.infoIcon
                      }`}
                    />
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                {this.state.display ? (
                  <Table
                    tableHeaderColor="primary"
                    tableHead={this.state.tableHeadData}
                    tableData={grohFrameData.eightwayrunAttack.map(data => [
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
                    tableData={grohFrameData.eightwayrunAttack.map(data => [
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
                  <div>
                    <span>Simple</span>

                    <Switch
                      checked={this.state.checked}
                      onClick={this.toggleTableData}
                      color="primary"
                    />
                    <span>Detail</span>
                  </div>
                  <div title="More Info" className="infoIcon">
                    <Info
                      onClick={this.handleOpen}
                      className={`${classes.cardTitleWhite} ${
                        classes.infoIcon
                      }`}
                    />
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                {this.state.display ? (
                  <Table
                    tableHeaderColor="primary"
                    tableHead={this.state.tableHeadData}
                    tableData={grohFrameData.throws.map(data => [
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
                    tableData={grohFrameData.throws.map(data => [
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
                  Reversal Edge Attacks{" "}
                </h4>
                <div
                  className={`${classes.toggleStyle} ${
                    classes.cardCategoryWhite
                  }`}
                >
                  <div>
                    <span>Simple</span>

                    <Switch
                      checked={this.state.checked}
                      onClick={this.toggleTableData}
                      color="primary"
                    />
                    <span>Detail</span>
                  </div>
                  <div title="More Info" className="infoIcon">
                    <Info
                      onClick={this.handleOpen}
                      className={`${classes.cardTitleWhite} ${
                        classes.infoIcon
                      }`}
                    />
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                {this.state.display ? (
                  <Table
                    tableHeaderColor="primary"
                    tableHead={this.state.tableHeadData}
                    tableData={grohFrameData.reversalEdge.map(data => [
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
                    tableData={grohFrameData.reversalEdge.map(data => [
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
                  <div>
                    <span>Simple</span>

                    <Switch
                      checked={this.state.checked}
                      onClick={this.toggleTableData}
                      color="primary"
                    />
                    <span>Detail</span>
                  </div>
                  <div title="More Info" className="infoIcon">
                    <Info
                      onClick={this.handleOpen}
                      className={`${classes.cardTitleWhite} ${
                        classes.infoIcon
                      }`}
                    />
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                {this.state.display ? (
                  <Table
                    tableHeaderColor="primary"
                    tableHead={this.state.tableHeadData}
                    tableData={grohFrameData.gaugeAttacks.map(data => [
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
                    tableData={grohFrameData.gaugeAttacks.map(data => [
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
export default withStyles(styles)(Groh);
