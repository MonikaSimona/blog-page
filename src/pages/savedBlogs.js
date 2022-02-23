import React, { useEffect } from "react";
import { getItem } from "../firebase/actions";
import { useSelector } from "react-redux";

const SavedBlogs = () => {
  const { loggedIn, user } = useSelector((state) => state.user);

  useEffect(() => {
    user &&
      getItem("users", user.id).then((data) => {
        console.log("data", data);
      });
  }, []);

  return <div>SavedBlogs</div>;
};

export default SavedBlogs;
