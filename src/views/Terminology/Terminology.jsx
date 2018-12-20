import React, { Fragment } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Quote from "components/About/Quote.jsx";
import Muted from "components/About/Muted.jsx";
import Primary from "components/About/Primary.jsx";
import Info from "components/About/Info.jsx";
import Success from "components/About/Success.jsx";
import Warning from "components/About/Warning.jsx";
import Danger from "components/About/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

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
import notation from "../../assets/img/numeric-notation.jpg";
const style = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },

  imgResize: {
    height: "1.4em",
    width: "1.4em",
    verticalAlign: "middle"
  },

  imgResizeSM: {
    height: "1em",
    width: "1em",
    verticalAlign: "middle",
    border: "1px solid black",
    borderRadius: "3px"
  },
  imgNote: {
    height: "1.4em",
    verticalAlign: "middle"
  },
  img: {
    display: "block",
    margin: "auto",
    maxWidth: "80vw"
  }
};

function Terminology(props) {
  const { classes } = props;
  const { location } = props;
  return (
    <Fragment>
      <h3 className="characters_name">
        {location.pathname.replace(/\//g, "").toUpperCase()}
      </h3>
      <Card>
        <CardHeader color="primary">
          {/* <h4 className={classes.cardTitleWhite}>Welcome back to the stage of histroy</h4> */}
          <p className={classes.cardCategoryWhite}>
            Welcome back to the stage of history
          </p>
        </CardHeader>
        <CardBody>
          <img className={classes.img} src={notation} />

          <div className={classes.typo}>
            <div className={classes.note}>
              <img className={classes.imgResize} src={h} />
            </div>
            <Quote text="High Attack." />
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>
              <img className={classes.imgResize} src={m} />
            </div>
            <Quote text="Middle Attack." />
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>
              <img className={classes.imgResize} src={l} />
            </div>
            <Quote text="Low Attack." />
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>
              <img className={classes.imgNote} src={sm} />
            </div>
            <Quote text="Special Middle Attack." />
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>
              <img className={classes.imgNote} src={sl} />
            </div>
            <Quote text="Special Low Attack." />
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>
              <img className={classes.imgNote} src={th} />
            </div>
            <Quote text="Throw." />
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>
              <img className={classes.imgNote} src={at} />
            </div>
            <Quote text="Attack Throw." />
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>
              <img className={classes.imgNote} src={ua} />
            </div>
            <Quote text="Unblockable Attack." />
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>
              <img className={classes.imgNote} src={ba} />
            </div>
            <Quote text="Brave Attack." />
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>
              <img className={classes.imgNote} src={gi} />
            </div>
            <Quote text="Guard Impact." />
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>
              <img className={classes.imgNote} src={ce} />
            </div>
            <Quote text="Critical Edge." />
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>
              <img className={classes.imgNote} src={lh} />
            </div>
            <Quote text="Lethal Hit." />
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>
              <img className={classes.imgNote} src={sc} />
            </div>
            <Quote text="Soul Charge." />
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>
              <img className={classes.imgNote} src={sg} />
            </div>
            <Quote text="Soul Gauge." />
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>
              <img className={classes.imgNote} src={re} />
            </div>
            <Quote text="Reversal Edge." />
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>
              <img className={classes.imgNote} src={ss} />
            </div>
            <Quote text="Special Stance." />
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>
              <img className={classes.imgResize} src={a} />
            </div>
            <Quote text="Press the horizontal attack button." />
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>
              <img className={classes.imgResize} src={a_h} />
            </div>
            <Quote text="Hold the horizontal attack button." />
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>
              <img className={classes.imgResize} src={b} />
            </div>
            <Quote text="Press the vertical attack button." />
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>
              <img className={classes.imgResize} src={b_h} />
            </div>
            <Quote text="Hold the vertical attack button." />
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>
              <img className={classes.imgResize} src={k} />
            </div>
            <Quote text="Press the kick button." />
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>
              <img className={classes.imgResize} src={k_h} />
            </div>
            <Quote text="Hold the kick button." />
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>
              <img className={classes.imgResize} src={g} />
            </div>
            <Quote text="Press the guard button." />
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>
              <img className={classes.imgResize} src={g_h} />
            </div>
            <Quote text="Hold the guard button." />
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>
              <img className={classes.imgResize} src={d4} />
            </div>
            <Quote text="Input a direction." />
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>
              <img className={classes.imgResize} src={d4_h} />
            </div>
            <Quote text="Hold a direction." />
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>
              <img className={classes.imgResizeSM} src={a} />
              <img className={classes.imgResize} src={b} />
            </div>
            <Quote text="Slide from one input to the next." />
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>
              <img className={classes.imgResize} src={d5} />
            </div>
            <Quote text="Neutral." />
          </div>
        </CardBody>
      </Card>
    </Fragment>
  );
}

export default withStyles(style)(Terminology);
