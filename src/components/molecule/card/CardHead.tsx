import React from "react";
import BookTitle from "../../atoms/booktitle/BookTitle";
import AuthorName from "../../atoms/author/AuthorName";
import ReadTime from "../read-time/ReadTime";
import { CardMedia, Grid } from "@mui/material";

interface Data{
    image:string,
    bookName:string,
    authorName:string,
    time:string;
}


const CardHead = (props:Data) => {
  return (
    <>
      <Grid item>
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
        sx={{
          margin: " 16px 0px 0px 16px",
        }}
      >
        <AuthorName authName={props.authorName} />
      </Grid>
      <Grid
        item
        sx={{
          marginLeft: "17.67px",
          marginTop: "17.67px",
        }}
      >
        <ReadTime time={props.time} />
      </Grid>
    </>
  );
};

export default CardHead;
