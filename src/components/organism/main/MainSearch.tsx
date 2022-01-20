import {  InputAdornment, TextField } from "@mui/material";
import React from "react";
import customStyle from "../../../Theme";
import SerachIcon from '../../atoms/search-icon/SearchIcon';

interface Handle{
  search:(item:string)=>void;
}


const MainSearch = (props:Handle) => {
  const classes=customStyle();
  return (
    <TextField
    variant="standard"
      placeholder="Search by title or author "
      data-testid="TextField"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SerachIcon />
          </InputAdornment>
        ),
      }}

      className={classes.textField}
      onChange={(e)=>{
        props.search(e.target.value.toLowerCase());
      }}
    />
  );
};

export default MainSearch;
