import React from "react";
import customStyle from "../../../../Theme";
import { Card, Grid } from "@mui/material";

import AddToLibraryButton from "../../../atoms/addtolibrarybutton/AddToLibraryButton";
import CardHead from "../../../molecule/card/CardHead";
interface Mui {
  details: {
    image: string;
    name: string;
    author: string;
    time: string;
  }[];
}

const CardAdd = (props: Mui) => {
  const classes = customStyle();
  const bookCards = props.details.map((e) => (
    <Grid item xs={4}>
      <Card className={classes.cardStyle}>
        <Grid container direction="column" >
          <Grid item>
            <CardHead image={e.image} bookName={e.name} authorName={e.author} time={e.time}/>
          </Grid>
          <Grid item sx={{ marginTop: "10px" }}>
            <AddToLibraryButton />
          </Grid>
        </Grid>
      </Card>
    </Grid>
  ));

  return (
    <Grid
      columnSpacing="20px"
      rowSpacing="25px"
      container
      sx={{ marginTop: "25px", marginLeft: "440px", width: "1000px" }}
    >
      {bookCards}
    </Grid>
  );
};

export default CardAdd;
