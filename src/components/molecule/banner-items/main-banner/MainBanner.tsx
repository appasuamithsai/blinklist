import { Grid } from '@mui/material';
import React from 'react';
import customStyle from '../../../../Theme';
import BannerImage from '../../../atoms/banner/banner-image/BannerImage';
import BannerItems from '../banner-item/BannerItems';

const MainBanner = () => {
    const classes=customStyle();
    return (<Grid container className={classes.mainBanner} >
        <Grid item className={classes.mainBannerItem}>
            <BannerItems />
        </Grid>
        <Grid item>
            <BannerImage />
        </Grid>
    </Grid>);
}

export default MainBanner;