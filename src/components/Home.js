import React, { Component } from 'react';
import Header from '../components/Header/Header'
import NavBar from '../new_components/Navigation/NavBar/NavBar';
import HomeBanner from '../new_components/HomeBanner/HomeBanner';
import Footer from '../components/Footer/Footer';
import Auxiliary from '../hoc/Auxiliary';
import HomeBody from '../containers/Home/HomeBody';
import SideDrawer from '../new_components/Navigation/SideDrawer/SideDrawer';

class Home extends Component {
    state ={
        showBio: false,
        showSideDrawer: false
    }
    showBioHandler = (props) => {
        this.setState({
            showBio: true
        })
    }
    sideDrawerToggleHandler = () => { 
        this.setState( (prevState) => { //The proper way of setting the state when it depends on the old state. Use prevState! 
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    }
    render(){
        return(
            <Auxiliary style={{margin: "0", padding: "0"}}>
                <Header />
                <SideDrawer />
                <NavBar showSideDrawer={this.sideDrawerToggleHandler} />
                <HomeBanner />
                <HomeBody bioReveal={this.showBioHandler} />
                <Footer />
            </Auxiliary>
        )
    }
}

export default Home