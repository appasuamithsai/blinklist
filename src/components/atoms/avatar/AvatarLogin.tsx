import React from 'react';
import Avatar from '@mui/material/Avatar';
interface Handle{
    name:string;
}
const AvatarLogin = (props:Handle) => {
    return <Avatar sx={{bgcolor: "#69A6E3",}} >{props.name}</Avatar>;
}

export default AvatarLogin;