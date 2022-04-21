import React, { useEffect } from "react";
import { getItem } from "../firebase/actions";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

const SavedBlogs = () => {
  const { loggedIn, user } = useSelector((state) => state.user);
  const [savedBlogs, setSavedBlogs] = useState([])

  useEffect(() => {
    user &&
      getItem("users", user.id).then((data) => {
        console.log("data", data);
        if (data?.savedBlogs?.length > 0) {
          console.log("SAVED BLOGS", data.savedBlogs)
          setSavedBlogs(data.savedBlogs)
        }
      });
  }, []);

  return <div className="container">
    {user ? savedBlogs.length > 0 ? "saved blogs" : (
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
