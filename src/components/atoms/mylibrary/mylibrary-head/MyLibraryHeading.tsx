
import { Typography } from '@mui/material';
import customStyle from '../../../../Theme';
import React from 'react';
const MyLibraryHeading = () => {
    const classes=customStyle();
    return (<Typography  variant='h1' className={classes.myLibraryHead}>My Library</Typography>);
}

export default MyLibraryHeading;