import React from "react"
import { Link, useNavigate } from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className="container">

            <div className="not-found-wrapper">
                <img src={require("../assets/images/notFound.png")} alt="" />
                <div className="text">

                    <h1 className="big-text">
                        Oops! This page doesn't exist.
                    </h1>
                    <h2 className="small-text">
                        Go <span className="link" onClick={() => { navigate(-1) }}>back</span> or go <Link className="link" to="/">home</Link>
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default NotFound