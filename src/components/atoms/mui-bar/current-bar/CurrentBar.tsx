import { Typography } from "@mui/material";
import React from "react";
import customStyle from "../../../../Theme";

const CurrentBar = () => {
  const classes=customStyle();
  return (
    <Typography
      className={classes.currentBar}
      data-testid="CurrentBar"
    />
  );
};

export default CurrentBar;
