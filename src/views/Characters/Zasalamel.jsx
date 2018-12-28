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

class Zasalamel extends Component {
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

    const zasalamelFrameData = {
      // verticalAttacks start here

      verticalAttacks: [
        {
          id: 1,
          command: "A",
          move: [
            <Fragment>
              <p>Rending Blade of Shamash</p>
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
          onHit: "0",
          counterHit: "0",
          note: [<Fragment />]
        },

        {
          id: 2,
          command: "AA",
          move: [
            <Fragment>
              <p>Rending Blade of Shamash</p>
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
          onBlock: "-6",
          onHit: "+2",
          counterHit: "+2",
          note: [<Fragment />]
        },

        {
          id: 3,
          command: "AAA",
          move: [
            <Fragment>
              <p>Rending Blade of Shamash</p>
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
          onBlock: "-8",
          onHit: "+10",
          counterHit: "+10",
          note: [<Fragment />]
        },

        {
          id: 4,
          command: "a6",
          move: [
            <Fragment>
              <p>Bashum's Whisper</p>
              {aSM}
              {d6}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "0",
          counterHit: "+6",
          note: [<Fragment />]
        },

        {
          id: 5,
          command: "6A",
          move: [
            <Fragment>
              <p>Damnation of Ereshkigal</p>
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
          onBlock: "-16",
          onHit: "-4",
          counterHit: "-4",
          note: [<Fragment />]
        },
        {
          id: 6,
          command: "6AA",
          move: [
            <Fragment>
              <p>Damnation of Ereshkigal</p>
              {d6}
              {a}
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
          onBlock: "+6",
          onHit: "+18",
          counterHit: "+18",
          note: [
            <Fragment>
              <p>Opponent BT on hit</p>
            </Fragment>
          ]
        },
        {
          id: 7,
          command: "6AB",
          move: [
            <Fragment>
              <p>Ereshigal's Snare</p>
              {d6}
              {a}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {h}
              {m}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+10",
          counterHit: "+14",
          note: [
            <Fragment>
              {lh}
              <p>Triggers when 1st whiffed and 2nd hits</p>
            </Fragment>
          ]
        },
        {
          id: 8,
          command: "3A",
          move: [
            <Fragment>
              <p>Hook of Nantar</p>
              {d3}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-20",
          onHit: "-4",
          counterHit: "-4",
          note: [<Fragment />]
        },
        {
          id: 9,
          command: "3AA",
          move: [
            <Fragment>
              <p>Hook of Nantar</p>
              {d3}
              {a}
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
          onBlock: "-16",
          onHit: "+2",
          counterHit: "KND",
          note: [<Fragment />]
        },
        {
          id: 10,
          command: "3A[B]",
          move: [
            <Fragment>
              <p>Hook of Nantar</p>
              {d3}
              {a}
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
          onBlock: "0",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment />]
        },
        {
          id: 11,
          command: "3A[B]",
          move: [
            <Fragment>
              <p>Hook of Nantar</p>
              {d3}
              {a}
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
          onBlock: "0",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment />]
        },
        {
          id: 12,
          command: "3AK",
          move: [
            <Fragment>
              <p>Humbaba's Flame</p>
              {d3}
              {a}
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
          onBlock: "-10",
          onHit: "+6",
          counterHit: "+6",
          note: [<Fragment />]
        },

        {
          id: 13,
          command: "2A",
          move: [
            <Fragment>
              <p>Mutter of Bashm</p>
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
          onHit: "+4",
          counterHit: "+4",
          note: "TC / ~FC"
        },
        {
          id: 14,
          command: "1A",
          move: [
            <Fragment>
              <p>Bite of the Kululiu</p>
              {d1}
              {a}
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
          note: "TC / ~FC"
        },
        {
          id: 15,
          command: "4A",
          move: [
            <Fragment>
              <p>Habrat's Sapara</p>
              {d4}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {h}
              {m}
            </Fragment>
          ],
          onBlock: "-2",
          onHit: "+4",
          counterHit: "+4",
          note: [
            <Fragment>
              <p>Jails</p>
            </Fragment>
          ]
        },

        {
          id: 16,
          command: "FC A",
          move: [
            <Fragment>
              <p>Mutter of Bashm</p>
              <span>FC</span>
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
          onHit: "+4",
          counterHit: "+4",
          note: "TC / ~FC"
        },
        {
          id: 17,
          command: "WR A",
          move: [
            <Fragment>
              <p>Great Scythe of Shamash</p>
              <span>WR</span>
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
          onHit: "+4",
          counterHit: "+4",
          note: [
            <Fragment>
              <p>TC[1~7]</p>
            </Fragment>
          ]
        },

        {
          id: 18,
          command: "7*8*9A",
          move: [
            <Fragment>
              <p>Shamash the Just </p>
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
              <p>38F</p>
              {l}
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "0",
          counterHit: "0",
          note: [
            <Fragment>
              <p>TJ / ~FC</p>
            </Fragment>
          ]
        },
        {
          id: 19,
          command: "BT A",
          move: [
            <Fragment>
              <p>Sin's Glance</p>
              <span>BT</span>
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
          onHit: "+10",
          counterHit: "+10",
          note: "Opponent BT on hit"
        },
        {
          id: 20,
          command: "BT 2A",
          move: [
            <Fragment>
              <p>Sin's Glare</p>
              <span>BT</span>
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
          onBlock: "-6",
          onHit: "+4",
          counterHit: "+4",
          note: "TC / ~FC"
        }
      ],

      // horizontalAttacks start here

      horizontalAttacks: [
        {
          id: 21,
          command: "B",
          move: [
            <Fragment>
              <p>Mighty Hammer of Ea</p>
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
          onHit: "0",
          counterHit: "0",
          note: [<Fragment />]
        },
        {
          id: 22,
          command: "BB",
          move: [
            <Fragment>
              <p>Mighty Hammer of Ea</p>
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
          onHit: "-2",
          counterHit: "-2",
          note: [<Fragment />]
        },
        {
          id: 23,
          command: "BBB",
          move: [
            <Fragment>
              <p>Mighty Hammer of Ea</p>
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
          onBlock: "-8",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment />]
        },
        {
          id: 24,
          command: "bA",
          move: [
            <Fragment>
              <p>Nergal's Anguish</p>
              {bSM}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              {h}
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "0",
          counterHit: "0",
          note: [
            <Fragment>
              <p>TS / Opponent BT on hit</p>
            </Fragment>
          ]
        },
        {
          id: 25,
          command: "bK",
          move: [
            <Fragment>
              <p>Adoration of Gilgamesh</p>
              {bSM}
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
          onBlock: "-14",
          onHit: "0",
          counterHit: "0",
          note: [<Fragment />]
        },
        {
          id: 26,
          command: "b:K",
          move: [
            <Fragment>
              <p>Adoration of Gilgamesh(Fast Input)</p>
              {bSM}
              <span> : </span>
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
          onBlock: "-14",
          onHit: "+6",
          counterHit: "+6",
          note: [
            <Fragment>
              <p />
            </Fragment>
          ]
        },

        {
          id: 27,
          command: "6B",
          move: [
            <Fragment>
              <p>Nergal's Talon</p>
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
          onBlock: "-16",
          onHit: "-4",
          counterHit: "-4",
          note: [<Fragment />]
        },

        {
          id: 28,
          command: "6BB",
          move: [
            <Fragment>
              <p>Nergal's Talon</p>
              {d6}
              {b}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {m}
              {sl}
            </Fragment>
          ],
          onBlock: "-6",
          onHit: "+4",
          counterHit: "+4",
          note: [
            <Fragment>
              {lh}
              <p>Triggers 2nd hit lands on tip range</p>
              <p>Jails</p>
            </Fragment>
          ]
        },
        {
          id: 29,
          command: "6BK",
          move: [
            <Fragment>
              <p>Nergal's Mockery</p>
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
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "+10",
          counterHit: "+10",
          note: [
            <Fragment>
              <p>+16 in a stun combo</p>
            </Fragment>
          ]
        },

        {
          id: 30,
          command: "3B",
          move: [
            <Fragment>
              <p>Paean to Ishtar</p>
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
          onBlock: "-14",
          onHit: "LNC",
          counterHit: "LNC",
          note: [<Fragment />]
        },

        {
          id: 31,
          command: "2B",
          move: [
            <Fragment>
              <p>Ea the Grand Ruler</p>
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
          note: [
            <Fragment>
              <p>TC</p>
            </Fragment>
          ]
        },

        {
          id: 32,
          command: "1B",
          move: [
            <Fragment>
              <p>Asushunamir's Spear</p>
              {d1}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {l}
            </Fragment>
          ],
          onBlock: "-20",
          onHit: "-4",
          counterHit: "STN",
          note: [<Fragment />]
        },
        {
          id: 33,
          command: "1BB ~ TS",
          move: [
            <Fragment>
              <p>Lilitu's Ingress</p>
              {d1}
              {b}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {l}
              {sm}
            </Fragment>
          ],
          onBlock: "-10/0/+10",
          onHit: "+6/+16/+26",
          counterHit: "+6/+16/+26",
          note: [
            <Fragment>
              {ss}
              <p>Each Orb adds 10F advantages</p>
            </Fragment>
          ]
        },

        {
          id: 34,
          command: "4B",
          move: [
            <Fragment>
              <p>Sacred Rite of Ishtar</p>
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
          onHit: "0",
          counterHit: "0",
          note: [<Fragment />]
        },
        {
          id: 35,
          command: "4B:B",
          move: [
            <Fragment>
              <p>Sacred Rite of Ishtar(Just Frame)</p>
              {d4}
              {b}
              <span> : </span>
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {m}
              {m}
              {h}
            </Fragment>
          ],
          onBlock: "",
          onHit: "LNC",
          counterHit: "LNC",
          note: [<Fragment />]
        },
        {
          id: 36,
          command: "46B",
          move: [
            <Fragment>
              <p>Belit-Sheri's Cleaver</p>
              {d4}
              {d6}
              {b}
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
              <p>TC</p>
            </Fragment>
          ]
        },
        {
          id: 37,
          command: "46B(JF)",
          move: [
            <Fragment>
              <p>Belit-Sheri's Cleaver(Just Frame)</p>
              {d4}
              {d6}
              <span> : </span>
              {b}
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
              <p>TC</p>
              <p>Hits Grounded</p>
            </Fragment>
          ]
        },
        {
          id: 38,
          command: "46BB ~ TS",
          move: [
            <Fragment>
              <p>Belit-Sheri's Ingress</p>
              {d4}
              {d6}
              {b}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {m}
              {sm}
            </Fragment>
          ],
          onBlock: "-6/+6/+16",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              <p>TC</p>
              <p>Each Orb adds 10F advantages</p>
            </Fragment>
          ]
        },
        {
          id: 39,
          command: "FC B",
          move: [
            <Fragment>
              <p>Ea the Grand Ruler</p>
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
          id: 40,
          command: "WR B",
          move: [
            <Fragment>
              <p>Oda to Mamnenaum</p>
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
          onBlock: "-12",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment />]
        },

        {
          id: 41,
          command: "7*8*9B",
          move: [
            <Fragment>
              <p>Anu the Radiant</p>
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
              <p>28F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+4",
          counterHit: "+4",
          note: [
            <Fragment>
              <p>TJ</p>
            </Fragment>
          ]
        },
        {
          id: 42,
          command: "BT B",
          move: [
            <Fragment>
              <p>Nergals's Grapple</p>
              <span>BT</span>
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
          onHit: "+4",
          counterHit: "+4",
          note: ""
        },
        {
          id: 43,
          command: "BT BB",
          move: [
            <Fragment>
              <p>Nergals's Grapple</p>
              <span>BT</span>
              {b}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>24F</p>
              {m}
              {sl}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "KND",
          counterHit: "KND",
          note: "Jails"
        },
        {
          id: 44,
          command: "BT 2B",
          move: [
            <Fragment>
              <p>Ea's Glare</p>
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
          note: "TC"
        }
      ],
      // Kicks start here
      kicks: [
        {
          id: 45,
          command: "K",
          move: [
            <Fragment>
              <p>Will of Gilgamesh</p>
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              {h}
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "-2",
          counterHit: "-2",
          note: ""
        },
        {
          id: 46,
          command: "KK",
          move: [
            <Fragment>
              <p>Will of Gilgamesh</p>
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
          onBlock: "-16",
          onHit: "0",
          counterHit: "0",
          note: "Force opponent crouch on hit"
        },
        {
          id: 47,
          command: "k6",
          move: [
            <Fragment>
              <p>Triumph of Gilamesh</p>
              {kSM}
              {d6}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {h}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },
        {
          id: 48,
          command: "6K",
          move: [
            <Fragment>
              <p>Hound of Tiamat</p>
              {d6}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              {h}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "+4",
          counterHit: "KND",
          note: [
            <Fragment>
              {lh}
              <p>Trigger upon CH light attacks</p>
              {ss}
              <p>Add one Curse on hit</p>
            </Fragment>
          ]
        },

        {
          id: 49,
          command: "3K",
          move: [
            <Fragment>
              <p>Command of Tiamat</p>
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
          onBlock: "-8",
          onHit: "+4",
          counterHit: "+4",
          note: [
            <Fragment>
              {ss}
              <p>Add one Curse on hit</p>
            </Fragment>
          ]
        },
        {
          id: 50,
          command: "2K",
          move: [
            <Fragment>
              <p>Shamhat's Allure</p>
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
          note: " TC / ~FC"
        },

        {
          id: 51,
          command: "1K",
          move: [
            <Fragment>
              <p>Endidu's Frenzy</p>
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
          onBlock: "-16",
          onHit: "-4",
          counterHit: "KND",
          note: "TC / ~FC"
        },

        {
          id: 52,
          command: "4K",
          move: [
            <Fragment>
              <p>Lament for Enkidu</p>
              {d4}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "0",
          counterHit: "0",
          note: [
            <Fragment>
              {lh}
              <p>Trigger upon CH heavy attacks</p>
            </Fragment>
          ]
        },

        {
          id: 53,
          command: "FC K",
          move: [
            <Fragment>
              <p>Shamhat's Allure</p>
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
          id: 54,
          command: "FC 3K",
          move: [
            <Fragment>
              <p>Devotion to Ninsun</p>
              <span>FC</span>
              {d3}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>14F</p>
              {h}
            </Fragment>
          ],
          onBlock: "-2",
          onHit: "+12",
          counterHit: "+12",
          note: "TC"
        },

        {
          id: 55,
          command: "WR K",
          move: [
            <Fragment>
              <p>Enlil's Enmity</p>
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
          onBlock: "-10",
          onHit: "0",
          counterHit: "0",
          note: [<Fragment />]
        },
        {
          id: 56,
          command: "WR KB",
          move: [
            <Fragment>
              <p>Enlil's Enmity</p>
              <span>WR</span>
              {k}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>12F</p>
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "0",
          counterHit: "0",
          note: [
            <Fragment>
              <p>Jails</p>
            </Fragment>
          ]
        },

        {
          id: 57,
          command: "7*8*9K",
          move: [
            <Fragment>
              <p>Enkidu The Valiant</p>
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
              {h}
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "-2/KND",
          counterHit: "-2/KND",
          note: [<Fragment />]
        },

        {
          id: 58,
          command: "BT K",
          move: [
            <Fragment>
              <p>Enkidu's Glance</p>
              <span>BT</span>
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "KND",
          counterHit: "KND",
          note: ""
        },

        {
          id: 59,
          command: "BT 2K",
          move: [
            <Fragment>
              <p>Shamhat's Glare</p>
              <span>BT</span>
              {d2}
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
          note: "TC[19~ ]"
        }
      ],

      // dual button attackts start here
      dualButtonAttacks: [
        {
          id: 60,
          command: "A+B",
          move: [
            <Fragment>
              <p>Anshar's Halberd</p>
              {a}
              {plus}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>36F</p>
              {h}
            </Fragment>
          ],
          onBlock: "+6",
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
          id: 61,
          command: "6A+B",
          move: [
            <Fragment>
              <p>Marduk's Thunder</p>
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
              {m}
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "-4",
          counterHit: "+4",
          note: [<Fragment />]
        },
        {
          id: 62,
          command: "6A+BB",
          move: [
            <Fragment>
              <p>Marduk's Thunder</p>
              {d6}
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
          onBlock: "-8",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment />]
        },
        {
          id: 63,
          command: "6A+B[B]",
          move: [
            <Fragment>
              <p>Marduk's Thunder(Hold)</p>
              {d6}
              {a}
              {plus}
              {b}
              {b_h}
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
          onBlock: "+4",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{ba}</Fragment>]
        },
        {
          id: 64,
          command: "2A+B",
          move: [
            <Fragment>
              <p>Anu's Justice</p>
              {d2}
              {a}
              {plus}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>30F</p>
              {m}
            </Fragment>
          ],
          onBlock: "+2",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{ba}</Fragment>]
        },

        {
          id: 65,
          command: "4A+B",
          move: [
            <Fragment>
              <p>Tiamat's Frenzy</p>
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
          onBlock: "-14",
          onHit: "+2",
          counterHit: "+2",
          note: [<Fragment />]
        },

        {
          id: 66,
          command: "8A+B",
          move: [
            <Fragment>
              <p>Offering to Kishar</p>
              {d8}
              {a}
              {plus}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>36F</p>
              {h}
            </Fragment>
          ],
          onBlock: "",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {th}
              <p>Against midair opponent</p>
            </Fragment>
          ]
        },

        {
          id: 67,
          command: "B+K",
          move: [
            <Fragment>
              <p>Tiamat's Quaking Blow</p>
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
          onBlock: "+12",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              {ba}
              {ss}
              <p>Add two curses on fully charged</p>
            </Fragment>
          ]
        },
        {
          id: 68,
          command: "B+KK",
          move: [
            <Fragment>
              <p>Tiamat's Quaking Blow</p>
              {b}
              {plus}
              {k}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
            </Fragment>
          ],
          onBlock: "+4/+8",
          onHit: "+8/KND",
          counterHit: "+8/KND",
          note: [
            <Fragment>
              {ba}
              {ss}
              <p>Add two curses on fully charged</p>
            </Fragment>
          ]
        },
        {
          id: 69,
          command: "6B+K",
          move: [
            <Fragment>
              <p>Curse of Nergal</p>
              {d6}
              {b}
              {plus}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+4",
          counterHit: "+4",
          note: [
            <Fragment>
              <p>TC[12~22]</p>
            </Fragment>
          ]
        },
        {
          id: 70,
          command: "6B+KA",
          move: [
            <Fragment>
              <p>Curse of Nergal</p>
              {d6}
              {b}
              {plus}
              {k}
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
          onBlock: "-8",
          onHit: "+12",
          counterHit: "+12",
          note: [
            <Fragment>
              <p>TC[12~22]</p>
            </Fragment>
          ]
        },
        {
          id: 71,
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
              <p>16F</p>
              {l}
              {m}
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "+10",
          counterHit: "+10",
          note: [<Fragment />]
        },

        {
          id: 72,
          command: "4B+K",
          move: [
            <Fragment>
              <p>Confession to Lahamu</p>
              {d4}
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
            </Fragment>
          ],
          onBlock: "-16",
          onHit: "LNC",
          counterHit: "LNC",
          note: [<Fragment />]
        },

        {
          id: 73,
          command: "8B+K",
          move: [
            <Fragment>
              <p>Confession to Lahamu</p>
              {d8}
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
          onBlock: "-22",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              <p>TJ</p>
            </Fragment>
          ]
        },
        {
          id: 74,
          command: "WR B+K",
          move: [
            <Fragment>
              <p>Enlil's Admonition</p>
              <span>WR</span>
              {b}
              {plus}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-34",
          onHit: "-22",
          counterHit: "-22",
          note: [<Fragment />]
        },
        {
          id: 75,
          command: "BT B+K",
          move: [
            <Fragment>
              <p>Adad's Great Shears</p>
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
              {m}
            </Fragment>
          ],
          onBlock: "+4/+12",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              {ba}
              <p>Can be held</p>
            </Fragment>
          ]
        }
      ],

      // 8way-run attacks start here
      eightwayrunAttack: [
        {
          id: 76,
          command: "33*66*99A",
          move: [
            <Fragment>
              <p>Judgment of Shamash</p>
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
              {m}
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "+12",
          counterHit: "+12",
          note: "Jails"
        },
        {
          id: 77,
          command: "33*66*99[A]",
          move: [
            <Fragment>
              <p>Judgment of Shamash(Hold)</p>
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
          onBlock: "-4",
          onHit: "+12",
          counterHit: "+12",
          note: "Jails"
        },

        {
          id: 78,
          command: "22*88A",
          move: [
            <Fragment>
              <p>Talon of Zu</p>
              {d2_h}
              <span> * </span>
              {d8_h}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>34F</p>
              {l}
              {l}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+6",
          counterHit: "+6",
          note: [<Fragment />]
        },

        {
          id: 79,
          command: "11*44*77A",
          move: [
            <Fragment>
              <p>Sickle of Sin</p>
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
          onBlock: "-16",
          onHit: "+6",
          counterHit: "+6",
          note: ""
        },

        {
          id: 80,
          command: "33*66*99B",
          move: [
            <Fragment>
              <p>Ishtar's Mercy</p>
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
              <p>18F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+10",
          counterHit: "LNC",
          note: [<Fragment />]
        },

        {
          id: 81,
          command: "22*88B",
          move: [
            <Fragment>
              <p>Prayer to Ishtar</p>
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
          onBlock: "-16",
          onHit: "LNC",
          counterHit: "LNC",
          note: [<Fragment />]
        },

        {
          id: 82,
          command: "11*77B",
          move: [
            <Fragment>
              <p>Lilitu's Needle</p>
              {d1_h}
              <span> * </span>
              {d7_h}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>20F</p>
              {l}
            </Fragment>
          ],
          onBlock: "-20",
          onHit: "-4",
          counterHit: "-4",
          note: [<Fragment />]
        },

        {
          id: 83,
          command: "44B",
          move: [
            <Fragment>
              <p>Ea's Judgment</p>
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
          onBlock: "-4",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment />]
        },
        {
          id: 84,
          command: "44[B]",
          move: [
            <Fragment>
              <p>Ea's Judgment(Hold)</p>
              {d4_h}
              {b_h}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>38F</p>
              {m}
            </Fragment>
          ],
          onBlock: "0",
          onHit: "STN",
          counterHit: "STN",
          note: [
            <Fragment>
              {lh}
              <p>Triggers against guard crush opponent</p>
            </Fragment>
          ]
        },
        {
          id: 85,
          command: "33*66*99K",
          move: [
            <Fragment>
              <p>Enkidu's Valor</p>
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
              {h}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "+10",
          counterHit: "+10",
          note: [<Fragment />]
        },
        {
          id: 85,
          command: "33*66*99kB",
          move: [
            <Fragment>
              <p>Enkidu's Bravery</p>
              {d3_h}
              <span> * </span>
              {d6_h}
              <span> * </span>
              {d9_h}
              {kSM}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {h}
              {m}
            </Fragment>
          ],
          onBlock: "-4",
          onHit: "+4",
          counterHit: "+4",
          note: [<Fragment />]
        },

        {
          id: 86,
          command: "22*88K",
          move: [
            <Fragment>
              <p>The Ark of Utnapishtim</p>
              {d2_h}
              <span> * </span>
              {d8_h}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>22F</p>
              {h}
            </Fragment>
          ],
          onBlock: "0",
          onHit: "+4",
          counterHit: "+4",
          note: ""
        },
        {
          id: 87,
          command: "22*88KK",
          move: [
            <Fragment>
              <p>The Ark of Utnapishtim</p>
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
              {h}
              {h}
            </Fragment>
          ],
          onBlock: "-2",
          onHit: "KND",
          counterHit: "KND",
          note: " ~ FC"
        },

        {
          id: 88,
          command: "11*44*77K",
          move: [
            <Fragment>
              <p>Enkidu's Karma</p>
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
              <p>24F</p>
              {h}
            </Fragment>
          ],
          onBlock: "-8",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {gi}
              <p>GI Low attacks</p>
            </Fragment>
          ]
        },
        {
          id: 89,
          command: "33*66*99 A+B",
          move: [
            <Fragment>
              <p>Wrath of Tiamat</p>
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
              <p>22F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-24",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment />]
        },
        {
          id: 90,
          command: "33*66*99 A+BB ~ TS",
          move: [
            <Fragment>
              <p>Tiamat's Ingress</p>
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
              <p>22F</p>
              {m}
              {sm}
            </Fragment>
          ],
          onBlock: "",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {ss}
              <p>Curse spender</p>
            </Fragment>
          ]
        },
        {
          id: 91,
          command: "11*44*77 A+B",
          move: [
            <Fragment>
              <p>Prayer to Belit-ili</p>
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
              <p>20F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              {lh}
              <p>Triggers on moving back opponent</p>
            </Fragment>
          ]
        },
        {
          id: 92,
          command: "33*66*99B+K",
          move: [
            <Fragment>
              <p>Blessing for Lahamu</p>
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
              <p>28F</p>
              {m}
            </Fragment>
          ],
          onBlock: "-10",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              {lh}
              <p>Triggers upon post GI</p>
            </Fragment>
          ]
        },

        {
          id: 93,
          command: "11*44*77B+K",
          move: [
            <Fragment>
              <p>Tiamat's Rampage</p>
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
              <p>54F</p>
              {m}
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "LNC",
          onHit: "LNC",
          counterHit: "LNC",
          note: [
            <Fragment>
              {ua}
              <p>Cancel with G</p>
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
          onBlock: "-8",
          onHit: "+10",
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
                    tableData={zasalamelFrameData.verticalAttacks.map(data => [
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
                    tableData={zasalamelFrameData.verticalAttacks.map(data => [
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
                    tableData={zasalamelFrameData.horizontalAttacks.map(
                      data => [
                        data.command,
                        data.impact,
                        data.onBlock,
                        data.onHit,
                        data.counterHit,
                        data.note
                      ]
                    )}
                  />
                ) : (
                  <Table
                    tableHeaderColor="primary"
                    tableHead={this.state.tableHeadData}
                    tableData={zasalamelFrameData.horizontalAttacks.map(
                      data => [
                        data.move,
                        data.impact,
                        data.onBlock,
                        data.onHit,
                        data.counterHit,
                        data.note
                      ]
                    )}
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
                    tableData={zasalamelFrameData.kicks.map(data => [
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
                    tableData={zasalamelFrameData.kicks.map(data => [
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
                    tableData={zasalamelFrameData.dualButtonAttacks.map(
                      data => [
                        data.command,
                        data.impact,
                        data.onBlock,
                        data.onHit,
                        data.counterHit,
                        data.note
                      ]
                    )}
                  />
                ) : (
                  <Table
                    tableHeaderColor="primary"
                    tableHead={this.state.tableHeadData}
                    tableData={zasalamelFrameData.dualButtonAttacks.map(
                      data => [
                        data.move,
                        data.impact,
                        data.onBlock,
                        data.onHit,
                        data.counterHit,
                        data.note
                      ]
                    )}
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
                    tableData={zasalamelFrameData.aggressionShift.map(data => [
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
                    tableData={zasalamelFrameData.aggressionShift.map(data => [
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
                    tableData={zasalamelFrameData.aerialLeap.map(data => [
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
                    tableData={zasalamelFrameData.aerialLeap.map(data => [
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
                    tableData={zasalamelFrameData.anglerStance.map(data => [
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
                    tableData={zasalamelFrameData.anglerStance.map(data => [
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
                    tableData={zasalamelFrameData.eightwayrunAttack.map(
                      data => [
                        data.command,
                        data.impact,
                        data.onBlock,
                        data.onHit,
                        data.counterHit,
                        data.note
                      ]
                    )}
                  />
                ) : (
                  <Table
                    tableHeaderColor="primary"
                    tableHead={this.state.tableHeadData}
                    tableData={zasalamelFrameData.eightwayrunAttack.map(
                      data => [
                        data.move,
                        data.impact,
                        data.onBlock,
                        data.onHit,
                        data.counterHit,
                        data.note
                      ]
                    )}
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
                    tableData={zasalamelFrameData.throws.map(data => [
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
                    tableData={zasalamelFrameData.throws.map(data => [
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
                    tableData={zasalamelFrameData.reversalEdge.map(data => [
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
                    tableData={zasalamelFrameData.reversalEdge.map(data => [
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
                    tableData={zasalamelFrameData.gaugeAttacks.map(data => [
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
                    tableData={zasalamelFrameData.gaugeAttacks.map(data => [
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
export default withStyles(styles)(Zasalamel);
