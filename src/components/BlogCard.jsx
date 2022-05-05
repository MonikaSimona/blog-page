import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import ReadLink from './ReadLink'
import { Icon } from '@iconify/react';
import { useSelector } from 'react-redux';
import { addItem, getItem } from '../firebase/actions';
import { getAuth } from 'firebase/auth';
import { arrayUnion, doc, getDoc, updateDoc, } from 'firebase/firestore';
import { AUTH, FIREBASE_DB } from '../firebase';


const BlogCard = ({ id, title, image, desc, date, category, scrollElementRef }) => {
    const { user } = useSelector((state) => state.user);
    const [openInfoPopup, setOpenInfoPopup] = useState(false)
    const [blogSaved, setBlogSaved] = useState(false)
    const auth = getAuth();

    const executeScroll = () => {
        scrollElementRef.current.scrollIntoView({ block: "start" });
    };





    const handleSavePost = (blogId, title) => {
        if (user) {
            const userId = auth.currentUser.uid;
            console.log("save blog", user)
            setBlogSaved(true)

            const users = doc(FIREBASE_DB, "users", user.id);

            getItem("users", userId).then((currentUser) => {
                console.log("CURRENT ", currentUser)

                if (currentUser.savedBlogs) {

                    if (!currentUser.savedBlogs.includes(blogId)) {
                        updateDoc(users, {
                            savedBlogs: arrayUnion(blogId)
                        }).then((res) => {
                            console.log('success', res)
                        }).catch((err) => {
                            console.log('error', err)
                        })
                    } else {
                        setBlogSaved(true)
                    }
                }

            });




        } else {
            setOpenInfoPopup(true)
            console.log("login")
        }

    }
    if (auth.currentUser) {

        // console.log("CUrrent user", auth?.currentUser.uid)
        getItem("users", auth.currentUser.uid).then((currentUser) => {
            if (currentUser?.savedBlogs && currentUser?.savedBlogs?.includes(id)) {


                setBlogSaved(true)
            }
        });
    }


    return (
        <div className="card-wrapper card-link" >
            {openInfoPopup && <div className="info-popup-wrapper">
                <div className="info-popup">
                    <Icon icon="ion:close-circle" className='close-button' fontSize={21} onClick={() => setOpenInfoPopup(false)} />
                    <p className="info-popup-text">
                        If you want to save this blog you need to become member. It’s free.
                    </p>
                    <div className="cta-wrapper">
                        <span
                            onClick={() => {
                                setOpenInfoPopup(false)
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
            </div>}
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
                {blogSaved ? <Icon icon="fluent:checkbox-checked-20-filled" className='save-button checked ' /> : <Icon icon="bi:save" className='save-button' onClick={() => handleSavePost(id, title)} />}

                <ReadLink link={`/${category}/${id}`} text="Read more" />
            </div>
        </div>
    )
}

export default BlogCard