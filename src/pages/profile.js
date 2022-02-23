import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getItem } from "../firebase/actions";
const Profile = (props) => {
  const { loggedIn, user } = useSelector((state) => state.user);
  const [savedBlogs, setSavedBlogs] = useState([]);

  const location = useLocation();
  console.log("location", location);
  useEffect(() => {
    user &&
      getItem("users", user.id).then((data) => {
        console.log("data", data);
        // tuka ke se saved blogs
      });
  }, []);

  return (
    <div>
      This is profile
      {loggedIn && <p>im logged in</p>}
      {!!user && <p>{user.name || ""}</p>}
    </div>
  );
};

export default Profile;
