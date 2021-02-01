import React, { Component } from 'react';
import Header from '../components/Header/Header'
import NavBar from '../new_components/Navigation/NavBar/NavBar';
import Banner from '../new_components/Banner/Banner';
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
                <Banner />
                <VisitInfo />
                <Footer />
            </Container>
        )
    }
}

export default Visit