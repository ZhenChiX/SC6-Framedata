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
        },
        {
          id: 94,
          command: "Run K",
          move: [
            <Fragment>
              <p>Urshanabi's Crossing</p>
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
          id: 95,
          command: "A+G",
          move: [
            <Fragment>
              <p>Ereshkigal the Ruthless</p>
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
          id: 96,
          command: "4A+G",
          move: [
            <Fragment>
              <p>Kingu the Sly Lord</p>
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
          id: 97,
          command: "Right Throw",
          move: [
            <Fragment>
              <p>Apsu the Origin</p>
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
          id: 98,
          command: "Left Throw",
          move: [
            <Fragment>
              <p>Ea of the Abys</p>
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
          id: 99,
          command: "Back Throw",
          move: [
            <Fragment>
              <p>Marduk the Tempest</p>
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
          id: 100,
          command: "6A+G",
          move: [
            <Fragment>
              <p>Nergal's Bloodthirst</p>
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
          onBlock: "",
          onHit: "+6",
          counterHit: "+6",
          note: [<Fragment>{th}</Fragment>]
        },
        {
          id: 101,
          command: "6A+G A*2A",
          move: [
            <Fragment>
              <p>Judgement of Nergal</p>
              {d6}
              {a}
              {plus}
              {g}
              {a}
              <span> * </span>
              {d2}
              {a}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {h}
              {m}
            </Fragment>
          ],
          onBlock: "",
          onHit: "+4",
          counterHit: "+4",
          note: [<Fragment>{th}</Fragment>]
        },
        {
          id: 102,
          command: "6A+G B",
          move: [
            <Fragment>
              <p>Roar of Nergal</p>
              {d6}
              {a}
              {plus}
              {g}
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
          onBlock: "",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{th}</Fragment>]
        },
        {
          id: 103,
          command: "6A+G K",
          move: [
            <Fragment>
              <p>Uridmmu's Howl</p>
              {d6}
              {a}
              {plus}
              {g}
              {k}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {h}
              {m}
            </Fragment>
          ],
          onBlock: "",
          onHit: "+4",
          counterHit: "+4",
          note: [<Fragment>{th}</Fragment>]
        },
        {
          id: 104,
          command: "SC A+G",
          move: [
            <Fragment>
              <p>Fatal Gravity</p>
              {sc}
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
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {sc}
              {th}
            </Fragment>
          ]
        }
      ],

      // reversal edge start here
      reversalEdge: [
        {
          id: 105,
          command: "B+G",
          move: [
            <Fragment>
              <p>Ereshkigal's Embrace</p>
              {b}
              {plus}
              {g}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
              {m}
              {m}
            </Fragment>
          ],
          onBlock: "+2",
          onHit: "",
          counterHit: "",
          note: [<Fragment>{re}</Fragment>]
        },

        {
          id: 106,
          command: "[B+G]",
          move: [
            <Fragment>
              <p>Ereshkigal's Embrace(Hold)</p>
              {b_h}
              {plus}
              {g_h}
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
              {re}
              {ba}
            </Fragment>
          ]
        },

        {
          id: 107,
          command: "RE A",
          move: [
            <Fragment>
              <p>Namtar's Execution Spike</p>
              {re}
              {a}
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
              {lh}
              <p>Lethal hit on 2nd phrase</p>
            </Fragment>
          ]
        },

        {
          id: 108,
          command: "RE B",
          move: [
            <Fragment>
              <p>Ugallu's Threat</p>
              {re}
              {b}
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
          note: [
            <Fragment>
              {lh}
              <p>Lethal hit on 2nd phrase</p>
            </Fragment>
          ]
        },
        {
          id: 109,
          command: "RE BB ~ TS",
          move: [
            <Fragment>
              <p>Ugallu's Ingress</p>
              {re}
              {b}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p />
              {m}
              {sm}
            </Fragment>
          ],
          onBlock: "",
          onHit: "",
          counterHit: "",
          note: [
            <Fragment>
              {ss}
              <p>Curses spender</p>
              {lh}
              <p>Lethal hit on 2nd phrase</p>
            </Fragment>
          ]
        },

        {
          id: 110,
          command: "RE K ~ AL",
          move: [
            <Fragment>
              <p>Feral Hound Uridimmu</p>
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
          onHit: "+12",
          counterHit: "+12",
          note: [
            <Fragment>
              {lh}
              <p>Lethal hit on 2nd phrase</p>
              <p>Curses opponent upon hit or guard</p>
            </Fragment>
          ]
        },

        {
          id: 111,
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
          id: 112,
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
          id: 113,
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
          id: 114,
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
          id: 115,
          command: "A+B+K",
          move: [
            <Fragment>
              <p>The Voice from the Abyss</p>
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
            </Fragment>
          ],
          onBlock: "+8",
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {sg}
              {ce}
              {gi}
              {ba}
              <p>GI High/Mid/Low attacks</p>
              <p>Curses opponent upon hit or guard</p>
            </Fragment>
          ]
        },

        {
          id: 116,
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
          id: 117,
          command: "SC 3AKB",
          move: [
            <Fragment>
              <p>Ode to Humbaba</p>
              {sc}
              {d3}
              {a}
              {k}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>16F</p>
              {m}
              {h}
              {m}
            </Fragment>
          ],
          onBlock: "-12",
          onHit: "KND",
          counterHit: "KND",
          note: [<Fragment>{sc}</Fragment>]
        },

        {
          id: 118,
          command: "SC 1AB",
          move: [
            <Fragment>
              <p>Ceremonial Sacrifice</p>
              {sc}
              {d1}
              {a}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>18F</p>
              {l}
              {h}
              {m}
            </Fragment>
          ],
          onBlock: "-2",
          onHit: "+4",
          counterHit: "+4",
          note: [<Fragment>{sc}</Fragment>]
        },
        {
          id: 119,
          command: "SC A+B",
          move: [
            <Fragment>
              <p>Void Nova</p>
              {sc}
              {a}
              {plus}
              {b}
            </Fragment>
          ],
          impact: [
            <Fragment>
              <p>36F</p>
              {sm}
              {sm}
              {sm}
              {sm}
              {sm}
              {sm}
            </Fragment>
          ],
          onBlock: "+6",
          onHit: "+10",
          counterHit: "+10",
          note: [
            <Fragment>
              {sc}
              {ba}
              {lh}
              <p>Triggers against GI</p>
            </Fragment>
          ]
        },
        {
          id: 120,
          command: "SC 2A+B",
          move: [
            <Fragment>
              <p>Temple of Eternity</p>
              {sc}
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
          note: [
            <Fragment>
              {sc}
              {ba}
              {at}
            </Fragment>
          ]
        },

        {
          id: 121,
          command: "SC 22*88BBB",
          move: [
            <Fragment>
              <p>Ishtar's Return</p>
              {sc}
              {d2_h}
              <span> * </span>
              {d8_h}
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
              {h}
            </Fragment>
          ],
          onBlock: "-14",
          onHit: "LNC",
          counterHit: "LNC",
          note: [<Fragment>{sc}</Fragment>]
        },
        {
          id: 122,
          command: "SC A+G",
          move: [
            <Fragment>
              <p>Fatal Gravity</p>
              {sc}
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
          onHit: "KND",
          counterHit: "KND",
          note: [
            <Fragment>
              {sc}
              {th}
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
            text={["TimeStop 1 = TS1", "TimeStop 2 = TS2", "TimeStop 3 = TS3"]}
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
