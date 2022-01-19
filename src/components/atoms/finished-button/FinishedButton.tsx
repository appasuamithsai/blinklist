import { Button } from '@mui/material';
import React from 'react';
import customStyle from '../../../Theme';

interface Handle{
    handleFinish:(item:string)=>void;
    name:string,
}


const FinishedButton = (props:Handle) => {
    const temp = customStyle();
    return (
        <Button
        variant="text"
        className={temp.readAgain}
        onClick={()=>{props.handleFinish(props.name)}}
        component="button"
      >
        Finished
      </Button>
    );
}
export default FinishedButton;