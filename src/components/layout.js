import React from "react"
import Header from "./header"
import Footer from "./footer"
import Navbar from "./navbar"


const Layout = ({ children }) => {
    return (
        <div >
            <Header />
            <Navbar />
            <div className="container">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout