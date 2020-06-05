import React from 'react';
import classes from './HomeBanner.module.css';
import dentist from './dentist.mp4'
import clinic from '../../static/springs_village.jpg'

const HomeBanner = () => {
    return(
        <div className={classes.Banner}>
            <img src={clinic}/>
            <h1>Welcome to Springs Village Dentistry</h1>
            <video autoPlay muted loop>
                <source src={dentist} type="video/mp4" />
            </video>
        </div>
    )
}
export default HomeBanner;