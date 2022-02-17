import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Routes } from "react-router-dom"
import './style/main.scss';
import "typeface-raleway"
import Home from "./pages/home"
import About from "./pages/about"
import Post from "./pages/post"
import NotFound from "./pages/notfound"
import Header from './components/header';
import Navbar from './components/navbar';
import BlogsPage from './pages/BlogsPage';

ReactDOM.render(
    <Router>
        <Header />
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/:page" element={<BlogsPage />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="/post/:id" element={<Post />} />
        </Routes>
    </Router>,
    document.getElementById('root')
);

