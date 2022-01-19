import { Box, Card, CardMedia, Grid } from "@mui/material";
import React from "react";
import ReadTime from "../../molecule/read-time/ReadTime";
import AuthorName from "../../atoms/author/AuthorName";
import BookNote from "../../atoms/bookpagedetails/booknote/BookNote";
import FinishReading from "../../atoms/bookpagedetails/bookoptions/finishbutton/FinishReading";
import SendToKindle from "../../atoms/bookpagedetails/bookoptions/kindlebutton/SendToKindle";
import ReadNow from "../../atoms/bookpagedetails/bookoptions/readbutton/ReadNow";
import BookTitle from "../../atoms/bookpagedetails/booktitle/BookTitle";
import bookimage from "../../atoms/assets/bookimage.png";



interface Handle{
  handleFinish:(item:string)=>void;
  btn:boolean;
}



const BookDetailsGrid = (props:Handle) => {
  return (
    <Box sx={{marginTop:'40px'}}>
      <Grid container columnSpacing='125px' justifyContent="center">
        <Grid item>
          <Grid container>
            <Grid item>
              <Grid container direction="column" rowSpacing="24px">
                <Grid item>
                  <BookTitle />
                </Grid>
                <Grid item>
                  <BookNote />
                </Grid>
                <Grid item>
                  <AuthorName authName="By Jim Collins and Bill Lazier" />
                </Grid>
                <Grid item>
                  <ReadTime time="15-minute read" />
                </Grid>

                <Grid item sx={{ marginTop: "83px" }}>
                  <Grid container columnSpacing="32px">
                    <Grid item>
                      <ReadNow />
                    </Grid>
                    <Grid item>
                      <FinishReading btn={props.btn} bookName="Beyond Entrepreneurship 2.0" handleFinish={props.handleFinish} />
                    </Grid>
                    <Grid item>
                      <SendToKindle />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Card>
            <CardMedia
              component="img"
              height="292px"
              width="294.1px"
              image={bookimage}
              alt="Book"
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BookDetailsGrid;
