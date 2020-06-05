import React, { Component } from 'react';
import Header from '../components/Header/Header'
import NavBar from '../components/NavBar/NavBar'
import HomeBanner from './HomeBanner/HomeBanner';
import Mission from '../components/Mission/Mission';
import {Container} from 'react-bootstrap';
import Competition from './Competition/Competition';
import Footer from '../components/Footer/Footer';

class App extends Component {
    state ={

    }
    render(){
        return(
            <Container fluid style={{margin: "0", padding: "0"}}>
                <Header />
                <NavBar />
                <HomeBanner />
                <Mission />
                <Competition />
                <Footer />
            </Container>
        )
    }
}

export default App