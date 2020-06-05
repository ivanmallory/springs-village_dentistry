import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import styles from './NavBar.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    return(
        <Navbar sticky="top" expand="lg" className={styles.NavBar}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.Toggler}/>
            <a href="" style={{color:"white"}} className={styles.Phone}><FontAwesomeIcon icon={faPhoneVolume} size= '2x'/></a>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link className={styles.NavLink} href="#home">Home</Nav.Link>
                    <NavDropdown className={styles.NavDropdown} title="New Patients">
                        <NavDropdown.Item className={styles.Item} href="#action/3.1">Your Visit</NavDropdown.Item>
                        <NavDropdown.Item className={styles.Item}href="#action/3.3">Dental Wellness Club</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown className={styles.NavDropdown} title="Services">
                        <NavDropdown drop="right" className={styles.NavDropdown2} href="#action/3.1" title="General">
                            <NavDropdown.Item className={styles.Item} href="#action/3.2">Dental Health Services</NavDropdown.Item>
                            <NavDropdown.Item className={styles.Item} href="#action/3.2">Dental Exams</NavDropdown.Item>
                            <NavDropdown.Item className={styles.Item} href="#action/3.2">Sleep Apnea</NavDropdown.Item>
                            <NavDropdown.Item className={styles.Item} href="#action/3.2">Kids</NavDropdown.Item>
                            <NavDropdown.Item className={styles.Item} href="#action/3.2">Sedation Dentistry</NavDropdown.Item>
                            <NavDropdown.Item className={styles.Item} href="#action/3.2">Emergency Dentist</NavDropdown.Item>
                            <NavDropdown.Item className={styles.Item} href="#action/3.2">Wisdom Teeth</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown drop="right" className={styles.NavDropdown2} href="#action/3.1" title="Cosmetic">
                            <NavDropdown.Item className={styles.Item} href="#action/3.2">Veneers</NavDropdown.Item>
                            <NavDropdown.Item className={styles.Item} href="#action/3.2">Six Month Smiles</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown drop="right" className={styles.NavDropdown2} href="#action/3.1" title="Restorative">
                            <NavDropdown.Item className={styles.Item} href="#action/3.2">Dental Implants</NavDropdown.Item>
                            <NavDropdown.Item className={styles.Item} href="#action/3.2">Dentures</NavDropdown.Item>
                            <NavDropdown.Item className={styles.Item} href="#action/3.2">Dental Crowns</NavDropdown.Item>
                            <NavDropdown.Item className={styles.Item} href="#action/3.2">Root Canal</NavDropdown.Item>
                        </NavDropdown>
                    </NavDropdown>
                    <Nav.Link className={styles.NavLink} href="#home">Payment</Nav.Link>
                    <NavDropdown className={styles.NavDropdown} title="Meet Us">
                        <NavDropdown.Item className={styles.Item} href="#action/3.1">Our Team</NavDropdown.Item>
                        <NavDropdown.Item className={styles.Item} href="#action/3.2">Our Office</NavDropdown.Item>
                        <NavDropdown.Item className={styles.Item} href="#action/3.3">Technology</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className={styles.NavLink} href="#link">Blog</Nav.Link>
                    <Nav.Link className={styles.NavLink} href="#link">Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar