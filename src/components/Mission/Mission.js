import React from 'react';
import classes from './Mission.module.css';
import diana from '../../static/drmolta.jpg'
import ben from '../../static/drmoore.jpg'
import three_teeth from '../../static/family-dentistry.png';
import implants from '../../static/dental-implants.png';
import smiles from '../../static/six-month-smiles.png';
import payments from '../../static/affordable-payments.png';
import {Row, Col} from 'react-bootstrap';

const Mission = () => {
    return(
        <div>
            <Row>
                <div className={classes.Mission}>
                    <h1>Our Mission</h1>
                    <div className={classes.Underline}></div>
                    <Col xs={12}>
                        <p>At Springs Village Dentistry, our team is committed to enhancing the lives of others by providing personalized, quality dental care in an inviting environment. We believe that patient education is the cornerstone to all aspects of the dental experience, and as such we take the time needed to listen to our patients concerns and work together to provide care that is tailored to each individual.
                        </p>
                        <p>Our team maintains committed to continuing education and implements leading edge dental technology to deliver uncompromising quality and care to our patients. We, the Springs Village Dentistry team, value you as a person, and our goal is to nurture a compassionate and trusting environment so that coming to the dentist can be a comfortable and pleasant experience for everyone.</p>
                    </Col>
                    <Col>
                        <img src={diana}/>
                        <h4>Dr. Diana Molta, DDS</h4>
                    </Col>
                    <Col>
                        <img src={ben}/>
                        <h4>Dr. Benjamin Moore, DDS</h4>
                    </Col>
                </div>
            </Row>
            <Row className={classes.Care}>
                <Col xs={12}>
                    <img src={three_teeth}/>
                    <h4>Family Dentistry</h4>
                    <p>We offer quality dental care to patients of all ages.</p>
                </Col>
                <Col xs={12}>
                    <img src={implants}/>
                    <h4>Dental Implants</h4>
                    <p>Try a natural-looking, permanent solution for missing teeth.</p>
                </Col>
                <Col xs={12}>
                    <img src={smiles}/>
                    <h4>Six Month Smiles</h4>
                    <p>Straighten your smile faster than ever with accelerated braces.</p>
                </Col>
                <Col xs={12}>
                    <img src={payments}/>
                    <h4>Affordable Payments</h4>
                    <p>Our many payment options work with a variety of budgets.</p>
                </Col>
            </Row>
        </div>
    )
}


export default Mission