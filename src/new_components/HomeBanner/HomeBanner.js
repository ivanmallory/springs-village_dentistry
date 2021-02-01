import React from 'react';
import classes from './HomeBanner.module.css';
import dentist from '../../static/dentist.mp4'
import clinic from '../../static/springs_village.jpg'

const HomeBanner = (props) => {
    return(
        <div className={classes.HomeBanner}>
            <img src={clinic}/>
            <h1>Welcome to Springs Village Dentistry</h1>
            <video autoPlay muted loop>
                <source src={dentist} type="video/mp4" />
            </video>
        </div>
    )
}
export default HomeBanner;