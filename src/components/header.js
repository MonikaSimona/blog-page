import React from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"

const Header = ({ scrollElementRef }) => {
    console.log(scrollElementRef)

    const executeScroll = () => scrollElementRef.current.scrollIntoView({ block: 'center' })
    const navigate = useNavigate()

    return (
        <div className="header-wrapper">
            <div className="container">
                <div className="header">
                    <Link to="/" className="logo">
                        <img src={require("../assets/images/logo.svg")} alt="" />
                    </Link>
                    <div className="header-right-items">
                        <NavLink to="/about" className="nav-item" >
                            About
                        </NavLink>
                        <span className="nav-item" onClick={() => console.log("open login modal")}>
                            Login
                        </span>
                        <div className="cta-wrapper">
                            <span onClick={() => { navigate("/"); scrollElementRef && executeScroll() }} className="cta">
                                Become a member
                            </span>
                            <img className="arrow" src={require("../assets/images/fatarow.svg")} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header