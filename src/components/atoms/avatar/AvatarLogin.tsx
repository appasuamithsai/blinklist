import React from 'react';
import Avatar from '@mui/material/Avatar';
// import customStyle from "../../Theme";
interface Handle{
    name:string;
}
const AvatarLogin = (props:Handle) => {
    // const classes=customStyle();
    return <Avatar sx={{bgcolor: "#69A6E3",}} >{props.name}</Avatar>;
}

export default AvatarLogin;