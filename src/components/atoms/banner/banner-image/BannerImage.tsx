import { Card, CardMedia } from "@mui/material";
import React from "react";
import customStyle from "../../../../Theme";
import bannerimg from "../../assets/bannerimg.png";

const BannerImage = () => {
  const classes=customStyle();
  return (
    <Card
      className={classes.bannerImage}
    >
      <CardMedia  component="img" data-testid="BannerImage" image={bannerimg} alt="main-image" />
    </Card>
  );
};

export default BannerImage;
