import React from 'react';
import { HashRouter as Router, Navigate, Route, Routes } from "react-router-dom"
import './style/main.scss';
import "typeface-raleway"
import Home from "./pages/home"
import About from "./pages/about"
import Post from "./pages/post"
import NotFound from "./pages/notfound"
import Header from './components/header';
import Navbar from './components/navbar';
import BlogsPage from './pages/BlogsPage';
import { useRef } from 'react';
import Footer from './components/Footer';
import BecomeAMemberSection from './components/BecomeAMemberSection';


const App = () => {
    const scrollRef = useRef(null)
    const customFunkcija = (navigate) => {
        navigate("/")
        scrollRef.current.scrollIntoView({ block: 'center' })
    }
    return (
        <Router>
            <Header scrollElementRef={scrollRef} customFunkcija={customFunkcija} />
            <Navbar />

            <Routes>
                <Route path="/" element={<Home scrollElementRef={scrollRef} />} />
                <Route path="/about" element={<About />} />
                <Route path="/:page" element={<BlogsPage />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="/:category/:id" element={<Post />} />
            </Routes>
            <div className="container">
                <BecomeAMemberSection scrollElementRef={scrollRef} />
            </div>
            <Footer />
        </Router>
    )
}

export default App