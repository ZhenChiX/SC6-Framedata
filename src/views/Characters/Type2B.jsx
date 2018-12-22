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
//Modal postition

class Type2B extends Component {
  constructor(props) {
    super(props);

    //Switch handle display data
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

    const type2BFrameData = {
      // verticalAttacks start here

      verticalAttacks: [
        {
          id: 1,
          command: "A",
          move: [
            <Fragment>
              <p>Slash Sequence</p>
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
          onHit: "+2",
          counterHit: "+2",
          note: [<Fragment />]
        },

        {
          id: 2,
          command: "AA",
          move: [
            <Fragment>
              <p>Slash Sequence</p>
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
          onBlock: "-10",
          onHit: "0",
          counterHit: "0",
          note: [<Fragment />]
        },

        {
          id: 3,
          command: "AAA",
          move: [
            <Fragment>
              <p>Slash Sequence</p>
              {a}
              {a}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              {h}
              {h}
              {h}
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "+2",
          counterHit: "+2",
          note: [<Fragment />]
        },

        {
          id: 4,
          command: "AAAA",
          move: [
            <Fragment>
              <p>Slash Sequence</p>
              {a}
              {a}
              {a}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              {h}
              {h}
              {h}
              {h}
              {h}
              {h}
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment />]
        },
        {
          id: 5,
          command: "AAA6 ~ AGS",
          move: [
            <Fragment>
              <p>Slash Sequence ~ Aggression Shift</p>
              {a}
              {a}
              {a}
              {d6}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              {h}
              {h}
              {h}
              {h}
              {h}
            </Fragment>
          ],
          onBlock: "+6",
          onHit: "+12",
          counterHit: "+12",
          note: [
            <Fragment>
              {ss}
              <p>To Aggression Shift</p>
            </Fragment>
          ]
        },

        {
          id: 6,
          command: "AAA4 ~ AGS",
          move: [
            <Fragment>
              <p>Slash Sequence ~ Back Step ~ Aggression Shift</p>
              {a}
              {a}
              {a}
              {d6}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              {h}
              {h}
              {h}
              {h}
              {h}
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              {ss}
              <p>Back Step to Aggression Shift</p>
            </Fragment>
          ]
        },
        {
          id: 7,
          command: "AAA8 ~ AL",
          move: [
            <Fragment>
              <p>Slash Sequence ~ Aerial Leap</p>
              {a}
              {a}
              {a}
              {d8}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              {h}
              {h}
              {h}
              {h}
              {h}
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              {ss}
              <p>To Aerial Leap</p>
            </Fragment>
          ]
        },
        {
          id: 8,
          command: "AAB",
          move: [
            <Fragment>
              <p>Slash Assault:I</p>
              {a}
              {a}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              {h}
              {h}
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment />]
        },
        {
          id: 9,
          command: "AAAB",
          move: [
            <Fragment>
              <p>Slash Assault:II</p>
              {a}
              {a}
              {a}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              {h}
              {h}
              {h}
              {h}
              {h}
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment />]
        },
        {
          id: 10,
          command: "[A]",
          move: [
            <Fragment>
              <p>Augmented Revolving Slash</p>
              {a_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              {h}
              {h}
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "+10",
          counterHit: "+10/+14",
          note: [
            <Fragment>
              <p>Cause STN on 3rd hit Counter</p>
            </Fragment>
          ]
        },
        {
          id: 11,
          command: "6A",
          move: [
            <Fragment>
              <p>Slash Support</p>
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
          onBlock: "-8",
          onHit: "+2",
          counterHit: "+2",
          note: [<Fragment />]
        },
        {
          id: 12,
          command: "6AA",
          move: [
            <Fragment>
              <p>Slash Support</p>
              {d6}
              {a}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {h}
              {h}
              {h}
            </Fragment>
          ],
          onBlock: "-2",
          onHit: "+4",
          counterHit: "+4",
          note: [
            <Fragment>
              <p>Cancel 2nd Hit with G</p>
            </Fragment>
          ]
        },
        {
          id: 13,
          command: "3A",
          move: [
            <Fragment>
              <p>Revolving Assault</p>
              {d3}
              {a}
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
          onHit: "+2",
          counterHit: "+2",
          note: [<Fragment />]
        },
        {
          id: 14,
          command: "3AA",
          move: [
            <Fragment>
              <p>Revolving Assault</p>
              {d3}
              {a}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {m}
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment />]
        },

        {
          id: 15,
          command: "2A",
          move: [
            <Fragment>
              <p>Lower Slash</p>
              {d2}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              {sl}
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "+6",
          counterHit: "+6",
          note: "TC / ~FC"
        },
        {
          id: 16,
          command: "1A",
          move: [
            <Fragment>
              <p>Blade Sweep</p>
              {d1}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>30F</p>
              {l}
              {l}
              {l}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "+2",
          counterHit: "+2",
          note: ""
        },
        {
          id: 17,
          command: "4A",
          move: [
            <Fragment>
              <p>Assault Helix</p>
              {d4}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {h}
              {h}
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "+6/LNC",
          counterHit: "+6/LNC",
          note: [
            <Fragment>
              {lh}
              <p>Triggers when your soul gauge is full</p>
            </Fragment>
          ]
        },
        {
          id: 17,
          command: "4A",
          move: [
            <Fragment>
              <p>Assault Helix</p>
              {d4}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {h}
              {h}
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "+6/LNC",
          counterHit: "+6/LNC",
          note: [
            <Fragment>
              {lh}
              <p>Triggers when your soul gauge is full</p>
            </Fragment>
          ]
        },
        {
          id: 18,
          command: "FC A",
          move: [
            <Fragment>
              <p>Lower Slash</p>
              {d2}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              {sl}
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "+6",
          counterHit: "+6",
          note: "TC / ~FC"
        },
        {
          id: 19,
          command: "WR A",
          move: [
            <Fragment>
              <p>Rising Slash Sequence</p>
              <span>WR</span>
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
          onHit: "+6",
          counterHit: "+6",
          note: [<Fragment />]
        },

        {
          id: 20,
          command: "7*8*9A",
          move: [
            <Fragment>
              <p>Leaping Horizontal Assualt</p>
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
              <p>42F</p>
              {h}
              {h}
              {h}
            </Fragment>
          ],
          onBlock: "",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <p>Launch punishable</p>
            </Fragment>
          ]
        },
        {
          id: 21,
          command: "BT A",
          move: [
            <Fragment>
              <p>Reverse Slash</p>
              <span>BT</span>
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {h}
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "+6",
          counterHit: "+6",
          note: ""
        },
        {
          id: 22,
          command: "BT 2A",
          move: [
            <Fragment>
              <p>Lower Reversed Slash</p>
              <span>BT</span>
              {d2}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {sl}
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "+6",
          counterHit: "+6",
          note: ""
        }
      ],

      // horizontalAttacks start here

      horizontalAttacks: [
        {
          id: 23,
          command: "B",
          move: [
            <Fragment>
              <p>Severing Sequence</p>
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "-4",
          counterHit: "-4",
          note: [<Fragment />]
        },
        {
          id: 24,
          command: "BB",
          move: [
            <Fragment>
              <p>Severing Sequence</p>
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
          onBlock: "-10",
          onHit: "-4",
          counterHit: "-4",
          note: [<Fragment />]
        },
        {
          id: 25,
          command: "BBB",
          move: [
            <Fragment>
              <p>Severing Sequence</p>
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
          onBlock: "-14",
          onHit: "0",
          counterHit: "0",
          note: [<Fragment />]
        },
        {
          id: 26,
          command: "BA",
          move: [
            <Fragment>
              <p>Severing Sweep</p>
              {b}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {m}
              {l}
              {l}
              {l}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "+2",
          counterHit: "+2",
          note: [
            <Fragment>
              <p>~ FC</p>
            </Fragment>
          ]
        },
        {
          id: 27,
          command: "[B]",
          move: [
            <Fragment>
              <p>Augmented Severing Thrust</p>
              {b_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {m}
              {h}
            </Fragment>
          ],
          onBlock: "-2",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 28,
          command: "[B](2nd Hit Counter)",
          move: [
            <Fragment>
              <p>Augmented Severing Thrust(2nd Hit Counter)</p>
              {b_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {m}
              {h}
              {m}
            </Fragment>
          ],
          onBlock: "-2",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              <p>Launch opponent with 2nd hit counter</p>
            </Fragment>
          ]
        },
        {
          id: 29,
          command: "b6 ",
          move: [
            <Fragment>
              <p>Hilt Assault</p>
              {bSM}
              {d6}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {h}
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "+6",
          counterHit: "+10",
          note: [<Fragment />]
        },

        {
          id: 30,
          command: "6B",
          move: [
            <Fragment>
              <p>Projectile Slash Sequence</p>
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
          onBlock: "-12",
          onHit: "0",
          counterHit: "STN",
          note: [<Fragment />]
        },

        {
          id: 31,
          command: "6BB",
          move: [
            <Fragment>
              <p>Projectile Slash Sequence</p>
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
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-20",
          onHit: "-6",
          counterHit: "STN",
          note: [
            <Fragment>
              {lh}
              <p>Triggers upon hitting opponent from the back</p>
            </Fragment>
          ]
        },
        {
          id: 31,
          command: "6BBB",
          move: [
            <Fragment>
              <p>Projectile Slash Sequence</p>
              {d6}
              {b}
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
              {m}
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+6",
          counterHit: "STN",
          note: [
            <Fragment>
              {lh}
              <p>Triggers upon hitting opponent from the back</p>
            </Fragment>
          ]
        },
        {
          id: 32,
          command: "6BB6 ~ AGS",
          move: [
            <Fragment>
              <p>Projectile Slash Sequence ~ Aggression Shift</p>
              {d6}
              {b}
              {b}
              {d6}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {m}
              {m}
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "+2",
          onHit: "+12~16?",
          counterHit: "STN",
          note: [
            <Fragment>
              {ss}
              <p>To Aggression Shift</p>
              {lh}
              <p>Triggers upon hitting opponent from the back</p>
            </Fragment>
          ]
        },
        {
          id: 33,
          command: "6BB4 ~ AGS",
          move: [
            <Fragment>
              <p>Projectile Slash Sequence ~ Back Step~ Aggression Shift</p>
              {d6}
              {b}
              {b}
              {d4}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {m}
              {m}
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "",
          onHit: "-4",
          counterHit: "STN",
          note: [
            <Fragment>
              {ss}
              <p>To Aggression Shift</p>
              {lh}
              <p>Triggers upon hitting opponent from the back</p>
            </Fragment>
          ]
        },
        {
          id: 33,
          command: "6BB8 ~ AL",
          move: [
            <Fragment>
              <p>Projectile Slash Sequence ~ Aerial Leap</p>
              {d6}
              {b}
              {b}
              {d8}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {m}
              {m}
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "",
          onHit: "-4",
          counterHit: "STN",
          note: [
            <Fragment>
              {ss}
              <p>To Aerial Leap</p>
              {lh}
              <p>Triggers upon hitting opponent from the back</p>
            </Fragment>
          ]
        },
        {
          id: 34,
          command: "6[B]",
          move: [
            <Fragment>
              <p>Augmented Spear Slash Sequence</p>
              {d6}
              {b_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {m}
              {m}
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "LNC",
          counterHit: "LNC",
          note: ""
        },

        {
          id: 35,
          command: "6BK",
          move: [
            <Fragment>
              <p>Reversed Core Disruption</p>
              {d6}
              {b}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {m}
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "+4",
          counterHit: "+4",
          note: [
            <Fragment>
              {lh}
              <p>Triggers build-up is at 9 AP</p>
              <p>+2 Analysis points upon hit</p>
            </Fragment>
          ]
        },
        {
          id: 36,
          command: "6B[K]",
          move: [
            <Fragment>
              <p>Reversed Augmented Seismic Smash</p>
              {d6}
              {b}
              {k_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {m}
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment />]
        },

        {
          id: 37,
          command: "3B ~ AL",
          move: [
            <Fragment>
              <p>First Strike ~ Aerial Leap</p>
              {d3}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-42",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              {ss}
              <p>To Aerial Leap</p>
              <p>TC[12~15] / TJ</p>
            </Fragment>
          ]
        },
        {
          id: 38,
          command: "3[B] ~ AL",
          move: [
            <Fragment>
              <p>Augmented First Strike ~ Aerial Leap</p>
              {d3}
              {b_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>32F</p>
              {m}
              {sm}
              {sm}
              {sm}
            </Fragment>
          ],
          onBlock: "-42?",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              {ss}
              <p>To Aerial Leap</p>
              <p>TC[12~ ] / TJ</p>
            </Fragment>
          ]
        },
        {
          id: 39,
          command: "2B",
          move: [
            <Fragment>
              <p>Downward Severing Blade</p>
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
          onBlock: "-7",
          onHit: "+3",
          counterHit: "+3",
          note: [<Fragment />]
        },
        {
          id: 40,
          command: "2bA",
          move: [
            <Fragment>
              <p>Revolving Slash</p>
              {d2}
              {bSM}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {h}
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "+10",
          counterHit: "+10/+14",
          note: [
            <Fragment>
              <p>Cause STN on 2nd Hit Counter</p>
            </Fragment>
          ]
        },
        {
          id: 40,
          command: "1B",
          move: [
            <Fragment>
              <p>Ground Thrust</p>
              {d1}
              {b}
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
          counterHit: "0",
          note: [<Fragment />]
        },
        {
          id: 41,
          command: "1B6 ~ AGS",
          move: [
            <Fragment>
              <p>Ground Thrust ~ Aggression Shift</p>
              {d1}
              {b}
              {d6}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {l}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+2",
          counterHit: "+6",
          note: [
            <Fragment>
              {ss}
              <p>To Aggression Shift</p>
            </Fragment>
          ]
        },
        {
          id: 42,
          command: "1B4 ~ AGS",
          move: [
            <Fragment>
              <p>Ground Thrust ~ Back Step ~ Aggression Shift</p>
              {d1}
              {b}
              {d4}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {l}
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              {ss}
              <p>Back Step to Aggression Shift</p>
            </Fragment>
          ]
        },
        {
          id: 43,
          command: "1B8 ~ AL",
          move: [
            <Fragment>
              <p>Ground Thrust ~ Aerial Leap</p>
              {d1}
              {b}
              {d8}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {l}
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              {ss}
              <p>To Aerial Leap</p>
            </Fragment>
          ]
        },
        {
          id: 43,
          command: "4B",
          move: [
            <Fragment>
              <p>Assault Pattern</p>
              {d4}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              <p>Can be delayed</p>
            </Fragment>
          ]
        },
        {
          id: 44,
          command: "4BB",
          move: [
            <Fragment>
              <p>Assault Pattern</p>
              {d4}
              {b}
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
          onBlock: "-20",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              <p>Can be delayed</p>
            </Fragment>
          ]
        },
        {
          id: 45,
          command: "4BBB",
          move: [
            <Fragment>
              <p>Assault Pattern</p>
              {d4}
              {b}
              {b}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-28",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <p>Can be delayed</p>
            </Fragment>
          ]
        },
        {
          id: 46,
          command: "4BB6B",
          move: [
            <Fragment>
              <p>Assault Skewer</p>
              {d4}
              {b}
              {b}
              {d6}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <p>Can be delayed</p>
            </Fragment>
          ]
        },
        {
          id: 47,
          command: "FC B",
          move: [
            <Fragment>
              <p>Lower Severing Blade</p>
              <span>FC</span>
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+2",
          counterHit: "+2",
          note: [
            <Fragment>
              <p>TC</p>
            </Fragment>
          ]
        },

        {
          id: 48,
          command: "WR BB",
          move: [
            <Fragment>
              <p>Rising Spear Slice</p>
              <span>WR</span>
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
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment />]
        },
        {
          id: 49,
          command: "WR BK ~ AL",
          move: [
            <Fragment>
              <p>Rising Android Kick ~ Aerial Leap</p>
              <span>WR</span>
              {b}
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
          onBlock: "-44",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              {ss}
              <p>To Aerial Leap</p>
            </Fragment>
          ]
        },

        {
          id: 50,
          command: "7*8*9B",
          move: [
            <Fragment>
              <p>Leaping Projectile Blade</p>
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
              <p>24F</p>
              {sm}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "-2",
          counterHit: "-2",
          note: [
            <Fragment>
              <p>TJ</p>
            </Fragment>
          ]
        },
        {
          id: 51,
          command: "BT B",
          move: [
            <Fragment>
              <p>Reversed Severing Blade</p>
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
          onBlock: "-6",
          onHit: "+4",
          counterHit: "+4",
          note: ""
        },
        {
          id: 52,
          command: "BT 2B",
          move: [
            <Fragment>
              <p>Lower Reversed Severing Blade</p>
              <span>BT</span>
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
          onBlock: "-8",
          onHit: "+2",
          counterHit: "+2",
          note: "TC[11~ ]"
        }
      ],
      // Kicks start here
      kicks: [
        {
          id: 53,
          command: "K",
          move: [
            <Fragment>
              <p>Android Kick</p>
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
          id: 54,
          command: "[K] ~ ALS",
          move: [
            <Fragment>
              <p>Android Kick ~ Angler Stance</p>
              {k_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              {h}
            </Fragment>
          ],
          onBlock: "",
          onHit: "-8",
          counterHit: "-8",
          note: [
            <Fragment>
              {ss}
              <p>To Angler Stance</p>
            </Fragment>
          ]
        },
        {
          id: 55,
          command: "6K",
          move: [
            <Fragment>
              <p>Multistrike</p>
              {d6}
              {k}
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
          onBlock: "-10",
          onHit: "+2",
          counterHit: "+2",
          note: ""
        },
        {
          id: 56,
          command: "6K6 ~ AGS",
          move: [
            <Fragment>
              <p>Multistrike ~ Aggression Shift</p>
              {d6}
              {k}
              {d6}
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
          onBlock: "-6",
          onHit: "+2",
          counterHit: "STN",
          note: ""
        },
        {
          id: 57,
          command: "6K4 ~ AGS",
          move: [
            <Fragment>
              <p>Multistrike ~ Aggression Shift</p>
              {d6}
              {k}
              {d4}
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
          onBlock: "",
          onHit: "",
          counterHit: "STN",
          note: ""
        },
        {
          id: 58,
          command: "6K8 ~ AL",
          move: [
            <Fragment>
              <p>Multistrike ~ Aerial Leap</p>
              {d6}
              {k}
              {d8}
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
          onBlock: "",
          onHit: "",
          counterHit: "STN",
          note: [
            <Fragment>
              {ss}
              <p>To Aerial Leap</p>
            </Fragment>
          ]
        },
        {
          id: 59,
          command: "6KB",
          move: [
            <Fragment>
              <p>Multistrike(2)</p>
              {d6}
              {k}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {m}
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-18",
          onHit: "STN",
          counterHit: "STN",
          note: [<Fragment />]
        },
        {
          id: 60,
          command: "6KK",
          move: [
            <Fragment>
              <p>Multistrike Kick</p>
              {d6}
              {k}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {m}
              {m}
              {m}
              {h}
              {h}
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "+8",
          counterHit: "+8",
          note: [<Fragment />]
        },
        {
          id: 61,
          command: "6K[K]",
          move: [
            <Fragment>
              <p>Charging Kick</p>
              {d6}
              {k}
              {k_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {m}
              {m}
              {m}
              {h}
            </Fragment>
          ],
          onBlock: "+2",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {gi}
              <p>GI High/Mid attacks / +2 AP</p>
            </Fragment>
          ]
        },
        {
          id: 62,
          command: "3K",
          move: [
            <Fragment>
              <p>Brake Kick</p>
              {d3}
              {k}
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
          id: 63,
          command: "3[K]",
          move: [
            <Fragment>
              <p>Brake Kick(2)</p>
              {d3}
              {k_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-2",
          onHit: "+8",
          counterHit: "STN",
          note: [
            <Fragment>
              <p>
                Can be held,has two level of Charge / +1AP on level 1 charge /
                +2 AP on fully charge
              </p>
            </Fragment>
          ]
        },
        {
          id: 64,
          command: "2K",
          move: [
            <Fragment>
              <p>Lower Unarmed Kick</p>
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
          onBlock: "-12",
          onHit: "-4",
          counterHit: "-4",
          note: " TC[11~ ]"
        },

        {
          id: 65,
          command: "1K",
          move: [
            <Fragment>
              <p>Examine</p>
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
          counterHit: "-2",
          note: "+1AP"
        },
        {
          id: 66,
          command: "1[K] ~ ALS",
          move: [
            <Fragment>
              <p>Examine ~ Angler Stance</p>
              {d1}
              {k_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {l}
            </Fragment>
          ],
          onBlock: "",
          onHit: "-6",
          counterHit: "-6",
          note: [
            <Fragment>
              {ss}
              <p>To Angler Stance</p>
              <p>+1 Analysis Point</p>
            </Fragment>
          ]
        },
        {
          id: 67,
          command: "4K",
          move: [
            <Fragment>
              <p>Core Disruption</p>
              {d4}
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
          onBlock: "-12",
          onHit: "+4",
          counterHit: "+4",
          note: [
            <Fragment>
              {lh}
              <p>Triggers build-up is at 9 AP</p>
              <p>+2 Analysis Points</p>
            </Fragment>
          ]
        },
        {
          id: 68,
          command: "4[K]",
          move: [
            <Fragment>
              <p>Augumented Seismic Smash</p>
              {d4}
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
          onBlock: "-6",
          onHit: "+4",
          counterHit: "+4",
          note: [<Fragment />]
        },

        {
          id: 69,
          command: "FC K",
          move: [
            <Fragment>
              <p>Lower Unarmed Kick</p>
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
          note: "TC / ~FC "
        },

        {
          id: 70,
          command: "WR K",
          move: [
            <Fragment>
              <p>Rising Brake Kick</p>
              <span>WR</span>
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-2",
          onHit: "+8",
          counterHit: "STN",
          note: [
            <Fragment>
              <p>
                Can be held,has two level of Charge / +1AP on level 1 charge /
                +2 AP on fully charge
              </p>
            </Fragment>
          ]
        },

        {
          id: 71,
          command: "7*8*9K",
          move: [
            <Fragment>
              <p>Leaping Unarmed Strike</p>
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
              <p>38F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              <p>+3 Analysis Points</p>
            </Fragment>
          ]
        },

        {
          id: 72,
          command: "BT K",
          move: [
            <Fragment>
              <p>Reverse Unarmed Kick</p>
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
          onBlock: "-8",
          onHit: "+2",
          counterHit: "+2",
          note: ""
        },

        {
          id: 73,
          command: "BT 2K",
          move: [
            <Fragment>
              <p>Lower Reverse Illusion Kick</p>
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
          note: "TC[14~ ]"
        }
      ],

      // dual button attackts start here
      dualButtonAttacks: [
        {
          id: 74,
          command: "A+B",
          move: [
            <Fragment>
              <p>Pod Program R050:Spear</p>
              {a}
              {plus}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>38F</p>
              {sm}
            </Fragment>
          ],
          onBlock: "0",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              {ba}
              {lh}
              <p>Lethal Hit triggers upon GI</p>
            </Fragment>
          ]
        },
        {
          id: 75,
          command: "[A+B]",
          move: [
            <Fragment>
              <p>Pod Program R050:Spear(Hold)</p>
              {a_h}
              {plus}
              {b_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
              {sm}
            </Fragment>
          ],
          onBlock: "+4",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              {ba}
              {lh}
              <p>Lethal Hit triggers upon GI</p>
            </Fragment>
          ]
        },
        {
          id: 76,
          command: "6A+B",
          move: [
            <Fragment>
              <p>Pod Program R010: Laser</p>
              {d6}
              {a}
              {plus}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>40F</p>
              {h}
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              <p>TC[29~84]</p>
            </Fragment>
          ]
        },
        {
          id: 77,
          command: "6[A+B]",
          move: [
            <Fragment>
              <p>Pod Program R010: Laser(Hold)</p>
              {d6}
              {a_h}
              {plus}
              {b_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
              {h}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              <p>TC[29~84]</p>
            </Fragment>
          ]
        },
        {
          id: 78,
          command: "2A+B",
          move: [
            <Fragment>
              <p>Pod Program R020: Mirage</p>
              {d2}
              {a}
              {plus}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
              {sm}
              {sm}
              {sm}
              {sm}
              {sm}
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <p>Dodges high/Mid/Low</p>
            </Fragment>
          ]
        },
        {
          id: 79,
          command: "2[A+B]",
          move: [
            <Fragment>
              <p>Pod Program R020: Mirage(Hold)</p>
              {d2}
              {a_h}
              {plus}
              {b_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
              {sm}
              {sm}
              {sm}
              {sm}
              {sm}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <p>Dodges high/Mid/Low</p>
            </Fragment>
          ]
        },
        {
          id: 80,
          command: "4A+B",
          move: [
            <Fragment>
              <p>Pod Program R010: Laser(Upward Angle)</p>
              {d4}
              {a}
              {plus}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              {h}
            </Fragment>
          ],
          onBlock: "",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              {ba}
              <p>TC[16~37]</p>
            </Fragment>
          ]
        },
        {
          id: 81,
          command: "4[A+B]",
          move: [
            <Fragment>
              <p>Pod Program R010: Laser(Upward Angle)</p>
              {d4}
              {a_h}
              {plus}
              {b_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
              {h}
            </Fragment>
          ],
          onBlock: "",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              {ba}
              <p>TC[16~37]</p>
            </Fragment>
          ]
        },
        {
          id: 82,
          command: "8A+B",
          move: [
            <Fragment>
              <p>Pod Programm A080: Wave</p>
              {d8}
              {a}
              {plus}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
              {sm}
              {sl}
              {sl}
              {sl}
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              <p>Deals chip damage / TJ</p>
            </Fragment>
          ]
        },
        {
          id: 83,
          command: "8[A+B]",
          move: [
            <Fragment>
              <p>Pod Programm A080: Wave(Hold)</p>
              {d8}
              {a_h}
              {plus}
              {b_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
              {sm}
              {sl}
              {sl}
              {sl}
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {lh}
              <p>Triggers upon when your guard stamina is full</p>
              <p>Deals chip damage / TJ</p>
            </Fragment>
          ]
        },

        {
          id: 84,
          command: "B+K",
          move: [
            <Fragment>
              <p>Angler Stance(H/M)</p>
              {b}
              {plus}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              {ss}
              <p>To Angler Stance</p>
              <p>Dodges High/Mid except Kicks / Can be cancelled with G</p>
            </Fragment>
          ]
        },
        {
          id: 85,
          command: "2B+K",
          move: [
            <Fragment>
              <p>Angler Stance(M/L)</p>
              {d2}
              {b}
              {plus}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
            </Fragment>
          ],
          onBlock: "",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              {ss}
              <p>To Angler Stance</p>
              <p>Dodges High/Mid except Kicks / Can be cancelled with G</p>
            </Fragment>
          ]
        },
        {
          id: 86,
          command: "B+K/2B+K",
          move: [
            <Fragment>
              <p>Counter Bomb</p>
              {b}
              {plus}
              {k}
              <span> / </span>
              {d2}
              {b}
              {plus}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
              {m}
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              {ba}
              <p>Successful evades an attack</p>
            </Fragment>
          ]
        },
        {
          id: 87,
          command: "B+K/2B+K : G",
          move: [
            <Fragment>
              <p>Counter Bomb ~ Cancel</p>
              {b}
              {plus}
              {k}
              <span> / </span>
              {d2}
              {b}
              {plus}
              {k}
              <span> : </span>
              {g}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              <p>Dodges High/Mid/Low </p>
              <p>After successful dodges press G to cancel</p>
            </Fragment>
          ]
        },
        {
          id: 88,
          command: "6B+K",
          move: [
            <Fragment>
              <p>Crushing Kick</p>
              {d6}
              {b}
              {plus}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "+6",
          counterHit: "LNC",
          note: [
            <Fragment>
              <p>TJ[9~26] / TC [26-46]</p>
            </Fragment>
          ]
        },
        {
          id: 89,
          command: "4B+K",
          move: [
            <Fragment>
              <p>Hilt Bash</p>
              {d4}
              {b}
              {plus}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>36F</p>
              {m}
              {h}
              {m}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "+4",
          counterHit: "+18/STN",
          note: [<Fragment />]
        },

        {
          id: 90,
          command: "FC B+K",
          move: [
            <Fragment>
              <p>Floating Assualt</p>
              <span>FC</span>
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
          onBlock: "-20",
          onHit: "LNC",
          counterHit: "LNC",
          note: [<Fragment />]
        },
        {
          id: 91,
          command: "BT B+K",
          move: [
            <Fragment>
              <p>Acrobatic Counter Assualt</p>
              <span>BT</span>
              {b}
              {plus}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>38F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              {gi}
              <p>GI horizontals except kicks</p>
            </Fragment>
          ]
        }
      ],

      // 8way-run attacks start here
      eightwayrunAttack: [
        {
          id: 92,
          command: "33*66*99A",
          move: [
            <Fragment>
              <p>Mobilize: Slash Pattern</p>
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
              {l}
              {h}
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "-6",
          counterHit: "-6",
          note: ""
        },
        {
          id: 93,
          command: "33*66*99A6 ~ AGS",
          move: [
            <Fragment>
              <p>Mobilize: Slash Pattern ~ Aggression Shift</p>
              {d3_h}
              <span> * </span>
              {d6_h}
              <span> * </span>
              {d9_h}
              {a}
              {d6}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {l}
              {h}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "0",
          counterHit: "0",
          note: [
            <Fragment>
              {ss}
              <p>To Aggression Shift</p>
            </Fragment>
          ]
        },
        {
          id: 94,
          command: "33*66*99A4 ~ AGS",
          move: [
            <Fragment>
              <p>Mobilize: Slash Pattern ~ Back Step ~ Aggression Shift</p>
              {d3_h}
              <span> * </span>
              {d6_h}
              <span> * </span>
              {d9_h}
              {a}
              {d4}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {l}
              {h}
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              {ss}
              <p>Back step to Aggression Shift</p>
            </Fragment>
          ]
        },
        {
          id: 95,
          command: "33*66*99A8 ~ AL",
          move: [
            <Fragment>
              <p>Mobilize: Slash Pattern ~ Aerial Leap</p>
              {d3_h}
              <span> * </span>
              {d6_h}
              <span> * </span>
              {d9_h}
              {a}
              {d8}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {l}
              {h}
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              {ss}
              <p>To Aerial Leap</p>
            </Fragment>
          ]
        },
        {
          id: 96,
          command: "33*66*99aK",
          move: [
            <Fragment>
              <p>Mobilize: Slash Unarmed Kick</p>
              {d3_h}
              <span> * </span>
              {d6_h}
              <span> * </span>
              {d9_h}
              {aSM}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {l}
              {h}
              {l}
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "-4",
          counterHit: "-4",
          note: [
            <Fragment>
              <p>~ FC</p>
            </Fragment>
          ]
        },
        {
          id: 97,
          command: "33*66*99a[K]",
          move: [
            <Fragment>
              <p>Mobilize: Crush Sequence</p>
              {d3_h}
              <span> * </span>
              {d6_h}
              <span> * </span>
              {d9_h}
              {aSM}
              {k_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {l}
              {h}
              {m}
            </Fragment>
          ],
          onBlock: "-20",
          onHit: "-12",
          counterHit: "-12",
          note: [
            <Fragment>
              {lh}
              <p>Triggers if 2nd hit and 3rd hits</p>
            </Fragment>
          ]
        },
        {
          id: 98,
          command: "22*88A",
          move: [
            <Fragment>
              <p>MObilize: Spear Spin</p>
              {d2_h}
              <span> * </span>
              {d8_h}
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
          onBlock: "-12",
          onHit: "0",
          counterHit: "0",
          note: [<Fragment />]
        },
        {
          id: 99,
          command: "22*88AA",
          move: [
            <Fragment>
              <p>MObilize: Spear Spin</p>
              {d2_h}
              <span> * </span>
              {d8_h}
              {a}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {h}
              {h}
              {h}
            </Fragment>
          ],
          onBlock: "-2",
          onHit: "+8",
          counterHit: "+8",
          note: [<Fragment />]
        },
        {
          id: 100,
          command: "22*88AB",
          move: [
            <Fragment>
              <p>MObilize: Spear Sequence</p>
              {d2_h}
              <span> * </span>
              {d8_h}
              {a}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {h}
              {h}
              {m}
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "+2",
          counterHit: "+2",
          note: [<Fragment />]
        },
        {
          id: 101,
          command: "11*44*77A",
          move: [
            <Fragment>
              <p>Mobilize: Horizontal Assault</p>
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
              <p>34F</p>
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "STN",
          counterHit: "STN",
          note: ""
        },
        {
          id: 102,
          command: "11*44*77[A]",
          move: [
            <Fragment>
              <p>Mobilize: Augmented Horizontal Assault</p>
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
              <p />
              {m}
              {m}
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "STN",
          counterHit: "STN",
          note: ""
        },
        {
          id: 103,
          command: "33*66*99B",
          move: [
            <Fragment>
              <p>Mobilize: Piercing Thrust</p>
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
          onBlock: "-10",
          onHit: "0",
          counterHit: "STN",
          note: [<Fragment />]
        },
        {
          id: 104,
          command: "33*66*99B6 ~ AGS",
          move: [
            <Fragment>
              <p>Mobilize: Piercing Thrust ~ Aggression Shift</p>
              {d3_h}
              <span> * </span>
              {d6_h}
              <span> * </span>
              {d9_h}
              {b}
              {d6}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {m}
            </Fragment>
          ],
          onBlock: "+2",
          onHit: "+12",
          counterHit: "STN",
          note: [
            <Fragment>
              {ss}
              <p>To Aggression Shift</p>
            </Fragment>
          ]
        },
        {
          id: 105,
          command: "33*66*99B4 ~ AGS",
          move: [
            <Fragment>
              <p>Mobilize: Piercing Thrust ~ Back Step ~ Aggression Shift</p>
              {d3_h}
              <span> * </span>
              {d6_h}
              <span> * </span>
              {d9_h}
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
          onBlock: "",
          onHit: "",
          counterHit: "STN",
          note: [
            <Fragment>
              {ss}
              <p>Back Step to Aggression Shift</p>
            </Fragment>
          ]
        },
        {
          id: 106,
          command: "33*66*99B8 ~ AL",
          move: [
            <Fragment>
              <p>Mobilize: Piercing Thrust ~ Aerial Leap</p>
              {d3_h}
              <span> * </span>
              {d6_h}
              <span> * </span>
              {d9_h}
              {b}
              {d8}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {m}
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "STN",
          note: [
            <Fragment>
              {ss}
              <p>To Aerial Leap</p>
            </Fragment>
          ]
        },

        {
          id: 107,
          command: "22*88B",
          move: [
            <Fragment>
              <p>Mobilize: Skewer</p>
              {d2_h}
              <span> * </span>
              {d8_h}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-18",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              {lh}
              <p>Triggers on opponent whiffed an attack</p>
            </Fragment>
          ]
        },
        {
          id: 108,
          command: "22*88B6 ~ AGS",
          move: [
            <Fragment>
              <p>Mobilize: Skewer ~ Aggression Shift</p>
              {d2_h}
              <span> * </span>
              {d8_h}
              {b}
              {d6}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              {ss}
              <p>To Aggression Shift</p>
              {lh}
              <p>Triggers on opponent whiffed an attack</p>
            </Fragment>
          ]
        },
        {
          id: 109,
          command: "22*88B4 ~ AGS",
          move: [
            <Fragment>
              <p>Mobilize: Skewer ~ Back Step ~ Aggression Shift</p>
              {d2_h}
              <span> * </span>
              {d8_h}
              {b}
              {d4}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              {m}
            </Fragment>
          ],
          onBlock: "",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              {ss}
              <p>Back Step to Aggression Shift</p>
              {lh}
              <p>Triggers on opponent whiffed an attack</p>
            </Fragment>
          ]
        },
        {
          id: 110,
          command: "22*88B8 ~ AL",
          move: [
            <Fragment>
              <p>Mobilize: Skewer ~ Back Step ~ Aerial Leap</p>
              {d2_h}
              <span> * </span>
              {d8_h}
              {b}
              {d8}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              {m}
            </Fragment>
          ],
          onBlock: "",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              {ss}
              <p>Aerial Leap</p>
              {lh}
              <p>Triggers on opponent whiffed an attack</p>
            </Fragment>
          ]
        },
        {
          id: 111,
          command: "11*44*77B",
          move: [
            <Fragment>
              <p>Mobilize: Rotating Slash Assault</p>
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
              <p>32F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "STN",
          counterHit: "STN",
          note: [<Fragment />]
        },
        {
          id: 112,
          command: "11*44*77B6 ~ AGS",
          move: [
            <Fragment>
              <p>Mobilize: Rotating Slash Assault ~ Aggression Shift</p>
              {d1_h}
              <span> * </span>
              {d4_h}
              <span> * </span>
              {d7_h}
              {b}
              {d6}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>32F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              {ss}
              <p>To Aggression Shift</p>
            </Fragment>
          ]
        },
        {
          id: 113,
          command: "11*44*77B4 ~ AGS",
          move: [
            <Fragment>
              <p>Mobilize: Rotating Slash Assault ~ Aggression Shift</p>
              {d1_h}
              <span> * </span>
              {d4_h}
              <span> * </span>
              {d7_h}
              {b}
              {d4}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>32F</p>
              {m}
            </Fragment>
          ],
          onBlock: "",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              {ss}
              <p>To Aggression Shift</p>
            </Fragment>
          ]
        },
        {
          id: 114,
          command: "11*44*77B8 ~ AL",
          move: [
            <Fragment>
              <p>Mobilize: Rotating Slash Assault ~ Aerial Leap</p>
              {d1_h}
              <span> * </span>
              {d4_h}
              <span> * </span>
              {d7_h}
              {b}
              {d8}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>32F</p>
              {m}
            </Fragment>
          ],
          onBlock: "",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              {ss}
              <p>To Aerial Leap</p>
            </Fragment>
          ]
        },
        {
          id: 115,
          command: "11*44*77[B]",
          move: [
            <Fragment>
              <p>Mobilize: Rotating Slash Assault</p>
              {d1_h}
              <span> * </span>
              {d4_h}
              <span> * </span>
              {d7_h}
              {b_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
              {m}
            </Fragment>
          ],
          onBlock: "0",
          onHit: "STN",
          counterHit: "STN",
          note: [<Fragment>{ba}</Fragment>]
        },
        {
          id: 116,
          command: "33*66*99K",
          move: [
            <Fragment>
              <p>Mobilize: Disposal Kick</p>
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
              {h}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {lh}
              <p>Triggers upon interrupted an soul gauge attack</p>
            </Fragment>
          ]
        },
        {
          id: 117,
          command: "33*66*99[K] ~ ALS",
          move: [
            <Fragment>
              <p>Mobilize: Disposal Kick ~ Angler Stance</p>
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
              <p>18F</p>
              {h}
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {ss}
              <p>To Angler Stance</p>
              {lh}
              <p>Triggers upon interrupted an soul gauge attack</p>
            </Fragment>
          ]
        },

        {
          id: 118,
          command: "22*88K",
          move: [
            <Fragment>
              <p>Mobilize: Spinning Strike</p>
              {d2_h}
              <span> * </span>
              {d8_h}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              {l}
              {h}
              {h}
              {h}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "+4",
          counterHit: "+4",
          note: ""
        },
        {
          id: 119,
          command: "22*88KK",
          move: [
            <Fragment>
              <p>Mobilize: Spinning Strike</p>
              {d2_h}
              <span> * </span>
              {d8_h}
              {k}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              {l}
              {h}
              {h}
              {h}
              {m}
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 119,
          command: "22*88K[K]",
          move: [
            <Fragment>
              <p>Mobilize: Spinning Strike(Hold)</p>
              {d2_h}
              <span> * </span>
              {d8_h}
              {k}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              {l}
              {h}
              {h}
              {h}
              {m}
            </Fragment>
          ],
          onBlock: "+6",
          onHit: "LNC",
          counterHit: "LNC",
          note: [<Fragment>{ba}</Fragment>]
        },

        {
          id: 120,
          command: "11*44*77K",
          move: [
            <Fragment>
              <p>Mobilize: Cyclone Kick</p>
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
              <p>20F</p>
              {h}
              {h}
              {h}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <p>+2 Analysis Points</p>
            </Fragment>
          ]
        },
        {
          id: 121,
          command: "11*44*77[K]",
          move: [
            <Fragment>
              <p>Mobilize: Cyclone Kick(Hold)</p>
              {d1_h}
              <span> * </span>
              {d4_h}
              <span> * </span>
              {d7_h}
              {k_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>28F</p>
              {h}
              {h}
              {h}
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <p>+3 Analysis Points</p>
            </Fragment>
          ]
        },
        {
          id: 122,
          command: "8wayrun A+B",
          move: [
            <Fragment>
              <p>Mobilized Pod Program R040: Blade</p>
              <span>8wayrun</span>
              {a}
              {plus}
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
            </Fragment>
          ],
          onBlock: "-20",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment />]
        },

        {
          id: 123,
          command: "33*66*99B+K",
          move: [
            <Fragment>
              <p>Mobilize: Projectile Slash Pattern</p>
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
              {m}
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "LNC",
          counterHit: "LNC",
          note: "TC/TJ"
        },
        {
          id: 124,
          command: "22*88B+K",
          move: [
            <Fragment>
              <p>Mobilize: Scatter Spear</p>
              {d2_h}
              <span> * </span>
              {d8_h}
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
              {m}
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "LNC",
          counterHit: "LNC",
          note: ""
        },
        {
          id: 125,
          command: "11*44*77B+K",
          move: [
            <Fragment>
              <p>Mobilize: Scatter Spear</p>
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
              <p />
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "LNC",
          onHit: "LNC",
          counterHit: "LNC",
          note: [<Fragment>{ba}</Fragment>]
        },
        {
          id: 126,
          command: "33*66*99A+G",
          move: [
            <Fragment>
              <p>Supperssion: Unarmed Leg Throw</p>
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
              <p>18F</p>
              {h}
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [<Fragment>{th}</Fragment>]
        },

        {
          id: 127,
          command: "Run K",
          move: [
            <Fragment>
              <p>Sliding Charge</p>
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
          id: 128,
          command: "A+G",
          move: [
            <Fragment>
              <p>Suppression: Slash Kick</p>
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
          id: 129,
          command: "4A+G",
          move: [
            <Fragment>
              <p>Suppression: Impaling Slash</p>
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
          id: 130,
          command: "Right Throw ~ BL",
          move: [
            <Fragment>
              <p>Suppression: Support Thrust</p>
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
          id: 131,
          command: "Left Throw",
          move: [
            <Fragment>
              <p>Suppresion: Reversed Projectile Blade</p>
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
          id: 132,
          command: "Back Throw",
          move: [
            <Fragment>
              <p>Suppression: Multistrike Protocol</p>
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
          note: [
            <Fragment>
              {th}
              <p>Deal 80 Damages when press A/B/K at exact timing</p>
            </Fragment>
          ]
        },
        {
          id: 133,
          command: "33*66*99A+G",
          move: [
            <Fragment>
              <p>Supperssion: Unarmed Leg Throw</p>
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
          id: 134,
          command: "AGS ~ A+G",
          move: [
            <Fragment>
              <p>Supperssion: Composite Kick</p>
              <span>Aggression Shift</span>
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
          id: 135,
          command: "AGS ~ 4A+G",
          move: [
            <Fragment>
              <p>Supperssion: Composite Slash</p>
              <span>Aggression Shift</span>
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
        }
      ],

      // reversal edge start here
      reversalEdge: [
        {
          id: 136,
          command: "B+G",
          move: [
            <Fragment>
              <p>Soul Stance: Aggresive Defense</p>
              {b}
              {plus}
              {g}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
              {m}
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "",
          counterHit: "",
          note: [<Fragment>{re}</Fragment>]
        },

        {
          id: 137,
          command: "[B+G]",
          move: [
            <Fragment>
              <p>Soul Stance: Aggressive Defense</p>
              {b_h}
              {plus}
              {g_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
              {m}
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              {re}
              {ba}
            </Fragment>
          ]
        },
        {
          id: 138,
          command: "RE A6 ~ AGS",
          move: [
            <Fragment>
              <p>Inverted Support ~ Aggression Shift</p>
              {re}
              {a}
              {d6}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
              {h}
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              {ss}
              <p>To Aggression Shift</p>
              {lh}
              <p>Lethal hit on 2nd phrase</p>
            </Fragment>
          ]
        },
        {
          id: 139,
          command: "RE A6 ~ AGS",
          move: [
            <Fragment>
              <p>Inverted Support ~ Aggression Shift</p>
              {re}
              {a}
              {d6}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
              {h}
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              {ss}
              <p>To Aggression Shift</p>
              {lh}
              <p>Lethal hit on 2nd phrase</p>
            </Fragment>
          ]
        },
        {
          id: 140,
          command: "RE A4 ~ AGS",
          move: [
            <Fragment>
              <p>Inverted Support ~ Back Step ~ Aggression Shift</p>
              {re}
              {a}
              {d4}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
              {h}
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              {ss}
              <p>Back Step to Aggression Shift</p>
              {lh}
              <p>Lethal hit on 2nd phrase</p>
            </Fragment>
          ]
        },
        {
          id: 141,
          command: "RE A8 ~ AL",
          move: [
            <Fragment>
              <p>Inverted Support ~ Aerial Leap</p>
              {re}
              {a}
              {d8}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
              {h}
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              {ss}
              <p>To Aerial Leap</p>
              {lh}
              <p>Lethal hit on 2nd phrase</p>
            </Fragment>
          ]
        },
        {
          id: 142,
          command: "RE AAA",
          move: [
            <Fragment>
              <p>Inverted Support</p>
              {re}
              {a}
              {a}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
              {h}
              {h}
              {h}
              {m}
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
          id: 143,
          command: "RE AB",
          move: [
            <Fragment>
              <p>Inverted Assault Volley</p>
              {re}
              {a}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
              {h}
              {m}
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
          id: 144,
          command: "RE B",
          move: [
            <Fragment>
              <p>Inverted Skewer Sequence</p>
              {re}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
              {m}
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
          id: 145,
          command: "RE [B]",
          move: [
            <Fragment>
              <p>Inverted Skewer Augmented</p>
              {re}
              {b_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
              {m}
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
          id: 146,
          command: "RE K ~ AL",
          move: [
            <Fragment>
              <p>Inveted Orbit Strike ~ Aerial Leap</p>
              {re}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
              {m}
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              {ss}
              <p>To Aerical Leap</p>
              {lh}
              <p>{th}Lethal hit on 2nd phrase</p>
            </Fragment>
          ]
        },

        {
          id: 147,
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
              <p />
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              <p>Beats</p>
              {re}
              {a}
            </Fragment>
          ]
        },
        {
          id: 148,
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
              <p />
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              <p>Beats</p>
              {re}
              {b}
            </Fragment>
          ]
        },
        {
          id: 149,
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
              <p />
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              <p>Beats</p>
              {re}
              {k}
            </Fragment>
          ]
        },
        {
          id: 150,
          command: "RE G",
          move: [
            <Fragment>
              <p>Guard</p>
              {re}
              {g}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [<Fragment />]
        }
      ],

      // gauge attacks start here
      gaugeAttacks: [
        {
          id: 151,
          command: "A+B+K",
          move: [
            <Fragment>
              <p>Suppression: Extermination Gambit</p>
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
              {at}
            </Fragment>
          ]
        },
        {
          id: 152,
          command: "AL ~ A+B+K",
          move: [
            <Fragment>
              <p>Suppression: Extermination Gambit</p>
              <span>Aerial Leap</span>
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
              {at}
            </Fragment>
          ]
        },
        {
          id: 153,
          command: "AL ~ AAA+B+K",
          move: [
            <Fragment>
              <p>Suppression: Extermination Gambit</p>
              <span>Aerial Leap</span>
              {a}
              {a}
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
              {h}
              {h}
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
              {at}
            </Fragment>
          ]
        },
        {
          id: 154,
          command: "6A+B+K",
          move: [
            <Fragment>
              <p>Limiter Release: Self-Destruct</p>
              {d6}
              {a}
              {plus}
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
          onBlock: "-32",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {sg}
              {ce}
              {at}
              <p>Can be used at low health / Costs health</p>
            </Fragment>
          ]
        },
        {
          id: 155,
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
          id: 156,
          command: "SC AAAA",
          move: [
            <Fragment>
              <p>Slash Squence: Charged Blade</p>
              {sc}
              {a}
              {a}
              {a}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              {h}
              {h}
              {h}
              {h}
              {h}
              {h}
              {m}
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
          id: 157,
          command: "SC 3AKK ~ AL",
          move: [
            <Fragment>
              <p>Revolving Strike(First Class) ~ Aerial Leap</p>
              {sc}
              {d3}
              {a}
              {k}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {m}
              {m}
              {h}
              {h}
              {m}
            </Fragment>
          ],
          onBlock: "-37",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              {sc}
              {ss}
              <p>To Aerial Leap</p>
            </Fragment>
          ]
        },
        {
          id: 157,
          command: "SC BBBB ~ AL",
          move: [
            <Fragment>
              <p>Severing Sequence(First Class) ~ Aerial Leap</p>
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
              {m}
            </Fragment>
          ],
          onBlock: "-41",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              {sc}
              {ss}
              <p>To Aerial Leap</p>
            </Fragment>
          ]
        },

        {
          id: 158,
          command: "SC 4BBB",
          move: [
            <Fragment>
              <p>Assault Pattern: Charged Gatling</p>
              {sc}
              {d4}
              {b}
              {b}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              {m}
              {m}
              {m}
              {sm}
              {sm}
              {sm}
            </Fragment>
          ],
          onBlock: "+4",
          onHit: "STN",
          counterHit: "STN",
          note: [<Fragment>{sc}</Fragment>]
        },
        {
          id: 159,
          command: "SC 22*88AAA",
          move: [
            <Fragment>
              <p>Mobilize: Spear Spin(First Class)</p>
              {sc}
              {d2_h}
              <span> * </span>
              {d8_h}
              {a}
              {a}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {h}
              {h}
              {h}
              {h}
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{sc}</Fragment>]
        },
        {
          id: 160,
          command: "SC 33*66*99BB",
          move: [
            <Fragment>
              <p>Mobilize: Piercing Assualt(First Class)</p>
              {sc}
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
          onBlock: "-8",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{sc}</Fragment>]
        },

        {
          id: 161,
          command: "SC AGS A",
          move: [
            <Fragment>
              <p>Shifted Slice: Charged Blade</p>
              {sc}
              <span>Aggression Shift</span>
              {a}
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
          onBlock: "-3",
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
          id: 162,
          command: "SC AGS A6 ~ AGS",
          move: [
            <Fragment>
              <p>Shifted Slice: Charged Blade ~ Aggression Shift</p>
              {sc}
              <span>Aggression Shift</span>
              {a}
              {d6}
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
          onBlock: "0",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {sc}
              {ss}
              <p>To Aggression Shift</p>
              <p>TC</p>
            </Fragment>
          ]
        },
        {
          id: 163,
          command: "SC AGS A4 ~ AGS",
          move: [
            <Fragment>
              <p>Shifted Slice: Charged Blade ~ Back Step ~ Aggression Shift</p>
              {sc}
              <span>Aggression Shift</span>
              {a}
              {d4}
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
          onBlock: "",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {sc}
              {ss}
              <p>Back Step to Aggression Shift</p>
              <p>TC</p>
            </Fragment>
          ]
        },
        {
          id: 164,
          command: "SC AGS A8 ~ AL",
          move: [
            <Fragment>
              <p>Shifted Slice: Charged Blade ~ Aerial Leap</p>
              {sc}
              <span>Aggression Shift</span>
              {a}
              {d8}
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
          onBlock: "",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {sc}
              {ss}
              <p>To Aerial Leap</p>
            </Fragment>
          ]
        },
        {
          id: 165,
          command: "SC AGS BB ~ AL",
          move: [
            <Fragment>
              <p>Shifted Support Kick ~ Aerial Leap: Charged Spear</p>
              {sc}
              <span>Aggression Shift</span>
              {b}
              {b}
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
          onBlock: "",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              {sc}
              {ss}
              <p>To Aerial Leap</p>
            </Fragment>
          ]
        },
        {
          id: 166,
          command: "SC AL AAA",
          move: [
            <Fragment>
              <p>Airborne Slash Pattern: Charged Laser</p>
              {sc}
              <span>Aerial Leap</span>
              {a}
              {a}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
              {h}
              {h}
              {h}
              {h}
              {h}
              {h}
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [<Fragment>{sc}</Fragment>]
        },
        {
          id: 167,
          command: "SC AL B",
          move: [
            <Fragment>
              <p>Airborne Slash Cleave: Charged Spear</p>
              {sc}
              <span>Aerial Leap</span>
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
              {m}
              {m}
              {m}
              {sm}
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [<Fragment>{sc}</Fragment>]
        }
      ],
      // special stance start here
      aggressionShift: [
        {
          id: 168,
          command: "236",
          move: [
            <Fragment>
              <p>Aggression Shift</p>
              {d2}
              {d3}
              {d6}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              {ss}
              <p>To Aggression Shift</p>
            </Fragment>
          ]
        },
        {
          id: 169,
          command: "214",
          move: [
            <Fragment>
              <p>Back Step ~ Aggression Shift</p>
              {d2}
              {d1}
              {d4}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              {ss}
              <p>Back Step to Aggression Shift</p>
            </Fragment>
          ]
        },
        {
          id: 170,
          command: "AGS A",
          move: [
            <Fragment>
              <p>Shifted Slice</p>
              <span>Aggression Shift</span>
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "-2",
          counterHit: "+2",
          note: [<Fragment />]
        },
        {
          id: 171,
          command: "AGS A6 ~ AGS",
          move: [
            <Fragment>
              <p>Shifted Slice ~ Aggression Shift</p>
              <span>Aggression Shift</span>
              {a}
              {d6}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-3",
          onHit: "+6",
          counterHit: "",
          note: [
            <Fragment>
              {ss}
              <p>To Aggression Shift</p>
            </Fragment>
          ]
        },
        {
          id: 171,
          command: "AGS A4 ~ AGS",
          move: [
            <Fragment>
              <p>Shifted Slice ~ Back Step~ Aggression Shift</p>
              <span>Aggression Shift</span>
              {a}
              {d6}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              {ss}
              <p>Back Step to Aggression Shift</p>
            </Fragment>
          ]
        },
        {
          id: 172,
          command: "AGS A8 ~ AL",
          move: [
            <Fragment>
              <p>Shifted Slice ~ Aerial Leap</p>
              <span>Aggression Shift</span>
              {a}
              {d8}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              {ss}
              <p>To Aerial Leap</p>
            </Fragment>
          ]
        },
        {
          id: 173,
          command: "AGS BA",
          move: [
            <Fragment>
              <p>Shifted Support Assault</p>
              <span>Aggression Shift</span>
              {b}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>28F</p>
              {l}
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
          id: 174,
          command: "AGS BB ~ AL",
          move: [
            <Fragment>
              <p>Shifted Support Kick ~ Aerial Leap</p>
              <span>Aggression Shift</span>
              {b}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>28F</p>
              {l}
              {sm}
            </Fragment>
          ],
          onBlock: "-33",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              {ss}
              <p>To Aerial Leap</p>
            </Fragment>
          ]
        },

        {
          id: 175,
          command: "AGS [B]",
          move: [
            <Fragment>
              <p>Shifted Support Skewer(Augmented)</p>
              <span>Aggression Shift</span>
              {b_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>28F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "STN",
          counterHit: "STN",
          note: [<Fragment />]
        },

        {
          id: 176,
          command: "AGS KK",
          move: [
            <Fragment>
              <p>Shifted Strike Squence</p>
              <span>Aggression Shift</span>
              {k}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {m}
              {m}
              {m}
              {m}
              {h}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment />]
        },
        {
          id: 176,
          command: "AGS K6 ~ AGS",
          move: [
            <Fragment>
              <p>Shifted Strike Squence ~ Aggression Shift</p>
              <span>Aggression Shift</span>
              {k}
              {d6}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {m}
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "+6",
          counterHit: "",
          note: [
            <Fragment>
              {ss}
              <p>To Aggression Shift</p>
            </Fragment>
          ]
        },
        {
          id: 177,
          command: "AGS K4 ~ AGS",
          move: [
            <Fragment>
              <p>Shifted Strike Squence ~ Back Step ~ Aggression Shift</p>
              <span>Aggression Shift</span>
              {k}
              {d4}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {m}
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              {ss}
              <p>Back Step to Aggression Shift</p>
            </Fragment>
          ]
        },
        {
          id: 178,
          command: "AGS K8 ~ AL",
          move: [
            <Fragment>
              <p>Shifted Strike Squence ~ Aerial Leap</p>
              <span>Aggression Shift</span>
              {k}
              {d8}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {m}
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              {ss}
              <p>To Aerial Leap</p>
            </Fragment>
          ]
        },
        {
          id: 179,
          command: "AGS A+B",
          move: [
            <Fragment>
              <p>Pod Program R020: Mirage</p>
              <span>Aggression Shift</span>
              {a}
              {plus}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              {sm}
              {sm}
              {sm}
              {sm}
              {sm}
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              <p>Dodges high/Mid/Low</p>
            </Fragment>
          ]
        },
        {
          id: 180,
          command: "AGS [A+B]",
          move: [
            <Fragment>
              <p>Pod Program R020: Mirage(Hold)</p>
              <span>Aggression Shift</span>
              {a_h}
              {plus}
              {b_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              {sm}
              {sm}
              {sm}
              {sm}
              {sm}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              <p>Dodges high/Mid/Low</p>
            </Fragment>
          ]
        },
        {
          id: 181,
          command: "AGS B+K",
          move: [
            <Fragment>
              <p>Shifted Crushing Rocket</p>
              <span>Aggression Shift</span>
              {b}
              {plus}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
              {m}
            </Fragment>
          ],
          onBlock: "",
          onHit: "+10",
          counterHit: "+10",
          note: [<Fragment>{at}</Fragment>]
        },
        {
          id: 182,
          command: "AGS ~ A+G",
          move: [
            <Fragment>
              <p>Supperssion: Composite Kick</p>
              <span>Aggression Shift</span>
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
          id: 183,
          command: "AGS ~ 4A+G",
          move: [
            <Fragment>
              <p>Supperssion: Composite Slash</p>
              <span>Aggression Shift</span>
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
        }
      ],
      aerialLeap: [
        {
          id: 184,
          command: "8B+K",
          move: [
            <Fragment>
              <p>Aerial Leap</p>
              {d8}
              {b}
              {plus}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              {ss}
              <p>To Aerial Leap</p>
            </Fragment>
          ]
        },
        {
          id: 185,
          command: "AL AAA",
          move: [
            <Fragment>
              <p>Aerial Slash Pattern</p>
              <span>Aerial Leap</span>
              {a}
              {a}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
              {h}
              {h}
              {h}
              {h}
              {h}
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [<Fragment />]
        },
        {
          id: 186,
          command: "AL AAB",
          move: [
            <Fragment>
              <p>Aerial Assault</p>
              <span>Aerial Leap</span>
              {a}
              {a}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
              {h}
              {h}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment />]
        },
        {
          id: 186,
          command: "AL AAK",
          move: [
            <Fragment>
              <p>Aerial Unarmed Strike</p>
              <span>Aerial Leap</span>
              {a}
              {a}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
              {h}
              {h}
              {m}
            </Fragment>
          ],
          onBlock: "-31",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {lh}
              <p>Triggers on build up at 9 APs</p>
              <p>+2 Analysis Points</p>
            </Fragment>
          ]
        },
        {
          id: 187,
          command: "AL B",
          move: [
            <Fragment>
              <p>Aerial Spear Cleave</p>
              <span>Aerial Leap</span>
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment />]
        },
        {
          id: 188,
          command: "AL K",
          move: [
            <Fragment>
              <p>Aerial Support Kick</p>
              <span>Aerial Leap</span>
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
              {h}
              {h}
              {h}
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment />]
        },
        {
          id: 189,
          command: "AL A+B",
          move: [
            <Fragment>
              <p>Pod Program A080: Wave</p>
              <span>Aerial Leap</span>
              {a}
              {plus}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
              {sm}
              {sl}
              {sl}
              {sl}
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              <p>Deals chip damage / TJ</p>
            </Fragment>
          ]
        },
        {
          id: 190,
          command: "AL [A+B]",
          move: [
            <Fragment>
              <p>Pod Program A080: Wave(Hold)</p>
              <span>Aerial Leap</span>
              {a_h}
              {plus}
              {b_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
              {sm}
              {sl}
              {sl}
              {sl}
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {lh}
              <p>Triggers upon when your guard stamina is full</p>
              <p>Deals chip damage / TJ</p>
            </Fragment>
          ]
        },
        {
          id: 191,
          command: "AL B+K ~ AL",
          move: [
            <Fragment>
              <p>Airborne Support Gambit ~ Aerial Leap</p>
              <span>Aerial Leap</span>
              {b}
              {plus}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
              {h}
              {h}
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              {ss}
              <p>To Aerial Leap</p>
            </Fragment>
          ]
        },
        {
          id: 192,
          command: "AL 6 ~ AGS",
          move: [
            <Fragment>
              <p>Airborne Aggression Shift</p>
              <span>Aerial Leap</span>
              {d6}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              {ss}
              <p>To Aggression Shift</p>
            </Fragment>
          ]
        },
        {
          id: 193,
          command: "AL 4 ~ AGS",
          move: [
            <Fragment>
              <p>Airborne Back Step ~ Aggression Shift</p>
              <span>Aerial Leap</span>
              {d4}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              {ss}
              <p>Back Step to Aggression Shift</p>
            </Fragment>
          ]
        },
        {
          id: 194,
          command: "AL 7*8*9",
          move: [
            <Fragment>
              <p>Glide</p>
              <span>Aerial Leap</span>
              {d7}
              <span> * </span>
              {d8}
              <span> * </span>
              {d9}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              <p>Can only use AL A/B/K/A+B</p>
            </Fragment>
          ]
        }
      ],
      anglerStance: [
        {
          id: 195,
          command: "B+K",
          move: [
            <Fragment>
              <p>Angler Stance(H/M)</p>
              {b}
              {plus}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              {ss}
              <p>To Angler Stance</p>
              <p>Dodges High/Mid except Kicks / Can be cancelled with G</p>
            </Fragment>
          ]
        },
        {
          id: 196,
          command: "ALS A",
          move: [
            <Fragment>
              <p>Angler: Support Blade</p>
              <span>Angler Stance </span>
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {h}
              {h}
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "+4",
          counterHit: "+4",
          note: [<Fragment />]
        },
        {
          id: 197,
          command: "ALS [A] ~ ALS",
          move: [
            <Fragment>
              <p>Angler: Support Blade ~ Angler Stance</p>
              <span>Angler Stance</span>
              {a_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {h}
              {h}
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              {ss}
              <p>To Angler Stance</p>
            </Fragment>
          ]
        },
        {
          id: 197,
          command: "ALS B",
          move: [
            <Fragment>
              <p>Angler: Support Gatling</p>
              <span>Angler Stance</span>
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {h}
              {h}
              {h}
            </Fragment>
          ],
          onBlock: "-20",
          onHit: "-14",
          counterHit: "",
          note: [<Fragment />]
        },
        {
          id: 198,
          command: "ALS [B] ~ ALS",
          move: [
            <Fragment>
              <p>Angler: Support Gatling ~ Angler Stance</p>
              <span>Angler Stance</span>
              {b_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {h}
              {h}
              {h}
            </Fragment>
          ],
          onBlock: "0",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              {ss}
              <p>To Angler Stance</p>
            </Fragment>
          ]
        },
        {
          id: 199,
          command: "ALS K",
          move: [
            <Fragment>
              <p>Angler: Support Casting</p>
              <span>Angler Stance</span>
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              {m}
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              <p>2*8 change attack range</p>
            </Fragment>
          ]
        },
        {
          id: 200,
          command: "ALS [K] ~ ALS",
          move: [
            <Fragment>
              <p>Angler: Support Casting</p>
              <span>Angler Stance</span>
              {k_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              {m}
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              {ss}
              <p>To Angler Stance</p>
              <p>2*8 change attack range</p>
            </Fragment>
          ]
        },
        {
          id: 201,
          command: "ALS 236 ~ AGS",
          move: [
            <Fragment>
              <p>Angler Stance ~ Aggression Shift</p>
              <span>Angler Stance</span>
              {d2}
              {d3}
              {d6}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              {ss}
              <p>To Angler Stance</p>
            </Fragment>
          ]
        },
        {
          id: 202,
          command: "ALS 214 ~ AGS",
          move: [
            <Fragment>
              <p>Angler Stance ~ Back Step ~ Aggression Shift</p>
              <span>Angler Stance</span>
              {d2}
              {d1}
              {d4}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              {ss}
              <p>Back Step to Angler Stance</p>
            </Fragment>
          ]
        },
        {
          id: 203,
          command: "ALS 7*8*9B+K",
          move: [
            <Fragment>
              <p>Angler Stance ~ Aerial Leap</p>
              <span>Angler Stance</span>
              {d7}
              <span> * </span>
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
              <p />
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              {ss}
              <p>To Angler Leap</p>
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
              "Aggression Shift = AGS",
              "Angler Stance = ALS",
              "Aerial Leap = AL"
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
                    tableData={type2BFrameData.verticalAttacks.map(data => [
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
                    tableData={type2BFrameData.verticalAttacks.map(data => [
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
                    tableData={type2BFrameData.horizontalAttacks.map(data => [
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
                    tableData={type2BFrameData.horizontalAttacks.map(data => [
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
                    tableData={type2BFrameData.kicks.map(data => [
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
                    tableData={type2BFrameData.kicks.map(data => [
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
                    tableData={type2BFrameData.dualButtonAttacks.map(data => [
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
                    tableData={type2BFrameData.dualButtonAttacks.map(data => [
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
                  Special Stance(Aggression Shift)
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
                    tableData={type2BFrameData.aggressionShift.map(data => [
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
                    tableData={type2BFrameData.aggressionShift.map(data => [
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
                  Special Stance(Aerial Leap)
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
                    tableData={type2BFrameData.aerialLeap.map(data => [
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
                    tableData={type2BFrameData.aerialLeap.map(data => [
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
                  Special Stance(Angler Stance)
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
                    tableData={type2BFrameData.anglerStance.map(data => [
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
                    tableData={type2BFrameData.anglerStance.map(data => [
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
                    tableData={type2BFrameData.eightwayrunAttack.map(data => [
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
                    tableData={type2BFrameData.eightwayrunAttack.map(data => [
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
                    tableData={type2BFrameData.throws.map(data => [
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
                    tableData={type2BFrameData.throws.map(data => [
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
                  Reversal Edge Attacks
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
                    tableData={type2BFrameData.reversalEdge.map(data => [
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
                    tableData={type2BFrameData.reversalEdge.map(data => [
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
                    tableData={type2BFrameData.gaugeAttacks.map(data => [
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
                    tableData={type2BFrameData.gaugeAttacks.map(data => [
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
export default withStyles(styles)(Type2B);
