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

//
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
class Ivy extends Component {
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

    // SE = Serpent's Embrace
    // SL = Spiral Lust
    // SS = Summon Suffering
    // CS = Calamity Symphony

    const ivyFrameData = {
      // verticalAttacks start here
      verticalAttacks: [
        {
          id: 1,
          command: "A",
          move: [
            <Fragment>
              <p>Biting Raven</p>
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              {h}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "-2",
          counterHit: "+2",
          note: ""
        },
        {
          id: 2,
          command: "AA",
          move: [
            <Fragment>
              <p>Biting Raven</p>
              {a}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              {h}
              {h}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "+2",
          counterHit: "+2",
          note: [
            <Fragment>
              {lh}
              <p>Lethal Hit if 1st hit missed </p>
            </Fragment>
          ]
        },
        {
          id: 3,
          command: "AK",
          move: [
            <Fragment>
              <p> Goverance</p>
              {a}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              {h}
              {m}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+6",
          counterHit: "+6",
          note: ""
        },
        {
          id: 4,
          command: "6A",
          move: [
            <Fragment>
              <p>Cataclysm</p>
              {d6}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {h}
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "-12",
          counterHit: "-2",
          note: [<Fragment />]
        },
        {
          id: 5,
          command: "6AA",
          move: [
            <Fragment>
              <p>Cataclysm</p>
              {d6}
              {a}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {h}
              {m}
              {h}
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "+6",
          counterHit: "+6",
          note: [<Fragment />]
        },
        {
          id: 6,
          command: "6AK",
          move: [
            <Fragment>
              <p>Dashing Wind</p>
              {d6}
              {a}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {h}
              {h}
            </Fragment>
          ],
          onBlock: "+2",
          onHit: "+6",
          counterHit: "+6",
          note: []
        },
        {
          id: 7,
          command: "6[A]",
          move: [
            <Fragment>
              <p>Tempting Tezhas</p>
              {d6}
              {a}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {h}
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "-4",
          counterHit: "KND",
          note: [<Fragment />]
        },
        {
          id: 8,
          command: "3A",
          move: [
            <Fragment>
              <p>Raven Gash</p>
              {d3}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "0",
          counterHit: "0",
          note: [<Fragment />]
        },
        {
          id: 9,
          command: "3[A]",
          move: [
            <Fragment>
              <p>Raven Gash(Hold)</p>
              {d3}
              {a_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "+12",
          counterHit: "+12",
          note: [<Fragment />]
        },
        {
          id: 10,
          command: "2A",
          move: [
            <Fragment>
              <p>Ancient Worshipper</p>
              {d2}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {sl}
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "-2",
          counterHit: "-2",
          note: "TC / ~FC"
        },
        {
          id: 11,
          command: "1A",
          move: [
            <Fragment>
              <p>Ancient Wheel</p>
              {d1}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>26F</p>
              {l}
            </Fragment>
          ],
          onBlock: "-18",
          onHit: "-4",
          counterHit: "-4",
          note: "FC"
        },
        {
          id: 12,
          command: "1AA",
          move: [
            <Fragment>
              <p>Ancient Wheel</p>
              {d1}
              {a}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>26F</p>
              {l}
              {l}
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "-2",
          counterHit: "-2",
          note: "TC"
        },
        {
          id: 13,
          command: "4A",
          move: [
            <Fragment>
              <p>Dancing Insanity</p>
              {d4}
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
          onBlock: "0",
          onHit: "+8",
          counterHit: "+8",
          note: ""
        },
        {
          id: 14,
          command: "4[A]",
          move: [
            <Fragment>
              <p>Dancing Insanity ~ Serpent Embrace</p>
              {d4}
              {a_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {h}
              {h}
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "+4",
          counterHit: "+4",
          note: [<Fragment>{ss}</Fragment>]
        },
        {
          id: 15,
          command: "214A",
          move: [
            <Fragment>
              <p>Serpent's Venom</p>
              {d2}
              {d1}
              {d4}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>54F</p>
              {h}
            </Fragment>
          ],
          onBlock: "UA",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {ua}
              <p>Cancel with G</p>
            </Fragment>
          ]
        },
        {
          id: 16,
          command: "FC A",
          move: [
            <Fragment>
              <p>Ancient Worshipper</p>
              <span>FC</span>
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {sl}
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "-2",
          counterHit: "-2",
          note: "TC / ~FC"
        },
        {
          id: 17,
          command: "WR A",
          move: [
            <Fragment>
              <p>Menace Slice</p>
              <span>WR</span>
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
          onHit: "+8",
          counterHit: "KND",
          note: ""
        },
        {
          id: 18,
          command: "WR [A]",
          move: [
            <Fragment>
              <p>Deceitful Raven</p>
              <span>WR</span>
              {a_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              {h}
              {h}
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "-2",
          counterHit: "-2",
          note: ""
        },

        {
          id: 19,
          command: "7*8*9A",
          move: [
            <Fragment>
              <p>Rising Raven</p>
              {d7}
              <span> * </span>
              {d8}
              <span> * </span>
              {d9}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>28F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "-4",
          counterHit: "-4",
          note: ""
        },
        {
          id: 20,
          command: "BT A",
          move: [
            <Fragment>
              <p>Scars of Memory</p>
              <span>BT</span>
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              {a}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 24,
          command: "BT 2A",
          move: [
            <Fragment>
              <p>Screams of Paranoia</p>
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
          onBlock: "-14",
          onHit: "-6",
          counterHit: "+4",
          note: [
            <Fragment>
              {gi}
              <p>GI Low</p>
            </Fragment>
          ]
        },
        {
          id: 25,
          command: "BT 2A",
          move: [
            <Fragment>
              <p>Screams of Paranoia</p>
              <span>BT</span>
              {d2}
              {a}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              {l}
              {m}
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {gi}
              <p>GI Low</p>
            </Fragment>
          ]
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
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {m}
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
              {b}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {m}
              {m}
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
              {b}
              {b}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {m}
              {m}
              {m}
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
              {b}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {m}
              {a}
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
          onBlock: "-10",
          onHit: "-2",
          counterHit: "+4",
          note: [
            <Fragment>
              {gi}
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
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "+10",
          counterHit: "+10",
          note: [
            <Fragment>
              {gi}
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
              {d6}
              {bSM}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>44F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              {gi}
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
          onBlock: "-8",
          onHit: "+4",
          counterHit: "+4",
          note: [
            <Fragment>
              {gi}
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
              {d3}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {m}
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
              {d2}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {m}
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
              {d2}
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
              {d2}
              {b}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {m}
              {a}
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
              {d2}
              {b}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {m}
              {a}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              {lh}
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
              {d1}
              {b}
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
          counterHit: "KND",
          note: [<Fragment />]
        },
        {
          id: 39,
          command: "1BBBB",
          move: [
            <Fragment>
              <p>Nasty Impale</p>
              {d1}
              {b}
              {b}
              {b}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {l}
              {l}
              {l}
              {l}
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
              {d4}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {m}
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
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {m}
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
              {b}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {m}
              {a}
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
              {b}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {m}
              {a}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              {lh}
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
              {d3}
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
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {m}
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
              {d8}
              <span> * </span>
              {d9}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>38F</p>
              {m}
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
          id: 49,
          command: "BT 2B",
          move: [
            <Fragment>
              <p>Turning Under Splash</p>
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
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              {a}
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
              {k}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              {a}
              {m}
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
              {d6}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {m}
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
              {d3}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {m}
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
          note: "TC"
        },
        {
          id: 55,
          command: "1K",
          move: [
            <Fragment>
              <p>Tornado Low Kick</p>
              {d1}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {l}
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
              {d1}
              {k_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>36F</p>
              {l}
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
              {d1}
              {k_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>36F</p>
              {l}
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              {lh}
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
              {d4}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {a}
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
          note: "TC / ~FC"
        },

        {
          id: 60,
          command: "WR K",
          move: [
            <Fragment>
              <p>Angel's Spring</p>
              <span>WR</span>
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
              <p>22F</p>
              {m}
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
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {a}
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
              {a}
              {plus}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>42F</p>
              {m}
            </Fragment>
          ],
          onBlock: "+8",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {ba}
              {lh}
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
              {d6}
              {a}
              {plus}
              {b}
            </Fragment>
          ],
          impact: [<Fragment>{gi}</Fragment>],
          onBlock: "N/A",
          onHit: "N/A",
          counterHit: "N/A",
          note: [
            <Fragment>
              {gi}
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
              {d8}
              {a}
              {plus}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>38F</p>
              {sm}
              <span> * </span>
              {l}
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
              {d8}
              {a_h}
              {plus}
              {b_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>68F</p>
              {sm}
            </Fragment>
          ],
          onBlock: "UA",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{ua}</Fragment>]
        },
        {
          id: 68,
          command: "4A+B",
          move: [
            <Fragment>
              <p>Twin Step Grace</p>
              {d4}
              {a}
              {plus}
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
              {b}
              {plus}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>26F</p>
              {m}
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
              {b}
              {plus}
              {k}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>26F</p>
              {m}
              {m}
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
              {d8}
              {b}
              {plus}
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
              {d8}
              {b}
              {plus}
              {k}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>30F</p>
              {m}
              {m}
              {l}
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
              {d8}
              {b}
              {plus}
              {k}
              {a}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>30F</p>
              {m}
              {m}
              {l}
              {m}
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
              {d4}
              {b}
              {plus}
              {k}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>30F</p>
              {m}
              {m}
              {m}
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
              {d8}
              {b}
              {plus}
              {k}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>30F</p>
              {m}
              {m}
              {m}
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
              {d4}
              {b}
              {plus}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>64F</p>
              {m}
            </Fragment>
          ],
          onBlock: "UA",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              {ua}
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
              {b}
              {plus}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              {a}
              {m}
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
              {b}
              {plus}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {m}
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
              {d6_h}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {m}
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
              {d2_h}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {a}
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
              {d8_h}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {a}
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
              {d4_h}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              {m}
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
              {d4_h}
              {a}
              {d6}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+2",
          counterHit: "LNC",
          note: [
            <Fragment>
              {ss}
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
              {d1_h}
              <span> * </span>
              {d7_h}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>26F</p>
              {l}
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
              {d1_h}
              <span> * </span>
              {d7_h}
              {a}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>26F</p>
              {l}
              {m}
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
              {d1_h}
              <span> * </span>
              {d7_h}
              {a}
              {a_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>26F</p>
              {l}
              {m}
            </Fragment>
          ],
          onBlock: "UA",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {ua}
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
              <p>24F</p>
              {m}
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
              {d2_h}
              <span> * </span>
              {d8_h}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {m}
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
              {d2_h}
              <span> * </span>
              {d8_h}
              {b}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {m}
              {a}
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
              {d2_h}
              <span> * </span>
              {d8_h}
              {b}
              {a}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {m}
              {a}
              {m}
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
              {d1_h}
              <span> * </span>
              {d4_h}
              <span> * </span>
              {d7_h}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              {m}
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
              {d1_h}
              <span> * </span>
              {d4_h}
              <span> * </span>
              {d7_h}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              {gi}
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
              <p>16F</p>
              {m}
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
              {d2_h}
              <span> * </span>
              {d8_h}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {m}
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
              <p>28F</p>
              {a}
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
              {d1_h}
              <span> * </span>
              {d4_h}
              <span> * </span>
              {d7_h}
              {kSM}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>46F</p>
              {m}
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
              <p>18F</p>
              {a}
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
              <p>18F</p>
              {a}
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              {lh}
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
              {d2_h}
              <span> * </span>
              {d8_h}
              <span> * </span>
              {a}
              {plus}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>26F</p>
              {m}
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
              {d4_h}
              <span> * </span>
              {d1_h}
              <span> * </span>
              {d7_h}
              {a}
              {plus}
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
              {d3_h}
              <span> * </span>
              {d6_h}
              <span> * </span>
              {d9_h}
              {b}
              {plus}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              {m}
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
              {d3_h}
              <span> * </span>
              {d6_h}
              <span> * </span>
              {d9_h}
              {b}
              {plus}
              {k}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              {m}
              {a}
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
              {d3_h}
              <span> * </span>
              {d6_h}
              <span> * </span>
              {d9_h}
              {b}
              {plus}
              {k}
              {a}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              {m}
              {a}
              {m}
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
              {d2}
              <span> * </span>
              {d8}
              <span> * </span>
              {d1}
              <span> * </span>
              {d4}
              <span> * </span>
              {d7}
              {b}
              {plus}
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
          note: [<Fragment />]
        },
        {
          id: 105,
          command: "22*88*11*44*77B+K(Lethal Hit)",
          move: [
            <Fragment>
              <p>Olympus Shower(Lethal Hit)</p>
              {d2}
              <span> * </span>
              {d8}
              <span> * </span>
              {d1}
              <span> * </span>
              {d4}
              <span> * </span>
              {d7}
              {b}
              {plus}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>26F</p>
              {m}
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {lh}
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
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {l}
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
              {a}
              {plus}
              {}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {a}
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "+6",
          counterHit: "+6",
          note: [<Fragment>{th}</Fragment>]
        },
        {
          id: 108,
          command: "A+G6",
          move: [
            <Fragment>
              <p>Widow Maker</p>
              {a}
              {plus}
              {}
              {d6}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {a}
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{th}</Fragment>]
        },
        {
          id: 109,
          command: "4A+G",
          move: [
            <Fragment>
              <p>Holy Cracker</p>
              {d4}
              {a}
              {plus}
              {}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {a}
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{th}</Fragment>]
        },
        {
          id: 110,
          command: "4A+G4*6",
          move: [
            <Fragment>
              <p>Heaven to Hell</p>
              {d4}
              {a}
              {plus}
              {}
              {d4}
              <span> * </span>
              {d6}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {a}
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{th}</Fragment>]
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
              {a}
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{th}</Fragment>]
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
              {a}
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{th}</Fragment>]
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
              {a}
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{th}</Fragment>]
        },
        {
          id: 114,
          command: "66A+G",
          move: [
            <Fragment>
              <p>Heaven's Arch</p>
              {d6_h}
              {a}
              {plus}
              {}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {a}
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{th}</Fragment>]
        },
        {
          id: 115,
          command: "66A+G(Lethal Hit)",
          move: [
            <Fragment>
              <p>Heaven's Arch(Lethal Hit)</p>
              {d6_h}
              {a}
              {plus}
              {}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {a}
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {th}
              {lh}
              <p>Lethal Hit if opponent GIed 5 times, resets after trigger</p>
            </Fragment>
          ]
        }
      ],
      // reversal edge start here
      reversalEdge: [
        {
          id: 116,
          command: "B+G",
          move: [
            <Fragment>
              <p>Holy Resonance</p>
              {b}
              {plus}
              {}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>46F</p>
              {m}
            </Fragment>
          ],
          onBlock: "N/A",
          onHit: "N/A",
          counterHit: "N/A",
          note: [<Fragment>{re}</Fragment>]
        },
        {
          id: 117,
          command: "[B+G]",
          move: [
            <Fragment>
              <p>Holy Reasonance</p>
              {b_h}
              {plus}
              {g_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>64F</p>
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
          id: 118,
          command: "RE A",
          move: [
            <Fragment>
              <p>Celestial Blade</p>
              {re}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>N/A</p>
              {a}
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "+8",
          counterHit: "+8",
          note: [
            <Fragment>
              {lh}
              <p>Lethal hit STN on 2nd phrase</p>
            </Fragment>
          ]
        },

        {
          id: 119,
          command: "RE A6 ~ AS",
          move: [
            <Fragment>
              <p>Celestial Blade ~ Angel Step</p>
              {re}
              {a}
              <img className={classes.imgNote} src={d6} />
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>N/A</p>
              {a}
            </Fragment>
          ],
          onBlock: "+6",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              {lh}
              <p>Lethal hit STN on 2nd phrase</p>
              {ss}
              <p>Into Angel Step</p>
            </Fragment>
          ]
        },
        {
          id: 120,
          command: "RE B",
          move: [
            <Fragment>
              <p>Angel Vanguard</p>
              {re}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>N/A</p>
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              {lh}
              <p>Lethal hit on 2nd phrase</p>
            </Fragment>
          ]
        },

        {
          id: 121,
          command: "RE K",
          move: [
            <Fragment>
              <p>Spiritual Spin Kick</p>
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
          onBlock: "-2",
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
          id: 122,
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
          id: 123,
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
          id: 124,
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
          id: 125,
          command: "A+B+K",
          move: [
            <Fragment>
              <p>Providential Thunder</p>
              {a}
              {plus}
              {b}
              {plus}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {sg}
              {ce}
            </Fragment>
          ]
        },
        {
          id: 126,
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
          id: 127,
          command: "SC 4AB",
          move: [
            <Fragment>
              <p>Cutlass Empyrean</p>
              {sc}
              {d4}
              {a}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {a}
              {m}
            </Fragment>
          ],
          onBlock: "+2",
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
          id: 128,
          command: "SC BBBB",
          move: [
            <Fragment>
              <p>Mystic Sword Rain</p>
              {sc}
              {b}
              {b}
              {b}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {m}
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "+2",
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
          id: 129,
          command: "SC 2BB",
          move: [
            <Fragment>
              <p>Guardian Punisher</p>
              {sc}
              {d2}
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
          onBlock: "-8",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{sc}</Fragment>]
        },
        {
          id: 130,
          command: "SC B+KB",
          move: [
            <Fragment>
              <p>Temporal Punisher</p>
              {sc}
              {b}
              {plus}
              {k}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>26F</p>
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {sc}
              <p>TJ / TS</p>
            </Fragment>
          ]
        },
        {
          id: 131,
          command: "SC 11*44*77 A+BB",
          move: [
            <Fragment>
              <p>Twin Step Sword Rain</p>
              {sc}
              {d1}
              <span> * </span>
              {d4}
              <span> * </span>
              {d7}
              {a}
              {plus}
              {b}
              {b}
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
          onBlock: "+2",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {sc}
              {ba}
              <p>TC</p>
            </Fragment>
          ]
        },
        {
          id: 132,
          command: "SC 4A+BB",
          move: [
            <Fragment>
              <p>Twin Step Sword Rain</p>
              {sc}
              {d4}
              {a}
              {plus}
              {b}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "+2",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {sc}
              {ba}
              <p>TC</p>
            </Fragment>
          ]
        },
        {
          id: 133,
          command: "SC [4]AB",
          move: [
            <Fragment>
              <p>Mirage Cross</p>
              {sc}
              {d4_h}
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
          onBlock: "+4",
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
          id: 134,
          command: "SC AS AAB",
          move: [
            <Fragment>
              <p>Sun's Corona</p>
              {sc}
              <span>Angel Step</span>
              {a}
              {a}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {m}
              {l}
              {m}
            </Fragment>
          ],
          onBlock: "+4",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {sc}
              {ss}
            </Fragment>
          ]
        },
        {
          id: 135,
          command: "SC AS B",
          move: [
            <Fragment>
              <p>Angel Punisher</p>
              {sc}
              <span>Angel Step</span>
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-20",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {sc}
              {ss}
            </Fragment>
          ]
        },

        {
          id: 136,
          command: "SC AS B4",
          move: [
            <Fragment>
              <p>Painful Fate</p>
              {sc}
              <span>Angel Step</span>
              {b}
              {d4}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-20",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {sc}
              {ss}
              {at}
            </Fragment>
          ]
        },
        {
          id: 137,
          command: "SC AS B:B",
          move: [
            <Fragment>
              <p>Heaven's Rapture</p>
              {sc}
              <span>Angel Step</span>
              {b}
              <span>:</span>
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-20",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {sc}
              {ss}
              {at}
            </Fragment>
          ]
        },
        {
          id: 138,
          command: "SC TAS B",
          move: [
            <Fragment>
              <p>Seraphim Punisher</p>
              {sc}
              <span>Twin Angel Step</span>
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
          onHit: "KND/STN",
          counterHit: "KND/STN",
          note: [
            <Fragment>
              {sc}
              {ss}
              {lh}
              <p>Lethal Hit triggers on punishing whiffed horizontals</p>
            </Fragment>
          ]
        },
        {
          id: 139,
          command: "SC TAS B4",
          move: [
            <Fragment>
              <p>Painful Fate</p>
              {sc}
              <span>Twin Angel Step</span>
              {b}
              {d4}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {sc}
              {ss}
              {at}
            </Fragment>
          ]
        },
        {
          id: 140,
          command: "SC TAS BB",
          move: [
            <Fragment>
              <p>Heaven's Rapture</p>
              {sc}
              <span>Twin Angel Step</span>
              {b}
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
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {sc}
              {ss}
              {at}
            </Fragment>
          ]
        }
      ],
      // special stance start here
      angelStep: [
        {
          id: 141,
          command: "236",
          move: [
            <Fragment>
              <p>Angel Step </p>
              {d2}
              {d3}
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
              {ss}
              <p>TC</p>
            </Fragment>
          ]
        },
        {
          id: 142,
          command: "AS A",
          move: [
            <Fragment>
              <p>Angel Satellite</p>
              <span>Angel Step</span>
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-18",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{ss}</Fragment>]
        },
        {
          id: 143,
          command: "AS AA",
          move: [
            <Fragment>
              <p>Angel Satellite</p>
              <span>Angel Step</span>
              {a}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {m}
              {l}
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{ss}</Fragment>]
        },
        {
          id: 144,
          command: "AS B",
          move: [
            <Fragment>
              <p>Angel's Strike</p>
              <span>Angel Step</span>
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-20",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{ss}</Fragment>]
        },
        {
          id: 145,
          command: "AS B4",
          move: [
            <Fragment>
              <p>Painful Fate</p>
              <span>Angel Step</span>
              {b}
              {d4}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-20",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {ss}
              {at}
            </Fragment>
          ]
        },
        {
          id: 146,
          command: "AS B:B",
          move: [
            <Fragment>
              <p>Heaven's Rapture</p>
              <span>Angel Step</span>
              {b}
              <span>:</span>
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-20",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {ss}
              {at}
            </Fragment>
          ]
        },
        {
          id: 147,
          command: "AS K",
          move: [
            <Fragment>
              <p>Holy Arrow Kick</p>
              <span>Angel Step</span>
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {a}
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{ss}</Fragment>]
        },
        {
          id: 148,
          command: "AS K",
          move: [
            <Fragment>
              <p>Holy Arrow Kick</p>
              <span>Angel Step</span>
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {a}
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {ss}
              {lh}
              <p>Triggers on punishing whiffed High</p>
            </Fragment>
          ]
        },
        {
          id: 149,
          command: "AS 2*8",
          move: [
            <Fragment>
              <p>Angel Step ~ Sidestep</p>
              <span>Angel Step</span>
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
          note: [<Fragment>{ss}</Fragment>]
        }
      ],
      twinAngelStep: [
        {
          id: 150,
          command: "236 ~ 6",
          move: [
            <Fragment>
              <p>Twin Angel Step</p>
              {d2}
              {d3}
              {d6}
              <span> ~ </span>
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
              {ss}
              <p>TC</p>
            </Fragment>
          ]
        },
        {
          id: 151,
          command: "TAS A",
          move: [
            <Fragment>
              <p>Seraphim Blade</p>
              <span>Twin Angel Step</span>
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "-4",
          counterHit: "KND",
          note: [
            <Fragment>
              {ss}
              <p>TC[6~ ]</p>
            </Fragment>
          ]
        },
        {
          id: 152,
          command: "TAS AA",
          move: [
            <Fragment>
              <p>Seraphim Blade</p>
              <span>Twin Angel Step</span>
              {a}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {m}
              {l}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "+6",
          counterHit: "STN",
          note: [
            <Fragment>
              {ss}
              <p>TC[6~ ]</p>
            </Fragment>
          ]
        },
        {
          id: 152,
          command: "TAS AB",
          move: [
            <Fragment>
              <p>Seraphim Echo</p>
              <span>Twin Angel Step</span>
              {a}
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
          onBlock: "+4",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {ss}
              <p>TC[6~ ]</p>
              {lh}
              <p>Lethal Hit on GI</p>
            </Fragment>
          ]
        },
        {
          id: 152,
          command: "TAS B",
          move: [
            <Fragment>
              <p>Seraphim Strike</p>
              <span>Twin Angel Step</span>
              {a}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {m}
            </Fragment>
          ],
          onBlock: "+4",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {ss}
              <p>TC[6~ ]</p>
              {lh}
              <p>Lethal Hit on GI</p>
            </Fragment>
          ]
        },
        {
          id: 153,
          command: "TAS B4",
          move: [
            <Fragment>
              <p>Painful Fate</p>
              <span>Twin Angel Step</span>
              {b}
              {d4}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {ss}
              {at}
            </Fragment>
          ]
        },
        {
          id: 154,
          command: "TAS BB",
          move: [
            <Fragment>
              <p>Heaven's Rapture</p>
              <span>Twin Angel Step</span>
              {b}
              <span>:</span>
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
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {ss}
              {at}
            </Fragment>
          ]
        },
        {
          id: 155,
          command: "TAS K",
          move: [
            <Fragment>
              <p>Tornado Feint</p>
              <span>Twin Angel Step</span>
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>36F</p>
              {m}
            </Fragment>
          ],
          onBlock: "+4",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {ss}
              <p>TC[4 ~ ]</p>
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
                  tableData={ivyFrameData.verticalAttacks.map(data => [
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
                  tableData={ivyFrameData.verticalAttacks.map(data => [
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
                  tableData={ivyFrameData.horizontalAttacks.map(data => [
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
                  tableData={ivyFrameData.horizontalAttacks.map(data => [
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
                  tableData={ivyFrameData.kicks.map(data => [
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
                  tableData={ivyFrameData.kicks.map(data => [
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
                  tableData={ivyFrameData.dualButtonAttacks.map(data => [
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
                  tableData={ivyFrameData.dualButtonAttacks.map(data => [
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
                Special Stance(Angel Step)
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
                  tableData={ivyFrameData.angelStep.map(data => [
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
                  tableData={ivyFrameData.angelStep.map(data => [
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
                Special Stance(Twin Angel Step)
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
                  tableData={ivyFrameData.twinAngelStep.map(data => [
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
                  tableData={ivyFrameData.twinAngelStep.map(data => [
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
                  tableData={ivyFrameData.eightwayrunAttack.map(data => [
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
                  tableData={ivyFrameData.eightwayrunAttack.map(data => [
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
                  tableData={ivyFrameData.throws.map(data => [
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
                  tableData={ivyFrameData.throws.map(data => [
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
                  tableData={ivyFrameData.reversalEdge.map(data => [
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
                  tableData={ivyFrameData.reversalEdge.map(data => [
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
                  tableData={ivyFrameData.gaugeAttacks.map(data => [
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
                  tableData={ivyFrameData.gaugeAttacks.map(data => [
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
export default withStyles(styles)(Ivy);
