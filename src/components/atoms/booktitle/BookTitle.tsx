import React from 'react';
import { Typography } from '@mui/material';
import customStyle from "../../../Theme";
interface BookDet{
    bookName:string,
}

const BookTitle = (props:BookDet) => {
    const classes=customStyle();
    return (<>
        <Typography 
         variant='subtitle1'
         className={classes.bookTitleOne}
         >
        {props.bookName}

        </Typography>
    </>);
}


export default BookTitle;