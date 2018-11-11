import React from "react";
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
  }
};
function Terminology(props) {
  const { classes } = props;
  return (
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>Material Dashboard Heading</h4>
        <p className={classes.cardCategoryWhite}>
          Created using Roboto Font Family
        </p>
      </CardHeader>
      <CardBody>
        <div className={classes.typo}>
          <div className={classes.note}>Header 1</div>
          <h1>The Life of Material Dashboard</h1>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Header 2</div>
          <h2>The Life of Material Dashboard</h2>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Header 3</div>
          <h3>The Life of Material Dashboard</h3>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Header 4</div>
          <h4>The Life of Material Dashboard</h4>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Header 5</div>
          <h5>The Life of Material Dashboard</h5>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Header 6</div>
          <h6>The Life of Material Dashboard</h6>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Paragraph</div>
          <p>
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers. I understand culture. I am
            the nucleus. I think that’s a responsibility that I have, to push
            possibilities, to show people, this is the level that things could
            be at.
          </p>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>H</div>
          <Quote text="High Attack." />
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>M</div>
          <Quote text="Middle Attack." />
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>L</div>
          <Quote text="Low Attack." />
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>SM</div>
          <Quote text="Special Middle Attack." />
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>SL</div>
          <Quote text="Special Low Attack." />
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>TH</div>
          <Quote text="Throw." />
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>AT</div>
          <Quote text="Attack Throw." />
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>UA</div>
          <Quote text="Unblockable Attack." />
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>BA</div>
          <Quote text="Brave Attack." />
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>GI</div>
          <Quote text="Guard Impact." />
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>CE</div>
          <Quote text="Critical Edge." />
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>LH</div>
          <Quote text="Lethal Hit." />
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>SC</div>
          <Quote text="Soul Charge." />
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>SG</div>
          <Quote text="Soul Gauge." />
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>RE</div>
          <Quote text="Reversal Edge." />
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>SS</div>
          <Quote text="Special Stance." />
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>A</div>
          <Quote text="Press the horizontal attack button." />
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>[A]</div>
          <Quote text="Hold the horizontal attack button." />
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>B</div>
          <Quote text="Press the vertical attack button." />
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>[B]</div>
          <Quote text="Hold the vertical attack button." />
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>K</div>
          <Quote text="Press the kick button." />
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>[K]</div>
          <Quote text="Hold the kick button." />
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>G</div>
          <Quote text="Press the guard button." />
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>[G]</div>
          <Quote text="Hold the guard button." />
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Arrow</div>
          <Quote text="Input a direction." />
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>[Arrow]</div>
          <Quote text="Hold a direction." />
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>slide</div>
          <Quote text="Slide from one input to the next." />
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Neutral</div>
          <Quote text="Neutral." />
        </div>

        <div className={classes.typo}>
          <div className={classes.note}>Quote</div>
          <Quote
            text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
            author=" Kanye West, Musician"
          />
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Quote</div>
          <Quote
            text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
            author=" Kanye West, Musician"
          />
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>A</div>
          <Muted>
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers...
          </Muted>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Primary Text</div>
          <Primary>
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers...
          </Primary>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Info Text</div>
          <Info>
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers...
          </Info>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Success Text</div>
          <Success>
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers...
          </Success>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Warning Text</div>
          <Warning>
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers...
          </Warning>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Danger Text</div>
          <Danger>
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers...
          </Danger>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Small Tag</div>
          <h2>
            Header with small subtitle
            <br />
            <small>Use "Small" tag for the headers</small>
          </h2>
        </div>
      </CardBody>
    </Card>
  );
}

export default withStyles(style)(Terminology);
