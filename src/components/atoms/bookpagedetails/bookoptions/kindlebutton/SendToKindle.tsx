import { Button  } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from 'react';
import customStyle from "../../../../../Theme";
const SendToKindle = () => {
  const classes=customStyle();
  return (
      <Button
        endIcon={ <ArrowForwardIcon />}
        variant="text"
        component="button"
        className={classes.sendToKindle}
      >
       Send to Kindle
      </Button>
  );
};  

export default SendToKindle;
