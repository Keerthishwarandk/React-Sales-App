import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary bg-gradient">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to='/' >SALES APP</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <NavLink className="nav-link active" aria-current="page" to="/addsales">ADD SALES</NavLink>
                            <NavLink className="nav-link" to="/top5sales">TOP 5 SALES</NavLink>
                            <NavLink className="nav-link" to="/todaystotalrevenuve">TODAY'S TOTAL REVENUE</NavLink>
                            <NavLink className="nav-link" to="/login">LOGIN</NavLink>
                            <NavLink className="nav-link" to="/register">REGISTER</NavLink>
                            <NavLink className="nav-link">LOGOUT</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar