import React from "react";
import { Typography } from "@mui/material";
import customStyle from "../../../../../Theme";
interface NavHeadName{
    name:string
}
const NavHead = (props:NavHeadName) => {
  const classes=customStyle();
  return (
    <>
      <Typography
        variant="body1"
        className={classes.navHead}
      >
        {props.name}
      </Typography>
    </>
  );
};

export default NavHead;
