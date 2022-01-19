import { Grid } from '@mui/material';
import React from 'react';
import BannerOne from '../../../atoms/banner/banner-one/BannerOne';
import BannerTwo from '../../../atoms/banner/banner-two/BannerTwo';

const BannerItems = () => {
    return (<Grid container direction='column' rowSpacing='15px'>
        <Grid item>
            <BannerOne />
        </Grid>
        <Grid item>
            <BannerTwo />
        </Grid>


    </Grid>);
}


export default BannerItems;