import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand">ReactiveTODO</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink exact activeClassName="active" className="nav-link" to="/">Tasks</NavLink>
                        <NavLink exact activeClassName="active" className="nav-link" to="/board">MyBoard</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

