import React, { useState, useRef, useEffect } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "./style/main.scss";
import "typeface-raleway";
import Post from "./pages/Post";
import NotFound from "./pages/NotFound";
import BlogsPage from "./pages/BlogsPage";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import LoginModal from "./components/LoginModal";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SavedBlogs from "./pages/SavedBlogs";
import About from "./pages/About";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { setUser } from "./redux/slices/userSlice";
import { useDispatch } from "react-redux";
import { getItem } from "./firebase/actions";
import Footer from "./components/Footer";


const App = () => {
  const scrollRef = useRef(null);

  const [openLoginModal, setOpenLoginModal] = useState(false);

  const handleLoginModal = () => setOpenLoginModal((prev) => !prev);
  const dispatch = useDispatch();
  const auth = getAuth()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user !== null) {
        getItem("users", user.uid).then((currentUser) => {
          if (currentUser !== null) {
            dispatch(setUser(currentUser));
          }
        });
      }
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
      <div className="parrent">
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
      </div>
    </Router>
  );
};

export default App;
