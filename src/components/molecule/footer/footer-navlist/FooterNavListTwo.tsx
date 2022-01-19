import { Grid } from '@mui/material';
import React from 'react';
import NavHead from '../../../atoms/footer/navitems/navhead/NavHead';
import NavItem from '../../../atoms/footer/navitems/navitem/NavItem';

const list=["Pricing","Blinkist business","Gift cards","Blinkist magaine","Contact & help"];


const FooterNavListTwo=() => {
    let count=1;
    return (<Grid container direction="column" data-testid="FooterNavList2">
        <Grid item>
        <NavHead name="Useful links"/>
        </Grid>
        {
            list.map(e=>
                <Grid item key={count++}>
                    <NavItem name={e} />
                </Grid>
            )
        }
    </Grid>);
}
export default FooterNavListTwo;