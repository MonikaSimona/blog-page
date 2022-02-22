import React from 'react'
import { Link, NavLink, useMatch, useResolvedPath } from 'react-router-dom'

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: false });
    console.log("Match", resolved.pathname)
    return (
        <div className='link-wrapper'>
            <NavLink className="nav-item" to={to} props={props}>
                {children}
            </NavLink>
            {match && (
                <>
                    <img src={require("../assets/images/activeStrokeLeft.svg")} alt="" className='activeStroke' />
                    <img src={require("../assets/images/activeStrokeRight.png")} alt="" className='activeStroke' />
                </>
            )}


        </div>
    )
}

export default CustomLink