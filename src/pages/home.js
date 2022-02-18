import React from "react"
import PostList from "../components/postlist"
import BlogsFromCategory from "./BlogsFromCategory"
import FeaturedBlogs from "./FeaturedBlogs"
import postlist from "../posts.json"
import BecomeAMemberSection from "../components/BecomeAMemberSection"


const Home = () => {
    let healthAndFintessBlogs = postlist.filter((post) => post.tags.includes("health-fitness")).slice(0, 4)
    let selfImprovementBlogs = postlist.filter((post) => post.tags.includes("self-improvement")).slice(0, 4)
    let foodBlogs = postlist.filter((post) => post.tags.includes("food")).slice(0, 4)
    let booksAndMoviesBlogs = postlist.filter((post) => post.tags.includes("books-movies")).slice(0, 4)
    let beautyAndStyleBlogs = postlist.filter((post) => post.tags.includes("beauty-style")).slice(0, 4)
    return (
        <>
            <div className="hero">
                <img src={require("../assets/images/heroDeskIllustration.svg")} className="desk-image" alt="" />
                <div className="hero-quote-wrapper">
                    <img src={require("../assets/images/heroDecoration.svg")} className="hero-deco top" alt="" />

                    <img src={require("../assets/images/heroArrow.svg")} className="arrow" alt="" />
                    <h1 className=" hero-quote">
                        Get
                    </h1>
                    <h1 className="hero-quote ">
                        Inspired
                    </h1>
                </div>

                <img src={require("../assets/images/heroMedidationIllustration.svg")} className="med-image" alt="" />


                <img src={require("../assets/images/heroDecoration.svg")} className="hero-deco bottom" alt="" />


            </div>
            <div className="container">
                <FeaturedBlogs />
                <BlogsFromCategory
                    category={"Health & Fitness"}
                    postsFromCategory={healthAndFintessBlogs} />
                <BlogsFromCategory
                    category={"Self Improvement"}
                    postsFromCategory={selfImprovementBlogs} />
                <BlogsFromCategory
                    category={"Food"}
                    postsFromCategory={foodBlogs} />
                <BlogsFromCategory
                    category={"Books & Movies"}
                    postsFromCategory={booksAndMoviesBlogs} />
                <BlogsFromCategory
                    category={"Beauty & Style"} postsFromCategory={beautyAndStyleBlogs} />
                <BecomeAMemberSection />
            </div>
        </>

    )
}

export default Home