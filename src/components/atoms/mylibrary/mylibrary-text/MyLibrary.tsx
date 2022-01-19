
import { Typography } from '@mui/material';

import customStyle from "../../../../Theme";

const MyLibrary = () => {
    const classes=customStyle();
    return (<Typography variant='body1' className={classes.myLibrary} >
           My Library
        </Typography>);
}

export default MyLibrary;
