import { Icon } from "@iconify/react";
import { getAuth, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import SearchBar from "../assets/svg/SearchBar";
import { removeUser } from "../redux/slices/userSlice";

const Header = ({ scrollElementRef, handleLoginModal }) => {
  const { user } = useSelector((state) => state.user);
  const [openMenu, setOpenMenu] = useState(false)
  const auth = getAuth()
  const dispatch = useDispatch()
  const executeScroll = () => {
    scrollElementRef.current.scrollIntoView({ block: "center" });
  };
  // const executeScroll = () => window.scrollTo({ top: document.body.scrollHeight - 500 })





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
              // <span className="nav-item " >
              <div className="drop-down-item" onClick={() => setOpenMenu(!openMenu)}>

                <Icon icon="fa:user-circle-o" fontSize={24} />
                <p>{user.name}</p>
                {/* {openMenu && ( */}
                <ul className={`drop-down-content ${openMenu && "open"}`}>
                  <li> <NavLink to="/profile">Profile</NavLink> </li>
                  <li> <NavLink to="/saved-blogs">Saved blogs</NavLink> </li>
                  <li> <span onClick={
                    () => { dispatch(removeUser()); signOut(auth) }
                  }>Log out</span> </li>
                </ul>
                {/* // )} */}
              </div>
              // </span>
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
