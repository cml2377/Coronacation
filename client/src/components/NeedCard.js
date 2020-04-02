import React, { Component, useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

class NeedCard extends Component {
  render() {
    const needProps = this.props.need;
    const useStyles = {};
    return (
      <div>
        <Card id="cardBody">
          <CardContent>
            {/* Need a checkbox to show completion status */}
            <Typography id="cardTitle" color="textSecondary" gutterBottom>
              Zipcode: {needProps.zipcode}
            </Typography>
            <Typography id="cardList" component="h2">
              {needProps.list}
            </Typography>
            <Typography id="cardUserInfo" component="p">
              Email: {needProps.email}
              <br />
              Date Posted: {needProps.day}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default NeedCard;
