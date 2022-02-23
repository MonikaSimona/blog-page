import React from "react";
import { useSelector } from "react-redux";
const Profile = (props) => {
  const { loggedIn, user } = useSelector((state) => state.user);

  return (
    <div>
      This is profile
      {loggedIn && <p>im logged in</p>}
      {!!user && <p>{user.name || ""}</p>}
    </div>
  );
};

export default Profile;
