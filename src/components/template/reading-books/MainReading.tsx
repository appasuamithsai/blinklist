
import CardMui from "../../organism/cards/card-mui/CardMui";
import React from 'react';
interface Books {
  currentReading: {
    image: string;
    name: string;
    author: string;
    time: string;
    finished:boolean,
  }[];
  handleReadAgain:(item:string)=>void;
  handleFinish:(item:string)=>void;
}

const MainReading = (props:Books) => {
    return <div data-testid="MainReading">
        <CardMui handleReadAgain={props.handleReadAgain} handleFinish={props.handleFinish} details={props.currentReading} />
    </div>;
}

export default MainReading;