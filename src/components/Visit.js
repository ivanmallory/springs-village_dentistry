import React, { Component } from 'react';
import Header from '../components/Header/Header'
import NavBar from '../components/NavBar/NavBar'
import {Container} from 'react-bootstrap';
import Footer from '../components/Footer/Footer';
import VisitInfo from '../components/VisitInfo/VisitInfo'

class Visit extends Component {
    state ={

    }
    render(){
        return(
            <Container fluid style={{margin: "0", padding: "0"}}>
                <Header />
                <NavBar />
                <VisitInfo />
                <Footer />
            </Container>
        )
    }
}

export default Visit