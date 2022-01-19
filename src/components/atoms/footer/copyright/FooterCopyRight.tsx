import React from 'react';
import { Typography } from '@mui/material';
import customStyle from '../../../../Theme';


const FooterCopyRight = () => {
   const classes=customStyle();
    return (<>
         <Typography 
         variant='body1'
         className={classes.footerCopyRight}
         data-testid="copyright"
         >
               © Blinkist 2021 Sitemap   |   Imprint   |   Terms of Service   |   Privacy Policies
            </Typography>
    </>);
}


export default FooterCopyRight;