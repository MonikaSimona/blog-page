import React from "react"
import PostList from "../components/postlist"
import FeaturedBlogs from "./FeaturedBlogs"

const Home = () => {
    return (
        <>
            <div className="hero">
                <img src={require("../assets/images/heroDeskIllustration.svg")} className="desk-image" alt="" />
                <div className="hero-quote-wrapper">
                    <h1 className=" hero-quote">
                        Get
                    </h1>
                    <h1 className="hero-quote ">
                        Inspired
                    </h1>
                </div>

                <img src={require("../assets/images/heroMedidationIllustration.svg")} className="med-image" alt="" />

                <img src={require("../assets/images/heroArrow.svg")} className="arrow" alt="" />

                <img src={require("../assets/images/heroDecoration.svg")} className="hero-deco bottom" alt="" />

                <img src={require("../assets/images/heroDecoration.svg")} className="hero-deco top" alt="" />
            </div>
            <div className="container">
                <FeaturedBlogs />
                {/* <PostList /> */}
            </div>
        </>

    )
}

export default Home