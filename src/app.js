import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "./style/main.scss";
import "typeface-raleway";
import Home from "./pages/home";
import About from "./pages/about";
import Post from "./pages/post";
import NotFound from "./pages/notfound";
import Header from "./components/header";
import Navbar from "./components/navbar";
import BlogsPage from "./pages/BlogsPage";
import { useRef } from "react";
import Footer from "./components/Footer";
import Profile from "./pages/profile";
import SavedBlogs from "./pages/savedBlogs";
import LoginModal from "./components/loginModla/loginModal";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { setUser } from "./redux/slices/userSlice";
import { useDispatch } from "react-redux";
import { getItem } from "./firebase/actions";
const App = () => {
  const scrollRef = useRef(null);


  const [openLoginModal, setOpenLoginModal] = useState(false);
  const handleLoginModal = () => setOpenLoginModal((prev) => !prev);
  const dispatch = useDispatch();
  const auth = getAuth()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      getItem("users", user.uid).then((currentUser) => {

        dispatch(setUser(currentUser));
      });


    })
    return unsubscribe
  }, [auth])

  return (
    <Router>
      <Header
        scrollElementRef={scrollRef}
        handleLoginModal={handleLoginModal}
      />
      <Navbar />
      <LoginModal
        openLoginModal={openLoginModal}
        handleLoginModal={handleLoginModal}
      />
      <Routes>
        <Route path="/" element={<Home scrollElementRef={scrollRef} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About scrollElementRef={scrollRef} />} />
        <Route path="/:page" element={<BlogsPage scrollElementRef={scrollRef} />} />
        <Route path="/saved-blogs" element={<SavedBlogs />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/:category/:id" element={<Post scrollElementRef={scrollRef} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
