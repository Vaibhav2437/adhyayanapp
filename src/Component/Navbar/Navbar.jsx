import React from 'react'
import logo from '../Static/logo.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className=''>
            <nav className="navbar navbar-expand-lg  w-100">
                <div className="container-fluid w-100">
                <div>
                        <NavLink className="navbar-brand w-100" to="/home">
                            <img src={logo} alt="Logo" width="200" height="62" className="d-inline-block align-text-top" />
                        </NavLink>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav w-100 d-flex justify-content-around">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">Admin</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">Register</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">Career</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">Student Login</NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar