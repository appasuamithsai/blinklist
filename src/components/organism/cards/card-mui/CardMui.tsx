import Card from "@mui/material/Card";
import { CardMedia, Grid } from "@mui/material";
import BookTitle from "../../../atoms/booktitle/BookTitle";
import AuthorName from "../../../atoms/author/AuthorName";
import ReadTime from "../../../molecule/read-time/ReadTime";
import ReadAgainButton from "../../../atoms/readagainbutton/ReadAgainButton";
import CurrentBar from "../../../atoms/mui-bar/current-bar/CurrentBar";
import FinishedBar from "../../../atoms/mui-bar/finished-bar/FinishedBar";
import FinishedButton from "../../../atoms/finished-button/FinishedButton";
interface Mui {
  details: {
    image: string;
    name: string;
    author: string;
    time: string;
    finished:boolean,
  }[];
  handleReadAgain:(item:string)=>void;
  handleFinish:(item:string)=>void;
}

const CardMui = (props: Mui) => {
  const bookCards = props.details.map((e) => (
    <Grid item key={e.name}>
      <Card sx={{
        borderRadius: "8px",}}>
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
          {/* <Grid item>
            <More />
          </Grid> */}
          <Grid item>
            { !e.finished?(<><FinishedButton name={e.name} handleFinish={props.handleFinish} /><CurrentBar /></>):(<> <ReadAgainButton name={e.name} handleReadAgain={props.handleReadAgain} /><FinishedBar /></>)}
          </Grid>
        </Grid>
      </Card>
    </Grid>
  ));

  return (
    <Grid columnSpacing="32px" sx={{width:'1000px'}} rowSpacing="32px" container key="name">
      {bookCards}
    </Grid>
  );
};

export default CardMui;
