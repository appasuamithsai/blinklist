import React from "react";
import { Typography } from "@mui/material";
import customStyle from "../../../../Theme";
const FinishedBar = () => {
  const classes=customStyle();
  return (
    <Typography
      className={classes.finishedBar}
      data-testid="FinishedBar"
    />
  );
};

export default FinishedBar;
