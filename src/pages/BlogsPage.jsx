import { Icon } from '@iconify/react'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
import postlist from "../posts.json"


const BlogsPage = () => {
    const { page } = useParams()
    console.log(page)
    let blogsFromCategory = postlist.filter((post) => post.tags.includes("health-and-fitness"))
    const titlewords = page.split("-")
    let title = ""
    titlewords.map((word) => {
        if (word === "and") {
            title += "& "
        } else {
            title += word + " "
        }
    });
    return (

        <div className="all-blogs-page-wrapper">

            <div className="all-blogs-hero">
                <img src={require("../assets/images/allBlogHeroBg.png")} alt="" />
                <div className="title-wrapper">
                    <h1 className='page-title'>{title}</h1>
                    <img src={require("../assets/images/titleStroke.svg")} alt="" />
                </div>
            </div>
            <div className="container">
                <div className="search-bar-wrapper">
                    <label htmlFor="search">
                        <Icon icon="bytesize:search" color="#7b726b" className='search-icon' width={28} />
                    </label>
                    <img src={require("../assets/images/searchBar.svg")} alt="" />
                    <input type="text" id='search' />

                </div>
                <div className="blog-cards-wrapper">
                    {blogsFromCategory.length > 0 ? blogsFromCategory.map((post) => (

                        <Link key={post.id} to={`/${page}/${post.id}`} className="card-link">
                            <BlogCard id={post.id} title={post.title} image={post.image} desc={post.description} date={post.date} category={page} />
                        </Link>
                    )) : <p className='no-blogs'> No blogs from this category.</p>}

                </div>

            </div>
        </div>
    )
}

export default BlogsPage