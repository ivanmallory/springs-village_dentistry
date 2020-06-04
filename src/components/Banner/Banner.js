import React from 'react';
import classes from './Banner.module.css';
import dentist from './dentist.mp4'
import clinic from '../../static/springs_village.jpg'

const Banner = () => {
    return(
        <div className={classes.Banner}>
            <img src={clinic}/>
        </div>
    )
}
export default Banner;