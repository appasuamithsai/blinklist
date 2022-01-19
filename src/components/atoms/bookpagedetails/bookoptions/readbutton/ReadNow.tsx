import { Button  } from "@mui/material";

import customStyle from "../../../../../Theme";


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
