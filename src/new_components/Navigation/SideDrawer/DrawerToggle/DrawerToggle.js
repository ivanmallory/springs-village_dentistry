import React from 'react';
import classes from '../DrawerToggle/DrawerToggle.module.css';

const DrawerToggle = (props) => {
    return(
        <div className={classes.ToggleButton} onClick={props.clicked}>
            <div className={classes.Hamburger}></div>
        </div>
    )
}

export default DrawerToggle;