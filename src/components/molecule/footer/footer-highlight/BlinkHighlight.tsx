import { Grid } from "@mui/material";
import React from "react";
import customStyle from "../../../../Theme";
import BlinkImage from "../../../atoms/blinkimage/BlinkImage";
import FooterHighlight from "../../../atoms/footer/footerhightlight/FooterHighlight";

const BlinkHighlight = () => {
  const classes=customStyle();
  return (
    <Grid
      container
      className={classes.blinkHighlightGridOne}
      direction="row"
      data-testid="blinkHighlight"
    >
      <Grid item className={classes.blinkHighlightGridTwo}>
        <BlinkImage />
      </Grid>
      <Grid className={classes.blinkHighlightGridThree} item>
        <FooterHighlight />
      </Grid>
    </Grid>
  );
};

export default BlinkHighlight;
