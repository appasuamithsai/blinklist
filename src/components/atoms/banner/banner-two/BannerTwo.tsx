import { Typography } from "@mui/material";
import React from "react";
import customStyle from "../../../../Theme";
const BannerTwo = () => {
  const classes=customStyle();
  return (
    <Typography
      variant="subtitle2"
      width="461px"
      className={classes.bannerTwo}
      data-testid="BannerTwo"
    >
     Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start.
    </Typography>
  );
};

export default BannerTwo;
