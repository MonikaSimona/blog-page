import React from "react"
import { Link, Navigate, useNavigate, useParams } from "react-router-dom"
import postlist from "../posts.json"
import BlogCard from "../components/BlogCard"
import ReactMarkdown from "react-markdown"

const Post = () => {
    const navigate = useNavigate();
    const { id, category } = useParams()
    const validId = parseInt(id)
    console.log(category)

    let blogsFromCategory = postlist.filter((post) => post.tags.includes("health-and-fintess")).slice(0, 4)

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
        navigate("*")
    }
    return (
        <div className="container">

            <div className="single-blog-wrapper">
                <h1 className="title">
                    {fetchedPost.title}
                </h1>
                <div className="info-section">
                    <p>

                        Published on <span> {fetchedPost.date}</span> by <span>{fetchedPost.author}</span>
                    </p>
                </div>
                <img src={require("../assets/images/lineDecoration.svg")} alt="" className="line-deco" />
                <img src={fetchedPost.image} alt="" className="blog-image" />
                <ReactMarkdown source={fetchedPost.content} escapeHtml={false} className="content" />
                <div className="more-topics-section">
                    <h2 className="more-topics-title">
                        More topics
                    </h2>
                    <div className="blog-cards-wrapper">
                        {blogsFromCategory.length > 0 ? blogsFromCategory.map((post) => (
                            <Link key={post.id} to={`/${category}/${post.id}`} className="card-link">
                                <BlogCard id={post.id} title={post.title} image={post.image} desc={post.description} date={post.date} category={category} />
                            </Link>
                        )) : <p className='no-blogs'> No blogs from this catgory.</p>}


                    </div>
                </div>
            </div>
        </div>

    )
}

export default Post