import React from "react"
import CustomLink from "./CustomLink"

const Navbar = () => {
    return (
        <div className="navbar-wrapper">
            <img src={require("../assets/images/heroDecoration.svg")} className="deco" alt="" />
            <CustomLink to="/health-and-fintess">
                Health &#38; Fitness
            </CustomLink>
            <CustomLink to="/self-improvement">
                Self Improvement
            </CustomLink>
            <CustomLink to="/food">
                Food
            </CustomLink>
            <CustomLink to="/books-and-movies">
                Books &#38; Movies
            </CustomLink>
            <CustomLink to="/beauty-and-style">
                Beauty &#38; Style
            </CustomLink>
            <img src={require("../assets/images/heroDecoration.svg")} className="deco" alt="" />
        </div>
    )
}

export default Navbar