import React, { Component } from 'react';
import Home from './Home'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Visit from './Visit'
import DWC from './DWC'

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