import { Grid, Typography } from '@mui/material';
import Timer from '../../atoms/timer/Timer';
import customStyle from '../../../Theme';

interface TimeDet{
    time:string,
}
const ReadTime = (props:TimeDet) => {
    const classes=customStyle();
    return (<Grid container className={classes.readTimeTopography}>
        <Grid item  >
            <Timer />  
        </Grid > 
        <Grid item >
            <Typography 
            variant='caption'
             >
                {props.time}
            </Typography>
        </Grid>
        
    </Grid>);
}


export default ReadTime;