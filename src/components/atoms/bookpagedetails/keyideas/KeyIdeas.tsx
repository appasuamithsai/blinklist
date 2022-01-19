import { Typography } from "@mui/material";
import React from "react";
import customStyle from "../../../../Theme";
const KeyIdeas = () => {
  const classes=customStyle();
  return (
    <Typography
      variant="body2"
      className={classes.keyIdeas}
    >
      Get the key ideas from
    </Typography>
  );
};

export default KeyIdeas;
