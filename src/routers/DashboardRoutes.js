import React from 'react'
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { Dc } from '../components/Dc'
import { Hero } from '../components/Hero'
import { Marvel } from '../components/Marvel'
import { Navbar } from '../components/Navbar'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-3">
                <Switch>
                    <Route exact path="/marvel" component={Marvel} />
                    <Route exact path="/heroe/:id" component={Hero} /> 
                    <Route exact path="/dc" component={Dc} /> 

                    <Redirect to="/marvel"></Redirect>

                </Switch>
            </div>
        </>
    )
}
