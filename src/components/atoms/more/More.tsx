import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { IconButton } from "@mui/material";
import customStyle from "../../../Theme";

const More = () => {
  const classes=customStyle();
  return (
    <IconButton
      className={classes.more}
      data-testid="more"
    >
      <MoreHorizIcon></MoreHorizIcon>
    </IconButton>
  );
};

export default More;
