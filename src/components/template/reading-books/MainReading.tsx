
import CardMui from "../../organism/cards/card-mui/CardMui";

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

const main = (props:Books) => {
    return <div>
        <CardMui handleReadAgain={props.handleReadAgain} handleFinish={props.handleFinish} details={props.currentReading} />
    </div>;
}

export default main;