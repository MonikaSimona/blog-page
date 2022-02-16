import React from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {


    return (

        <div className="navbar-wrapper">

            <NavLink to="healthandfintess" className="nav-item">Health &#38; Fitness</NavLink>
            <NavLink to="selfimprovement" className="nav-item">Self Improvement</NavLink>
            <NavLink to="food" className="nav-item">Food</NavLink>
            <NavLink to="booksandmovies" className="nav-item">Books &#38; Movies</NavLink>
            <NavLink to="beautyandstyle" className="nav-item">Beauty &#38; Style</NavLink>
        </div>

    )
}

export default Navbar