import React, { useEffect } from "react";
import { getItem } from "../firebase/actions";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import postlist from "../posts.json"
import { getAuth } from "firebase/auth";

const SavedBlogs = () => {
  const { loggedIn, user } = useSelector((state) => state.user);
  const [savedBlogs, setSavedBlogs] = useState([])

  const auth = getAuth();
  // console.log("AUTH", user)


  useEffect(() => {
    var temp = [];
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
  }, [user?.savedBlogs])


  return <div className="container">
    {user ? savedBlogs?.length > 0 ? (
      <div>
        {savedBlogs.map((item) => (
          <p>{item.title}</p>
        ))}
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
    ) : "no user"}
  </div>;
};

export default SavedBlogs;
