import React from 'react';
import classes from './Header.module.css'
import logo from '../../static/springs_village_logo.jpg'
import {Row} from 'react-bootstrap'

const Header = () => {
    return(
        <Row>
            <div className={classes.Header}>
                <img src={logo}/>
            </div>
        </Row>
    )
}

export default Header