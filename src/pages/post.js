import React from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import postlist from "../posts.json"
import BlogCard from "../components/BlogCard"

const Post = () => {
    const navigate = useNavigate();
    const { id } = useParams()
    const validId = parseInt(id)
    if (!validId) {
        navigate("/404")
    }
    const fetchedPost = {}
    let postExists = false
    postlist.forEach((post, i) => {
        if (validId === post.id) {
            fetchedPost.title = post.title ? post.title : "No title given"
            fetchedPost.date = post.date ? post.date : "No date given"
            fetchedPost.author = post.author ? post.author : "No author given"
            fetchedPost.description = post.description ? post.description : "No description given"
            fetchedPost.content = post.content ? post.content : "No content given"
            fetchedPost.image = post.image ? post.image : "No image given"
            postExists = true
        }
    })
    if (postExists === false) {
        navigate("/404")
    }
    return (

        <BlogCard title={fetchedPost.title} image={fetchedPost.image} desc={fetchedPost.description} date={fetchedPost.date} />
    )
}

export default Post