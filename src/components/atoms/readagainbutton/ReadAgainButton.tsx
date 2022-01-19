import { Button } from '@mui/material';
import React from 'react';
import customStyle from '../../../Theme';

interface Handle{
    handleReadAgain:(item:string)=>void;
    name:string,
}


const ReadAgainButton = (props:Handle) => {
    const temp = customStyle();
    return (
        <Button
        variant="text"
        className={temp.readAgain}
        onClick={()=>{props.handleReadAgain(props.name)}}
      >
        Read Again
      </Button>
    );
}


export default ReadAgainButton;