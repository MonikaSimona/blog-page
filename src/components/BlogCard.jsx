import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({ title, image, desc, date }) => {
    return (
        <div className="card-wrapper">
            <div className="card-header">

                <h5 className="card-title">
                    {title}
                </h5>
                <img src={image} alt="" />
            </div>
            <div className="card-body">

                <p className="card-desc">
                    {desc}
                </p>
            </div>
            <div className="card-footer">

                <p className="card-date">
                    {date}
                </p>
                <button className="save-button">
                    S
                </button>
                <Link to="/food" className="read-more-link">
                    link
                </Link>
            </div>
        </div>
    )
}

export default BlogCard