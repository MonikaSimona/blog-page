import { getAuth, signOut } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { removeUser } from "../redux/slices/userSlice";

const Header = ({ scrollElementRef, handleLoginModal }) => {
  const { user } = useSelector((state) => state.user);
  const [openMenu, setOpenMenu] = useState(false)
  // console.log("USER", user)
  const auth = getAuth()
  const dispatch = useDispatch()
  const executeScroll = () => {
    scrollElementRef.current.scrollIntoView({ block: "center" });
  };
  // const executeScroll = () => window.scrollTo({ top: document.body.scrollHeight - 500 })
  const navigate = useNavigate();

  return (
    <div className="header-wrapper">
      <div className="container">
        <div className="header">
          <Link to="/" className="logo">
            <img src={require("../assets/images/logo.svg")} alt="" />
          </Link>
          <div className="header-right-items">
            <NavLink to="/about" className="nav-item">
              About
            </NavLink>

            {!user && (
              <span className="nav-item" onClick={handleLoginModal}>
                Login
              </span>
            )}
            {!!user && (
              <span className="nav-item" onClick={() => setOpenMenu(!openMenu)}>
                <strong>{user.name}</strong>

                {openMenu && (<ul>
                  <li> <NavLink to="/profile">profile</NavLink> </li>
                  <li> <NavLink to="/saved-blogs">saved blogs</NavLink> </li>
                  <li> <span onClick={
                    () => { dispatch(removeUser()); signOut(auth) }
                  }>log out</span> </li>
                </ul>)}
              </span>
            )}
            {!user && (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
