import React from 'react'
import {
    Switch,
    BrowserRouter as Router,
    Route, Redirect
} from "react-router-dom";
import { Dc } from '../components/Dc'
import { Hero } from '../components/Hero'
import { Marvel } from '../components/Marvel'
import { Navbar } from '../components/Navbar'
import { Search } from '../components/Search'

export const DashboardRoutes = () => {
    return (
        <Router>
            <Navbar />
            <div className="container mt-3">
                <Switch>
                    <Route exact path="/marvel" component={Marvel} />
                    <Route exact path="/hero/:heroeId" component={Hero} /> 
                    <Route exact path="/dc" component={Dc} /> 
                    <Route exact path="/search" component={Search} /> 

                    <Redirect to="/search"></Redirect>

                </Switch>
            </div>
        </Router>
    )
}
