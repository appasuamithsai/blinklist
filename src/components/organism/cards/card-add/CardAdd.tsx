import React from "react";
import customStyle from "../../../../Theme";
import BookTitle from "../../../atoms/booktitle/BookTitle";
import AuthorName from "../../../atoms/author/AuthorName";
import ReadTime from "../../../molecule/read-time/ReadTime";

import {Card, CardMedia, Grid } from "@mui/material";

import AddToLibraryButton from "../../../atoms/addtolibrarybutton/AddToLibraryButton";
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
        <Grid container direction="column">
          <Grid item>
            <CardMedia
              component="img"
              height="292px"
              width="294.1px"
              image={e.image}
              alt="Book"
            />
          </Grid>
          <Grid item>
            <BookTitle bookName={e.name} />
          </Grid>

          <Grid
            item
            sx={{
              margin: " 16px 0px 0px 16px",
            }}
          >
            <AuthorName authName={e.author} />
          </Grid>
          <Grid
            item
            sx={{
              marginLeft: "17.67px",
              marginTop: "17.67px",
            }}
          >
            <ReadTime time={e.time} />
          </Grid>
          <Grid item sx={{marginTop:'10px',}}>
              <AddToLibraryButton  />
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
      sx={{ marginTop: "25px",  marginLeft: "440px", width: "1000px" }}
    >
      {bookCards}
    </Grid>
  );
};

export default CardAdd;
