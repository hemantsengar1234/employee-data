import React from 'react'
import {NavLink} from 'react-router-dom';
import "./nav.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
        <NavLink className="nav-link active menu " to="/" > <h3>Employees</h3> </NavLink>   
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink className="nav-link active menu " to="/update" > <h5>Update</h5> </NavLink>
                        </li>
                    </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
