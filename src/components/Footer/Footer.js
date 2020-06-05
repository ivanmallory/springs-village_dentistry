import React from 'react';
import {Row, Col} from 'react-bootstrap';
import classes from './Footer.module.css';
import team from '../../static/dental_team.jpg';

const Footer = () => {
    return(
        <Row className={classes.Footer}>
            <Col xs={12} md={6} lg={{span: 3, offset: 3}}>
                <div className={classes.Contact}>
                    <h4>Springs Village Dentistry</h4>
                    <div className={classes.Underline}></div>
                    <h5>T: (919)446-3947</h5>
                    <h5>F: (919)825-3130</h5>
                    <br/>
                    <h5>Diana Molta, DDS</h5>
                    <h5>Benjamin Moore, DDS</h5>
                    <br/>
                    <h5>349 Earnie Lane</h5>
                    <h5>Holly Springs, NC 27540</h5>
                </div>
            </Col>
            <Col xs={12} md={6} lg={3}>
                <div className={classes.Hours}>
                    <h4>Office Hours</h4>
                    <div className={classes.Underline}></div>
                    <h5>Monday: 10am - 6pm</h5>
                    <h5>Tuesday: 10am - 6pm</h5>
                    <h5>Wednesday: 8am - 4pm</h5>
                    <p>Open every 3rd week of the month</p>
                    <h5>Thursday: 8am - 4pm</h5>
                    <h5>Friday: 8am - 4pm</h5>
                    <p>Closed every 3rd week of the month</p>
                    <h5>Saturday: By Appointment</h5>
                </div>
            </Col>
            <Col lg={12}>
                <img src={team} />
            </Col>
        </Row>
    )
}

export default Footer;