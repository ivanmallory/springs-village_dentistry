import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

import styles from './NavBar.module.css'

const NavBar = () => {
    return(
        <Navbar sticky="top" expand="lg" className={styles.NavBar}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link className={styles.NavLink} href="#home">Home</Nav.Link>
                    <NavDropdown className={styles.NavLink} title="New Patients">
                        <NavDropdown.Item href="#action/3.1">Your Visit</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Registration</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Insurance</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Dental Wellness Club</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown className={styles.NavLink} title="Services">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className={styles.NavLink} href="#home">Financial</Nav.Link>
                    <NavDropdown className={styles.NavLink} title="Meet Us">
                        <NavDropdown.Item href="#action/3.1">Our Team</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Our Office</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Technology</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className={styles.NavLink} href="#link">Blog</Nav.Link>
                    <Nav.Link className={styles.NavLink} href="#link">Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar