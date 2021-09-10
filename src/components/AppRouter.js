import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { NavBar } from "./NavBar";
import { HomeSection } from "../components/HomeSection/HomeSection";
import { BoardSection } from "../components/BoardSection/BoardSection";
import { TimeListSection } from "./TimeListSection/TimeListSection";

export const AppRouter = () => {
    return (
        <Router>
            <NavBar />
            <div className="container main-container">
                <Switch>
                    <Route exact path="/" component={HomeSection} />
                    <Route exact path="/board" component={BoardSection} />
                    <Route exact path="/timelist" component={TimeListSection} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    );
};
