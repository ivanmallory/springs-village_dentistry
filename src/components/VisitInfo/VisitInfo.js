import React from 'react';
import classes from '../VisitInfo/VisitInfo.module.css';
import {Row, Col} from 'react-bootstrap';
import Refreshments from '../../static/Refreshments.jpg'
import a_dec from '../../static/a_dec.jpg'

const VisitInfo = () => {
    return(
        <div>
            <Row className={classes.VisitInfo}>
                <Col xs={12} md={12} lg={12} xl={12} className={classes.Intro}>
                    <h3>Springs Village Dentistry Patient Information</h3>
                    <div className={classes.Underline}></div>
                    <p>Springs Village Dentistry welcomes both adults and children of all ages to visit us for high quality dental care. Work hard to make visiting the dentist as convenient and comfortable as possible, and we take pride in offering personalized care for the families of our community.</p>
                    <a href=""><button>Contact Us</button></a>
                </Col>
                <Col xs={12} md={12} lg={12} xl={{span: 6, offset: 1}} className={classes.Visit}>
                    <h3>Your Visit</h3>
                    <p>Preparing for your first visit to Springs Village Dentistry? We look forward to seeing you sometime soon and welcoming you into our local dental practice.</p>
                </Col>
                <Col xs={12} md={6} lg={6} xl={{span: 4, offset: 2}} className={classes.Scheduling}>
                    <h5>Convenient Hours &amp; Scheduling</h5>
                    <p>We want to make getting dental care as convenient as possible. We know you probably have enough on your plate already before factoring in the dentist! Our office has extended office hours (8AM to 6PM) so you can come in before or after work and school, or even on Saturdays!</p>
                    <p>We also offer the option of family block scheduling, which is a way to book all of your family’s appointments on the same day. We’ll either see you all at the same time or one right after another, letting you take care of routine dental visits in one swoop.</p>
                    <p>If you have a dental emergency, please call us ASAP. At Springs Village Dentistry, we leave room in our days for unexpected cases just like this so that we’re able to provide same-day emergency care.</p>
                </Col>
                <Col xs={12} md={6} lg={6} xl={4} className={classes.Expectations}>
                    <h5>What to Expect</h5>
                    <p>Here's what you can expect at your first visit to Springs Village Dentistry:</p>
                    <ul>
                        <li>You’ll be greeted by our friendly front desk staff and asked to complete our new patient forms if you have not done so already.</li>
                        <li>We'll take X-Rays of your mouth.</li>
                        <li>One of our dentists will perform a comprehensive oral exam, assessing your teeth, gums, and bite.</li>
                        <li>For many patients, we will also provide a teeth cleaning at this visit.</li>
                        <li>We’ll go over your dental needs and goals as well as our recommended treatment plan with you and then discuss any next steps.</li>
                        <li>One of our team members will go over financial information and work with you to find the best option.</li>
                    </ul>
                </Col>
            </Row>
            <Row className={classes.Amenities}>
                <Col xs={12} md={12} lg={12} xl={12}><h3>Patient Amenities</h3></Col>
                <Col xs={12} md={6} lg={6} xl={3}>
                    <h5>Refreshment Bar</h5>
                    <p>Whether you’ve just arrived for your appointment or you’re on your way out, please feel free to enjoy the complimentary hot beverages and snacks at the refreshment bar in our reception area.</p>
                    <img src={Refreshments}></img>
                </Col>
                <Col xs={12} md={6} lg={6} xl={3}>
                    <h5>Warm Blankets &amp; Pillows</h5>
                    <p>We want your visit to our office to be as pleasant and relaxing as possible. Feel free to get cozy during your appointment with our comfy fleece blankets and memory foam neck pillows.</p>
                </Col>
                <Col xs={12} md={6} lg={6} xl={3}>
                    <h5>A-dec Dental Chairs</h5>
                    <p>Our treatment rooms have state-of-the-art A-dec dental chairs with special cushioning designed to reduce pressure points and offer complete-body support. These chairs redefine the dental experience!</p>
                    <img src={a_dec}/>
                </Col>
                <Col xs={12} md={6} lg={6} xl={3}>
                    <h5>Apple TV with Hulu &amp; Netflix</h5>
                    <p>We offer sound-isolating headphones and Apple TV with Hulu and Netflix ready, so you can watch your favorite shows during your appointment. Just sit back and relax while we take care of your smile.</p>
                </Col>
            </Row>
        </div>
    )
}

export default VisitInfo