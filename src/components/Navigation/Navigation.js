import React from 'react';
import classes from './Navigation.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import Auxiliary from '../../hoc/Auxiliary';
import NavLink from './NavLink/NavLink';
import DrawerToggle from './DrawerToggle/DrawerToggle';
import DropDrawer from './DropDrawer/DropDrawer';

const Navigation = (props) => {
    return(
        <div className={classes.Navigation}>
            <DrawerToggle />
            <NavLink />
        </div>
    )
}

export default Navigation