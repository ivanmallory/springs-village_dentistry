import React from 'react';
import Group from '../../static/group_smile.jpg';
import classes from './Banner.module.css';

const Banner = (props) => {
    return(
        <div className={classes.Banner}>
            <img src={Group} alt="A Group of Smiling Patients"/>
        </div>
    )
}

export default Banner; 