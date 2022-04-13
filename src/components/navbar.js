import React, { useEffect } from "react"
import CustomLink from "./CustomLink"

const Navbar = () => {
    const [scrolled, setScrolled] = React.useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 86) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })
    return (
        <div className={`navbar-wrapper ${scrolled && 'navbar-wrapper-sticky'}`}>
            <img src={require("../assets/images/heroDecoration.svg")} className="deco" alt="" />
            <CustomLink to="/health-and-fitness">
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