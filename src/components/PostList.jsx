import React from "react"
import { Link } from "react-router-dom"
import Markdown from "react-markdown"
import postlist from "../posts.json"
import BlogCard from "./BlogCard"


const PostList = () => {

    const excerptList = postlist.map(post => {
        return post.content.split(" ").slice(0, 20).join(" ") + "..."
    })
    return (
        <div className="postlist">
            <h1 className="title">All Posts</h1>
            {postlist.length &&
                postlist.map((post, i) => {
                    return (

                        <BlogCard key={i} title={post.title} image={post.image} desc={post.description} date={post.date} />
                    )
                })
            }
        </div>
    )
}

export default PostList