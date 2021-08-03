import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { NavBar } from './NavBar';
import { HomeSection } from '../components/HomeSection/HomeSection';
import { BoardSection } from '../components/BoardSection/BoardSection';
  
export const AppRouter = () => {
    return (
        <Router>
            <NavBar/>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={HomeSection} />
                    <Route exact path="/board" component={BoardSection} />
                    <Redirect to="/"/>
                </Switch>
            </div>
        </Router>
    );
};
