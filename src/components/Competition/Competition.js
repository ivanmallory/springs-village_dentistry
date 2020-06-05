import React from 'react';
import classes from '../Competition/Competition.module.css'
import {Row, Col} from 'react-bootstrap';
import tooth from '../../static/tooth-min.png';
import payment from '../../static/payment-plan-min.png';
import calendar from '../../static/extended-office-hours-min.png';

const Competition = () => {
    return(
        <div>
            <Row className={classes.Competition}>
                <Col xs={12} md={12}>
                    <h1>What Sets Us Apart</h1>
                    <div className={classes.Underline}></div>
                    <p>Springs Village Dentistry is dedicated to raising the bar when it comes to dental care. From general dentistry services to dental implants to cosmetic dentistry, we’re here to help you take your smile to new heights.</p>
                </Col>
                <Col xs={12} md={12} className={classes.Col}>
                    <h5>Comprehensive Dental Care for the Whole Family</h5>
                    <ul className={classes.Services}>
                        <li>All Ages Welcome</li>
                        <li>Experienced, Caring Dentists</li>
                        <li>Warm and Inviting Office</li>
                        <li>Cosmetic Dentistry</li>
                        <li>Dental Implants</li>
                        <li>Six Month Smiles</li>
                        <li>Early Morning and Late Evening Hours</li>
                        <li>Saturday appointments</li>
                        <li>Payment Plans Available</li>
                    </ul>
                </Col>
                <Col xs={12} md={6} lg={4} className={classes.Col}>
                    <img src={tooth}/>
                    <h5>Caring Dental Professionals</h5>
                    <p>Our friendly dentists and team listen to your needs to provide you with attentive, compassionate care. We tailor our care to each patient’s needs because we understand that no two smiles are the same and dental care should never be one-size-fits-all.</p>
                </Col>
                <Col xs={12} md={6} lg={4} className={classes.Col}>
                    <img src={payment}/>
                    <h5>Payment Plans Available</h5>
                    <p>Our office doesn’t believe in sacrificing quality care in order to bring our community affordable dentistry. We offer financing with CareCreditSM and LendingClub, making it easier to fit dental care into your family’s budget.</p>
                </Col>
                <Col xs={12} md={12} lg={4} className={classes.Col}>
                    <img src={calendar}/>
                    <h5>Extended Office Hours</h5>
                    <p>Your calendar is packed with work, school, and family obligations, not to mention trying to have a social life. We open as early as 8 AM and stay open as late as 6 PM so you don’t have to miss out on life. We also have Saturday appointments!</p>
                </Col>
            </Row>
        </div>
    )
}


export default Competition