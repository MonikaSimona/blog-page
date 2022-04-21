import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import ReadLink from './ReadLink'
import { Icon } from '@iconify/react';
import { useSelector } from 'react-redux';

const BlogCard = ({ id, title, image, desc, date, category, scrollElementRef }) => {
    const { user } = useSelector((state) => state.user);
    const [openInfoCard, setOpenInfoCard] = useState(false)

    const executeScroll = () => {
        scrollElementRef.current.scrollIntoView({ block: "start" });
    };

    const handleSavePost = () => {
        if (user) {
            console.log("save blog")
        } else {
            setOpenInfoCard(true)
        }

    }
    return (
        <div className="card-wrapper card-link" >
            <div className="info-card">
                <p className="info-card-text">
                    If you want to save this blog you need to become member. It’s free.
                </p>
                <div className="cta-wrapper">
                    <span
                        onClick={() => {
                            executeScroll();
                        }}
                        className="cta"
                    >
                        Become a member
                    </span>
                    <img
                        className="arrow"
                        src={require("../assets/images/fatarow.svg")}
                        alt=""
                    />
                </div>
            </div>
            <NavLink to={`/${category}/${id}`} >
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
            </NavLink>
            <div className="card-footer" onClick={(e) => e.stopPropagation()}>
                <p className="card-date">
                    {date}
                </p>
                <Icon icon="bi:save" className='save-button' onClick={() => handleSavePost()} />
                <ReadLink link={`/${category}/${id}`} text="Read more" />
            </div>
        </div>
    )
}

export default BlogCard