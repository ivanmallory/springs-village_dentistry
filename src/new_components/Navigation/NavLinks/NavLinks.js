import React from 'react';
import classes from './NavLinks.module.css';

const NavLinks = (props) => {
    return(
        <div className={classes.NavLinks}>
            <ul className={classes.TopLevel}>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/'>New Patients</a>
                    <ul className={classes.DropDown}>
                        <li><a href='/your_visit'>Your Visits</a></li>
                        <li><a href='/'>Registration</a></li>
                    </ul>
                </li>
                <li>
                    <a href='/'>Services</a>
                    <ul className={classes.DropDown}>
                        <li>
                            <a href='/'>General</a>
                            <ul className={classes.SlideOut}>
                                <li><a href='/'>Dental Health Services</a></li>
                                <li><a href='/'>Dental Exams</a></li>
                                <li><a href='/'>Sleep Apnea</a></li>
                                <li><a href='/'>Kids</a></li>
                                <li><a href='/'>Sedation Dentistry</a></li>
                                <li><a href='/'>Emergency Dentist</a></li>
                                <li><a href='/'>Wisdom Teeth</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href='/'>Cosmetic</a>
                            <ul className={classes.SlideOut}>
                                <li><a href='/'>Venners</a></li>
                                <li><a href='/'>Six Month Smiles</a></li>
                                <li><a href='/'>Teeth Whitening</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href='/'>Restorative</a>
                            <ul className={classes.SlideOut}>
                                <li><a href='/'>Dental Implants</a></li>
                                <li><a href='/'>Dentures</a></li>
                                <li><a href='/'>Dental Crowns</a></li>
                                <li><a href='/'>Root Canal</a></li>
                                <li><a href='/'>Wisdom Teeth</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href='/'>Financial</a>
                    <ul className={classes.DropDown}>
                        <li><a href='/'>Insurance</a></li>
                        <li><a href='/dental_wellness_club'>Dental Wellness Club</a></li>
                    </ul>
                </li>
                <li>
                    <a href='/'>Meet Us</a>
                    <ul className={classes.DropDown}>
                        <li><a href='/'>Our Team</a></li>
                        <li><a href='/'>Our Office</a></li>
                        <li><a href='/'>Technology</a></li>
                    </ul>
                </li>
                <li>
                    <a href='/'>Blog</a>
                </li>
                <li>
                    <a href='/'>Contact Us</a>
                </li>
            </ul>
        </div>
    )
}
export default NavLinks;