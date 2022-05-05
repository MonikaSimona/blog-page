import React, { useEffect } from "react";
import { getItem } from "../firebase/actions";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import postlist from "../posts.json"
import { getAuth } from "firebase/auth";
import BlogCard from "../components/BlogCard";
import { Icon } from "@iconify/react";
import { arrayRemove, doc, updateDoc } from "firebase/firestore";
import { FIREBASE_DB } from "../firebase";
import { SpinnerDotted, SpinnerRoundFilled } from "spinners-react";

const SavedBlogs = () => {
  const { loggedIn, user } = useSelector((state) => state.user);
  const [savedBlogs, setSavedBlogs] = useState([])
  const [registerBlogId, setRegisterBlogId] = useState()
  const auth = getAuth();
  // console.log("AUTH", user)
  var temp = [];

  const fetchSavedBlogs = () => {
    if (user) {
      postlist.forEach((item) => {
        user.savedBlogs.forEach((saved) => {
          if (item.id == saved) {
            temp.push(item)
          }
        })
      })
      console.log(temp)
      setSavedBlogs(temp)
      // console.log(user.savedBlogs)
    }
  }

  useEffect(() => {
    fetchSavedBlogs()
  }, [user?.savedBlogs])

  const handleRemoveSaved = (blogId) => {
    const users = doc(FIREBASE_DB, "users", user.id);
    updateDoc(users, {
      savedBlogs: arrayRemove(blogId)
    }).then((res) => {
      console.log('success', res)
    }).catch((err) => {
      console.log('error', err)
    })
    setRegisterBlogId(blogId)


  }
  useEffect(() => {
    fetchSavedBlogs()

  }, [registerBlogId])


  return <div className="container">
    {user ? savedBlogs?.length > 0 ? (
      <div className="saved-blogs">

        <h3 className="user-data-title" >
          Saved Blogs
        </h3>
        <div className="saved-blogs-wrapper">
          {savedBlogs.map((item) => (
            <div className="single-blog" key={item.id} >
              <BlogCard id={item.id} title={item.title} image={item.image} date={item.date} />
              <div className="additional-card-footer">
                <Icon icon="fluent:delete-28-regular" onClick={() => handleRemoveSaved(item.id)} />
                <Icon icon="fluent:share-48-regular" />
              </div>
            </div>
          ))}
        </div>
      </div>

    ) : (
      <div className="no-saved-blogs">
        <h1 className="welcome">
          Welcome!
        </h1>
        <p className="text">
          No saved blogs yet.
        </p>
        <p className="text">
          <Link to="/">Go discover</Link> and find something you like.
        </p>
        <img src={require("../assets/images/savedBlogsDecoration.svg")} alt="" />
      </div>
    ) : (
      <div className="loading-wrapper">
        <SpinnerRoundFilled size={200} color="#d63037" secondaryColor="#3b89a0" />
      </div>
    )}
  </div>;
};

export default SavedBlogs;
