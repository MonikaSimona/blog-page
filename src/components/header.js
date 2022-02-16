import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="container">
                <div className="header">

                    <Link to="/" className="logo">
                        LOGO
                    </Link>
                    <div className="header-right-items">
                        <Link to="/about" className="nav-item">
                            About
                        </Link>
                        <span className="nav-item" onClick={() => console.log("open login modal")}>
                            Login
                        </span>
                        <div className="cta-wrapper">

                            <span onClick={() => console.log("scroll to register")} className="cta">
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