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

class Maxi extends Component {
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

    const maxiFrameData = {
      // verticalAttacks start here

      // PLACEHOLDER ~ Behind Lower	20	14		+4	+12	+12	1.67%
      // :3::A:	:M:	:SS: / :LH: (Triggers on run counter against opp. with red guard gauge)
      // PLACEHOLDER ~ Behind Lower (Lethal Hit)	20	14	n/a	n/a			n/a
      // :3::A:	:M:	:SS:
      // PLACEHOLDER	12	12		-6	+6	+6	1.67%
      // :2::A:	:SL:	TC[8~] / ~FC
      // PLACEHOLDER	28	20		-14	0	0	1.67%
      // :1::A:	:L:	TC[16~] / Opp. FrC (block)
      // PLACEHOLDER ~ Left Outer	28	20,30		+4	KND	KND	1.67,9.17%
      // :1::A::B:	:L::M:	:SS: / TJ[4-30]
      // PLACEHOLDER ~ Behind Lower	24	18		-4	+6	+6	1.67%
      // :4::A:	:H:	:SS:
      // PLACEHOLDER	24	18,14		-14	-4	-4	1.67,1.67%
      // :4::A::A:	:H::M:	NC
      // PLACEHOLDER ~ Behind Lower	24	18,14,14		+8	+17?	+17?	1.67,1.67,1.67%
      // :4::A::A::A:	:H::M::M:	:SS: / TC[3~]
      // PLACEHOLDER	24	18,14,14,25		-16	STN	STN	1.67,1.67,1.67,5%
      // :4::A::A::A::B:	:H::M::M::M:	TC[3-21]
      // PLACEHOLDER ~ Right Outer	24	18		-4	+6	+6	1.67%
      // :4::(A):	:H:	:SS:
      // PLACEHOLDER ~ Left Outer	18	42		-13	KND	KND	9.17%
      // :4::A::B:	:H:	:SS:
      // PLACEHOLDER ~ Left Inner	18	42,10,20,20,20,20,20,20,20,20,20		-8	KND	KND	9.17,2.08%
      // :4::A::B::4:	:H::M:×10	:SS:
      // PLACEHOLDER	12	12		-6	+6	+6	1.67%
      // FC :2::A:	:SL:	TC[1-9,13~]
      // PLACEHOLDER	28	8		-4	+6	+6	1.67%
      // FC :3::A:	:L:
      // PLACEHOLDER	28	8,8		0	+8	+8	1.67,1.67%
      // FC :3::A::A:	:L::L:	TC[1~]
      // PLACEHOLDER ~ Right Outer	28	8,8,8		0	+8	+8	1.67,1.67,1.67%
      // FC :3::A::A::A:	:L::L::L:	:SS: / TC[1-36]
      // PLACEHOLDER ~ Left Inner	18	20		-4	+4	+4	1.67%
      // WR :A:	:M:	:SS:
      // PLACEHOLDER ~ Right Cross	40	24		-6	+2	+2	1.67%
      // :7:*:8:*:9::A:	:L:	:SS: / TJ[4-31]
      // PLACEHOLDER	14	14		-8	+2	+2	1.67%
      // BT :A:	:H:
      // PLACEHOLDER	14	14		-6	+6	+6	1.67%
      // BT :2::A:	:SL:	TC[10~]
      verticalAttacks: [
        {
          id: 1,
          command: "AA ~ RC",
          move: [
            <Fragment>
              <p>Twin Snakes ~ Right Cross</p>
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
          onBlock: "-2",
          onHit: "+12",
          counterHit: "+12",
          note: [
            <Fragment>
              {ss}
              <p>To Right Cross</p>
            </Fragment>
          ]
        },

        {
          id: 2,
          command: "6A ~ RO",
          move: [
            <Fragment>
              <p>Lunging Snake ~ Right Outer</p>
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
          onBlock: "-2",
          onHit: "+6",
          counterHit: "+16",
          note: [
            <Fragment>
              {ss}
              <p>To Right Outer</p>
            </Fragment>
          ]
        },

        {
          id: 3,
          command: "3A ~ BL",
          move: [
            <Fragment>
              <p>Lotus ~ Behind Lower</p>
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
          onBlock: "+4",
          onHit: "+12",
          counterHit: "+12",
          note: [
            <Fragment>
              {ss}
              <p>To Behind Lower</p>
              {lh}
              <p>Triggers on run counter opponent with red guard gauge</p>
            </Fragment>
          ]
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
          id: 21,
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
          id: 22,
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
          id: 23,
          command: "B",
          move: [
            <Fragment>
              <p>Ode to Undine</p>
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
          onHit: "-4",
          counterHit: "-4",
          note: ""
        },
        {
          id: 24,
          command: "BB",
          move: [
            <Fragment>
              <p>Ode to Undine</p>
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
          onBlock: "-10",
          onHit: "-4",
          counterHit: "-4",
          note: ""
        },
        {
          id: 25,
          command: "BBB",
          move: [
            <Fragment>
              <p>Ode to Undine</p>
              {b}
              {b}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "RE",
          counterHit: "RE",
          note: ""
        },
        {
          id: 26,
          command: "[B]",
          move: [
            <Fragment>
              <p>Poisoned Destiny</p>
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
          onBlock: "-20",
          onHit: "-10",
          counterHit: "-10",
          note: ""
        },
        {
          id: 27,
          command: "bA",
          move: [
            <Fragment>
              <p>Raven's Egg</p>
              {bSM}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {h}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment />]
        },
        {
          id: 28,
          command: "b[A]",
          move: [
            <Fragment>
              <p>Eclipse Raven</p>
              {bSM}
              {a_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              {h}
              {m}
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "+6",
          counterHit: "+6",
          note: [<Fragment />]
        },
        {
          id: 29,
          command: "b6",
          move: [
            <Fragment>
              <p>Darkside</p>
              {bSM}
              {d6}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+4",
          counterHit: "+4",
          note: ""
        },
        {
          id: 30,
          command: "6B",
          move: [
            <Fragment>
              <p>Warning Mood</p>
              {d6}
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
          onHit: "0",
          counterHit: "0",
          note: ""
        },
        {
          id: 31,
          command: "6BA",
          move: [
            <Fragment>
              <p>Warning Mood</p>
              {d6}
              {b}
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
          onBlock: "-4",
          onHit: "0",
          counterHit: "0",
          note: ""
        },
        {
          id: 32,
          command: "6B[A] ~ SE",
          move: [
            <Fragment>
              <p>Warning Mood ~ Serpent's Embrace</p>
              {d6}
              {b}
              {a_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {m}
              {h}
            </Fragment>
          ],
          onBlock: "+4",
          onHit: "+8",
          counterHit: "+8",
          note: [
            <Fragment>
              {ss}
              <p>To Serpent's Emrace</p>
            </Fragment>
          ]
        },
        {
          id: 33,
          command: "6BB",
          move: [
            <Fragment>
              <p>Warning Immortal</p>
              {d6}
              {b}
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
          onBlock: "-8",
          onHit: "+6",
          counterHit: "+6",
          note: ""
        },
        {
          id: 34,
          command: "6b8",
          move: [
            <Fragment>
              <p>Ivy Lick</p>
              {d6}
              {bSM}
              {d8}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              {h}
            </Fragment>
          ],
          onBlock: "-20",
          onHit: "-10",
          counterHit: "-10",
          note: ""
        },
        {
          id: 35,
          command: "6b8(Mid air)",
          move: [
            <Fragment>
              <p>Ivy Lick(Against Mid Air)</p>
              {d6}
              {bSM}
              {d8}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              {h}
            </Fragment>
          ],
          onBlock: "KND",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{at}</Fragment>]
        },
        {
          id: 36,
          command: "6b8K",
          move: [
            <Fragment>
              <p>Silhouette</p>
              {d6}
              {bSM}
              {d8}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              {h}
              {l}
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "+2",
          counterHit: "+2",
          note: [<Fragment />]
        },
        {
          id: 37,
          command: "6[B]",
          move: [
            <Fragment>
              <p>Ivy Lash </p>
              {d6}
              {b_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "-2",
          counterHit: "-2",
          note: ""
        },
        {
          id: 38,
          command: "6[B]2*8",
          move: [
            <Fragment>
              <p>Biting Ivy Inner</p>
              {d6}
              {b_h}
              {d2}
              <span> * </span>
              {d8}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-20",
          onHit: "-6",
          counterHit: "-6",
          note: [<Fragment />]
        },
        {
          id: 39,
          command: "3B",
          move: [
            <Fragment>
              <p>Aqua Clipper</p>
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
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {lh}
              <p>Triggers on hitting opponent's back</p>
            </Fragment>
          ]
        },
        {
          id: 40,
          command: "2B",
          move: [
            <Fragment>
              <p>Dominance</p>
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
          onBlock: "-6",
          onHit: "+2",
          counterHit: "+2",
          note: ""
        },
        {
          id: 41,
          command: "1B",
          move: [
            <Fragment>
              <p>Poison Leaf</p>
              {d1}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>28F</p>
              {l}
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "+2",
          counterHit: "+2",
          note: ""
        },
        {
          id: 42,
          command: "1[B]",
          move: [
            <Fragment>
              <p>Poison Ivy</p>
              {d1}
              {b_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>28F</p>
              {l}
              {sm}
              {sm}
            </Fragment>
          ],
          onBlock: "-2",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 43,
          command: "4B",
          move: [
            <Fragment>
              <p>Rushing Raven</p>
              {d4}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              {h}
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "-6",
          counterHit: "-6",
          note: "Knockdown at close range"
        },
        {
          id: 44,
          command: "4b8",
          move: [
            <Fragment>
              <p>Dashing Wings</p>
              {d4}
              {bSM}
              {d8}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {h}
              {h}
              {h}
              {h}
              {sm}
              {sm}
              {sm}
              {sm}
            </Fragment>
          ],
          onBlock: "+2",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 45,
          command: "214B",
          move: [
            <Fragment>
              <p>Venom Lash</p>
              {d2}
              {d1}
              {d4}
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
          onBlock: "-16",
          onHit: "-10",
          counterHit: "-10",
          note: ""
        },
        {
          id: 46,
          command: "214[B] ~ SE",
          move: [
            <Fragment>
              <p>Venom Lash ~ Serpent's Embrace</p>
              {d2}
              {d1}
              {d4}
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
          onBlock: "-14",
          onHit: "0",
          counterHit: "0",
          note: [
            <Fragment>
              {ss}
              <p>To Serpent's Embrace</p>
            </Fragment>
          ]
        },
        {
          id: 47,
          command: "FC B",
          move: [
            <Fragment>
              <p>Aqua Worshipper</p>
              <span>FC</span>
              {b}
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
          note: [
            <Fragment>
              <p>~FC</p>
            </Fragment>
          ]
        },
        {
          id: 48,
          command: "FC 3B",
          move: [
            <Fragment>
              <p>Ivy Masquerade</p>
              <span>FC</span>
              {d3}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {l}
            </Fragment>
          ],
          onBlock: "-20",
          onHit: "+6",
          counterHit: "KND",
          note: [
            <Fragment>
              {lh}
              <p>Leathal Hit against moving back opponent</p>
            </Fragment>
          ]
        },
        {
          id: 49,
          command: "FC 3[B] ~ SL",
          move: [
            <Fragment>
              <p>Ivy Masquerade ~ Spiral Lust</p>
              <span>FC</span>
              {d3}
              {b_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>n/a</p>
              {l}
            </Fragment>
          ],
          onBlock: "-20",
          onHit: "+6",
          counterHit: "KND",
          note: [
            <Fragment>
              {ss}
              {lh}
              <p>Leathal Hit against moving back opponent</p>
            </Fragment>
          ]
        },
        {
          id: 50,
          command: "FC 1B",
          move: [
            <Fragment>
              <p>Pride</p>
              <span>FC</span>
              {d1}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 51,
          command: "WR B",
          move: [
            <Fragment>
              <p>Cagemaster</p>
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
          id: 52,
          command: "WR BB",
          move: [
            <Fragment>
              <p>Cagemaster</p>
              <span>WR</span>
              {b}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {m}
              {h}
              {h}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "-6",
          counterHit: "-6",
          note: [<Fragment>{at}</Fragment>]
        },
        {
          id: 53,
          command: "7*8*9B",
          move: [
            <Fragment>
              <p>Akasha's Cage</p>
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
              {m}
              {h}
              {h}
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {at}
              <p>TJ</p>
            </Fragment>
          ]
        },
        {
          id: 54,
          command: "BT B",
          move: [
            <Fragment>
              <p>Reverse Immortal</p>
              <span>BT</span>
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
        },
        {
          id: 55,
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
          id: 56,
          command: "K",
          move: [
            <Fragment>
              <p>Night Swallow</p>
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              {h}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "0",
          counterHit: "0",
          note: ""
        },
        {
          id: 57,
          command: "6K",
          move: [
            <Fragment>
              <p>Starving Spirit</p>
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
          onBlock: "-8",
          onHit: "+2",
          counterHit: "+2",
          note: ""
        },
        {
          id: 58,
          command: "6KB",
          move: [
            <Fragment>
              <p>Starving Spirit</p>
              {d6}
              {k}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {m}
              {h}
            </Fragment>
          ],
          onBlock: "+4",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 59,
          command: "6K[B]",
          move: [
            <Fragment>
              <p>Blade Sharpener</p>
              {d6}
              {k}
              {b_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {m}
              {h}
            </Fragment>
          ],
          onBlock: "UA",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <p>Cancel with G ~ FC</p>
              <p>Becomes Mid at distance</p>
            </Fragment>
          ]
        },
        {
          id: 60,
          command: "3K",
          move: [
            <Fragment>
              <p>Rage Kick</p>
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
          id: 61,
          command: "3[K]",
          move: [
            <Fragment>
              <p>Rage Kick</p>
              {d3}
              {k_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>34F</p>
              {m}
            </Fragment>
          ],
          onBlock: "+2",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {lh}
              <p>Triggers against male opponents</p>
            </Fragment>
          ]
        },
        {
          id: 62,
          command: "1K",
          move: [
            <Fragment>
              <p>Queen's Pleasure</p>
              {d1}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {l}
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "-2",
          counterHit: "KND",
          note: ""
        },
        {
          id: 63,
          command: "1K",
          move: [
            <Fragment>
              <p>Ivy Sweep(Against downed opponent)</p>
              {d1}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {l}
              {l}
            </Fragment>
          ],
          onBlock: "KND",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {at}
              <p>Against downed opponent</p>
            </Fragment>
          ]
        },
        {
          id: 64,
          command: "2K",
          move: [
            <Fragment>
              <p>Charmer Silhouette</p>
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
          note: " ~ FC"
        },
        {
          id: 65,
          command: "4K",
          move: [
            <Fragment>
              <p>Evil Sparrow</p>
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
          onBlock: "-6",
          onHit: "+8",
          counterHit: "+8",
          note: ""
        },
        {
          id: 66,
          command: "FC K",
          move: [
            <Fragment>
              <p>Charmer Silhouette</p>
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
          note: " ~FC "
        },
        {
          id: 67,
          command: "FC 3K",
          move: [
            <Fragment>
              <p>Nail Cross</p>
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
          note: " ~FC "
        },
        {
          id: 68,
          command: "WR K",
          move: [
            <Fragment>
              <p>Rising Cross</p>
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
          id: 69,
          command: "7*8*9K",
          move: [
            <Fragment>
              <p>Rising Mind Shatter</p>
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
          id: 70,
          command: "BT K",
          move: [
            <Fragment>
              <p>Reverse Night Shallow</p>
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
          id: 71,
          command: "BT 2K",
          move: [
            <Fragment>
              <p>Deep Silhousette</p>
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
          id: 72,
          command: "A+B",
          move: [
            <Fragment>
              <p>Revelation</p>
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
          onBlock: "+10",
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
          id: 73,
          command: "6A+B",
          move: [
            <Fragment>
              <p>God Whisper</p>
              {d6}
              {a}
              {plus}
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
          onHit: "0",
          counterHit: "0",
          note: [<Fragment />]
        },
        {
          id: 74,
          command: "6A+BA",
          move: [
            <Fragment>
              <p>God Whisper</p>
              {d6}
              {a}
              {plus}
              {b}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              {m}
              {sl}
              {m}
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "+4",
          counterHit: "+4",
          note: [<Fragment />]
        },
        {
          id: 75,
          command: "3A+B ~ SL",
          move: [
            <Fragment>
              <p>Suppressed Exile ~ Spiral Lust</p>
              {d8}
              {a}
              {plus}
              {b}
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
              <p>To Spiral Lust</p>
            </Fragment>
          ]
        },
        {
          id: 76,
          command: "2A+B",
          move: [
            <Fragment>
              <p>Metal Fencer</p>
              {d2}
              {a}
              {plus}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>34F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-18",
          onHit: "KND",
          counterHit: "KND",
          note: []
        },
        {
          id: 77,
          command: "2A+BB",
          move: [
            <Fragment>
              <p>Metal Fencer</p>
              {d2}
              {a}
              {plus}
              {b}
              {b}
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
          onHit: "KND",
          counterHit: "KND",
          note: []
        },
        {
          id: 78,
          command: "1A+B",
          move: [
            <Fragment>
              <p>Razor's Bite</p>
              {d1}
              {a}
              {plus}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>30F</p>
              {l}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "KND",
          counterHit: "KND",
          note: []
        },
        {
          id: 79,
          command: "4A+B",
          move: [
            <Fragment>
              <p>Spiral Punishment</p>
              {d4}
              {a}
              {plus}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>28F</p>
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "+4",
          counterHit: "+4",
          note: []
        },
        {
          id: 80,
          command: "4A+BB",
          move: [
            <Fragment>
              <p>Spiral Punishment</p>
              {d4}
              {a}
              {plus}
              {b}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>28F</p>
              {m}
              {m}
              {m}
              {m}
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-24",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {gi}
              <p>GI Mid horizontals except kicks</p>
            </Fragment>
          ]
        },
        {
          id: 81,
          command: "8A+B",
          move: [
            <Fragment>
              <p>Creeping Ivy</p>
              {d8}
              {a}
              {plus}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-34",
          onHit: "KND",
          counterHit: "KND",
          note: []
        },
        {
          id: 82,
          command: "8A+BB",
          move: [
            <Fragment>
              <p>Creeping Ivy</p>
              {d8}
              {a}
              {plus}
              {b}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-24",
          onHit: "KND",
          counterHit: "KND",
          note: []
        },
        {
          id: 83,
          command: "8A+B[B]",
          move: [
            <Fragment>
              <p>Hailstorm</p>
              {d8}
              {a}
              {plus}
              {b}
              {b_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              {m}
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-20",
          onHit: "KND",
          counterHit: "KND",
          note: []
        },
        {
          id: 84,
          command: "B+K",
          move: [
            <Fragment>
              <p>Banshee</p>
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
          note: [
            <Fragment>
              {lh}
              <p>Triggers upon whiff punish ~ BT</p>
            </Fragment>
          ]
        },
        {
          id: 85,
          command: "6B+K",
          move: [
            <Fragment>
              <p>Embrace of Guilt</p>
              {d6}
              {b}
              {plus}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>28F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "+4",
          counterHit: "+4",
          note: [<Fragment>{at}</Fragment>]
        },
        {
          id: 86,
          command: "6[B+K]",
          move: [
            <Fragment>
              <p>Embrace of Guilt(Hold)</p>
              {d6}
              {b_h}
              {plus}
              {k_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>28F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "+10",
          counterHit: "+10",
          note: [<Fragment>{at}</Fragment>]
        },
        {
          id: 87,
          command: "2*3B+K",
          move: [
            <Fragment>
              <p>Fear's Void</p>
              {d2}
              <span> * </span>
              {d3}
              {b}
              {plus}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>30F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {lh}
              <p>Triggers upon hitting crouching opponents</p>
              <p>Can be cancel with G</p>
            </Fragment>
          ]
        },
        {
          id: 88,
          command: "4B+K",
          move: [
            <Fragment>
              <p>Heel Explosion</p>
              {d4}
              {b}
              {plus}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>74F</p>
              {m}
            </Fragment>
          ],
          onBlock: "UA",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {ua}
              <p>Cancel with G / ~ FC </p>
            </Fragment>
          ]
        },
        {
          id: 89,
          command: "8*9B+K",
          move: [
            <Fragment>
              <p>Stinging Souls</p>
              {d8}
              <span> * </span>
              {d9}
              {b}
              {plus}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>28F</p>
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "+4",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{ba}</Fragment>]
        },
        {
          id: 90,
          command: "FC 2*3B+K",
          move: [
            <Fragment>
              <p>Fear's Void</p>
              <span>FC</span>
              {d2}
              <span> * </span>
              {d3}
              {b}
              {plus}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>30F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {lh}
              <p>Triggers upon hitting crouching opponents</p>
              <p>Can be cancel with G</p>
            </Fragment>
          ]
        },
        {
          id: 91,
          command: "WR B+K",
          move: [
            <Fragment>
              <p>Asylum</p>
              <span>WR</span>
              {b}
              {plus}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>42F</p>
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-18",
          onHit: "-10",
          counterHit: "-10",
          note: [
            <Fragment>
              {gi}
              <p>GI High/Mid/Low</p>
            </Fragment>
          ]
        },
        {
          id: 92,
          command: "BT B+K",
          move: [
            <Fragment>
              <p>Viper Tail</p>
              <span>BT</span>
              {b}
              {plus}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>26F</p>
              {sm}
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "KND",
          counterHit: "KND",
          note: "~BT"
        }
      ],

      // 8way-run attacks start here
      eightwayrunAttack: [
        {
          id: 93,
          command: "33*66*99A",
          move: [
            <Fragment>
              <p>Damned Mark</p>
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
              <p>20F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+2",
          counterHit: "+2",
          note: ""
        },
        {
          id: 94,
          command: "33*66*99[A]",
          move: [
            <Fragment>
              <p>Damned Mark(Hold)</p>
              {d3_h}
              <span> * </span>
              {d6_h}
              <span> * </span>
              {d9_h}
              {a_h}
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
          onHit: "-4",
          counterHit: "-4",
          note: [
            <Fragment>
              {lh}
              <p>Triggers upon 2nd hit CH</p>
            </Fragment>
          ]
        },
        {
          id: 95,
          command: "22*88A",
          move: [
            <Fragment>
              <p>Wolf Lash</p>
              {d2_h}
              <span> * </span>
              {d8_h}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>26F</p>
              {a}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "0",
          counterHit: "0",
          note: [
            <Fragment>
              {lh}
              <p>Triggers upon whiff punish</p>
            </Fragment>
          ]
        },
        {
          id: 96,
          command: "11*44*77A",
          move: [
            <Fragment>
              <p>Cursed Soul</p>
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
              <p>24F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+2",
          counterHit: "+2",
          note: ""
        },
        {
          id: 97,
          command: "11*44*77[A]",
          move: [
            <Fragment>
              <p>Insanity Light</p>
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
              <p>28F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-24",
          onHit: "+8",
          counterHit: "+8",
          note: [<Fragment>{at}</Fragment>]
        },
        {
          id: 98,
          command: "11*44*77[A]6",
          move: [
            <Fragment>
              <p>Insanity Feast</p>
              {d1_h}
              <span> * </span>
              {d4_h}
              <span> * </span>
              {d7_h}
              {a_h}
              {d6}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>28F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-24",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{at}</Fragment>]
        },
        {
          id: 99,
          command: "33*66*99B",
          move: [
            <Fragment>
              <p>Elder Gnome</p>
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
              {m}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "+4",
          counterHit: "KND",
          note: ""
        },
        {
          id: 100,
          command: "33*66*99BB",
          move: [
            <Fragment>
              <p>Elder Gnome</p>
              {d3_h}
              <span> * </span>
              {d6_h}
              <span> * </span>
              {d9_h}
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
          onBlock: "-12",
          onHit: "+14",
          counterHit: "+14",
          note: ""
        },

        {
          id: 101,
          command: "22*88B",
          move: [
            <Fragment>
              <p>Nocturnal Sylph</p>
              {d2_h}
              <span> * </span>
              {d8_h}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "-2",
          counterHit: "-2",
          note: ""
        },
        {
          id: 102,
          command: "22*88BA",
          move: [
            <Fragment>
              <p>Nocturnal Sylph</p>
              {d2_h}
              <span> * </span>
              {d8_h}
              {b}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {m}
              {h}
            </Fragment>
          ],
          onBlock: "+4",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 103,
          command: "22*88[B] ~ SE",
          move: [
            <Fragment>
              <p>Drowning Madness ~ Serpent's Embrace</p>
              {d2_h}
              <span> * </span>
              {d8_h}
              {b_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {ss}
              <p>To Serpent's Embrace</p>
            </Fragment>
          ]
        },
        {
          id: 104,
          command: "11*44*77B",
          move: [
            <Fragment>
              <p>Cursed Heavens</p>
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
              <p>18F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment />]
        },
        {
          id: 105,
          command: "66K",
          move: [
            <Fragment>
              <p>Wondergale</p>
              {d6_h}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "+4",
          counterHit: "+4",
          note: [<Fragment />]
        },
        {
          id: 106,
          command: "66[K] ~ SE",
          move: [
            <Fragment>
              <p>Wondergale ~ Serpent's Embrace</p>
              {d6_h}
              {k_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "+4",
          counterHit: "+4",
          note: [
            <Fragment>
              {ss}
              <p>To Serpent's Embrace</p>
            </Fragment>
          ]
        },
        {
          id: 107,
          command: "33*99K",
          move: [
            <Fragment>
              <p>Mind Shatter</p>
              {d3_h}
              <span> * </span>
              {d9_h}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {h}
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 108,
          command: "22*88K",
          move: [
            <Fragment>
              <p>Royal Huntress</p>
              {d2_h}
              <span> * </span>
              {d8_h}
              {k}
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
          note: "TC / ~ FC"
        },
        {
          id: 109,
          command: "11*44*77K",
          move: [
            <Fragment>
              <p>Diving Raven</p>
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
              {m}
            </Fragment>
          ],
          onBlock: "-18",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 110,
          command: "33*66*99A+B",
          move: [
            <Fragment>
              <p>Freeze Gaze</p>
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
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+4",
          counterHit: "+4",
          note: [<Fragment />]
        },
        {
          id: 111,
          command: "22*88A+B",
          move: [
            <Fragment>
              <p>Arid Land</p>
              {d2_h}
              <span> * </span>
              {d8_h}
              {a}
              {plus}
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
          onBlock: "-10",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {gi}
              <p>GI Mid horizontals and thrusting verticals</p>
            </Fragment>
          ]
        },
        {
          id: 112,
          command: "11*44*77A+B",
          move: [
            <Fragment>
              <p>Crucifixion</p>
              {d1_h}
              <span> * </span>
              {d4_h}
              <span> * </span>
              {d7_h}
              {a}
              {plus}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>?F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 113,
          command: "11*44*77[A+B]",
          move: [
            <Fragment>
              <p>Crucifixion</p>
              {d1_h}
              <span> * </span>
              {d4_h}
              <span> * </span>
              {d7_h}
              {a_h}
              {plus}
              {b_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>?F</p>
              {m}
            </Fragment>
          ],
          onBlock: "UA",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{ua}</Fragment>]
        },
        {
          id: 114,
          command: "33*66*99B+K",
          move: [
            <Fragment>
              <p>Raging Gnome</p>
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
              <p>34F</p>
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 115,
          command: "11*44*77B+K ~ SL",
          move: [
            <Fragment>
              <p>Exile ~ Spiral Lust</p>
              {d1_h}
              <span> * </span>
              {d4_h}
              <span> * </span>
              {d7_h}
              {b}
              {plus}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>40F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-22",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {ss}
              <p>To Spiral Lust</p>
            </Fragment>
          ]
        },

        {
          id: 116,
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
          id: 117,
          command: "A+G",
          move: [
            <Fragment>
              <p>Dominion Throw</p>
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
          id: 118,
          command: "4A+G",
          move: [
            <Fragment>
              <p>Primal Dominance</p>
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
          id: 119,
          command: "Right Throw",
          move: [
            <Fragment>
              <p>Sunset Cradle</p>
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
          id: 120,
          command: "Left Throw",
          move: [
            <Fragment>
              <p>Heartless Guide</p>
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
          id: 121,
          command: "Back Throw",
          move: [
            <Fragment>
              <p>Sweet Domiance</p>
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
          id: 122,
          command: "2*3A+G",
          move: [
            <Fragment>
              <p>Vile Condemnation</p>
              {d2}
              <span> * </span>
              {d3}
              {a}
              {plus}
              {g}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>28F</p>
              {l}
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{at}</Fragment>]
        },
        {
          id: 123,
          command: "FC 2*3A+G",
          move: [
            <Fragment>
              <p>Vile Condemnation</p>
              <span>FC</span>
              {d2}
              <span> * </span>
              {d3}
              {a}
              {plus}
              {g}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>28F</p>
              {l}
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{at}</Fragment>]
        },
        {
          id: 123,
          command: "376231A+G",
          move: [
            <Fragment>
              <p>Summon Suffering </p>
              {d3}
              {d7}
              {d6}
              {d2}
              {d3}
              {d1}
              {a}
              {plus}
              {g}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {h}
            </Fragment>
          ],
          onBlock: "KND",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{th}</Fragment>]
        },
        {
          id: 124,
          command: "376231A+G JF",
          move: [
            <Fragment>
              <p>Summon Suffering(Just Frame)</p>
              {d3}
              {d7}
              {d6}
              {d2}
              {d3}
              {d1}
              {a}
              {plus}
              {g}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {h}
            </Fragment>
          ],
          onBlock: "KND",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {th}
              <p>Does more damage</p>
            </Fragment>
          ]
        },
        {
          id: 125,
          command: "374691A+G",
          move: [
            <Fragment>
              <p>Calamity Symphony</p>
              {d3}
              {d7}
              {d4}
              {d6}
              {d9}
              {d1}
              {a}
              {plus}
              {g}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {h}
            </Fragment>
          ],
          onBlock: "KND",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{th}</Fragment>]
        },
        {
          id: 126,
          command: "374691A+G JF",
          move: [
            <Fragment>
              <p>Calamity Symphony(Just Frame)</p>
              {d3}
              {d7}
              {d4}
              {d6}
              {d9}
              {d1}
              {a}
              {plus}
              {g}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {h}
            </Fragment>
          ],
          onBlock: "KND",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {th}
              <p>Does more damage</p>
            </Fragment>
          ]
        }
      ],

      // reversal edge start here
      reversalEdge: [
        {
          id: 127,
          command: "B+G",
          move: [
            <Fragment>
              <p>Existence</p>
              {b}
              {plus}
              {g}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>46F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "N/A",
          counterHit: "N/A",
          note: [<Fragment>{re}</Fragment>]
        },
        {
          id: 128,
          command: "B+G6",
          move: [
            <Fragment>
              <p>Darkside</p>
              {b}
              {plus}
              {g}
              {d6}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>52F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-7",
          onHit: "+4",
          counterHit: "+4",
          note: [<Fragment>{re}</Fragment>]
        },
        {
          id: 129,
          command: "[B+G]",
          move: [
            <Fragment>
              <p>Existence</p>
              {b_h}
              {plus}
              {g_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>66F</p>
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
          id: 130,
          command: "RE A",
          move: [
            <Fragment>
              <p>Screeching Spirit</p>
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
          onBlock: "-2",
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
          id: 131,
          command: "RE [A] ~ SE",
          move: [
            <Fragment>
              <p>Screeching Spirit ~ Serpent's Embrace</p>
              {re}
              {a_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>N/A</p>
              {h}
            </Fragment>
          ],
          onBlock: "?F",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              {lh}
              <p>Lethal hit STN on 2nd phrase</p>
              {ss}
              <p>Into Serpent's Embrace</p>
            </Fragment>
          ]
        },
        {
          id: 132,
          command: "RE BBBBBBBB",
          move: [
            <Fragment>
              <p>Fires of Insanity</p>
              {re}
              {b}
              {b}
              {b}
              {b}
              {b}
              {b}
              {b}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>N/A</p>
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
          onBlock: "?F",
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
          id: 133,
          command: "RE K",
          move: [
            <Fragment>
              <p>Queen of Blades</p>
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
          onBlock: "?",
          onHit: "?",
          counterHit: "?",
          note: [
            <Fragment>
              {lh}
              <p>Lethal hit on 2nd phrase</p>
            </Fragment>
          ]
        },

        {
          id: 134,
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
          id: 135,
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
          id: 136,
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
          id: 137,
          command: "A+B+K",
          move: [
            <Fragment>
              <p>Guilty Throne</p>
              {a}
              {plus}
              {b}
              {plus}
              {k}
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
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-20",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {sg}
              {ce}
              {gi}
              {at}
            </Fragment>
          ]
        },
        {
          id: 138,
          command: "SE A+B+K",
          move: [
            <Fragment>
              <p>Serpent's Embrace ~ Guilty Throne</p>
              <span>Serpent's Embrace</span>
              {a}
              {plus}
              {b}
              {plus}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
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
          onBlock: "-20",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {sg}
              {ce}
              {at}
            </Fragment>
          ]
        },
        {
          id: 139,
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
          id: 140,
          command: "SC 6AA",
          move: [
            <Fragment>
              <p>Deadly Catalysm</p>
              {sc}
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
          onBlock: "+4",
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
          id: 141,
          command: "SC 4A",
          move: [
            <Fragment>
              <p>Deadly Firestorm</p>
              {sc}
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
          onBlock: "+8",
          onHit: "+10",
          counterHit: "+10",
          note: [
            <Fragment>
              {sc}
              {ba}
            </Fragment>
          ]
        },
        {
          id: 142,
          command: "SC 4[A] ~ SE",
          move: [
            <Fragment>
              <p>Deadly Firestorm ~ Serpent's Embrace</p>
              {sc}
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
          onBlock: "+2",
          onHit: "+8",
          counterHit: "+8",
          note: [
            <Fragment>
              {sc}
              {ba}
              {ss}
              <p>To Serpent's Embrace</p>
            </Fragment>
          ]
        },
        {
          id: 143,
          command: "SC 6BB",
          move: [
            <Fragment>
              <p>Death Glance</p>
              {sc}
              {d6}
              {b}
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
          onBlock: "+1",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {sc}
              {ba}
              {at}
            </Fragment>
          ]
        },
        {
          id: 144,
          command: "SC 66KK",
          move: [
            <Fragment>
              <p>Unseen Connection</p>
              {sc}
              {d6_h}
              {k}
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
          onHit: "+6",
          counterHit: "+6",
          note: [<Fragment>{sc}</Fragment>]
        },
        {
          id: 145,
          command: "SC 66K[K] ~ SE",
          move: [
            <Fragment>
              <p>Unseen Connection ~ Serpent's Embrace</p>
              {sc}
              {d6_h}
              {k}
              {k_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "0",
          onHit: "+8",
          counterHit: "+8",
          note: [
            <Fragment>
              {sc}
              {ss}
              <p>To Serpent's Embrace</p>
            </Fragment>
          ]
        },
        {
          id: 146,
          command: "SC 22*88A+B B",
          move: [
            <Fragment>
              <p>Decaying Land</p>
              {sc}
              {d2}
              <span> * </span>
              {d8}
              {a}
              {plus}
              {b}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>26F</p>
              {m}
              {m}
              {m}
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "0",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {sc}
              {gi}
              <p>GI Mid horizontals</p>
            </Fragment>
          ]
        },
        {
          id: 147,
          command: "SC SE AA",
          move: [
            <Fragment>
              <p>Deadly Screaming Mandrake</p>
              {sc}
              <span>Serpent's Embrace</span>
              {a}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {h}
              {m}
              {h}
            </Fragment>
          ],
          onBlock: "+4",
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
          id: 148,
          command: "SC SE 6AA",
          move: [
            <Fragment>
              <p>Mourning Spirit</p>
              {sc}
              <span>Seprent's Embrace</span>
              {d6}
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
          onBlock: "KND",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {sc}
              {ua}
            </Fragment>
          ]
        }
      ],
      // special stance start here
      serpentEmbrace: [
        {
          id: 149,
          command: "SE AA",
          move: [
            <Fragment>
              <p>Violent Spirits</p>
              <span>Serpent's Embrace</span>
              {a}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {h}
              {m}
              {h}
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "+6",
          counterHit: "+6",
          note: [<Fragment>{ss}</Fragment>]
        },
        {
          id: 150,
          command: "SE 6AA",
          move: [
            <Fragment>
              <p>Wind Embrace</p>
              <span>Serpent's Embrace</span>
              {d6}
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
          onBlock: "+8",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{ss}</Fragment>]
        },
        {
          id: 151,
          command: "SE 4A",
          move: [
            <Fragment>
              <p>Lamenting Tail</p>
              <span>Serpent's Embrace</span>
              {d4}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              {l}
            </Fragment>
          ],
          onBlock: "-26",
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
          id: 152,
          command: "SE BBB",
          move: [
            <Fragment>
              <p>Mistress' Justice</p>
              <span>Serpent's Embrace</span>
              {b}
              {b}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{ss}</Fragment>]
        },
        {
          id: 153,
          command: "SE B:B:B:B:B",
          move: [
            <Fragment>
              <p>Howling Spirits</p>
              <span>Serpent's Embrace</span>
              {b}
              <span>:</span>
              {b}
              <span>:</span>
              {b}
              <span>:</span>
              {b}
              <span>:</span>
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              {m}
              {m}
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "+12",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{ss}</Fragment>]
        },
        {
          id: 154,
          command: "SE 6B",
          move: [
            <Fragment>
              <p>Ivy Sting</p>
              <span>Serpent's Embrace</span>
              {d6}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{ss}</Fragment>]
        },
        {
          id: 155,
          command: "SE 4B",
          move: [
            <Fragment>
              <p>Landing Embrace</p>
              <span>Serpent's Embrace</span>
              {d4}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>38F</p>
              {m}
            </Fragment>
          ],
          onBlock: "+12",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {ss}
              {ba}
            </Fragment>
          ]
        },
        {
          id: 156,
          command: "SE K",
          move: [
            <Fragment>
              <p>Charging Serpent</p>
              <span>Serpent's Embrace</span>
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
          onHit: "+2",
          counterHit: "KND",
          note: [<Fragment>{ss}</Fragment>]
        },
        {
          id: 157,
          command: "SE [K]",
          move: [
            <Fragment>
              <p>Charging Serpent</p>
              <span>Serpent's Embrace ~ Serpent's Embrace</span>
              {k_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {m}
            </Fragment>
          ],
          onBlock: "0",
          onHit: "+8",
          counterHit: "KND",
          note: [
            <Fragment>
              {ss}
              <p>To Serpent's Embrace</p>
            </Fragment>
          ]
        },
        {
          id: 158,
          command: "SE 4B+K*B+K*6B+K",
          move: [
            <Fragment>
              <p>Stinging Souls</p>
              <span>Serpent's Embrace</span>
              {d4}
              {b}
              {plus}
              {k}
              <span> * </span>
              {b}
              {plus}
              {k}
              <span> * </span>
              {d6}
              {b}
              {plus}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>49F</p>
              {m}
            </Fragment>
          ],
          onBlock: "+4",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {ss}
              {ba}
            </Fragment>
          ]
        },
        {
          id: 159,
          command: "SE 8B+K",
          move: [
            <Fragment>
              <p>Redemption</p>
              <span>Serpent's Embrace</span>
              {d8}
              {b}
              {plus}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              {h}
            </Fragment>
          ],
          onBlock: "-20",
          onHit: "-10",
          counterHit: "-10",
          note: [
            <Fragment>
              {ss}
              {at}
              <p>Shifts to attack throw against Mid-air opponent</p>
            </Fragment>
          ]
        },

        {
          id: 160,
          command: "SE 8B+K K",
          move: [
            <Fragment>
              <p>Blind Obsession</p>
              <span>Serpent's Embrace</span>
              {d8}
              {b}
              {plus}
              {k}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              {h}
              {l}
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "+2",
          counterHit: "+2",
          note: [<Fragment>{ss}</Fragment>]
        },
        {
          id: 161,
          command: "SE A+B",
          move: [
            <Fragment>
              <p>Released Souls</p>
              <span>Serpent's Embrace</span>
              {a}
              {plus}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>74F</p>
              {m}
            </Fragment>
          ],
          onBlock: "UA",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {ss}
              {ua}
            </Fragment>
          ]
        }
      ],
      spiralLust: [
        {
          id: 162,
          command: "3A+B",
          move: [
            <Fragment>
              <p>Spiral Lust</p>
              {d3}
              {a}
              {plus}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>?F</p>
              {m}
            </Fragment>
          ],
          onBlock: "UA",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {ss}
              {ua}
            </Fragment>
          ]
        },
        {
          id: 163,
          command: "SL B",
          move: [
            <Fragment>
              <p>Exile</p>
              <span>Spiral Lust</span>
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>?F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{ss}</Fragment>]
        },
        {
          id: 163,
          command: "SL B(Delay)",
          move: [
            <Fragment>
              <p>Exile (Delay)</p>
              <span>Spiral Lust</span>
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>?F</p>
              {m}
            </Fragment>
          ],
          onBlock: "+2",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{ss}</Fragment>]
        },
        {
          id: 164,
          command: "SL G",
          move: [
            <Fragment>
              <p>Spiral Lust ~ Serpent's Embrace</p>
              <span>Spiral Lust</span>
              {g}
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
              <p>To Serpent's Embrace</p>
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
                  tableData={maxiFrameData.verticalAttacks.map(data => [
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
                  tableData={maxiFrameData.verticalAttacks.map(data => [
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
                  tableData={maxiFrameData.horizontalAttacks.map(data => [
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
                  tableData={maxiFrameData.horizontalAttacks.map(data => [
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
                  tableData={maxiFrameData.kicks.map(data => [
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
                  tableData={maxiFrameData.kicks.map(data => [
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
                  tableData={maxiFrameData.dualButtonAttacks.map(data => [
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
                  tableData={maxiFrameData.dualButtonAttacks.map(data => [
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
                Special Stance(Sperent's Embrace)
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
                  tableData={maxiFrameData.serpentEmbrace.map(data => [
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
                  tableData={maxiFrameData.serpentEmbrace.map(data => [
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
                Special Stance(Spiral Lust)
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
                  tableData={maxiFrameData.spiralLust.map(data => [
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
                  tableData={maxiFrameData.spiralLust.map(data => [
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
                  tableData={maxiFrameData.eightwayrunAttack.map(data => [
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
                  tableData={maxiFrameData.eightwayrunAttack.map(data => [
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
                  tableData={maxiFrameData.throws.map(data => [
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
                  tableData={maxiFrameData.throws.map(data => [
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
                  tableData={maxiFrameData.reversalEdge.map(data => [
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
                  tableData={maxiFrameData.reversalEdge.map(data => [
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
                  tableData={maxiFrameData.gaugeAttacks.map(data => [
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
                  tableData={maxiFrameData.gaugeAttacks.map(data => [
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
export default withStyles(styles)(Maxi);
