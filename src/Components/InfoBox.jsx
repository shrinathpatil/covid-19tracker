import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "../Components/CSS/InfoBox.css";
import numeral from "numeral";

const InfoBox = ({ title, cases, total, active, isRed, ...props }) => {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      }`}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          <strong> {title}</strong>
        </Typography>
        <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
          {cases}
        </h2>

        <Typography className="infoBox__total" color="textSecondary">
          {numeral(total).format("0,0")} Total
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoBox;
