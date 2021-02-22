import React from 'react';
import {Row, Col} from 'react-bootstrap';
import classes from './DentalWellness.module.css';
import cleaning from '../../static/cleanings-icon.png';

const DentalWellness = (props) => {
    return(
        <div className={classes.DentalWellness}>
            <Row>
                <Col xs={12}>
                    <h1>Join Our Dental wellness Club</h1>
                    <div className={classes.underline}></div>
                    <p>You shouldn’t have to put your health on hold just because you don’t have dental insurance. At Springs Village Dentistry, we’re excited to offer our patients an alternative way to afford the treatments they need: our Dental Wellness Club. Gain access to quality, affordable dentistry by enrolling today!</p>
                    <button><a href="/">Enroll Today</a></button>
                </Col>
                <Col xs={12}>
                    <h1>Club Benefits</h1>
                    <p>Here are some of the benefits of joining our Dental Wellness Club:</p>
                    <ul>
                        <li>Preventive care at no extra charge</li>
                        <li>Major discount on additional treatments</li>
                        <li>No deductibles</li>
                        <li>No yearly maximums</li>
                        <li>No waiting periods</li>
                        <li>No claim submission forms</li>
                        <li>No rejected claims</li>
                    </ul>
                </Col>
            </Row>
            <Row className={classes.CompServices}>
                <Col xs={12}>
                    <h1>Complimentary Services</h1>
                    <p>As a Dental Wellness Club member, you’ll receive certain preventive services at no extra cost. These are the dental services included with our typical adult membership:</p>
                </Col>
                <Col xs={12}>
                    <img src={cleaning} />
                    <h5>2 Cleanings per Year</h5>
                </Col>
                <Col xs={12}>
                    <h5>2 Periodic Exams Per Year</h5>
                </Col>
                <Col xs={12}>
                    <h5>Necessary Digital X-Rays</h5>
                </Col>
                <Col xs={12}>
                    <h5>Emergency Exam</h5>
                </Col>
                <Col xs={12}>
                    <h5>Oral Cancer Screenings</h5>
                </Col>
                <Col xs={12}>
                    <h5>Fluoride Treatment</h5>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <h1>Discounted Services</h1>
                    <p>On top of those complimentary dental services, members also get a major discount on additional treatments at our office. You’ll receive 10% off the following services:</p>
                </Col>
            </Row>
        </div>
    )
}

export default DentalWellness;