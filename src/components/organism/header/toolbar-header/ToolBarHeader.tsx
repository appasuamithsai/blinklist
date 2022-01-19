import { Grid, Toolbar } from "@mui/material";
import React from "react";
import HeaderLeft from "../header-left/HeaderLeft";
import AvatarDrop from "../../../molecule/avatar/AvatarDrop";

interface Handle{
  handleChange:()=>void;
  icon:boolean;
}



const ToolBarHeader = (props:Handle) => {
  return (
    <Toolbar >
       <Grid container columnGap='160px' justifyContent='center'>
       <Grid item>
      <HeaderLeft icon={props.icon} handleChange={props.handleChange}  />
     </Grid>
      <Grid item>
                <AvatarDrop/>
       </Grid>

      </Grid>
    </Toolbar>
  );
};

export default ToolBarHeader;


