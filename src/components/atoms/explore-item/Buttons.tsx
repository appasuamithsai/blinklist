import React from "react";
import { Button } from "@mui/material";
import { Link} from "react-router-dom";
import customStyle from "../../../Theme";

interface ButtonType {
  itemname: string;
  itemicon: React.ReactElement;
  handleChange: () => void;
}

export const Buttons = (props: ButtonType) => {
  const classes=customStyle();
  return (
      <Link to="/explore" style={{ textDecoration: "none" }}>
        <Button
          variant="text"
          className={classes.buttons}
          startIcon={props.itemicon}
          onClick={() => props.handleChange()}
        >
          {props.itemname}
        </Button>
      </Link>
  );
};

export default Buttons;
