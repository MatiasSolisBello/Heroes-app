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
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                {/*Resto*/}
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to="/marvel">Marvel
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink
                                activeClassName="active"
                                className="nav-item nav-link"
                                exact
                                to="/dc"
                            >DC
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink
                                activeClassName="active"
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