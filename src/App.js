import React, { Component } from 'react';
import Home from './components/Home'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Visit from './components/Visit'
import DWC from './components/DWC'

class App extends Component {
    state ={

    }
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/your_visit">
                        <Visit />
                    </Route>
                    <Route path="/dental_wellness_club">
                        <DWC />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App