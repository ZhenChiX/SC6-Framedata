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
import n_a from "../../assets/img/a.png";
import n_a_h from "../../assets/img/a-hold.png";
import n_b from "../../assets/img/b.png";
import n_b_h from "../../assets/img/b-hold.png";
import n_k from "../../assets/img/k.png";
import n_k_h from "../../assets/img/k-hold.png";
import n_g from "../../assets/img/g.png";
import n_g_h from "../../assets/img/g-hold.png";
import n_d1 from "../../assets/img/1.png";
import n_d2 from "../../assets/img/2.png";
import n_d3 from "../../assets/img/3.png";
import n_d4 from "../../assets/img/4.png";
import n_d5 from "../../assets/img/5.png";
import n_d6 from "../../assets/img/6.png";
import n_d7 from "../../assets/img/7.png";
import n_d8 from "../../assets/img/8.png";
import n_d9 from "../../assets/img/9.png";
import n_d1_h from "../../assets/img/1-hold.png";
import n_d2_h from "../../assets/img/2-hold.png";
import n_d3_h from "../../assets/img/3-hold.png";
import n_d4_h from "../../assets/img/4-hold.png";
import n_d6_h from "../../assets/img/6-hold.png";
import n_d7_h from "../../assets/img/7-hold.png";
import n_d8_h from "../../assets/img/8-hold.png";
import n_d9_h from "../../assets/img/9-hold.png";

import n_h from "../../assets/img/h.png";
import n_m from "../../assets/img/m.png";
import n_sm from "../../assets/img/sm.png";
import n_l from "../../assets/img/l.png";
import n_sl from "../../assets/img/sl.png";
import n_plus from "../../assets/img/plus.png";
import n_at from "../../assets/img/at.png";
import n_ba from "../../assets/img/ba.png";
import n_ce from "../../assets/img/ce.png";
import n_gi from "../../assets/img/gi.png";
import n_lh from "../../assets/img/lh.png";
import n_re from "../../assets/img/re.png";
import n_sc from "../../assets/img/sc.png";
import n_sg from "../../assets/img/sg.png";
import n_ss from "../../assets/img/ss.png";
import n_th from "../../assets/img/th.png";
import n_ua from "../../assets/img/ua.png";

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

const tableHeadDetail = [
  "MOVE",
  "IMPACT",
  "OnBlock",
  "OnHit",
  "CounterHit",
  "NOTE"
];
const tableHeadSimple = ["M", "I", "OB", "OH", "CH", "NOTE"];
class Astaroth extends Component {
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

    //short cut for img tag
    const a = <img className={classes.imgResize} src={n_a} />;
    const a_h = <img className={classes.imgResize} src={n_a_h} />;
    const b = <img className={classes.imgResize} src={n_b} />;
    const b_h = <img className={classes.imgResize} src={n_b_h} />;
    const k = <img className={classes.imgResize} src={n_k} />;
    const k_h = <img className={classes.imgResize} src={n_k_h} />;
    const g = <img className={classes.imgResize} src={n_g} />;
    const g_h = <img className={classes.imgResize} src={n_g_h} />;
    const d1 = <img className={classes.imgResize} src={n_d1} />;
    const d2 = <img className={classes.imgResize} src={n_d2} />;
    const d3 = <img className={classes.imgResize} src={n_d3} />;
    const d4 = <img className={classes.imgResize} src={n_d4} />;
    const d5 = <img className={classes.imgResize} src={n_d5} />;
    const d6 = <img className={classes.imgResize} src={n_d6} />;
    const d7 = <img className={classes.imgResize} src={n_d7} />;
    const d8 = <img className={classes.imgResize} src={n_d8} />;
    const d9 = <img className={classes.imgResize} src={n_d9} />;
    const d1_h = <img className={classes.imgResize} src={n_d1_h} />;
    const d2_h = <img className={classes.imgResize} src={n_d2_h} />;
    const d3_h = <img className={classes.imgResize} src={n_d3_h} />;
    const d4_h = <img className={classes.imgResize} src={n_d4_h} />;
    const d6_h = <img className={classes.imgResize} src={n_d6_h} />;
    const d7_h = <img className={classes.imgResize} src={n_d7_h} />;
    const d8_h = <img className={classes.imgResize} src={n_d8_h} />;
    const d9_h = <img className={classes.imgResize} src={n_d9_h} />;
    const h = <img className={classes.imgResize} src={n_h} />;
    const m = <img className={classes.imgResize} src={n_m} />;
    const sm = <img className={classes.imgResize} src={n_sm} />;
    const l = <img className={classes.imgResize} src={n_l} />;
    const sl = <img className={classes.imgResize} src={n_sl} />;
    const plus = <img className={classes.imgResize} src={n_plus} />;
    const at = <img className={classes.imgNote} src={n_at} />;
    const ba = <img className={classes.imgNote} src={n_ba} />;
    const ce = <img className={classes.imgNote} src={n_ce} />;
    const gi = <img className={classes.imgNote} src={n_gi} />;
    const lh = <img className={classes.imgNote} src={n_lh} />;
    const re = <img className={classes.imgNote} src={n_re} />;
    const sc = <img className={classes.imgNote} src={n_sc} />;
    const sg = <img className={classes.imgNote} src={n_sg} />;
    const ss = <img className={classes.imgNote} src={n_ss} />;
    const th = <img className={classes.imgNote} src={n_th} />;
    const ua = <img className={classes.imgNote} src={n_ua} />;
    const aSM = <img className={classes.imgResizeSM} src={n_a} />;
    const bSM = <img className={classes.imgResizeSM} src={n_b} />;
    const kSM = <img className={classes.imgResizeSM} src={n_k} />;
    const gSM = <img className={classes.imgResizeSM} src={n_g} />;

