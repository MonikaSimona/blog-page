import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Header = ({ scrollElementRef, handleLoginModal }) => {
  const { user } = useSelector((state) => state.user);
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
              <span className="nav-item">
                <strong>{user.name}</strong>
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
