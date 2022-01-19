import { Button } from "@mui/material";
import customStyle from "../../../Theme";
import NavDown from "../nav/nav-down/NavDown";
import NavUp from "../nav/nav-up/NavUp";

interface Handle{
    handleChange:()=>void;
    icon:boolean;
  }
  

const Explore = (props:Handle) => {
  const classes=customStyle();
  return (
    <Button
      endIcon={props.icon ? <NavUp /> : <NavDown />}
      onClick={() => {
          props.handleChange();
      }}
      className={classes.exploreBtn}
    >
      Explore
    </Button>
  );
};

export default Explore;
