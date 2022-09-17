import React from 'react'
import {NavLink} from 'react-router-dom';
import "./nav.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
        <a class="navbar-brand" href="/">E-M-S</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>   
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink className="nav-link active menu " to="/" > Employees  </NavLink>
                        <NavLink className="nav-link active menu " to="/addemployees" > AddEmployee  </NavLink>
                        </li>
                    </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
