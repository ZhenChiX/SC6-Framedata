import React, { Fragment, Component } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Popup from "../Popup/Popup.jsx";
import Modal from "@material-ui/core/Modal";
// import Grid from '@material-ui/core/Grid';
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
          command: "B+K / 2B+K",
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
              <p>Successful evade an attack</p>
            </Fragment>
          ]
        },
        {
          id: 60,
          command: "B+K B:B:B",
          move: [
            <Fragment>
              <p>Fury</p>
              {b}
              {plus}
              {k}
              {b}
              <span>:</span>
              {b}
              <span>:</span>
              {b}
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
          onBlock: "-18",
          onHit: "-8",
          counterHit: "-8",
          note: []
        },
        {
          id: 61,
          command: "B+K B:B:B:A ~ RO",
          move: [
            <Fragment>
              <p>Fury ~ Right Outer</p>
              {b}
              {plus}
              {k}
              {b}
              <span>:</span>
              {b}
              <span>:</span>
              {b}
              <span>:</span>
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
          onBlock: "-22",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {ss}
              <p>To Right Outer</p>
            </Fragment>
          ]
        },
        {
          id: 62,
          command: "6B+K",
          move: [
            <Fragment>
              <p>Serpent's Pleasure</p>
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
              {m}
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              <p>-4 on block after held</p>
            </Fragment>
          ]
        },
        {
          id: 63,
          command: "6b+kG ~ RC",
          move: [
            <Fragment>
              <p>Serpent's Pleasure ~ Right Cross</p>
              {d6}
              {bSM}
              {plus}
              {kSM}
              {g}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "+6",
          counterHit: "+6",
          note: [
            <Fragment>
              {ss}
              <p>To Right Cross</p>
            </Fragment>
          ]
        },
        {
          id: 64,
          command: "2B+K",
          move: [
            <Fragment>
              <p>Tiger Slaughter</p>
              {d2}
              {b}
              {plus}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              {l}
            </Fragment>
          ],
          onBlock: "-18",
          onHit: "-8",
          counterHit: "KND",
          note: []
        },
        {
          id: 65,
          command: "2B+KK",
          move: [
            <Fragment>
              <p>Tiger Slaughter</p>
              {d2}
              {b}
              {plus}
              {k}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              {l}
              {l}
            </Fragment>
          ],
          onBlock: "-18",
          onHit: "-8",
          counterHit: "KND",
          note: []
        },
        {
          id: 66,
          command: "4B+K",
          move: [
            <Fragment>
              <p>Twisted Loop</p>
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
          onBlock: "KND",
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
          id: 67,
          command: "FC 3A+B ~ BL",
          move: [
            <Fragment>
              <p>Dragon's Sky ~ Behind Lower</p>
              <span>FC</span>
              {d3}
              {a}
              {plus}
              {b}
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
          note: [
            <Fragment>
              {ss}
              <p>To Behind Lower / TC</p>
            </Fragment>
          ]
        },
        {
          id: 68,
          command: "WR B+K ~ BL",
          move: [
            <Fragment>
              <p>Canyon Carve ~ Behind Lower</p>
              <span>WR</span>
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
          onBlock: "0",
          onHit: "+6",
          counterHit: "+6",
          note: [
            <Fragment>
              {ss}
              <p>To Behind Lower / TC</p>
            </Fragment>
          ]
        },
        {
          id: 69,
          command: "WR b+kG ~ RO",
          move: [
            <Fragment>
              <p>Canyon Carve ~ Right Outer</p>
              <span>WR</span>
              {bSM}
              {plus}
              {kSM}
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
              {ss}
              <p>To Right Outer</p>
            </Fragment>
          ]
        },

        {
          id: 70,
          command: "BT B+K",
          move: [
            <Fragment>
              <p>Reverse Blow</p>
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
          onBlock: "0",
          onHit: "STN",
          counterHit: "STN",
          note: [<Fragment>{ba}</Fragment>]
        }
      ],

      // 8way-run attacks start here
      eightwayrunAttack: [
        {
          id: 71,
          command: "33*66*99A",
          move: [
            <Fragment>
              <p>Striking Snake</p>
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
              {h}
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "+10",
          counterHit: "+10",
          note: ""
        },
        {
          id: 72,
          command: "22A ~ LI",
          move: [
            <Fragment>
              <p>Northern Lights ~ Left Inner</p>
              {d2_h}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "+8",
          counterHit: "STN",
          note: [
            <Fragment>
              {ss}
              <p>To Left Inner</p>
            </Fragment>
          ]
        },
        {
          id: 73,
          command: "88A",
          move: [
            <Fragment>
              <p>Northern Lights(Reverse)</p>
              {d8_h}
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
          onHit: "+4",
          counterHit: "STN",
          note: [<Fragment />]
        },
        {
          id: 74,
          command: "11*44*77A",
          move: [
            <Fragment>
              <p>Propeller Nunchaku</p>
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
              <p>20F</p>
              {h}
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "-4",
          counterHit: "-4",
          note: "TC[6~14]"
        },
        {
          id: 75,
          command: "11*44*77AB ~ RO",
          move: [
            <Fragment>
              <p>Propeller Nunchaku ~ Right Outer</p>
              {d1_h}
              <span> * </span>
              {d4_h}
              <span> * </span>
              {d7_h}
              {a}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {h}
              {m}
              {sm}
              {sm}
            </Fragment>
          ],
          onBlock: "+4",
          onHit: "+12",
          counterHit: "+12",
          note: [
            <Fragment>
              {ss}
              <p>To Right Outer</p>
            </Fragment>
          ]
        },

        {
          id: 76,
          command: "66B ~ LO",
          move: [
            <Fragment>
              <p>Steel Dragon ~ Left Outer</p>
              {d6_h}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {h}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {ss}
              <p>To Left Outer</p>
            </Fragment>
          ]
        },
        {
          id: 77,
          command: "66B4 ~ LI",
          move: [
            <Fragment>
              <p>Branding Nunchaku ~ Left Inner</p>
              {d6_h}
              {bSM}
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
              {m}
              {m}
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
              {ss}
              <p>To Left Inner</p>
              <p>Cancel with G</p>
            </Fragment>
          ]
        },
        {
          id: 78,
          command: "33*99B ~ BL",
          move: [
            <Fragment>
              <p>Return of Fear ~ Behind Lower</p>
              {d3_h}
              <span> * </span>
              {d9_h}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>28F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-2",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              {ss}
              <p>To Behind Lower</p>
              <p>TC[12~22]</p>
            </Fragment>
          ]
        },
        {
          id: 79,
          command: "33*99bA ~ RC",
          move: [
            <Fragment>
              <p>Cobra's Temple ~ Right Cross</p>
              {d3_h}
              <span> * </span>
              {d9_h}
              {bSM}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>?F</p>
              {h}
            </Fragment>
          ],
          onBlock: "+6",
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
          id: 80,
          command: "22*88B",
          move: [
            <Fragment>
              <p>Mark of the Beast</p>
              {d2_h}
              <span> * </span>
              {d8_h}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>32F</p>
              {m}
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "STN",
          counterHit: "STN",
          note: ""
        },
        {
          id: 81,
          command: "11*44*77B ~ RC",
          move: [
            <Fragment>
              <p>Reverse Snake Cross ~ Right Cross</p>
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
              <p>24F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "0",
          counterHit: "STN",
          note: [
            <Fragment>
              {ss}
              <p>To Right Cross</p>
              {lh}
              <p>Lethal Hit on High Crush</p>
            </Fragment>
          ]
        },
        {
          id: 82,
          command: "33*66*99K",
          move: [
            <Fragment>
              <p>Rolling Sobat</p>
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
              <p>26F</p>
              {h}
            </Fragment>
          ],
          onBlock: "-2",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <p>TJ</p>
            </Fragment>
          ]
        },

        {
          id: 83,
          command: "22*88K",
          move: [
            <Fragment>
              <p>Dragon Star</p>
              {d2_h}
              <span> * </span>
              {d8_h}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>32F</p>
              {l}
            </Fragment>
          ],
          onBlock: "-20",
          onHit: "-10",
          counterHit: "LNC",
          note: "TC"
        },
        {
          id: 84,
          command: "22*88KK",
          move: [
            <Fragment>
              <p>Dragon Star</p>
              {d2_h}
              <span> * </span>
              {d8_h}
              {k}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>32F</p>
              {l}
              {m}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "LNC",
          counterHit: "LNC",
          note: "TC"
        },
        {
          id: 85,
          command: "22*88KK:K",
          move: [
            <Fragment>
              <p>Dragon Star</p>
              {d2_h}
              <span> * </span>
              {d8_h}
              {k}
              {k}
              <span>:</span>
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>32F</p>
              {l}
              {m}
              {h}
            </Fragment>
          ],
          onBlock: "+6",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {ba}
              <p>TJ</p>
            </Fragment>
          ]
        },
        {
          id: 86,
          command: "11*44*77K",
          move: [
            <Fragment>
              <p>Falling Hydra</p>
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
              <p>38F</p>
              {m}
            </Fragment>
          ],
          onBlock: "+2",
          onHit: "STN",
          counterHit: "STN",
          note: "TC/TJ"
        },
        {
          id: 87,
          command: "33*66*99A+B ~ RO",
          move: [
            <Fragment>
              <p>Seismic Whale ~ Right Outer</p>
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
              <p>24F</p>
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-2",
          onHit: "+6",
          counterHit: "+6",
          note: [
            <Fragment>
              {ss}
              <p>To Right Outer</p>
            </Fragment>
          ]
        },
        {
          id: 88,
          command: "33*66*99[A+B] ~ BL",
          move: [
            <Fragment>
              <p>Seismic Whale ~ Behind Lower</p>
              {d3_h}
              <span> * </span>
              {d6_h}
              <span> * </span>
              {d9_h}
              {a_h}
              {plus}
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
          onBlock: "-2",
          onHit: "+6",
          counterHit: "+6",
          note: [
            <Fragment>
              {ss}
              <p>To Behind Lower</p>
            </Fragment>
          ]
        },
        {
          id: 89,
          command: "33*66*99A+BB ~ Left Outer",
          move: [
            <Fragment>
              <p>Fish in a Barrel ~ Left Outer</p>
              {d3_h}
              <span> * </span>
              {d6_h}
              <span> * </span>
              {d9_h}
              {a}
              {plus}
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
          onBlock: "+6",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              {ba}
              {ss}
              <p>To Left Outer</p>
            </Fragment>
          ]
        },

        {
          id: 90,
          command: "33*66*99B+K",
          move: [
            <Fragment>
              <p>Dragon Cannon</p>
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
          onBlock: "-12",
          onHit: "LNC",
          counterHit: "LNC",
          note: "TC/TJ"
        },

        {
          id: 91,
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
          id: 92,
          command: "A+G",
          move: [
            <Fragment>
              <p>Falling Heaven Dragon</p>
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
          id: 93,
          command: "4A+G",
          move: [
            <Fragment>
              <p>Lynching</p>
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
          id: 94,
          command: "Right Throw ~ BL",
          move: [
            <Fragment>
              <p>Leaving the Dragon Nest ~ Behind Lower</p>
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
          note: [
            <Fragment>
              {th}
              {ss}
              <p>To Behind Lower</p>
            </Fragment>
          ]
        },
        {
          id: 95,
          command: "Left Throw",
          move: [
            <Fragment>
              <p>Dragon Destoryer</p>
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
          id: 96,
          command: "Back Throw",
          move: [
            <Fragment>
              <p>Parting the Waves</p>
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
        }
      ],

      // reversal edge start here
      reversalEdge: [
        {
          id: 97,
          command: "B+G",
          move: [
            <Fragment>
              <p>Snapping Leviathan</p>
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
          onBlock: "-4",
          onHit: "",
          counterHit: "",
          note: [<Fragment>{re}</Fragment>]
        },

        {
          id: 98,
          command: "[B+G]",
          move: [
            <Fragment>
              <p>Snapping Leviathan</p>
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
          id: 99,
          command: "RE A ~ BL",
          move: [
            <Fragment>
              <p>Crashing Wave ~ Behind Lower</p>
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
          onBlock: "-10",
          onHit: "+8",
          counterHit: "+8",
          note: [
            <Fragment>
              {ss}
              <p>To Behind Lower</p>
              {lh}
              <p>Lethal hit on 2nd phrase</p>
            </Fragment>
          ]
        },

        {
          id: 100,
          command: "RE [A] ~ RO",
          move: [
            <Fragment>
              <p>Crashing Wave ~ Right Outer</p>
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
          onBlock: "+2",
          onHit: "+18",
          counterHit: "+18",
          note: [
            <Fragment>
              {ss}
              <p>To Right Outer</p>
              {lh}
              <p>Lethal hit on 2nd phrase</p>
            </Fragment>
          ]
        },
        {
          id: 101,
          command: "RE AA",
          move: [
            <Fragment>
              <p>Crashing Wave</p>
              {re}
              {a}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>N/A</p>
              {h}
              {l}
            </Fragment>
          ],
          onBlock: "-14",
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
          id: 102,
          command: "RE B ~ LI",
          move: [
            <Fragment>
              <p>Wave Breaker ~ Left Inner</p>
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
          onBlock: "?F",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              {ss}
              <p>To Left Inner</p>
              {lh}
              <p>Lethal hit on 2nd phrase</p>
            </Fragment>
          ]
        },

        {
          id: 103,
          command: "RE K",
          move: [
            <Fragment>
              <p>Incense Burner</p>
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
          onBlock: "-6",
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
          id: 104,
          command: "RE 6 ~ LO",
          move: [
            <Fragment>
              <p>Foward Step ~ Left Outer</p>
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
              {ss}
              <p>To Left Outer</p>
              <p>Beats</p>
              {re}
              {a}
            </Fragment>
          ]
        },
        {
          id: 105,
          command: "RE 2 ~ RO",
          move: [
            <Fragment>
              <p>Side Step ~ Right Outer</p>
              {re}
              {d2}
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
              <p>To Right Outer</p>
              <p>Beats</p>
              {re}
              {b}
            </Fragment>
          ]
        },
        {
          id: 106,
          command: "RE 8 ~ WL",
          move: [
            <Fragment>
              <p>Side Step ~ Weaving Light</p>
              {re}
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
              {ss}
              <p>To Weaving Light</p>
              <p>Beats</p>
              {re}
              {b}
            </Fragment>
          ]
        },
        {
          id: 107,
          command: "RE 4 ~ RC",
          move: [
            <Fragment>
              <p>Back Step ~ Right Cross</p>
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
              {ss}
              <p>To Right Cross</p>
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
          id: 108,
          command: "A+B+K",
          move: [
            <Fragment>
              <p>Raging Dragon Zodiac</p>
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
          id: 109,
          command: "[A+B+K] ~ RO",
          move: [
            <Fragment>
              <p>Raging Dragon Zodiac ~ Right Outer</p>
              {a_h}
              {plus}
              {b_h}
              {plus}
              {k_h}
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
              {ss}
              <p>To Right Outer</p>
            </Fragment>
          ]
        },
        {
          id: 110,
          command: "WL A+B+K",
          move: [
            <Fragment>
              <p>Raging Dragon Zodiac: Reprisal</p>
              <span>WL</span>
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
          onBlock: "0",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {sg}
              {ce}
              {at}
              {ba}
            </Fragment>
          ]
        },
        {
          id: 111,
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
          id: 112,
          command: "SC 4AAAB ~ LI",
          move: [
            <Fragment>
              <p>Dragon's Roar ~ Left Inner</p>
              {sc}
              {d4}
              {a}
              {a}
              {a}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              {h}
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "+10",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              {sc}
              {ba}
              {ss}
              <p>To Left Inner</p>
            </Fragment>
          ]
        },

        {
          id: 113,
          command: "SC 236A ~ BL",
          move: [
            <Fragment>
              <p>Setting Sun ~ Behind Lower</p>
              {sc}
              {d2}
              {d3}
              {d6}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>28F</p>
              {l}
              {l}
              {l}
              {l}
              {l}
            </Fragment>
          ],
          onBlock: "0",
          onHit: "+10",
          counterHit: "+10",
          note: [
            <Fragment>
              {sc}
              {ba}
              {ss}
              <p>To Behind Lower</p>
            </Fragment>
          ]
        },

        {
          id: 114,
          command: "SC 6A+B ~ LI",
          move: [
            <Fragment>
              <p>Hydra's Brand ~ Left Inner</p>
              {sc}
              {d6}
              {a}
              {plus}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {m}
            </Fragment>
          ],
          onBlock: "+10",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              {sc}
              {ba}
              {ss}
              <p>To Left Inner / TC[4~15]</p>
            </Fragment>
          ]
        },
        {
          id: 115,
          command: "SC RO A A+B ~ BL",
          move: [
            <Fragment>
              <p>Crashing Waves ~ Behind Lower</p>
              {sc}
              <span>Right Outer</span>
              {a}
              {a}
              {plus}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {h}
              {h}
            </Fragment>
          ],
          onBlock: "",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {sc}
              {ss}
              <p>To Behind Lower / TC[4~15]</p>
            </Fragment>
          ]
        },
        {
          id: 116,
          command: "SC RO BB A+B ~ LO",
          move: [
            <Fragment>
              <p>Dragon's Shadow ~ Left Outer</p>
              {sc}
              <span>Right Outer</span>
              {b}
              {b}
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
              <p>To Left Outer</p>
            </Fragment>
          ]
        },
        {
          id: 117,
          command: "SC RO A+B ~ RO",
          move: [
            <Fragment>
              <p>Ocean Splitter ~ Right Outer</p>
              {sc}
              <span>Right Outer</span>
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
          onBlock: "",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              {sc}
              {ss}
              <p>To Right Outer</p>
            </Fragment>
          ]
        },
        {
          id: 118,
          command: "SC LO B A+B ~ LO",
          move: [
            <Fragment>
              <p>Light Dragon ~ Left Outer</p>
              {sc}
              <span>Left Outer</span>
              {b}
              {a}
              {plus}
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
          onBlock: "",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {sc}
              {ss}
              <p>To Left Outer</p>
            </Fragment>
          ]
        },
        {
          id: 119,
          command: "SC RC AB ~ LI",
          move: [
            <Fragment>
              <p>Hydra's Cross ~ Left Inner</p>
              {sc}
              <span>Right Cross</span>
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
          onBlock: "+10",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {sc}
              {ba}
              {ss}
              <p>To Left Inner</p>
            </Fragment>
          ]
        },
        {
          id: 120,
          command: "SC RC A+B",
          move: [
            <Fragment>
              <p>Swooping Swallow</p>
              {sc}
              <span>Right Cross</span>
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
          onBlock: "0",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {sc}
              <p>TJ</p>
            </Fragment>
          ]
        },
        {
          id: 121,
          command: "SC BL KK",
          move: [
            <Fragment>
              <p>Hydra's Frenzy</p>
              {sc}
              <span>Behind Lower</span>
              {k}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              {l}
              {h}
            </Fragment>
          ],
          onBlock: "+6",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {sc}
              {ba}
              <p>TJ[12~34]</p>
            </Fragment>
          ]
        }
      ],
      // special stance start here
      rightOuter: [
        {
          id: 122,
          command: "RO A ~ BL",
          move: [
            <Fragment>
              <p>Dragon Bite ~ Behind Lower</p>
              <span>Right Outer</span>
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
          onHit: "-6",
          counterHit: "-6",
          note: [
            <Fragment>
              {ss}
              <p>To Behind Lower</p>
            </Fragment>
          ]
        },
        {
          id: 123,
          command: "RO AK",
          move: [
            <Fragment>
              <p>Dragon Bite</p>
              <span>Right Outer</span>
              {a}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {h}
              {m}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "+6",
          counterHit: "+6",
          note: [<Fragment />]
        },
        {
          id: 124,
          command: "RO A[K]",
          move: [
            <Fragment>
              <p>Dragon Bite(Hold)</p>
              <span>Right Outer</span>
              {a}
              {k_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {h}
              {m}
            </Fragment>
          ],
          onBlock: "+10",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{ba}</Fragment>]
        },
        {
          id: 125,
          command: "RO B ~ RC",
          move: [
            <Fragment>
              <p>Dragon Wing Sobat ~ Right Cross</p>
              <span>Right Outer</span>
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "+6",
          counterHit: "STN",
          note: [
            <Fragment>
              {ss}
              <p>To Right Cross</p>
            </Fragment>
          ]
        },
        {
          id: 126,
          command: "RO BB ~ RC",
          move: [
            <Fragment>
              <p>Dragon Wing Sobat ~ Right Cross</p>
              <span>Right Outer</span>
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
          onBlock: "-6",
          onHit: "+2",
          counterHit: "STN",
          note: [
            <Fragment>
              {ss}
              <p>To Right Cross</p>
            </Fragment>
          ]
        },
        {
          id: 127,
          command: "RO BBK",
          move: [
            <Fragment>
              <p>Dragon Wing Sobat</p>
              <span>Right Outer</span>
              {b}
              {b}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {m}
              {m}
              {h}
            </Fragment>
          ],
          onBlock: "-2",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <p>TJ</p>
            </Fragment>
          ]
        },

        {
          id: 128,
          command: "RO K",
          move: [
            <Fragment>
              <p>Star Gale</p>
              <span>Right Outer</span>
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              {h}
            </Fragment>
          ],
          onBlock: "+4",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <p>TJ</p>
            </Fragment>
          ]
        }
      ],
      leftOuter: [
        {
          id: 129,
          command: "LO A",
          move: [
            <Fragment>
              <p>Bloddy Cross</p>
              <span>Left Outer</span>
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>32F</p>
              {l}
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "+4",
          counterHit: "+4",
          note: [
            <Fragment>
              <p>TC</p>
            </Fragment>
          ]
        },
        {
          id: 130,
          command: "LO AK",
          move: [
            <Fragment>
              <p>Bloddy Cross</p>
              <span>Left Outer</span>
              {a}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>32F</p>
              {l}
              {m}
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "+10",
          counterHit: "+10",
          note: [
            <Fragment>
              <p>TC</p>
            </Fragment>
          ]
        },
        {
          id: 131,
          command: "LO B ~ RC",
          move: [
            <Fragment>
              <p>Wing Sobat ~ Right Cross</p>
              <span>Left Outer</span>
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
          onHit: "+10",
          counterHit: "+10",
          note: [
            <Fragment>
              {ss}
              <p>To Right Cross</p>
              <p>TC</p>
            </Fragment>
          ]
        },
        {
          id: 132,
          command: "LO BK",
          move: [
            <Fragment>
              <p>Wing Sobat</p>
              <span>Left Outer</span>
              {b}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {m}
              {h}
            </Fragment>
          ],
          onBlock: "-2",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <p>TJ</p>
            </Fragment>
          ]
        },
        {
          id: 133,
          command: "LO K",
          move: [
            <Fragment>
              <p>Skewering Hunt</p>
              <span>Left Outer</span>
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {h}
            </Fragment>
          ],
          onBlock: "+4",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              {lh}
              <p>Triggers after PSL1 PSL2 or PSL5</p>
            </Fragment>
          ]
        }
      ],
      leftInner: [
        {
          id: 134,
          command: "LI A",
          move: [
            <Fragment>
              <p>Purity Cross ~ Right Cross</p>
              <span>Left Inner</span>
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {h}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {ss}
              <p>To Right Cross</p>
              <p>TC</p>
            </Fragment>
          ]
        },
        {
          id: 135,
          command: "LI B",
          move: [
            <Fragment>
              <p>Backfist Blow</p>
              <span>Left Inner</span>
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-32",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment />]
        },
        {
          id: 136,
          command: "LI K",
          move: [
            <Fragment>
              <p>Dragon Pounce</p>
              <span>Left Inner</span>
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>30F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              <p>TJ</p>
            </Fragment>
          ]
        },
        {
          id: 137,
          command: "LI KK",
          move: [
            <Fragment>
              <p>Dragon Pounce</p>
              <span>Left Inner</span>
              {k}
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
          onBlock: "-6",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              {lh}
              <p>Triggers after guard crush</p>
              <p>TJ</p>
            </Fragment>
          ]
        },
        {
          id: 138,
          command: "LI K[K]",
          move: [
            <Fragment>
              <p>Dragon Pounce(Hold)</p>
              <span>Left Inner</span>
              {k}
              {k_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>30F</p>
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "+2",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              <p>TJ</p>
            </Fragment>
          ]
        }
      ],
      rightCross: [
        {
          id: 139,
          command: "RC A ~ BL",
          move: [
            <Fragment>
              <p>Dragon's Beard ~ Behind Lower</p>
              <span>Right Cross</span>
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
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
            </Fragment>
          ]
        },
        {
          id: 140,
          command: "RC AA ~ LI",
          move: [
            <Fragment>
              <p>Dragon's Beard ~ Left Inner</p>
              <span>Right Cross</span>
              {a}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              {m}
              {h}
            </Fragment>
          ],
          onBlock: "+8",
          onHit: "+18",
          counterHit: "+18",
          note: [
            <Fragment>
              {ba}
              {ss}
              <p>To Left Inner</p>
            </Fragment>
          ]
        },
        {
          id: 141,
          command: "RC A[A] ~ LO",
          move: [
            <Fragment>
              <p>Dragon's Beard ~ Left Outer</p>
              <span>Right Cross</span>
              {a}
              {a_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              {m}
              {h}
            </Fragment>
          ],
          onBlock: "+8",
          onHit: "+18",
          counterHit: "+18",
          note: [
            <Fragment>
              {ba}
              {ss}
              <p>To Left Outer</p>
            </Fragment>
          ]
        },
        {
          id: 142,
          command: "RC AB",
          move: [
            <Fragment>
              <p>Dragon's Cross</p>
              <span>Right Cross</span>
              {a}
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
          onBlock: "-16",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              <p>TC[4~24]</p>
            </Fragment>
          ]
        },

        {
          id: 143,
          command: "RC B ~ LI",
          move: [
            <Fragment>
              <p>Stampede Wave ~ Left Inner</p>
              <span>Right Cross</span>
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>26F</p>
              {m}
            </Fragment>
          ],
          onBlock: "0",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              {ba}
              {ss}
              <p>To Left Inner</p>
            </Fragment>
          ]
        },
        {
          id: 144,
          command: "RC K",
          move: [
            <Fragment>
              <p>Rear Kick</p>
              <span>Right Cross</span>
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "+8",
          counterHit: "LNC",
          note: [
            <Fragment>
              {lh}
              <p>Triggers after PSL1 PSL2 or PSL5</p>
            </Fragment>
          ]
        }
      ],
      behindLower: [
        {
          id: 145,
          command: "BL A",
          move: [
            <Fragment>
              <p>Inverted Moon</p>
              <span>Behind Lower</span>
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {h}
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "+2",
          counterHit: "+2",
          note: [<Fragment />]
        },
        {
          id: 146,
          command: "BL B ~ RC",
          move: [
            <Fragment>
              <p>Black Serpent ~ Right Cross</p>
              <span>Behind Lower</span>
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              {m}
            </Fragment>
          ],
          onBlock: "+4",
          onHit: "+14",
          counterHit: "+14",
          note: [
            <Fragment>
              {ss}
              <p>To Right Cross</p>
              {lh}
              <p>Triggers after PSL1 PSL2 or PSL5</p>
            </Fragment>
          ]
        },
        {
          id: 147,
          command: "BL [B] ~ LO",
          move: [
            <Fragment>
              <p>Black Serpent ~ Left Outer</p>
              <span>Behind Lower</span>
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              {m}
            </Fragment>
          ],
          onBlock: "+4",
          onHit: "+14",
          counterHit: "+14",
          note: [
            <Fragment>
              {ss}
              <p>To Left Outer</p>
              {lh}
              <p>Triggers after PSL1 PSL2 or PSL5</p>
            </Fragment>
          ]
        },
        {
          id: 147,
          command: "BL K",
          move: [
            <Fragment>
              <p>Fury Kicks</p>
              <span>Behind Lower</span>
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              {l}
            </Fragment>
          ],
          onBlock: "-22",
          onHit: "-14",
          counterHit: "-14",
          note: [<Fragment />]
        },
        {
          id: 148,
          command: "BL KK",
          move: [
            <Fragment>
              <p>Fury Kicks</p>
              <span>Behind Lower</span>
              {k}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              {l}
              {h}
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment />]
        }
      ],
      waveringLight: [
        {
          id: 149,
          command: "PSL B+K",
          move: [
            <Fragment>
              <p>Netural Guard</p>
              <span>In Special Stance</span>
              {b}
              {plus}
              {k}
            </Fragment>
          ],
          impact: [<Fragment>{gi}</Fragment>],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              {gi}
              <p>GI against verticals</p>
            </Fragment>
          ]
        },
        {
          id: 150,
          command: "WL A",
          move: [
            <Fragment>
              <p>Shin Breaker</p>
              <span>Wavering Light</span>
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {l}
            </Fragment>
          ],
          onBlock: "-22",
          onHit: "-6",
          counterHit: "-6",
          note: [
            <Fragment>
              {lh}
              <p>Trigger upon successful GI</p>
              <p>TC</p>
            </Fragment>
          ]
        },
        {
          id: 151,
          command: "WL B ~ LO",
          move: [
            <Fragment>
              <p>Transforming Serpent ~ Left Outer</p>
              <span>Wavering Light</span>
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
          onHit: "-4",
          counterHit: "-4",
          note: [
            <Fragment>
              {ss}
              <p>To Left Outer</p>
              <p>TC</p>
            </Fragment>
          ]
        },
        {
          id: 152,
          command: "WL BB ~ RC",
          move: [
            <Fragment>
              <p>Transforming Serpent ~ Right Cross</p>
              <span>Wavering Light</span>
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
          onBlock: "+4",
          onHit: "+14",
          counterHit: "+14",
          note: [
            <Fragment>
              {ss}
              <p>To Right Cross</p>
            </Fragment>
          ]
        },
        {
          id: 153,
          command: "WL B[B] ~ LO",
          move: [
            <Fragment>
              <p>Transforming Serpent ~ Left Outer</p>
              <span>Wavering Light</span>
              {b}
              {b_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {m}
            </Fragment>
          ],
          onBlock: "+4",
          onHit: "+14",
          counterHit: "+14",
          note: [
            <Fragment>
              {ss}
              <p>To Left Outer</p>
            </Fragment>
          ]
        },
        {
          id: 154,
          command: "WL K",
          move: [
            <Fragment>
              <p>Guillotine Kick</p>
              <span>Wavering Light</span>
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              {l}
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "+8",
          counterHit: "+8",
          note: [
            <Fragment>
              <p>TC</p>
            </Fragment>
          ]
        },
        {
          id: 155,
          command: "WL KK",
          move: [
            <Fragment>
              <p>Guillotine Kick</p>
              <span>Wavering Light</span>
              {k}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              {l}
              {m}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <p>TC</p>
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
                  Special Stance(Right Outer)
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
                    tableData={type2BFrameData.rightOuter.map(data => [
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
                    tableData={type2BFrameData.rightOuter.map(data => [
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
                  Special Stance(Left Outer)
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
                    tableData={type2BFrameData.leftOuter.map(data => [
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
                    tableData={type2BFrameData.leftOuter.map(data => [
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
                  Special Stance(Left Inner)
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
                    tableData={type2BFrameData.leftInner.map(data => [
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
                    tableData={type2BFrameData.leftInner.map(data => [
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
                  Special Stance(Right Cross)
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
                    tableData={type2BFrameData.rightCross.map(data => [
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
                    tableData={type2BFrameData.rightCross.map(data => [
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
                  Special Stance(Behind Lower)
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
                    tableData={type2BFrameData.behindLower.map(data => [
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
                    tableData={type2BFrameData.behindLower.map(data => [
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
                  Special Stance(Wavering Light)
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
                    tableData={type2BFrameData.waveringLight.map(data => [
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
                    tableData={type2BFrameData.waveringLight.map(data => [
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
