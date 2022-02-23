import React from 'react'
import { Link } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
import postlist from "../posts.json"

const FeaturedBlogs = () => {
    // console.log(postlist)
    let featuredBlogs = postlist.filter((post) => post.tags.includes("featured"))
    console.log(featuredBlogs[0].tags.split(",")[featuredBlogs[0].tags.split(",").length - 1])
    // console.log(postlist)

    return (
        <div className="featured-blogs-wrapper">
            <h3 className="category-title">
                Featured Blogs
            </h3>
            <img src={require("../assets/images/featured-blogs-arrow.svg")} className="arrow-deco" alt="" />
            <img src={require("../assets/images/featured-blogs-arrow-2.svg")} className="arrow-deco" alt="" />
            <div className="featured-blog-cards">
                {featuredBlogs && featuredBlogs.map(blog => {
                    const linkCategory = blog.tags.split(",")[blog.tags.split(",").length - 1]
                    return <Link key={blog.id} to={`/${linkCategory}/${blog.id}`} className="card-link">
                        <BlogCard id={blog.id} title={blog.title} image={blog.image} desc={blog.description} date={blog.date} category={linkCategory} />
                    </Link>
                }

                )}

            </div>
        </div>
    )
}

export default FeaturedBlogs