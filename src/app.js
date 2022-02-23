import React, { useState } from "react";
import {
  HashRouter as Router,
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
import BecomeAMemberSection from "./components/BecomeAMemberSection";
import { Provider } from "react-redux";
import store from "./redux";
import Profile from "./pages/profile";
import SavedBlogs from "./pages/savedBlogs";
import LoginModal from "./components/loginModla/loginModal";
const App = () => {
  const scrollRef = useRef(null);
  const customFunkcija = (navigate) => {
    navigate("/");
    scrollRef.current.scrollIntoView({ block: "center" });
  };

  const [openLoginModal, setOpenLoginModal] = useState(false);

  const handleLoginModal = () => setOpenLoginModal((prev) => !prev);

  return (
    <Provider store={store}>
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
          <Route path="/about" element={<About />} />
          <Route path="/:page" element={<BlogsPage />} />
          <Route path="/saved-blogs" element={<SavedBlogs />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/:category/:id" element={<Post />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