    const astarothFrameData = {
      // verticalAttacks start here

      verticalAttacks: [
        {
          id: 1,
          command: "A",
          move: [
            <Fragment>
              <p>Annihilation</p>
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {h}
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "+2",
          counterHit: "+6",
          note: ""
        },
        {
          id: 2,
          command: "AA",
          move: [
            <Fragment>
              <p>Annihilation</p>
              {a}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {h}
              {h}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+2",
          counterHit: "+2",
          note: [
            <Fragment>
              <p>NCC / +14 on 2nd hit CH</p>
            </Fragment>
          ]
        },
        {
          id: 3,
          command: "AB",
          move: [
            <Fragment>
              <p>Destruction</p>
              {a}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {h}
              {m}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "0",
          counterHit: "0",
          note: ""
        },
        {
          id: 4,
          command: "6A",
          move: [
            <Fragment>
              <p>Hades Control</p>
              {d6}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {h}
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "+4",
          counterHit: "+14",
          note: [<Fragment />]
        },
        {
          id: 5,
          command: "3A",
          move: [
            <Fragment>
              <p>Ax Blow</p>
              {d3}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "0",
          counterHit: "KND",
          note: [<Fragment />]
        },
        {
          id: 6,
          command: "2A",
          move: [
            <Fragment>
              <p>Hades Break</p>
              {d2}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {l}
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "-4",
          counterHit: "-4",
          note: ""
        },
        {
          id: 7,
          command: "1A",
          move: [
            <Fragment>
              <p>Discus</p>
              {d1}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>36F</p>
              {l}
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "-6",
          counterHit: "KND",
          note: [<Fragment />]
        },
        {
          id: 8,
          command: "1[A]",
          move: [
            <Fragment>
              <p>Double Discus</p>
              {d1}
              {a_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>56F</p>
              {l}
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment />]
        },
        {
          id: 9,
          command: "1[A]A",
          move: [
            <Fragment>
              <p>Double Discus</p>
              {d1}
              {a_h}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>56F</p>
              {l}
              {l}
            </Fragment>
          ],
          onBlock: "-24",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment />]
        },
        {
          id: 10,
          command: "1[A]B",
          move: [
            <Fragment>
              <p>Discus Breaker</p>
              {d1}
              {a_h}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>56F</p>
              {l}
              {m}
            </Fragment>
          ],
          onBlock: "+8",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{ba}</Fragment>]
        },
        {
          id: 11,
          command: "4A",
          move: [
            <Fragment>
              <p>Decimation</p>
              {d4}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {h}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "0",
          counterHit: "0",
          note: ""
        },
        {
          id: 12,
          command: "4AA",
          move: [
            <Fragment>
              <p>Decimation</p>
              {d4}
              {a}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {h}
              {h}
            </Fragment>
          ],
          onBlock: "+4",
          onHit: "+14",
          counterHit: "+14",
          note: ""
        },
        {
          id: 13,
          command: "4A[A]",
          move: [
            <Fragment>
              <p>Decimation</p>
              {d4}
              {a}
              {a_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {h}
              {h}
            </Fragment>
          ],
          onBlock: "+8",
          onHit: "+14",
          counterHit: "+14",
          note: [<Fragment>{ba}</Fragment>]
        },
        {
          id: 14,
          command: "4AB",
          move: [
            <Fragment>
              <p>Grip Shot to Ax Volcano</p>
              {d4}
              {a}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {h}
              {m}
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "LNC",
          counterHit: "LNC",
          note: [<Fragment />]
        },
        {
          id: 15,
          command: "214A",
          move: [
            <Fragment>
              <p>Poseiden Tide</p>
              {d2}
              {d1}
              {d4}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>34F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{at}</Fragment>]
        },
        {
          id: 16,
          command: "214AA",
          move: [
            <Fragment>
              <p>Poseiden Tide Rush</p>
              {d2}
              {d1}
              {d4}
              {a}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>34F</p>
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-22",
          onHit: "",
          counterHit: "",
          note: ""
        },
        {
          id: 17,
          command: "214AAA",
          move: [
            <Fragment>
              <p>Poseiden Tide Rush</p>
              {d2}
              {d1}
              {d4}
              {a}
              {a}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>34F</p>
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-22",
          onHit: "",
          counterHit: "",
          note: ""
        },
        {
          id: 18,
          command: "214AAAA",
          move: [
            <Fragment>
              <p>Poseiden Tide Rush</p>
              {d2}
              {d1}
              {d4}
              {a}
              {a}
              {a}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>34F</p>
              {m}
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-22",
          onHit: "",
          counterHit: "",
          note: ""
        },
        {
          id: 19,
          command: "214AAAAA",
          move: [
            <Fragment>
              <p>Poseiden Tide Rush</p>
              {d2}
              {d1}
              {d4}
              {a}
              {a}
              {a}
              {a}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>34F</p>
              {m}
              {m}
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-22",
          onHit: "",
          counterHit: "",
          note: ""
        },
        {
          id: 20,
          command: "214AAAAAA",
          move: [
            <Fragment>
              <p>Poseiden Tide Rush</p>
              {d2}
              {d1}
              {d4}
              {a}
              {a}
              {a}
              {a}
              {a}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>34F</p>
              {m}
              {m}
              {m}
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-22",
          onHit: "",
          counterHit: "",
          note: ""
        },
        {
          id: 21,
          command: "FC A",
          move: [
            <Fragment>
              <p>Hades Break</p>
              <span>FC</span>
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {l}
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "-4",
          counterHit: "-4",
          note: ""
        },

        {
          id: 22,
          command: "WR A",
          move: [
            <Fragment>
              <p>Reverse Spiral Ax</p>
              <span>WR</span>
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>26F</p>
              {h}
            </Fragment>
          ],
          onBlock: "-2",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },

        {
          id: 23,
          command: "8*9A",
          move: [
            <Fragment>
              <p>Greater Annihilation</p>
              {d8}
              <span> * </span>
              {d9}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>26F</p>
              {h}
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 24,
          command: "7A",
          move: [
            <Fragment>
              <p>Greater Annihilation</p>
              {d7}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>26F</p>
              {h}
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "-4",
          counterHit: "-4",
          note: ""
        },
        {
          id: 25,
          command: "BT A",
          move: [
            <Fragment>
              <p>Reverse Ax Split</p>
              <span>BT</span>
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              {h}
            </Fragment>
          ],
          onBlock: "-19",
          onHit: "-9",
          counterHit: "-9",
          note: ""
        },
        {
          id: 26,
          command: "BT 2A",
          move: [
            <Fragment>
              <p>Lower Hades Split</p>
              <span>BT</span>
              {d2}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              {l}
            </Fragment>
          ],
          onBlock: "-20",
          onHit: "-10",
          counterHit: "-10",
          note: ""
        }
      ],

      // horizontalAttacks start here

      horizontalAttacks: [
        {
          id: 27,
          command: "B",
          move: [
            <Fragment>
              <p>Great Divide</p>
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+2",
          counterHit: "+8",
          note: ""
        },
        {
          id: 28,
          command: "BB",
          move: [
            <Fragment>
              <p>Great Divide</p>
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-2",
          onHit: "+12",
          counterHit: "+12",
          note: ""
        },
        {
          id: 29,
          command: "B[B]",
          move: [
            <Fragment>
              <p>Great Divide</p>
              {b}
              {b_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "+6",
          onHit: "LNC",
          counterHit: "LNC",
          note: [<Fragment>{ba}</Fragment>]
        },
        {
          id: 30,
          command: "bK",
          move: [
            <Fragment>
              <p>Command Kicks</p>
              {bSM}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "-2",
          counterHit: "-2",
          note: ""
        },
        {
          id: 31,
          command: "bK",
          move: [
            <Fragment>
              <p>Command Kicks</p>
              {bSM}
              {k}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-2",
          onHit: "+14",
          counterHit: "+14",
          note: ""
        },
        {
          id: 32,
          command: "bK A+G",
          move: [
            <Fragment>
              <p>Castigate</p>
              {bSM}
              {k}
              {a}
              {plus}
              {g}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{th}</Fragment>]
        },
        {
          id: 33,
          command: "bK 4A+G",
          move: [
            <Fragment>
              <p>Bluster</p>
              {bSM}
              {k}
              {d4}
              {a}
              {plus}
              {g}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{th}</Fragment>]
        },
        {
          id: 34,
          command: "B6",
          move: [
            <Fragment>
              <p>Ax offering</p>
              {b}
              {d6}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-18",
          onHit: "-2",
          counterHit: "+4",
          note: ""
        },
        {
          id: 35,
          command: "B6B",
          move: [
            <Fragment>
              <p>Ax offering</p>
              {b}
              {d6}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "+4",
          counterHit: "+14",
          note: ""
        },
        {
          id: 36,
          command: "BB6",
          move: [
            <Fragment>
              <p>Ax Side Divide</p>
              {b}
              {b}
              {d6}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "+2",
          onHit: "+10",
          counterHit: "+10",
          note: [<Fragment />]
        },
        {
          id: 37,
          command: "6B",
          move: [
            <Fragment>
              <p>Ax Side Cannon</p>
              {d6}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+2",
          counterHit: "KND",
          note: ""
        },
        {
          id: 38,
          command: "6[B]",
          move: [
            <Fragment>
              <p>Swipe</p>
              {d6}
              {b_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>40F</p>
              {m}
            </Fragment>
          ],
          onBlock: "+2",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 39,
          command: "6[B]B",
          move: [
            <Fragment>
              <p>Swipe</p>
              {d6}
              {b_h}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>40F</p>
              {m}
            </Fragment>
          ],
          onBlock: "+8",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{ba}</Fragment>]
        },
        {
          id: 40,
          command: "3B",
          move: [
            <Fragment>
              <p>Ax Volcano</p>
              {d3}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "LNC",
          counterHit: "LNC",
          note: [<Fragment />]
        },
        {
          id: 41,
          command: "3[B]",
          move: [
            <Fragment>
              <p>Ax Volcano</p>
              {d3}
              {b_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>64F</p>
              {m}
            </Fragment>
          ],
          onBlock: "LNC",
          onHit: "LNC",
          counterHit: "LNC",
          note: [<Fragment>{ua}</Fragment>]
        },
        {
          id: 42,
          command: "2B",
          move: [
            <Fragment>
              <p>Hades</p>
              {d2}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "+6",
          counterHit: "+6",
          note: [<Fragment />]
        },
        {
          id: 43,
          command: "1B",
          move: [
            <Fragment>
              <p>Ax Grave</p>
              {d1}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              {l}
            </Fragment>
          ],
          onBlock: "-18",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 44,
          command: "4B",
          move: [
            <Fragment>
              <p>Bear Fang</p>
              {d4}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+6",
          counterHit: "+6",
          note: ""
        },
        {
          id: 45,
          command: "4[B]",
          move: [
            <Fragment>
              <p>Bear Fang</p>
              {d4}
              {b_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>42F</p>
              {m}
            </Fragment>
          ],
          onBlock: "+6",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{ba}</Fragment>]
        },
        {
          id: 46,
          command: "4[B]B",
          move: [
            <Fragment>
              <p>Gore Fang</p>
              {d4}
              {b_h}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>42F</p>
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "0",
          onHit: "+6",
          counterHit: "+6",
          note: [<Fragment>{ba}</Fragment>]
        },
        {
          id: 47,
          command: "4[B][B]",
          move: [
            <Fragment>
              <p>Gore Fang</p>
              {d4}
              {b_h}
              {b_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>42F</p>
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "10",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{ba}</Fragment>]
        },

        {
          id: 48,
          command: "FC B",
          move: [
            <Fragment>
              <p>Hades</p>
              <span>FC</span>
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "6",
          counterHit: "6",
          note: [<Fragment />]
        },

        {
          id: 49,
          command: "WR B",
          move: [
            <Fragment>
              <p>???</p>
              <span>WR</span>
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 50,
          command: "WR [B]",
          move: [
            <Fragment>
              <p>???</p>
              <span>WR</span>
              {b_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "-6",
          counterHit: "-6",
          note: [<Fragment>{ba}</Fragment>]
        },
        {
          id: 51,
          command: "7*8*9B",
          move: [
            <Fragment>
              <p>???</p>
              {d7}
              <span> * </span>
              {d8}
              <span> * </span>
              {d9}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>42F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <p>TJ</p>
            </Fragment>
          ]
        },
        {
          id: 52,
          command: "BT B",
          move: [
            <Fragment>
              <p>Reverse Dark Split</p>
              <span>BT</span>
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "+4",
          counterHit: "+4",
          note: ""
        },
        {
          id: 53,
          command: "BT 2B",
          move: [
            <Fragment>
              <p>Deep Immortal</p>
              <span>BT</span>
              {d2}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+2",
          counterHit: "+2",
          note: ""
        }
      ],
      // Kicks start here
      kicks: [
        {
          id: 54,
          command: "K",
          move: [
            <Fragment>
              <p>Moloch's Vise</p>
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {h}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+4",
          counterHit: "+4",
          note: ""
        },
        {
          id: 55,
          command: "[K]",
          move: [
            <Fragment>
              <p>Moloch's Vise</p>
              {k_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>28F</p>
              {h}
            </Fragment>
          ],
          onBlock: "0",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {at}
              {lh}
              <p>Lethal Hit on full Soul Gauge opponent</p>
            </Fragment>
          ]
        },
        {
          id: 56,
          command: "6K",
          move: [
            <Fragment>
              <p>Hades Knee</p>
              {d6}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "+4",
          counterHit: "KND",
          note: ""
        },
        {
          id: 57,
          command: "3K",
          move: [
            <Fragment>
              <p>Moloch's Revenge</p>
              {d3}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "-4",
          counterHit: "-4",
          note: ""
        },
        {
          id: 58,
          command: "2K",
          move: [
            <Fragment>
              <p>Bull Low Kick</p>
              {d2}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {l}
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "-4",
          counterHit: "-4",
          note: ""
        },

        {
          id: 59,
          command: "1K",
          move: [
            <Fragment>
              <p>Reverse Tamer</p>
              {d1}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>26F</p>
              {l}
            </Fragment>
          ],
          onBlock: "-18",
          onHit: "0",
          counterHit: "KND",
          note: ""
        },
        {
          id: 60,
          command: "1K",
          move: [
            <Fragment>
              <p>Reverse Tamer</p>
              {d1}
              {k}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>26F</p>
              {l}
              {h}
            </Fragment>
          ],
          onBlock: "0",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 61,
          command: "4K",
          move: [
            <Fragment>
              <p>Dark Tamer</p>
              {d4}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "-2",
          counterHit: "-2",
          note: ""
        },
        {
          id: 62,
          command: "4KA",
          move: [
            <Fragment>
              <p>Dark Tamer</p>
              {d4}
              {k}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {m}
              {h}
            </Fragment>
          ],
          onBlock: "-1",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 63,
          command: "4K[A]",
          move: [
            <Fragment>
              <p>Coercion</p>
              {d4}
              {k}
              {a_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+6",
          counterHit: "KND",
          note: ""
        },
        {
          id: 64,
          command: "FC K",
          move: [
            <Fragment>
              <p>Bull Low Kick</p>
              {d2}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {l}
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "-4",
          counterHit: "-4",
          note: ""
        },
        {
          id: 65,
          command: "FC 3K",
          move: [
            <Fragment>
              <p>Bull Rush??</p>
              <span>FC</span>
              {d3}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "-4",
          counterHit: "-4",
          note: ""
        },
        {
          id: 66,
          command: "WR K",
          move: [
            <Fragment>
              <p>???</p>
              <span>WR</span>
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+4",
          counterHit: "+4",
          note: ""
        },
        {
          id: 67,
          command: "7*8*9K",
          move: [
            <Fragment>
              <p>???</p>
              {d7}
              <span> * </span>
              {d8}
              <span> * </span>
              {d9}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>26F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "KND",
          counterHit: "KND",
          note: "TJ"
        },

        {
          id: 68,
          command: "BT K",
          move: [
            <Fragment>
              <p>???</p>
              <span>BT</span>
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {h}
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "+4",
          counterHit: "+4",
          note: ""
        },

        {
          id: 69,
          command: "BT 2K",
          move: [
            <Fragment>
              <p>???</p>
              <span>BT</span>
              {d2}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {l}
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "-4",
          counterHit: "-4",
          note: "~ FC"
        }
      ],

      // dual button attackts start here
      dualButtonAttacks: [
        {
          id: 70,
          command: "A+B",
          move: [
            <Fragment>
              <p>Eternal Damnation</p>
              {a}
              {plus}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>38F</p>
              {m}
            </Fragment>
          ],
          onBlock: "+6",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {ba}
              {lh}
              <p>Lethal Hit triggers upon GI</p>
            </Fragment>
          ]
        },
        {
          id: 71,
          command: "6A+B",
          move: [
            <Fragment>
              <p>Minotaur Crush</p>
              {d6}
              {a}
              {plus}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-18",
          onHit: "0",
          counterHit: "+8",
          note: [<Fragment />]
        },
        {
          id: 72,
          command: "2A+B",
          move: [
            <Fragment>
              <p>Titan Axe</p>
              {d2}
              {a}
              {plus}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>28F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-20",
          onHit: "-8",
          counterHit: "-8",
          note: [
            <Fragment>
              <p>Knock down on further range</p>
            </Fragment>
          ]
        },
        {
          id: 73,
          command: "4A+B",
          move: [
            <Fragment>
              <p>Breath of Hades</p>
              {d4}
              {a}
              {plus}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-18",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment />]
        },
        {
          id: 74,
          command: "4[A+B]",
          move: [
            <Fragment>
              <p>Breath of Hades(Hold)</p>
              {d4}
              {a_h}
              {plus}
              {b_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>56F</p>
              {m}
            </Fragment>
          ],
          onBlock: "KND",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {ua}
              {at}
            </Fragment>
          ]
        },
        {
          id: 75,
          command: "8A+B",
          move: [
            <Fragment>
              <p>Flip Titan</p>
              {d8}
              {a}
              {plus}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>28F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-20",
          onHit: "KND",
          counterHit: "KND",
          note: []
        },
        {
          id: 76,
          command: "B+K",
          move: [
            <Fragment>
              <p>Guard Breaker</p>
              {b}
              {plus}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              {h}
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "+14",
          counterHit: "+14",
          note: [
            <Fragment>
              {at}
              <p>+18 on hit and CH against BT opponent</p>
            </Fragment>
          ]
        },
        {
          id: 77,
          command: "6B+K",
          move: [
            <Fragment>
              <p>Body Splash</p>
              {d6}
              {b}
              {plus}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "+8",
          counterHit: "+8",
          note: [
            <Fragment>
              <p>TC</p>
            </Fragment>
          ]
        },
        {
          id: 78,
          command: "6[B+K]",
          move: [
            <Fragment>
              <p>Body Splash(Hold)</p>
              {d6}
              {b_h}
              {plus}
              {k_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>30F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "+12",
          counterHit: "+12",
          note: [
            <Fragment>
              <p>TC</p>
            </Fragment>
          ]
        },
        {
          id: 79,
          command: "2B+K",
          move: [
            <Fragment>
              <p>Hades Crush</p>
              {d2}
              {b}
              {plus}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>36F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-2",
          onHit: "KND",
          counterHit: "KND",
          note: []
        },
        {
          id: 80,
          command: "2B+K A+G",
          move: [
            <Fragment>
              <p>Hymm to Destruction</p>
              {d2}
              {b}
              {plus}
              {k}
              {a}
              {plus}
              {g}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>36F</p>
              {m}
              {h}
            </Fragment>
          ],
          onBlock: "-26",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{th}</Fragment>]
        },
        {
          id: 81,
          command: "2B+K 4A+G",
          move: [
            <Fragment>
              <p>Hymm to Annihilation</p>
              {d2}
              {b}
              {plus}
              {k}
              {d4}
              {a}
              {plus}
              {g}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>36F</p>
              {m}
              {h}
            </Fragment>
          ],
          onBlock: "-26",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{th}</Fragment>]
        },
        {
          id: 82,
          command: "4B+K",
          move: [
            <Fragment>
              <p>Ax Lower Cannon</p>
              {d4}
              {b}
              {plus}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>40F</p>
              {l}
              {l}
              {l}
            </Fragment>
          ],
          onBlock: "0",
          onHit: "KND",
          counterHit: "KND",
          note: []
        },
        {
          id: 83,
          command: "4B+KB",
          move: [
            <Fragment>
              <p>Ax Lower Cannon</p>
              {d4}
              {b}
              {plus}
              {k}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>40F</p>
              {l}
              {l}
              {l}
            </Fragment>
          ],
          onBlock: "0",
          onHit: "LNC",
          counterHit: "LNC",
          note: [<Fragment>{at}</Fragment>]
        },
        {
          id: 84,
          command: "9B+K",
          move: [
            <Fragment>
              <p>Flying Divide</p>
              {d9}
              {b}
              {plus}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>42F</p>
              {m}
            </Fragment>
          ],
          onBlock: "0",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment />]
        },
        {
          id: 85,
          command: "9[B+K]",
          move: [
            <Fragment>
              <p>Flying Divide(Hold)</p>
              {d9}
              {b_h}
              {plus}
              {k_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>52F</p>
              {m}
            </Fragment>
          ],
          onBlock: "+14",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{ba}</Fragment>]
        },
        {
          id: 86,
          command: "236B+K",
          move: [
            <Fragment>
              <p>Demented Moon</p>
              {d2}
              {d3}
              {d4}
              {b}
              {plus}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>84F</p>
              {m}
            </Fragment>
          ],
          onBlock: "LNC",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              {ua}
              <p>Cancel with G </p>
            </Fragment>
          ]
        },

        {
          id: 87,
          command: "BT B+K",
          move: [
            <Fragment>
              <p>Side Divide</p>
              <span>BT</span>
              {b}
              {plus}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {m}
            </Fragment>
          ],
          onBlock: "0",
          onHit: "+10",
          counterHit: "STN",
          note: ""
        }
      ],

      // 8way-run attacks start here
      eightwayrunAttack: [
        {
          id: 88,
          command: "33*66*99A",
          move: [
            <Fragment>
              <p>Tornado Spike</p>
              {d3_h}
              <span> * </span>
              {d6_h}
              <span> * </span>
              {d9_h}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-18",
          onHit: "-4",
          counterHit: "KND",
          note: ""
        },
        {
          id: 89,
          command: "33*66*99AB",
          move: [
            <Fragment>
              <p>Tornado Spike</p>
              {d3_h}
              <span> * </span>
              {d6_h}
              <span> * </span>
              {d9_h}
              {a}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment />]
        },
        {
          id: 90,
          command: "33*66*99A[B]",
          move: [
            <Fragment>
              <p>Tornado Spike</p>
              {d3_h}
              <span> * </span>
              {d6_h}
              <span> * </span>
              {d9_h}
              {a}
              {b_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "KND",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{ua}</Fragment>]
        },
        {
          id: 91,
          command: "22*88A",
          move: [
            <Fragment>
              <p>Poseiden Crest</p>
              {d2}
              <span> * </span>
              {d8}
              <span> * </span>
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "0",
          counterHit: "0",
          note: ""
        },
        {
          id: 92,
          command: "22*88AA",
          move: [
            <Fragment>
              <p>Poseiden Crest</p>
              {d2}
              <span> * </span>
              {d8}
              <span> * </span>
              {a}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "+2",
          counterHit: "+2",
          note: ""
        },
        {
          id: 93,
          command: "11*44*77A",
          move: [
            <Fragment>
              <p>Hades Divide</p>
              {d1_h}
              <span> * </span>
              {d4_h}
              <span> * </span>
              {d7_h}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>26F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "+6",
          counterHit: "KND",
          note: [
            <Fragment>
              <p>Knock down on tip range</p>
            </Fragment>
          ]
        },
        {
          id: 94,
          command: "11*44*77[A]",
          move: [
            <Fragment>
              <p>Hades Divide</p>
              {d1_h}
              <span> * </span>
              {d4_h}
              <span> * </span>
              {d7_h}
              {a_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>44F</p>
              {m}
            </Fragment>
          ],
          onBlock: "+8",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{ba}</Fragment>]
        },
        {
          id: 95,
          command: "33*66*99Bb",
          move: [
            <Fragment>
              <p>Ax Crash</p>
              {d3_h}
              <span> * </span>
              {d6_h}
              <span> * </span>
              {d9_h}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {h}
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "0",
          counterHit: "KND",
          note: ""
        },

        {
          id: 96,
          command: "22*88B",
          move: [
            <Fragment>
              <p>Hades Cannon</p>
              {d2_h}
              <span> * </span>
              {d8_h}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>30F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },

        {
          id: 97,
          command: "11*77B",
          move: [
            <Fragment>
              <p>Azazel Tackle</p>
              {d1_h}
              <span> * </span>
              {d7_h}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>30F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment />]
        },
        {
          id: 98,
          command: "11*77BK",
          move: [
            <Fragment>
              <p>Azazel Tackle</p>
              {d1_h}
              <span> * </span>
              {d7_h}
              {b}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>30F</p>
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment />]
        },
        {
          id: 99,
          command: "44B",
          move: [
            <Fragment>
              <p>Canyon Creation</p>
              {d4_h}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>28F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment />]
        },
        {
          id: 100,
          command: "44[B]",
          move: [
            <Fragment>
              <p>Canyon Creation</p>
              {d4_h}
              {b_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>60F</p>
              {m}
            </Fragment>
          ],
          onBlock: "KND",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{ua}</Fragment>]
        },
        {
          id: 101,
          command: "33*66*99K",
          move: [
            <Fragment>
              <p>Bullrush</p>
              {d3_h}
              <span> * </span>
              {d6_h}
              <span> * </span>
              {d9_h}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "+12",
          counterHit: "KND",
          note: "TC[6 ~ ]"
        },
        {
          id: 102,
          command: "33*66*99[K]",
          move: [
            <Fragment>
              <p>Bullrush(Hold)</p>
              {d3_h}
              <span> * </span>
              {d6_h}
              <span> * </span>
              {d9_h}
              {k_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>48F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {lh}
              <p>Lethal Hit at range / TC </p>
            </Fragment>
          ]
        },
        {
          id: 103,
          command: "33*66*99[K]K",
          move: [
            <Fragment>
              <p>Bone Grinder</p>
              {d3_h}
              <span> * </span>
              {d6_h}
              <span> * </span>
              {d9_h}
              {k_h}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>48F</p>
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {lh}
              <p>TC</p>
            </Fragment>
          ]
        },
        {
          id: 104,
          command: "22*88K",
          move: [
            <Fragment>
              <p>Stamp of Hades</p>
              {d2_h}
              <span> * </span>
              {d8_h}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>34F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 105,
          command: "22*88[K]",
          move: [
            <Fragment>
              <p>Stamp of Hades</p>
              {d2_h}
              <span> * </span>
              {d8_h}
              {k_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>58F</p>
              {m}
            </Fragment>
          ],
          onBlock: "+8",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{ba}</Fragment>]
        },
        {
          id: 106,
          command: "11*44*77K",
          move: [
            <Fragment>
              <p>Lower Command Kick</p>
              {d1_h}
              <span> * </span>
              {d4_h}
              <span> * </span>
              {d7_h}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>32F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-2",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment />]
        },
        {
          id: 107,
          command: "33*66*99A+B",
          move: [
            <Fragment>
              <p>Atlas Punishment</p>
              {d3_h}
              <span> * </span>
              {d6_h}
              <span> * </span>
              {d9_h}
              {a}
              {plus}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>44F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 108,
          command: "22A+B",
          move: [
            <Fragment>
              <p>Titan Axe</p>
              {d2_h}
              {a}
              {plus}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>28F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-20",
          onHit: "-8",
          counterHit: "-8",
          note: [
            <Fragment>
              <p>Knock down at tip range</p>
            </Fragment>
          ]
        },
        {
          id: 109,
          command: "88A+B",
          move: [
            <Fragment>
              <p>Flip Titan Axe</p>
              {d8_h}
              {a}
              {plus}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>28F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-20",
          onHit: "-8",
          counterHit: "-8",
          note: [
            <Fragment>
              <p>Knock down at tip range</p>
            </Fragment>
          ]
        },

        {
          id: 110,
          command: "Run K",
          move: [
            <Fragment>
              <p>Sliding</p>
              <span>Run</span>
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>26F</p>
              {l}
            </Fragment>
          ],
          onBlock: "-22",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment />]
        }
      ],

      //throws start here
      throws: [
        {
          id: 111,
          command: "A+G",
          move: [
            <Fragment>
              <p>Hades Destoryer</p>
              {a}
              {plus}
              {g}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {h}
            </Fragment>
          ],
          onBlock: "KND",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{th}</Fragment>]
        },

        {
          id: 112,
          command: "6A+G",
          move: [
            <Fragment>
              <p>Colossus</p>
              {d6}
              {a}
              {plus}
              {g}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {h}
            </Fragment>
          ],
          onBlock: "KND",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{th}</Fragment>]
        },
        {
          id: 113,
          command: "4A+G",
          move: [
            <Fragment>
              <p>Festival of Havoc</p>
              {d4}
              {a}
              {plus}
              {g}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {h}
            </Fragment>
          ],
          onBlock: "KND",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{th}</Fragment>]
        },
        {
          id: 114,
          command: "Right Throw",
          move: [
            <Fragment>
              <p>On Silent Wings</p>
              <p>Right Side Throw</p>
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {h}
            </Fragment>
          ],
          onBlock: "KND",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{th}</Fragment>]
        },
        {
          id: 115,
          command: "Left Throw",
          move: [
            <Fragment>
              <p>Beat Down</p>
              <p>Left Side Throw</p>
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {h}
            </Fragment>
          ],
          onBlock: "KND",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{th}</Fragment>]
        },
        {
          id: 116,
          command: "Back Throw",
          move: [
            <Fragment>
              <p>Death Crush</p>
              <p>Back Throw</p>
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {h}
            </Fragment>
          ],
          onBlock: "KND",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{th}</Fragment>]
        },
        {
          id: 117,
          command: "8A+G",
          move: [
            <Fragment>
              <p>Maelstorm Divide</p>
              {d8}
              {a}
              {plus}
              {g}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>28F</p>
              {m}
            </Fragment>
          ],
          onBlock: "KND",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {th}
              <p>TJ</p>
            </Fragment>
          ]
        },
        {
          id: 118,
          command: "2A+G",
          move: [
            <Fragment>
              <p>Bludgeoning Crush</p>
              {d2}
              {a}
              {plus}
              {g}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {m}
            </Fragment>
          ],
          onBlock: "KND",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {th}
              <p>TC</p>
            </Fragment>
          ]
        },
        {
          id: 119,
          command: "1A+G",
          move: [
            <Fragment>
              <p>Drop of Lava</p>
              {d1}
              {a}
              {plus}
              {g}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {m}
            </Fragment>
          ],
          onBlock: "KND",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {th}
              <p>TC</p>
            </Fragment>
          ]
        },
        {
          id: 120,
          command: "A+G(Air)",
          move: [
            <Fragment>
              <p>Wrath of the Accursed</p>
              {a}
              {plus}
              {g}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {h}
            </Fragment>
          ],
          onBlock: "KND",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {th}
              <p>Unbreakable against midair opponent </p>
            </Fragment>
          ]
        },
        {
          id: 121,
          command: "4A+G(Air)",
          move: [
            <Fragment>
              <p>Wrath of the Damned</p>
              {d4}
              {a}
              {plus}
              {g}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {h}
            </Fragment>
          ],
          onBlock: "KND",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {th}
              {lh}
              <p>Unbreakable against midair opponent </p>
            </Fragment>
          ]
        },
        {
          id: 122,
          command: "236A+G",
          move: [
            <Fragment>
              <p>Titan Bomb</p>
              {d2}
              {d3}
              {d6}
              {a}
              {plus}
              {g}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {h}
            </Fragment>
          ],
          onBlock: "KND",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {th}
              <p>can be held</p>
            </Fragment>
          ]
        },
        {
          id: 123,
          command: "236A+G JF",
          move: [
            <Fragment>
              <p>Titan Bomb(Just Frame)</p>
              {d2}
              {d3}
              {d6}
              {a}
              {plus}
              {g}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {h}
            </Fragment>
          ],
          onBlock: "KND",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {th}
              <p>Does more damages on fast input / can be held</p>
            </Fragment>
          ]
        },
        {
          id: 124,
          command: "214A+G",
          move: [
            <Fragment>
              <p>Flight of the WIcked</p>
              {d2}
              {d1}
              {d4}
              {a}
              {plus}
              {g}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {h}
            </Fragment>
          ],
          onBlock: "LNC",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              {th}
              <p>can be held</p>
            </Fragment>
          ]
        },
        {
          id: 125,
          command: "214A+G JF",
          move: [
            <Fragment>
              <p>Flight of the WIcked(Just Frame)</p>
              {d2}
              {d1}
              {d4}
              {a}
              {plus}
              {g}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {h}
            </Fragment>
          ],
          onBlock: "LNC",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              {th}
              <p>Does more damages on fast input / can be held</p>
            </Fragment>
          ]
        },
        {
          id: 126,
          command: "214A+G 2*8A",
          move: [
            <Fragment>
              <p>Wicked Twister</p>
              {d2}
              {d1}
              {d4}
              {a}
              {plus}
              {g}
              {d2}
              <span> * </span>
              {d8}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {h}
            </Fragment>
          ],
          onBlock: "KND",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{th}</Fragment>]
        },
        {
          id: 127,
          command: "28A+G",
          move: [
            <Fragment>
              <p>Obsidian Drop</p>
              {d2}
              {d8}
              {a}
              {plus}
              {g}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {h}
            </Fragment>
          ],
          onBlock: "KND",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {th}
              <p>Hits midair opponent / Unbreakable</p>
            </Fragment>
          ]
        },
        {
          id: 128,
          command: "28A+G JF",
          move: [
            <Fragment>
              <p>Obsidian Drop(Just Frame)</p>
              {d2}
              {d8}
              {a}
              {plus}
              {g}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {h}
            </Fragment>
          ],
          onBlock: "KND",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {th}
              <p>
                Fast input does more damages / Hits midair opponent /
                Unbreakable
              </p>
            </Fragment>
          ]
        },
        {
          id: 129,
          command: "3A+G",
          move: [
            <Fragment>
              <p>Brutal Grasp</p>
              {d3}
              {a}
              {plus}
              {g}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>10F</p>
              {l}
            </Fragment>
          ],
          onBlock: "+10",
          onHit: "+10",
          counterHit: "+10",
          note: [
            <Fragment>
              {th}
              <p>Hits head toward downed opponent / Unbreakable</p>
            </Fragment>
          ]
        },
        {
          id: 130,
          command: "33*66*99A+G",
          move: [
            <Fragment>
              <p>Vicious Madness</p>
              {d3_h}
              <span> * </span>
              {d6_h}
              <span> * </span>
              {d9_h}
              {a}
              {plus}
              {g}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>46F</p>
              {h}
            </Fragment>
          ],
          onBlock: "KND",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {th}
              <p>Revenge property</p>
            </Fragment>
          ]
        },
        {
          id: 131,
          command: "33*66*99A+G2",
          move: [
            <Fragment>
              <p>Underworld PUll</p>
              {d3_h}
              <span> * </span>
              {d6_h}
              <span> * </span>
              {d9_h}
              {a}
              {plus}
              {g}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>45F</p>
              {m}
            </Fragment>
          ],
          onBlock: "KND",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{th}</Fragment>]
        },
        {
          id: 132,
          command: "11*44*77A+G",
          move: [
            <Fragment>
              <p>Cursed Earth</p>
              {d1_h}
              <span> * </span>
              {d4_h}
              <span> * </span>
              {d7_h}
              {a}
              {plus}
              {g}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>46F</p>
              {h}
            </Fragment>
          ],
          onBlock: "KND",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{th}</Fragment>]
        },
        {
          id: 133,
          command: "11*44*77A+G[B]",
          move: [
            <Fragment>
              <p>Cursed Earth</p>
              {d1_h}
              <span> * </span>
              {d4_h}
              <span> * </span>
              {d7_h}
              {a}
              {plus}
              {g}
              {b_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>46F</p>
              {h}
            </Fragment>
          ],
          onBlock: "KND",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{th}</Fragment>]
        },
        {
          id: 134,
          command: "11*44*77A+G2",
          move: [
            <Fragment>
              <p>Uproot</p>
              {d1_h}
              <span> * </span>
              {d4_h}
              <span> * </span>
              {d7_h}
              {a}
              {plus}
              {g}
              {d2}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>46F</p>
              {m}
            </Fragment>
          ],
          onBlock: "KND",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{th}</Fragment>]
        }
      ],

      // reversal edge start here
      reversalEdge: [
        {
          id: 135,
          command: "B+G",
          move: [
            <Fragment>
              <p>Woebringer</p>
              {b}
              {plus}
              {g}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>50F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "N/A",
          counterHit: "N/A",
          note: [<Fragment>{re}</Fragment>]
        },

        {
          id: 136,
          command: "[B+G]",
          move: [
            <Fragment>
              <p>Woebringer</p>
              {b_h}
              {plus}
              {g_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>70F</p>
              {m}
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "N/A",
          counterHit: "N/A",
          note: [
            <Fragment>
              {re}
              {ba}
            </Fragment>
          ]
        },
        {
          id: 137,
          command: "RE A",
          move: [
            <Fragment>
              <p>Ax of Woe</p>
              {re}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>N/A</p>
              {h}
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              {lh}
              <p>Lethal hit on 2nd phrase</p>
            </Fragment>
          ]
        },

        {
          id: 138,
          command: "RE B",
          move: [
            <Fragment>
              <p>Rending Torment</p>
              {re}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>N/A</p>
              {m}
            </Fragment>
          ],
          onBlock: "",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {lh}
              <p>Lethal hit on 2nd phrase</p>
            </Fragment>
          ]
        },

        {
          id: 139,
          command: "RE K",
          move: [
            <Fragment>
              <p>Eviscerate</p>
              {re}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>N/A</p>
              {m}
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              {lh}
              <p>Lethal hit on 2nd phrase</p>
            </Fragment>
          ]
        },

        {
          id: 140,
          command: "RE 6",
          move: [
            <Fragment>
              <p>Foward Step</p>
              {re}
              {d6}
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
              {re}
              {a}
            </Fragment>
          ]
        },
        {
          id: 141,
          command: "RE 2*8",
          move: [
            <Fragment>
              <p>Side Step</p>
              {re}
              {d2}
              <span> * </span>
              {d8}
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
              {re}
              {b}
            </Fragment>
          ]
        },
        {
          id: 142,
          command: "RE 4",
          move: [
            <Fragment>
              <p>Back Step</p>
              {re}
              {d4}
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
              {re}
              {k}
            </Fragment>
          ]
        }
      ],

      // gauge attacks start here
      gaugeAttacks: [
        {
          id: 143,
          command: "A+B+K",
          move: [
            <Fragment>
              <p>Final Anguish</p>
              {a}
              {plus}
              {b}
              {plus}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              {h}
            </Fragment>
          ],
          onBlock: "KND",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {sg}
              {ce}
              {th}
              <p>Unbreakable</p>
            </Fragment>
          ]
        },

        {
          id: 144,
          command: "4A+B+K",
          move: [
            <Fragment>
              <p>Soul Charge</p>
              {d4}
              {a}
              {plus}
              {b}
              {plus}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>6F</p>
              {sm}
            </Fragment>
          ],
          onBlock: "0",
          onHit: "+8",
          counterHit: "+8",
          note: [
            <Fragment>
              {sg}
              {ba}
            </Fragment>
          ]
        },
        {
          id: 145,
          command: "SC 1AA",
          move: [
            <Fragment>
              <p>Bringer of Ruin</p>
              {sc}
              {d1}
              {a}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>36F</p>
              {l}
              {l}
            </Fragment>
          ],
          onBlock: "",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{sc}</Fragment>]
        },
        {
          id: 146,
          command: "SC 1AB",
          move: [
            <Fragment>
              <p>Ruinous Discus Breaker</p>
              {sc}
              {d1}
              {a}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>36F</p>
              {l}
              {m}
            </Fragment>
          ],
          onBlock: "",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {sc}
              {ba}
            </Fragment>
          ]
        },

        {
          id: 147,
          command: "SC 4AA",
          move: [
            <Fragment>
              <p>Decimation</p>
              {sc}
              {d4}
              {a}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {h}
              {h}
            </Fragment>
          ],
          onBlock: "+4",
          onHit: "+14",
          counterHit: "+14",
          note: [<Fragment>{sc}</Fragment>]
        },
        {
          id: 148,
          command: "SC 236A",
          move: [
            <Fragment>
              <p>Cerberus Surge</p>
              {sc}
              {d2}
              {d3}
              {d6}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {m}
              {m}
              {m}
              {m}
              {m}
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "+8",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{sc}</Fragment>]
        },
        {
          id: 149,
          command: "SC BB",
          move: [
            <Fragment>
              <p>UNstoppable Great Divide</p>
              {sc}
              {b}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "",
          onHit: "LNC",
          counterHit: "LNC",
          note: [<Fragment>{sc}</Fragment>]
        },
        {
          id: 150,
          command: "SC B[B]",
          move: [
            <Fragment>
              <p>Savage Great Divide</p>
              {sc}
              {b}
              {b_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "LNC",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              {sc}
              {ua}
            </Fragment>
          ]
        },
        {
          id: 151,
          command: "SC bK A+G",
          move: [
            <Fragment>
              <p>Apocalypse Pound</p>
              {sc}
              {bSM}
              {k}
              {a}
              {plus}
              {g}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {sc}
              {th}
            </Fragment>
          ]
        },
        {
          id: 152,
          command: "SC bK 4A+G",
          move: [
            <Fragment>
              <p>Apocalypse Drop</p>
              {sc}
              {bSM}
              {k}
              {d4}
              {a}
              {plus}
              {g}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {sc}
              {th}
            </Fragment>
          ]
        },

        {
          id: 153,
          command: "SC 6B",
          move: [
            <Fragment>
              <p>Ruin Slam</p>
              {sc}
              {d6}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+2",
          counterHit: "KND",
          note: [<Fragment>{sc}</Fragment>]
        },

        {
          id: 154,
          command: "SC 6BA",
          move: [
            <Fragment>
              <p>Blood Tide Rush</p>
              {sc}
              {d6}
              {b}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {m}
              {m}
              {m}
              {m}
              {m}
              {m}
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "+8",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{sc}</Fragment>]
        },

        {
          id: 155,
          command: "SC 6BB",
          move: [
            <Fragment>
              <p>Cyclopean Swipe</p>
              {sc}
              {d6}
              {b}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "+8",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {sc}
              {ba}
            </Fragment>
          ]
        },

        {
          id: 156,
          command: "SC 4BB",
          move: [
            <Fragment>
              <p>Annihilation Gorefang</p>
              {sc}
              {d4}
              {b}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "+10",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {sc}
              {ba}
            </Fragment>
          ]
        },
        {
          id: 157,
          command: "SC 4B[B]",
          move: [
            <Fragment>
              <p>Annihilation Gorefang</p>
              {sc}
              {d4}
              {b}
              {b_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "KND",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {sc}
              {ua}
            </Fragment>
          ]
        },

        {
          id: 158,
          command: "SC 4KA",
          move: [
            <Fragment>
              <p>Victorious Charge</p>
              {sc}
              {d4}
              {k}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {m}
              {h}
            </Fragment>
          ],
          onBlock: "",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{sc}</Fragment>]
        },
        {
          id: 159,
          command: "SC 4K[A]",
          move: [
            <Fragment>
              <p>Ruthless Assault</p>
              {sc}
              {d4}
              {k}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{sc}</Fragment>]
        },

        {
          id: 160,
          command: "SC 4B+K",
          move: [
            <Fragment>
              <p>Malicious Torment</p>
              {sc}
              {d4}
              {b}
              {plus}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>40F</p>
              {l}
              {l}
              {l}
            </Fragment>
          ],
          onBlock: "",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{sc}</Fragment>]
        },

        {
          id: 161,
          command: "SC 22*88B",
          move: [
            <Fragment>
              <p>Apocalypse Cannon</p>
              {sc}
              {d2_h}
              <span> * </span>
              {d8_h}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>30F</p>
              {m}
            </Fragment>
          ],
          onBlock: "",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              {sc}
              {ba}
            </Fragment>
          ]
        },

        {
          id: 162,
          command: "SC 33*66*99KK",
          move: [
            <Fragment>
              <p>Apocalypse Rush</p>
              {sc}
              {d3_h}
              <span> * </span>
              {d6_h}
              <span> * </span>
              {d9_h}
              {k}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {sc}
              <p>TC</p>
            </Fragment>
          ]
        },

        {
          id: 163,
          command: "SC 33*66*99A+G",
          move: [
            <Fragment>
              <p>Vicious Fury</p>
              {sc}
              {d3_h}
              <span> * </span>
              {d6_h}
              <span> * </span>
              {d9_h}
              {a}
              {plus}
              {g}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>46F</p>
              {h}
            </Fragment>
          ],
          onBlock: "KND",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {sc}
              {th}
            </Fragment>
          ]
        },
        {
          id: 164,
          command: "SC 11*44*77A+G",
          move: [
            <Fragment>
              <p>Cursed Altar</p>
              {sc}
              {d1_h}
              <span> * </span>
              {d4_h}
              <span> * </span>
              {d7_h}
              {a}
              {plus}
              {g}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>46F</p>
              {h}
            </Fragment>
          ],
          onBlock: "KND",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {sc}
              {th}
            </Fragment>
          ]
        },

        {
          id: 165,
          command: "SC 2A+G",
          move: [
            <Fragment>
              <p>Apocalypse Pound</p>
              {sc}
              {d2}
              {a}
              {plus}
              {g}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {m}
            </Fragment>
          ],
          onBlock: "KND",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {sc}
              {th}
              <p>TC</p>
            </Fragment>
          ]
        },

        {
          id: 166,
          command: "SC 1A+G A+G",
          move: [
            <Fragment>
              <p>Apocalypse Drop</p>
              {sc}
              {d1}
              {a}
              {plus}
              {g}
              {a}
              {plus}
              {g}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {m}
            </Fragment>
          ],
          onBlock: "KND",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {sc}
              {th}
              <p>TC</p>
            </Fragment>
          ]
        },

        {
          id: 167,
          command: "SC 236A+G A+G",
          move: [
            <Fragment>
              <p>Apocalypse Destroyer</p>
              {sc}
              {d2}
              {d3}
              {d6}
              {a}
              {plus}
              {g}
              {a}
              {plus}
              {g}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {h}
            </Fragment>
          ],
          onBlock: "KND",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {sc}
              {th}
            </Fragment>
          ]
        },

        {
          id: 168,
          command: "SC 214A+G",
          move: [
            <Fragment>
              <p>Ride of the Wicked</p>
              {sc}
              {d2}
              {d1}
              {d4}
              {a}
              {plus}
              {g}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {h}
            </Fragment>
          ],
          onBlock: "LNC",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              {sc}
              {th}
            </Fragment>
          ]
        },
        {
          id: 169,
          command: "SC 214A+G 2*8A",
          move: [
            <Fragment>
              <p>Wicked Twister of Carnage</p>
              {sc}
              {d2}
              {d1}
              {d4}
              {a}
              {plus}
              {g}
              {d2}
              <span> * </span>
              {d8}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {h}
            </Fragment>
          ],
          onBlock: "KND",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {sc}
              {th}
              {ua}
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
                  tableData={astarothFrameData.verticalAttacks.map(data => [
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
                  tableData={astarothFrameData.verticalAttacks.map(data => [
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
                  tableData={astarothFrameData.horizontalAttacks.map(data => [
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
                  tableData={astarothFrameData.horizontalAttacks.map(data => [
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
                  tableData={astarothFrameData.kicks.map(data => [
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
                  tableData={astarothFrameData.kicks.map(data => [
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
                  tableData={astarothFrameData.dualButtonAttacks.map(data => [
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
                  tableData={astarothFrameData.dualButtonAttacks.map(data => [
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
                  tableData={astarothFrameData.eightwayrunAttack.map(data => [
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
                  tableData={astarothFrameData.eightwayrunAttack.map(data => [
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
                  tableData={astarothFrameData.throws.map(data => [
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
                  tableData={astarothFrameData.throws.map(data => [
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
                  tableData={astarothFrameData.reversalEdge.map(data => [
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
                  tableData={astarothFrameData.reversalEdge.map(data => [
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
                  tableData={astarothFrameData.gaugeAttacks.map(data => [
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
                  tableData={astarothFrameData.gaugeAttacks.map(data => [
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
export default withStyles(styles)(Astaroth);
