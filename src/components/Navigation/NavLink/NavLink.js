import React from 'react';
import classes from './NavLink.module.css'

const NavLink = (props) => {
    return(
        <div className={classes.NavLink}>
            <ul className={classes.TopLevel}>
                <li>
                    <h4>Dental</h4>
                    <ul className={classes.DropDown}>
                        <li><a href="/">Dental Care</a></li>
                        <li><a href="/">Dental Care</a></li>
                        <li><a href="/">Dental Care</a></li>
                    </ul>
                    <h4>Offices</h4>
                    <ul className={classes.DropDown}>
                        <li><a href="/">Dental Care</a></li>
                        <li><a href="/">Dental Care</a></li>
                        <li><a href="/">Dental Care</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default NavLink