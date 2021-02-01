import React, { Component } from 'react';
import Auxiliary from '../hoc/Auxiliary';
import Header from '../new_components/Header/Header';
import NavBar from '../new_components/Navigation/NavBar/NavBar';
import Banner from '../new_components/Banner';
import Footer from '../new_components/Footer';



class Layout extends Component {
    state = {

    }
    render(){
        return(
            <Auxiliary>
                <NavBar />
            </Auxiliary>
        )
    }
}

export default Layout;