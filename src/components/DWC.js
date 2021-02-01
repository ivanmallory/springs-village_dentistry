import React, { Component } from 'react';
import Header from '../components/Header/Header'
import NavBar from '../new_components/Navigation/NavBar/NavBar';
import {Container} from 'react-bootstrap';
import Footer from '../components/Footer/Footer';

class DWC extends Component {
    state ={

    }
    render(){
        return(
            <Container fluid style={{margin: "0", padding: "0"}}>
                <Header />
                <NavBar />
                <Footer />
            </Container>
        )
    }
}

export default DWC