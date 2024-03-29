import Card from "@mui/material/Card";
import {  Grid } from "@mui/material";
import ReadAgainButton from "../../../atoms/readagainbutton/ReadAgainButton";
import CurrentBar from "../../../atoms/mui-bar/current-bar/CurrentBar";
import FinishedBar from "../../../atoms/mui-bar/finished-bar/FinishedBar";
import FinishedButton from "../../../atoms/finished-button/FinishedButton";
import CardHead from "../../../molecule/card/CardHead";
import customStyle from "../../../../Theme";
import React from 'react';
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
  const classes=customStyle();
  const bookCards = props.details.map((e) => (
    <Grid item key={e.name}>
      <Card className={classes.cardMuiCard}>
        <Grid container direction="column">
          <Grid item>
            <CardHead image={e.image} bookName={e.name} authorName={e.author} time={e.time} />
          </Grid>
          <Grid item>
            { !e.finished?(<><FinishedButton name={e.name} handleFinish={props.handleFinish} /><CurrentBar /></>):(<> <ReadAgainButton name={e.name} handleReadAgain={props.handleReadAgain} /><FinishedBar /></>)}
          </Grid>
        </Grid>
      </Card>
    </Grid>
  ));

  return (
    <Grid data-testid="CardMui" columnSpacing="32px" className={classes.cardMuiGrid} rowSpacing="32px" container key="name">
      {bookCards}
    </Grid>
  );
};

export default CardMui;
