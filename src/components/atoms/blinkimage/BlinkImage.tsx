import { Card, CardMedia } from "@mui/material";
import React from "react";
import appname from "../assets/appname.png";
import { Link } from "react-router-dom";
import customStyle from "../../../Theme";
const BlinkImage = () => {
  const classes=customStyle();
  return (
      <Link to="/">
        <Card  className={classes.blinkCard}>
          <CardMedia
            component="img"
            height="26px"
            width="124px"
            image={appname}
            alt="appname"
          />
        </Card>
      </Link>
  );
};

export default BlinkImage;
