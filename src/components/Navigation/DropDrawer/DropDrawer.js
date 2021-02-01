import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import DrawerToggle from '../DrawerToggle/DrawerToggle'
import Navigation from '../Navigation';
import classes from './DropDrawer.module.css'

const DropDrawer = (props) => {
    return(
        <Auxiliary className={classes.DropDrawer}>
            <h1>Woot</h1>
        </Auxiliary>
    )
}
export default DropDrawer;