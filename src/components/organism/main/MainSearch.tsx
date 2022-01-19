import {  InputAdornment, TextField } from "@mui/material";
import React from "react";
import SerachIcon from '../../atoms/search-icon/SearchIcon';

interface Handle{
  search:(item:string)=>void;
}


const MainSearch = (props:Handle) => {
  return (
    <TextField
    variant="standard"
      placeholder="Search by title or author "
    
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SerachIcon />
          </InputAdornment>
        ),
      }}

      sx={{
          width:'658px',
          marginBottom:'0px',
          marginTop:'58px',
          color:'#6D787E',
          padding:'16px',
          fontWeight:'700',
          fontSize:'24px',
          marginLeft: "445px",
      }}
      onChange={(e)=>{
        props.search(e.target.value.toLowerCase());
      }}
    />
  );
};

export default MainSearch;
