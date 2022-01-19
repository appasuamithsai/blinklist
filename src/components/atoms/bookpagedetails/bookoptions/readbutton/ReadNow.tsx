import { Button  } from "@mui/material";

import customStyle from "../../../../../Theme";

import React from 'react';
const ReadNow = () => {
  const classes=customStyle();
  return (
      <Button
        className={classes.readNow}
        variant="outlined"
        component="button"
      >
       Read now
      </Button>
  );
};  

export default ReadNow;
