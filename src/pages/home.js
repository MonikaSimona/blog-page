import React from "react"
import PostList from "../components/postlist"
import BlogsFromCategory from "./BlogsFromCategory"
import FeaturedBlogs from "./FeaturedBlogs"
import postlist from "../posts.json"
import BecomeAMemberSection from "../components/BecomeAMemberSection"


const Home = ({ scrollElementRef }) => {
    let healthAndFintessBlogs = postlist.filter((post) => post.tags.includes("health-and-fitness")).slice(0, 3)
    let selfImprovementBlogs = postlist.filter((post) => post.tags.includes("self-improvement")).slice(0, 3)
    let foodBlogs = postlist.filter((post) => post.tags.includes("food")).slice(0, 3)
    let booksAndMoviesBlogs = postlist.filter((post) => post.tags.includes("books-and-movies")).slice(0, 3)
    let beautyAndStyleBlogs = postlist.filter((post) => post.tags.includes("beauty-and-style")).slice(0, 3)
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
                    linkCategory={'health-and-fitness'}
                    postsFromCategory={healthAndFintessBlogs} />
                <BlogsFromCategory
                    category={"Self Improvement"}
                    linkCategory={'self-improvement'}
                    postsFromCategory={selfImprovementBlogs} />
                <BlogsFromCategory
                    category={"Food"}
                    linkCategory={'food'}
                    postsFromCategory={foodBlogs} />
                <BlogsFromCategory
                    category={"Books & Movies"}
                    linkCategory={'books-and-movies'}
                    postsFromCategory={booksAndMoviesBlogs} />
                <BlogsFromCategory
                    category={"Beauty & Style"}
                    linkCategory={'beauty-and-style'}
                    postsFromCategory={beautyAndStyleBlogs} />
                <BecomeAMemberSection scrollElementRef={scrollElementRef} />
            </div>
        </>

    )
}

export default Home