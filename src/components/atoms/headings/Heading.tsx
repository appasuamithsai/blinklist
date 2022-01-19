import { Typography } from "@mui/material";
import customStyle from "../../../Theme";


  
const Heading = () => {
  const classes=customStyle();
  return (
      <Typography
        className={classes.head}
        variant="h3"
      >
        Trending blinks
      </Typography>
  );
};

export default Heading;
