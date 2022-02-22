import React from 'react'
import { Link } from 'react-router-dom'
import ReadLink from './ReadLink'
import { Icon } from '@iconify/react';

const BlogCard = ({ id, title, image, desc, date, category }) => {
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
                <Icon icon="bi:save" className='save-button' onClick={() => console.log("clicked icon")} />
                <ReadLink link={`/${category}/${id}`} text="Read more" disabled={true} />
            </div>
        </div>
    )
}

export default BlogCard