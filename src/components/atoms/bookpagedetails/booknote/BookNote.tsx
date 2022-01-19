import { Typography } from "@mui/material";
import customStyle from "../../../../Theme";


const BookNote = () => {
  const classes=customStyle();
  return (<Typography
        className={classes.bookNote}
        variant="subtitle2"
        data-testid="BookNote"
      >
          Turning Your Business into an Enduring Great Company
      </Typography>
  );
};

export default BookNote;
