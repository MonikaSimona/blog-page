import React from 'react'
import postlist from "../posts.json"

const FeaturedBlogs = () => {
    console.log(postlist)
    let featuredBlogs = postlist.filter((post) => post.tags.includes("featured"))
    console.log(featuredBlogs)
    console.log(postlist)

    return (
        <div className="featured-blogs-wrapper">
            <h3 className="category-title">
                Featured Blogs
            </h3>
        </div>
    )
}

export default FeaturedBlogs