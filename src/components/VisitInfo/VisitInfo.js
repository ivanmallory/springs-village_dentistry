import React from 'react';
import classes from '../VisitInfo/VisitInfo.module.css';
import {Row, Col} from 'react-bootstrap';

const VisitInfo = () => {
    return(
        <div>
            <Row>
                <div className={classes.VisitInfo}>
                    <Col>
                        <h3>Springs Village Dentistry Patient Information</h3>
                        <div className={classes.Underline}></div>
                        <p>Springs Village Dentistry welcomes both adults and children of all ages to visit us for high quality dental care. Work hard to make visiting the dentist as convenient and comfortable as possible, and we take pride in offering personalized care for the families of our community.</p>
                        <a href=""><button>Contact Us</button></a>
                    </Col>
                </div>
            </Row>
        </div>
    )
}

export default VisitInfo