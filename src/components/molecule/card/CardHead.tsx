import React from "react";
import BookTitle from "../../atoms/booktitle/BookTitle";
import AuthorName from "../../atoms/author/AuthorName";
import ReadTime from "../read-time/ReadTime";
import { CardMedia, Grid } from "@mui/material";
import customStyle from "../../../Theme";

interface Data{
    image:string,
    bookName:string,
    authorName:string,
    time:string;
}


const CardHead = (props:Data) => {
  const classes=customStyle();
  return (
    <>
      <Grid item data-testid="CardHead">
        <CardMedia
          component="img"
          height="292px"
          width="294.1px"
          image={props.image}
          alt="Book"
        />
      </Grid>
      <Grid item>
        <BookTitle bookName={props.bookName} />
      </Grid>

      <Grid
        item
        className={classes.cardGridOne}
      >
        <AuthorName authName={props.authorName} />
      </Grid>
      <Grid
        item
        className={classes.cardGridTwo}
      >
        <ReadTime time={props.time} />
      </Grid>
    </>
  );
};

export default CardHead;
