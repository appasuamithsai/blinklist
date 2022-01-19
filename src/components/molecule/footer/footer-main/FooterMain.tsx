import { Grid } from "@mui/material";
import React from "react";
import BlinkHighlight from "../../footer/footer-highlight/BlinkHighlight";
import FooterCopyRight from "../../../atoms/footer/copyright/FooterCopyRight";
import FooterNavListOne from "../footer-navlist/FooterNavListOne";
import FooterNavListThree from "../footer-navlist/FooterNavListThree";
import FooterNavListTwo from "../footer-navlist/FooterNavListTwo";
import customStyle from "../../../../Theme";

const FooterMain = () => {
  const classes=customStyle();
  return (
    <Grid
      container
      direction="column"
     className={classes.footerMainGridOne}
     data-testid="FooterMain"
     >
      <Grid item>
        <Grid
          container
          columnSpacing="32px"
          justifyContent="center"
          className={classes.footerMainGridTwo}

        >
          <Grid
            item
            className={classes.footerMainGridThree}
          >
            <BlinkHighlight />
          </Grid>
          <Grid item>
            <FooterNavListOne />
          </Grid>
          <Grid item>
            <FooterNavListTwo />
          </Grid>
          <Grid item>
            <FooterNavListThree />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        justifyContent="center"
        className={classes.footerMainGridFour}
      >
        <FooterCopyRight />
      </Grid>
    </Grid>
  );
};

export default FooterMain;
