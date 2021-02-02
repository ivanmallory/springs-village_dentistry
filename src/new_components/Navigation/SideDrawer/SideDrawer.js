import React from 'react';
import NavLinks from '../NavLinks/NavLinks';
import classes from './SideDrawer.module.css';

const SideDrawer = (props) => {
    return(
        <div className={classes.SideDrawer}>
            <NavLinks />
        </div>
    );
}

export default SideDrawer;
