import React from 'react';
import { Typography } from '@mui/material';
import customStyle from "../../../Theme";
interface AuthDet{
    authName:string,
}

const AuthorName = (props:AuthDet) => {
    const classes=customStyle();
    return (<>
         <Typography 
         variant='body1'
         className={classes.authorNameTypography}
         >
               {props.authName}
            </Typography>
    </>);
}


export default AuthorName;