import { Typography } from "@mui/material";
import React from "react";
import customStyle from "../../../../Theme";
const BannerOne = () => {
  const classes=customStyle();
  return (
    <Typography
      variant="h1"
      className={classes.bannerOne}
      width="319px"
    >
      Explore Books on entrepreneurship
    </Typography>
  );
};

export default BannerOne;
