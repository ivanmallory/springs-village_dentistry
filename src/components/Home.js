import React, { Component } from 'react';
import Header from '../components/Header/Header'
import NavBar from '../new_components/Navigation/NavBar/NavBar';
import HomeBanner from '../new_components/HomeBanner/HomeBanner';
import Footer from '../components/Footer/Footer';
import Auxiliary from '../hoc/Auxiliary';
import HomeBody from '../containers/Home/HomeBody';

class Home extends Component {
    state ={
        showBio: false
    }
    showBioHandler = (props) => {
        this.setState({
            showBio: true
        })
    }
    render(){
        return(
            <Auxiliary style={{margin: "0", padding: "0"}}>
                <Header />
                <NavBar />
                <HomeBanner />
                <HomeBody bioReveal={this.showBioHandler} />
                <Footer />
            </Auxiliary>
        )
    }
}

export default Home