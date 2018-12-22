import React, { Fragment } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components

import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Card from "components/Card/Card.jsx";
import { CardContent } from "@material-ui/core";
import GridItem from "components/Grid/GridItem.jsx";

function Popup(props) {
  const { text } = props;
  //   console.log(props);
  return (
    <Fragment>
      <GridItem xs={10} sm={6} md={5} lg={4}>
        {/* <GridItem> */}
        <Card>
          <CardContent>
            {text.map((data, key) => {
              return <p key={key}>{data}</p>;
            })}
          </CardContent>
        </Card>
      </GridItem>
    </Fragment>
  );
}

export default Popup;
