import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">

                {/*Pantalla principal*/}
                <Link className="navbar-brand"
                    to="/">HeroesApp
                </Link>

                {/*Boton responsive */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/*Resto*/}
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink
                                activeclass="active"
                                className="nav-item nav-link"
                                exact
                                to="/marvel">Marvel
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                activeclass="active"
                                className="nav-item nav-link"
                                exact
                                to="/dc"
                            >DC
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                activeclass="active"
                                className="nav-item nav-link"
                                exact
                                to="/search"
                            >Search
                            </NavLink>
                        </li>
                    </ul>

                </div>

            </div>
        </nav>
    )
}