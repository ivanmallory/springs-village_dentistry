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
                <Col className={classes.Welcome} lg={6} xl={5}>
                    <h1>Welcome to Springs Village Dentistry,</h1>
                    <h1 style={{fontStyle:"italic", color: "turquoise"}}>Your Holly Springs Dentist!</h1>
                    <div className={classes.Underline}></div>
                    <p>Drs. Diana Molta and Benjamin Moore can’t wait to welcome you to our Holly Springs dental office. We’ve designed this office with our patients’ comfort and convenience in mind. From the warm and welcoming décor to the state-of-the-art technology, everything about this office is here to ensure that our patients feel refreshed, relaxed, and confident in the care they receive. We are a family dentist office, which means our team sees patients of all ages, so bring in the whole family for preventive, restorative, or cosmetic care. No matter your needs, we can help you get a beautiful, healthy smile you’ll love showing off.</p>
                    <h4>Holly Springs General Dentistry</h4>
                    <p>When providing comprehensive dentistry, our dentists’ goal is to exceed your expectations. We believe that exceptional dental care goes above and beyond the standard, clinical experience. Our team takes the time to get to know you because a meaningful doctor-patient relationship is essential to our work. We want you to trust us with your health care. When you visit us, whether it’s for general dentistry services like a cleaning, restorative care like dental implants for missing teeth, or cosmetic services like Six Month Smiles orthodontics, you can rest assured that you will receive only the best care. Our patients are part of our dental family, and we treat each and every one of them with care and respect. We hope you’ll make Springs Village Dentistry your dental home!</p>
                </Col>
                <Col xs={12} md={12} lg={12} xl={5} className={classes.About}>
                    <h1>What Sets Us Apart</h1>
                    <div className={classes.Underline}></div>
                    <p>Springs Village Dentistry is dedicated to raising the bar when it comes to dental care. From general dentistry services to dental implants to cosmetic dentistry, we’re here to help you take your smile to new heights.</p>
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
                <br />
                <Col xs={12} md={6} lg={4} xl={3} className={classes.Col}>
                    <img src={tooth}/>
                    <h5>Caring Dental Professionals</h5>
                    <p>Our friendly dentists and team listen to your needs to provide you with attentive, compassionate care. We tailor our care to each patient’s needs because we understand that no two smiles are the same and dental care should never be one-size-fits-all.</p>
                </Col>
                <Col xs={12} md={6} lg={4} xl={3} className={classes.Col}>
                    <img src={payment}/>
                    <h5>Payment Plans Available</h5>
                    <p>Our office doesn’t believe in sacrificing quality care in order to bring our community affordable dentistry. We offer financing with CareCreditSM and LendingClub, making it easier to fit dental care into your family’s budget.</p>
                </Col>
                <Col xs={12} md={12} lg={4} xl={3} className={classes.Col}>
                    <img src={calendar}/>
                    <h5>Extended Office Hours</h5>
                    <p>Your calendar is packed with work, school, and family obligations, not to mention trying to have a social life. We open as early as 8 AM and stay open as late as 6 PM so you don’t have to miss out on life. We also have Saturday appointments!</p>
                </Col>
            </Row>
        </div>
    )
}


export default Competition