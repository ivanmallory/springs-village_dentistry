import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import NavLinks from '../NavLinks/NavLinks';
import classes from './NavBar.module.css';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const NavBar = (props) => {
    if(props.showSideDrawer){
        console.log("Toggle Open")
    }
    else{
        console.log("Toggle Closed")
    }
    return(
        <div className={classes.NavBar}>
            <div className={classes.Mobile}> 
                <DrawerToggle clicked={props.showSideDrawer} />
            </div>
            <div className={classes.DesktopOnly}>
                <NavLinks />
            </div>
        </div>
    )
}


export default NavBar;