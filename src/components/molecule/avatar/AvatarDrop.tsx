import { Grid } from "@mui/material";
import React from "react";
import customStyle from "../../../Theme";
import AvatarLogin from "../../atoms/avatar/AvatarLogin";
import NavDown from "../../atoms/nav/nav-down/NavDown";

const AvatarDrop = () => {
  const classes=customStyle();
  return (
    <Grid container data-testid="avatarDrop" className={classes.avatarDrop}>
      <Grid item>
        <AvatarLogin name="A" />
      </Grid>
      <Grid item className={classes.avatarNavDown}>
        <NavDown />
      </Grid>
    </Grid>
  );
};

export default AvatarDrop;
